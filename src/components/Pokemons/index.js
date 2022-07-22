import { useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import { Container, PokemonsList, LoadMoreContainer } from './styles';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);

        const { results } = await PokemonsService.getPokemons(offset);
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
    setOffset((prevState) => prevState + 12);
  }

  return (
    <Container>
      <PokemonsList>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <figure>
              <a href="https://localhost:3000">
                <img src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
              </a>
            </figure>

            <div className="infos">
              <span>{`#${String(pokemon.id).padStart(3, '0')}`}</span>

              <strong>{pokemon.name}</strong>

              <div>
                {pokemon.types.map(({ type }) => (
                  <span key={type.name} className={type.name}>{type.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </PokemonsList>

      <LoadMoreContainer>
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load more
        </button>
      </LoadMoreContainer>
    </Container>
  );
}
