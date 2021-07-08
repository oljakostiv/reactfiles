const initialState = {
    todosValue: []
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOS':{
            return {...state, todosValue: action.payload}
        }
        default:
            return state
    }
}