import { Redirect, Route, Switch } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';
import Pokemons from './pages/Pokemons';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/pokemons" />
      <Route path="/pokemons" exact component={Pokemons} />
      <Route path="/pokemons/:name" component={PokemonDetails} />
    </Switch>
  );
}
