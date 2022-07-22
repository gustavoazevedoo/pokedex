import Pokemons from '../Pokemons';
import { GlobalStyle } from '../../assets/styles/global';
import { Container } from './styles';

import pokemonLogo from '../../assets/images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <header>
          <img src={pokemonLogo} alt="Logo pokemon" />
        </header>

        <Pokemons />
      </Container>
    </>

  );
}

export default App;
