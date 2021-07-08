import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    PATCH_TODO
} from '../actionTypes/ActionTypes'

export const addTodos = (payload) => ({type: ADD_TODOS, payload});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const pushTodo = (payload) => ({type: PUSH_TODO, payload});

export const setPatchTodo = (payload) => ({type: PATCH_TODO, payload});