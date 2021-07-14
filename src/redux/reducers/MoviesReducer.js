import {
    GET_MOVIES,
    SET_CURRENT_PAGE,
} from '../actionTypes/ActionTypes';

const initialState = {
    moviesValue: [],
    currentPage: 1,
    perPage: 10,
    totalCount: 500
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {...state, moviesValue: action.payload, totalCount: action.payload.totalCnt}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }
        default:
            return state
    }
}
