import {
    GET_MOVIES,
} from "../actionTypes/ActionTypesMovies";

export const getMovies = (payload) => ({type: GET_MOVIES, payload});