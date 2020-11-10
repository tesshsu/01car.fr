import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import * as reducers from './reducers';

const initial_state = {};

let middleware = applyMiddleware(routerMiddleware(browserHistory));
        if (process.env.NODE_ENV !== 'production') {
            middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
        }
        const store   = createStore(reducers, initial_state, middleware);
        const history = syncHistoryWithStore(browserHistory, store);

export default Store;
