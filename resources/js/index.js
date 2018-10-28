import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import { browserHistory, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './reducers';

import Layout from './containers/layout';
import Feed from './containers/feed'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route exact path='/' component={Feed} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)