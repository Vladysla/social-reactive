import { FETCH_FEED_SUCCESS, FETCH_LOAD_MORE_FEED_SUCCESS } from '../actionTypes'

const initialState = {
    loading: true,
    total: null,
    data: []
}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_FEED_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case FETCH_LOAD_MORE_FEED_SUCCESS:
            return {
                ...state,
                ...payload,
                data: [
                    ...state.data,
                    ...payload.data
                ]
            }
        default:
            return state
    }
}