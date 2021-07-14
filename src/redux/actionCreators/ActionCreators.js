import {
    GET_GENRES,
    GET_MOVIES,
    SET_CURRENT_PAGE,
} from "../actionTypes/ActionTypes";

export const getMovies = (payload) => ({type: GET_MOVIES, payload});
export const getGenres = (payload) => ({type: GET_GENRES, payload});
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});