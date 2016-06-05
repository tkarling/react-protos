import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import protosApp from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(protosApp, persistedState);

    store.subscribe(throttle(() => {
        saveState({
            items: store.getState().items,
        });
    }, 1000));

    return store;
};

export default configureStore;