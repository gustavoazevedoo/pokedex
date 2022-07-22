import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';
import PokemonTypes from './PokemonTypes';

export default function Pokemon({
  id, name, image, types,
}) {
  return (
    <Container key={id}>
      <figure>
        <Link to={`/pokemons/${name}`}>
          <img src={image} alt={name} />
        </Link>
      </figure>

      <div className="infos">
        <span>{`#${String(id).padStart(3, '0')}`}</span>

        <strong>{name}</strong>

        <div>
          {types.map(({ type }) => (
            <PokemonTypes key={type.name} name={type.name} />
          ))}
        </div>
      </div>
    </Container>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
