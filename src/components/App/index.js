import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../../assets/styles/global';
import { Container } from './styles';

import pokemonLogo from '../../assets/images/logo.svg';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <header>
          <img src={pokemonLogo} alt="Logo pokemon" />
        </header>

        <Routes />
      </Container>
    </BrowserRouter>

  );
}

export default App;
