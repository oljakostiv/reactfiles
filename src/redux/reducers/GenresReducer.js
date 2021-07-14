import {
    GET_GENRES,
} from '../actionTypes/ActionTypes'

const initialState = {
    genresValue: [],
}

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES: {
            return {...state, genresValue: action.payload}
        }
        default:
            return state
    }
}