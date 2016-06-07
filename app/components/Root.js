import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import ItemListView from './itemList/ItemListView';
import RemoteItemListView from './itemList/RemoteItemListView';
import DemoGraphView from './demoGraph/DemoGraphView';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/rtable" component={RemoteItemListView} />
                <Route path="/ltable" component={ItemListView} />
                <Route path="/graph" component={DemoGraphView} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;