import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {pokemonReducer} from './pokemonReducer';
import {pokemonsReducer} from './pokemonsReducer';
import {pageReducer} from './pageReducer';


let reducers = combineReducers({
    pokemons: pokemonsReducer,
    pages: pageReducer,
    pokemon: pokemonReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;