import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    PATCH_TRUE,
    PATCH_FALSE, PATCH_TODO,
} from '../actionTypes/ActionTypes'

const initialState = {
    todosValue: [],
    todosLoading: false,
}

export const todosReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
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
            let find = state.todosValue.find(value => value.id === action.id);
            find.completed = action.toggle
            console.log(find);
            return {...state}
        }
        default:
            return state
    }
}