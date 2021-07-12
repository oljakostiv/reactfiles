const initialState = {
    genresValue: [],
}

export const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GENRES': {
            return {...state, genresValue: action.payload}
        }
        default:
            return state
    }
}