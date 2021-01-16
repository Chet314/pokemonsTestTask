import {
    createSelector
} from 'reselect';

const getPokemons = (state) => {
    return state.pokemons.pokemons;
}

export const pokemonsSelector = createSelector(getPokemons, (pokemons) => {

    return pokemons.map(pokemon => {
            return {
                ...pokemon,
                name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
            }
        })
        .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
});