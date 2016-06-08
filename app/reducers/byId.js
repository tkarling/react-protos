const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.rItems,
        };
    }
    return state;
};

export default byId;

export const getRItem = (state, id) => state[id];