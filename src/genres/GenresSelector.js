import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../redux/actionCreators/ActionCreators";
import React, {useEffect} from "react";
import Genres from "./GenresValue";

export default function GenresSelector() {
    const {genresValue} = useSelector(store => store.moviesReducer);
    const dispatch1 = useDispatch();

    const fetchGenres = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=41abab4f1d686bf9dc348a85920abfdf&', {
            method: 'GET',
            redirect: 'follow'
        })
        const data = await resp.json();
        console.log(...data.genres)
        dispatch1(getGenres(...data.genres));
    };

    useEffect(() => {
        fetchGenres();
    }, [])

    return (
        <div>
            <div><h3>Genres:</h3></div>
            <Genres genresValue={genresValue}/>
        </div>
    )
}