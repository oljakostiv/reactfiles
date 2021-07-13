import {
    GET_MOVIES,
} from '../actionTypes/ActionTypes';

const initialState = {
    moviesValue: [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {...state, moviesValue: action.payload}
        }
        default:
            return state
    }
}
