import {pokemonsAPI} from '../api/api';


const SET_POKEMONS = 'test-pokemon/pokemons/GET-POKEMONS';
const SET_NEW_ARRAY = 'test-pokemon/pokemons/SET-NEW-ARRAY';
const TOGGLE_IS_LOADING = 'test-pokemon/pokemons/TOGGLE-IS-LOADING';


const initialState = {
    pokemons: [],
    isLoading: false
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case SET_POKEMONS: 
        return {
            ...state,
            pokemons: [...state.pokemons, action.pokemon]
        };

        case SET_NEW_ARRAY: 
        return {
            ...state,
            pokemons: []
        };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
       
        default:
            return state;
    }
};

export const setPokemons = (pokemon) => {return{type: SET_POKEMONS, pokemon}};
export const setNewArray = () => {return{type: SET_NEW_ARRAY}};
export const getIsLoading = (isLoading) => {return{type:TOGGLE_IS_LOADING, isLoading}};


export const getPokemons = (pokemonName) => async (dispatch) => {
try{
    if(pokemonName){
        dispatch(getIsLoading(false))
    } else (
        dispatch(getIsLoading(true))
    )

    let response = await pokemonsAPI.getPokemon(pokemonName);
    dispatch(setPokemons(response.data));
  
}catch(err){
    console.error(err.message);
}
};