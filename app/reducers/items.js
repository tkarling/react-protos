const item = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                abbr: action.abbr,
                text: action.text,
                completed: false,
            };
        // case 'TOGGLE_ITEM':
        //     if (state.id !== action.id) {
        //         return state;
        //     }
        //     return {
        //         ...state,
        //         completed: !state.completed,
        //     };
        default:
            return state;
    }
};

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                item(undefined, action),
            ];
        case 'DELETE_ITEM':
            return state.filter(t =>
                t.id !== action.id
            );
        // case 'TOGGLE_ITEM':
        //     return state.map(t =>
        //         item(t, action)
        //     );
        default:
            return state;
    }
};

export default items;