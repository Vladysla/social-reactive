import * as TYPE from '../actionTypes'
import {
    fetchFeed as fetchFeedApi,
    fetchUser as fetchUserApi,
    fetchProfile as fetchProfileApi,
    loadMoreFeed as loadMoreFeedApi,
} from '../api'

export const fetchUser = () => async dispatch => {
    dispatch({ type: TYPE.FETCH_USER_START})

    try {
        const user = await fetchUserApi()
        dispatch({
            type: TYPE.FETCH_USER_SUCCESS,
            payload: {
                ...user,
                loading: false
            }
        })
    } catch (err) {
        dispatch({
            type: TYPE.FETCH_USER_FAILURE,
            payload: err,
            error: true,
            loading: false
        })
    }
}

export const fetchProfile = (user) => async dispatch => {
    dispatch({ type: TYPE.FETCH_PROFILE_START})

    try {
        const profile = await fetchProfileApi(user)
        console.log(profile)
        dispatch({
            type: TYPE.FETCH_PROFILE_SUCCESS,
            payload: {
                ...profile,
                loading: false
            }
        })
    } catch (err) {
        dispatch({
            type: TYPE.FETCH_PROFILE_FAILURE,
            payload: err,
            error: true,
            loading: false
        })
    }
}

export const fetchFeed = (user = '') => async dispatch => {
    dispatch({type: TYPE.FETCH_FEED_START})

    try{
        const feeds = await fetchFeedApi(user)
        dispatch({
            type: TYPE.FETCH_FEED_SUCCESS,
            payload: {
                ...feeds,
                loading: false
            }
        })
    } catch(err){
        dispatch({
            type: TYPE.FETCH_FEED_FAILURE,
            payload: err,
            error: true,
            loading: false
        })
    }
}

export const loadMoreFeed = (url) => async dispatch => {
    dispatch({type: TYPE.FETCH_LOAD_MORE_FEED_START, payload: {loading: true}})

    try{
        const feeds = await loadMoreFeedApi(url)
        dispatch({
            type: TYPE.FETCH_LOAD_MORE_FEED_SUCCESS,
            payload: {
                ...feeds,
                loading: false
            }
        })
    } catch(err){
        dispatch({
            type: TYPE.FETCH_LOAD_MORE_FEED_FAILURE,
            payload: err,
            error: true,
            loading: false
        })
    }
}