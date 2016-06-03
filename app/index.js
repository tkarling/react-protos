import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import protosApp from './reducers';
import App from './components/App';

const store = createStore(protosApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);