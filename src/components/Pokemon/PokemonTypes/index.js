import PropTypes from 'prop-types';
import { Types } from './styles';

export default function PokemonTypes({ name }) {
  return (
    <Types className={name}>{name}</Types>
  );
}

PokemonTypes.propTypes = {
  name: PropTypes.string.isRequired,
};
