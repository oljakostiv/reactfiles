import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../redux/actionCreators/ActionCreators";
import React, {useEffect} from "react";
import Movies from "./MoviesValue";
import './MoviesValue.css'

export default function MoviesSelector() {
    const {moviesValue, page} = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41abab4f1d686bf9dc348a85920abfdf&page=${page}`, {
            method: 'GET',
            redirect: 'follow'
        })
        const data = await resp.json();
        console.log(data)
        dispatch(getMovies(data.results));
    };

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div>
            <div><h3>Movies:</h3></div>
            <Movies moviesValue={moviesValue}/>
        </div>
    )
}