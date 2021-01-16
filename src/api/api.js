import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
}); 

export const pokemonsAPI = {
    getPokemonName(limit, offset){
        return instance.get(`pokemon?limit=${limit}t&offset=${offset}`);
    },
    getPokemon(pokemonName){
        return instance.get(`pokemon/${pokemonName}`);
    }
};