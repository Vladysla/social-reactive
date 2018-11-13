import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import user from './user'
import profile from './profile'

export default combineReducers({
    routing: routerReducer,
    user,
    profile,
    posts
})