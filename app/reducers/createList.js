import { combineReducers } from 'redux';

const createList = (filter) => {
    // const handleToggle = (state, action) => {
    //     const { result: toggledId, entities } = action.response;
    //     const { completed } = entities.rItems[toggledId];
    //     const shouldRemove = (
    //         (completed && filter === 'active') ||
    //         (!completed && filter === 'completed')
    //     );
    //     return shouldRemove ?
    //         state.filter(id => id !== toggledId) :
    //         state;
    // };

    const ids = (state = [], action) => {
        switch (action.type) {
            case 'FETCH_RITEMS_SUCCESS':
                // return filter === action.filter ?
                //     action.response.result :
                //     state;
                return action.response.result;
            case 'ADD_RITEM_SUCCESS':
                return [...state, action.response.result];
                // return filter !== 'completed' ?
                //     [...state, action.response.result] :
                //     state;
            // case 'TOGGLE_RITEM_SUCCESS':
            //     return handleToggle(state, action);
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        // if (filter !== action.filter) {
        //     return state;
        // }
        switch (action.type) {
            case 'FETCH_RITEMS_REQUEST':
                return true;
            case 'FETCH_RITEMS_SUCCESS':
            case 'FETCH_RITEMS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        // if (filter !== action.filter) {
        //     return state;
        // }
        switch (action.type) {
            case 'FETCH_RITEMS_FAILURE':
                return action.message;
            case 'FETCH_RITEMS_REQUEST':
            case 'FETCH_RITEMS_SUCCESS':
                return null;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching,
        errorMessage,
    });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;