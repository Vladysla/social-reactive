import * as TYPE from '../actionTypes'
import {fetchFeed as fetchFeedApi} from '../api'

export const fetchFeed = () => async dispatch => {
    dispatch({type: TYPE.FETCH_FEED_START})

    try{
        const feeds = await fetchFeedApi()
        dispatch({
            type: TYPE.FETCH_FEED_SUCCESS,
            payload: feeds
        })
    } catch(err){
        dispatch({
            type: TYPE.FETCH_FEED_FAILURE,
            payload: err,
            error: true
        })
    }
}