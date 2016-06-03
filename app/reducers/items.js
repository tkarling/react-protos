const item = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed,
            };
        default:
            return state;
    }
};

const items = (state = [{id: '1', abbr: 'moi', text: 'moi vaan', completed: false}], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                item(undefined, action),
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                item(t, action)
            );
        default:
            return state;
    }
};

export default items;