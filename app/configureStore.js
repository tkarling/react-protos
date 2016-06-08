import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import protosApp from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        // middlewares.push(createLogger());
    }

    const persistedState = loadState();

    const store = createStore(protosApp,
        persistedState,
        applyMiddleware(...middlewares));

    store.subscribe(throttle(() => {
        saveState({
            items: store.getState().items,
        });
    }, 1000));

    return store;
};

export default configureStore;