import {pokemonsAPI} from '../api/api';

const SET_POKEMON = 'test-pokemon/pokemon/GET-POKEMON';
const TOGGLE_IS_LOADING = 'test-pokemon/pokemon/TOGGLE-IS-LOADING';

const initialState = {
    pokemon: {},
    isLoading: true
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {
                ...state,
                pokemon: action.pokemon
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

export const setPokemon = (abilities, height, id, name, types,weight, img) => {
    return {
        type: SET_POKEMON,
        pokemon: {abilities, height, id, name, types, weight, img}
    }
};
export const getIsLoading = (isLoading) => {return{type:TOGGLE_IS_LOADING, isLoading}};

export const getPokemon = (id) => async (dispatch) => {
    try {
       
        let response = await pokemonsAPI.getPokemon(id);
        dispatch(setPokemon(response.data.abilities,
                            response.data.height,
                            response.data.id,
                            response.data.name,
                            response.data.types,
                            response.data.weight,
                            response.data.sprites.other.dream_world.front_default
                         
            ));
            if(response.data.name === id){
            dispatch(getIsLoading(false));}
            else(console.log("LOADING ERROR"))
    } catch (err) {
        console.error(err.message);
    }
};
