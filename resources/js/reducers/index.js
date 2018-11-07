import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import user from './user'

export default combineReducers({
    routing: routerReducer,
    user,
    posts
})