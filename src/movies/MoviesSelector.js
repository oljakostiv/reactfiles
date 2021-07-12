import {useDispatch, useSelector} from "react-redux";
import {addMovies} from "../redux/actionCreators/ActionCreatorsMovies";
import {useEffect} from "react";
import Movies from "./MoviesValue";

export default function MoviesSelector() {
    const {moviesValue} = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();

    // const fetchMovies = async () => {
    //     const resp = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=41abab4f1d686bf9dc348a85920abfdf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate', {
    //         method: 'GET',
    //         redirect: 'follow'
    //     })
    //     const data = await resp.text();
    //     console.log(data)
    //     // dispatch(addMovies(data));
    //
    // };
    //
    // useEffect(() => {
    //     fetchMovies();
    // }, [])

    const fetchMovies = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=41abab4f1d686bf9dc348a85920abfdf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate", fetchMovies)
        .then(response => response.json())
        .then(result => console.log(result))
    dispatch(addMovies())
    //
    // useEffect(() => {
    //     fetchMovies();
    // }, [])

    return (
        <div>
            <Movies moviesValue={moviesValue}/>
        </div>
    )
}