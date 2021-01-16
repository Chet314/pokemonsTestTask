import {createSelector} from 'reselect';


export const getPokemonNames =(state) => {
    return  state.pages.pokemonNames;
    };

export const pokemonNamesSelector = createSelector(getPokemonNames, (pokemonNames) => {
    return pokemonNames.sort();
    });
    
export const pokemonNamesUpperCaseSelector = createSelector(getPokemonNames, (pokemonNames) => {
    return pokemonNames.map(pokemonName => pokemonName[0].toUpperCase() + pokemonName.slice(1)).sort();
     });
        