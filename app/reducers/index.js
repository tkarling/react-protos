import { combineReducers } from 'redux';
import items from './items';
import rItems, * as fromRItems from './rItems';

const protosApp = combineReducers({
    items,
    rItems
});


export default protosApp;

export const fetchRItems = (state) =>
    fromRItems.fetchRItems(state);

export const getIsFetching = (state) =>
    fromRItems.getIsFetching(state);

export const getErrorMessage = (state) =>
    fromRItems.getErrorMessage(state);
