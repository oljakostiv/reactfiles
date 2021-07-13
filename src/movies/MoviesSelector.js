import {useDispatch, useSelector} from "react-redux";
import {addMovies} from "../redux/actionCreators/ActionCreatorsMovies";
import {useEffect} from "react";
import Movies from "./MoviesValue";

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
        dispatch(addMovies(data.results));
    };

    useEffect(() => {
        fetchMovies();
    }, [])

    // const fetchMovies = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    //
    // useEffect(() => {
    //      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41abab4f1d686bf9dc348a85920abfdf&page=${page}`, fetchMovies)
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    //         .then(results => dispatch(addMovies(results)))
    // }, [])

    return (
        <div>
            <Movies moviesValue={moviesValue}/>
        </div>
    )
}