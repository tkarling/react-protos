import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    all: createList('all'),
    // active: createList('active'),
    // completed: createList('completed'),
});

const rItems = combineReducers({
    byId,
    listByFilter,
});

export default rItems;

export const fetchRItems = (state) => {
    const filter = 'all';
    const ids = fromList.getIds(state.rItems.listByFilter[filter]);
    return ids.map(id => fromById.getRItem(state.rItems.byId, id));
};

export const getIsFetching = (state) => {
    const filter = 'all';
    return fromList.getIsFetching(state.rItems.listByFilter[filter]);
}

export const getErrorMessage = (state) => {
    const filter = 'all';
    return fromList.getErrorMessage(state.rItems.listByFilter[filter]);
}