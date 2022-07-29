import { useEffect, useState } from 'react';

import Pokemon from '../../components/Pokemon';
import Loader from '../../components/Loader';

import PokemonsService from '../../services/PokemonsService';
import { PokemonsList, LoadMoreContainer, FilterContainer } from './styles';

import unknownPokemon from '../../assets/images/unknown-pokemon.png';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPokemonsPerType, setIsLoadingPokemonsPerType] = useState(false);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);

        const { results, next } = await PokemonsService.getPokemons(offset);
        if (!next) {
          setHasNextPage(false);
        }
        const pokemonsList = await PokemonsService.listPokemons(results);
        setPokemons((prevState) => [...prevState, ...pokemonsList]);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, [offset]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await PokemonsService.getTypes();
        const validTypes = results.slice(0, -2);

        setTypes(validTypes);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function handleLoadMore() {
    if (hasNextPage) {
      setOffset((prevState) => prevState + 12);
    }
  }

  async function loadAllTypes() {
    try {
      setIsLoading(true);

      const { results } = await PokemonsService.getPokemons(0);
      const pokemonsList = await PokemonsService.listPokemons(results);
      setPokemons(pokemonsList);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleTypeFilterChange(event) {
    try {
      setIsLoadingPokemonsPerType(true);

      if (event.target.value === 'allTypes') {
        await loadAllTypes();
        setIsLoadMoreVisible(true);
        return;
      }

      const { pokemon } = await PokemonsService.getPokemonsByType(event.target.value);
      const pokemonsList = await PokemonsService.listPokemonsByType(pokemon);

      setPokemons(pokemonsList);
      setIsLoadMoreVisible(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingPokemonsPerType(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoadingPokemonsPerType} />

      <FilterContainer>
        <select onChange={handleTypeFilterChange}>
          <option value="default" hidden>
            Filter by type
          </option>
          <option value="allTypes">all</option>
          {types.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </FilterContainer>

      <PokemonsList>
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.sprites?.other['official-artwork'].front_default || unknownPokemon}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </PokemonsList>

      <LoadMoreContainer visible={isLoadMoreVisible && hasNextPage}>
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      </LoadMoreContainer>
    </>
  );
}
