import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import pokeball from '../../assets/images/pokeball.svg';
import { Overlay, Content } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <Overlay>
        <Content>
          <img src={pokeball} alt="Loading" />
        </Content>
      </Overlay>,
      document.getElementById('loader-root'),
    )
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
