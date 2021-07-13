import {
    GET_GENRES,
    GET_MOVIES,
} from "../actionTypes/ActionTypes";

export const getMovies = (payload) => ({type: GET_MOVIES, payload});
export const getGenres = (list) => ({type: GET_GENRES, list});