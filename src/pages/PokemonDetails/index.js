import { ArrowLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import unknownPokemon from '../../assets/images/unknown-pokemon.png';
import Loader from '../../components/Loader';

import PokemonTypes from '../../components/Pokemon/PokemonTypes';

import PokemonsService from '../../services/PokemonsService';

import convertDecimeterToFeetAndInch from '../../utils/convertDecimeterToFeetAndInch';
import convertHectogramsToPounds from '../../utils/convertHectogramsToPounds';

import {
  Container, Infos, StatsContainer, Stat, TypesContainer,
} from './styles';

export default function PokemonDetails() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function getDescription(descriptions) {
    const englishText = descriptions?.find((description) => description.language.name === 'en');
    return englishText?.flavor_text;
  }

  function getCategory(categories) {
    const englishCategory = categories?.find((category) => category.language.name === 'en');
    const cleanedCategory = englishCategory?.genus.replace('Pokémon', '');

    return cleanedCategory;
  }

  useEffect(() => {
    async function loadPokemonDetails() {
      try {
        setIsLoading(true);
        const pokemonDetails = await PokemonsService.getPokemonDetails(pokemonName);

        const formatedPokemon = {
          id: `#${String(pokemonDetails?.id)?.padStart(3, '0')}`,
          name: pokemonDetails.name,
          officialArtwork: pokemonDetails?.sprites?.other['official-artwork'].front_default,
          description: getDescription(pokemonDetails?.flavor_text_entries),
          weight: convertHectogramsToPounds(pokemonDetails?.weight),
          ability: pokemonDetails.abilities?.[0].ability.name,
          height: convertDecimeterToFeetAndInch(pokemonDetails?.height),
          category: getCategory(pokemonDetails?.genera) || '???',
          types: pokemonDetails.types,
        };

        setPokemon(formatedPokemon);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemonDetails();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Link to="/pokemons" title="Go back to page pokemons">
        <ArrowLeft weight="bold" size={18} />
        Back
      </Link>
      <h1>
        {pokemon?.name}
        {' '}
        <span>{pokemon?.id}</span>
      </h1>

      <div>
        <figure>
          <img src={pokemon?.officialArtwork || unknownPokemon} alt={pokemon?.name} />
        </figure>
        <Infos>
          <p>{pokemon?.description}</p>

          <StatsContainer>
            <Stat>
              <small>Height</small>
              <strong>{pokemon?.height}</strong>
            </Stat>

            <Stat>
              <small>Category</small>
              <strong>{pokemon?.category}</strong>
            </Stat>

            <Stat>
              <small>Weight</small>
              <strong>
                {pokemon?.weight}
                {' '}
                lbs
              </strong>
            </Stat>

            <Stat>
              <small>Abilities</small>
              <strong>{pokemon?.ability || '???'}</strong>
            </Stat>
          </StatsContainer>

          {pokemon?.types && (
            <TypesContainer>
              <strong>Type</strong>
              <div>
                {pokemon.types.map(({ type }) => (
                  <PokemonTypes key={type.name} name={type.name} />
                ))}
              </div>
            </TypesContainer>
          )}
        </Infos>
      </div>
    </Container>
  );
}
