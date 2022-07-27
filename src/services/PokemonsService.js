import HttpClient from './utils/HttpClient';

class PokemonsService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2');
  }

  getPokemons(offset) {
    return this.httpClient.get(`/pokemon?limit=12&offset=${offset}`);
  }

  listPokemons(pokemons) {
    return Promise.all(pokemons.map((pokemon) => this.httpClient.get(`/pokemon/${pokemon.name}`)));
  }

  getPokemonsByType(type) {
    return this.httpClient.get(`/type/${type}`);
  }

  listPokemonsByType(pokemons) {
    return Promise.all(pokemons.map(({ pokemon }) => this.httpClient.get(`/pokemon/${pokemon.name}`)));
  }

  getPokemonByIdOrName(idOrName) {
    return this.httpClient.get(`/pokemon/${idOrName}`);
  }

  getTypes() {
    return this.httpClient.get('/type');
  }

  async getPokemonDetails(name) {
    if (name.includes('-')) {
      return this.getPokemonByIdOrName(name).then((response) => response);
    }

    return Promise.all([
      this.httpClient.get(`/pokemon/${name}`),
      this.httpClient.get(`/pokemon-species/${name}`),
    ]).then((responses) => {
      const [pokemonObj, pokemonSpecies] = responses;
      return { ...pokemonSpecies, ...pokemonObj };
    });
  }
}

export default new PokemonsService();
