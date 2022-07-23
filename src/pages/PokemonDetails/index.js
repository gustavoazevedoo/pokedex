import { ArrowLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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

  useEffect(() => {
    (async () => {
      const pokemonDetails = await PokemonsService.getPokemonDetails(pokemonName);
      setPokemon(pokemonDetails);
    })();
  }, []);

  function getDescription(descriptions) {
    const englishText = descriptions?.find((description) => description.language.name === 'en');
    return englishText?.flavor_text;
  }

  function getCategory(categories) {
    const englishCategory = categories?.find((category) => category.language.name === 'en');
    const cleanedCategory = englishCategory?.genus.replace('Pokémon', '');

    return cleanedCategory;
  }

  const formatedId = `#${String(pokemon?.id)?.padStart(3, '0')}`;
  const officialArtwork = pokemon?.sprites?.other['official-artwork'].front_default;
  const description = getDescription(pokemon?.flavor_text_entries);
  const weight = convertHectogramsToPounds(pokemon?.weight);
  const height = convertDecimeterToFeetAndInch(pokemon?.height);
  const category = getCategory(pokemon?.genera);

  return (
    <Container>
      <Link to="/pokemons" title="Go back to page pokemons">
        <ArrowLeft weight="bold" size={18} />
        Back
      </Link>
      <h1>
        {pokemon?.name}
        {' '}
        <span>{formatedId}</span>
      </h1>

      <div>
        <figure>
          <img src={officialArtwork} alt={pokemon?.name} />
        </figure>
        <Infos>
          <p>{description}</p>

          <StatsContainer>
            <Stat>
              <small>Height</small>
              <strong>{height}</strong>
            </Stat>

            <Stat>
              <small>Category</small>
              <strong>{category}</strong>
            </Stat>

            <Stat>
              <small>Weight</small>
              <strong>
                {weight}
                {' '}
                lbs
              </strong>
            </Stat>

            <Stat>
              <small>Abilities</small>
              <strong>{pokemon?.abilities?.[0].ability.name}</strong>
            </Stat>
          </StatsContainer>

          <TypesContainer>
            <strong>Type</strong>
            <div>
              {pokemon?.types?.map(({ type }) => (
                <PokemonTypes key={type.name} name={type.name} />
              ))}
            </div>
          </TypesContainer>
        </Infos>
      </div>
    </Container>
  );
}
