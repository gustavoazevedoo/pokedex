import HttpClient from './utils/HttpClient';

class PokemonsService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2');
  }

  async getPokemons(offset) {
    return this.httpClient.get(`/pokemon?limit=12&offset=${offset}`);
  }

  async listPokemons(pokemons) {
    return Promise.all(pokemons.map((pokemon) => this.httpClient.get(`/pokemon/${pokemon.name}`)));
  }

  async getPokemonDetails(name) {
    return Promise.all([
      this.httpClient.get(`/pokemon/${name}`),
      this.httpClient.get(`/pokemon-species/${name}`),
    ]).then((responses) => {
      const [pokemonObj, pokemonSpecies] = responses;
      return { ...pokemonObj, ...pokemonSpecies };
    });
  }
}

export default new PokemonsService();
