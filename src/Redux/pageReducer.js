import {pokemonsAPI} from '../api/api';

const SET_POKEMONS_NAMES = 'test-pokemon/pokemons/GET-POKEMONS-NAMES';
const SET_LIMIT = 'test-pokemon/pokemons/SET-LIMIT';
const SET_OFFSET = 'test-pokemon/pokemons/SET-OFFSET';
const SET_TOTAL_COUNT =  'test-pokemon/pokemons/SET-TOTAL-COUNT';

const initialState = {
    pokemonNames: [],
    limit: 100,
    offset: 0,
    countPokemons: 1000
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS_NAMES:
            return {
                ...state,
                pokemonNames: action.pokemonNames.map(pokemonName => pokemonName.name)
            };
      
        case SET_LIMIT:
            return {
                ...state,
                limit: action.limit
            };

        case SET_OFFSET:
            return {
                ...state,
                offset: action.offset
            };

        case SET_TOTAL_COUNT:
            return {
                    ...state,
                    countPokemons: action.count
                };

        default:
            return state;
    }
};

export const setPokemonName = (pokemonNames) => {return{type: SET_POKEMONS_NAMES, pokemonNames}};
export const setLimit = (limit) => {return{type: SET_LIMIT, limit}};
export const setOffset = (offset) => {return{type: SET_OFFSET, offset}};
export const setCount = (count) => {return{type: SET_TOTAL_COUNT, count}};


export const getPokemonName =(limit, offset) => async (dispatch) => {
    try{
        let response = await pokemonsAPI.getPokemonName(limit, offset);
        dispatch(setPokemonName(response.data.results));
        dispatch(setCount(response.data.count));
    }catch(err){
        console.error(err.message);
    }
};

