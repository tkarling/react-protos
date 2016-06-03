import { combineReducers } from 'redux';
import todos from './todos';
// import visibilityFilter from './visibilityFilter';

const protosApp = combineReducers({
    todos,
    // visibilityFilter,
});

export default protosApp;