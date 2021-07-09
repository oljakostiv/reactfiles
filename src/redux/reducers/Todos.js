import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    PATCH_TODO,
} from '../actionTypes/ActionTypes'

const initialState = {
    todosValue: [],
    todosLoading: false,
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {...state, todosValue: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todosValue: [...state.todosValue, action.payload]}
        }
        case PATCH_TODO: {
            return {...state, todosValue: state.todosValue.map(el => el.id === payload.id ? payload : el)}
        }
        default:
            return state
    }
}

//6.1