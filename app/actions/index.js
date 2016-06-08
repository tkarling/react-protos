import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchRItems = (
    // filter
) => (dispatch, getState) => {
    if (getIsFetching(getState()
            // filter
        )) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        // filter,
    });

    return api.fetchRItems(
        // filter
    ).then(
        response => {
            dispatch({
                type: 'FETCH_RITEMS_SUCCESS',
                // filter,
                response: normalize(response, schema.arrayOfRItems),
            });
        },
        error => {
            dispatch({
                type: 'FETCH_RITEMS_FAILURE',
                // filter,
                message: error.message || 'Something went wrong.',
            });
        }
    );
};

export const onItemAdd = (abbr, text) => (dispatch) =>
    api.addRItem(abbr, text).then(response => {
        dispatch({
            type: 'ADD_RITEM_SUCCESS',
            response: normalize(response, schema.rItem),
        });
    });

export const onItemClick = (id) => (dispatch) => {
        console.log('item clicked called', id);
}

export const onItemDelete = (id) => (dispatch) => {
    console.log('item delete called', id);
}




import { v4 } from 'node-uuid';

export const addItem = (abbr, text) => {
    return {
        type: 'ADD_ITEM',
        id: v4(),
        abbr,
        text,
    };
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id,
    };
};

// export const toggleItem = (id) => {
//     return {
//         type: 'TOGGLE_ITEM',
//         id,
//     };
// };

// export const setVisibilityFilter = (filter) => {
//     return {
//         type: 'SET_VISIBILITY_FILTER',
//         filter,
//     };
// };
