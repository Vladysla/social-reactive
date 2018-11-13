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
import FeedList from './containers/feedList'
import ProfileFeed from './containers/profileFeed'
import Join from './containers/joinPage'
import Page404 from './containers/page404'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)



if(document.getElementById('root')){
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route component={Layout}>
                    <Route exact path='/' component={FeedList} />
                    <Route path='/:user' component={ProfileFeed} />
                </Route>
                <Route path='*' exact component={Page404} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
} else if (document.getElementById('join')){
    ReactDOM.render(
        <Join/>,
        document.getElementById('join')
    )
}