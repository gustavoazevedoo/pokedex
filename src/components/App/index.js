import { GlobalStyle } from '../../assets/styles/global';
import pokemonLogo from '../../assets/images/logo.svg';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <header>
          <img src={pokemonLogo} alt="Logo pokemon" />
        </header>
      </Container>
    </>

  );
}

export default App;
