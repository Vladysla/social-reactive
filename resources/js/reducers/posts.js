import { FETCH_FEED_SUCCESS } from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_FEED_SUCCESS:
            return { 
                ...state,
                ...payload
            }
        default:
            return state
    }
}