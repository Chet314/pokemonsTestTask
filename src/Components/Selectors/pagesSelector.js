import {createSelector} from 'reselect';

export const getLimit = (state) => {
    return state.pages.limit;
};

export const getOffset = (state) => {
    return state.pages.offset;
};

export const offsetSelector = createSelector(getOffset, (offset) => offset);

export const getCountPokemons = (state) => {
    return state.pages.countPokemons;
};