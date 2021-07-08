const initialState = {
    counterValue: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, value: state.counterValue + 1}
        }
        default:
            return state
    }
}