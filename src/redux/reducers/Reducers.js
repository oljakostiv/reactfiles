import {combineReducers} from "redux";
import {moviesReducer} from "./MoviesReducer";
import {genresReducer} from "./GenresReducer";

export const rootReducer = combineReducers({
    moviesReducer,
    genresReducer
})