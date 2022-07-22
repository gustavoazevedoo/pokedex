import { useEffect, useState } from 'react';
import Pokemon from '../../components/Pokemon';
import PokemonsService from '../../services/PokemonsService';
import { PokemonsList, LoadMoreContainer } from './styles';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  function handleLoadMore() {
    if (hasNextPage) {
      setOffset((prevState) => prevState + 12);
    }
  }

  return (
    <>
      <PokemonsList>
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.sprites?.other['official-artwork'].front_default}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </PokemonsList>

      <LoadMoreContainer>
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
