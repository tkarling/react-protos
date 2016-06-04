let nextItemId = 0;
export const addItem = (abbr, text) => {
    return {
        type: 'ADD_ITEM',
        id: (nextItemId++).toString(),
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
