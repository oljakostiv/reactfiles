import {useDispatch, useSelector} from "react-redux";
import {getMovies, setCurrentPage} from "../redux/actionCreators/ActionCreators";
import React, {useEffect} from "react";
import Movies from "./MoviesValue";
import './MoviesValue.css'

export default function MoviesSelector() {
    const {moviesValue, currentPage, perPage, totalCount} = useSelector(store => store.moviesReducer);
    const pagesCount = Math.ceil(totalCount/perPage)
    const dispatch = useDispatch();

    const pages = []

    const fetchMovies = async (currentPage, perPage) => {
        const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41abab4f1d686bf9dc348a85920abfdf&per_page=${perPage}&page=${currentPage}`, {
            method: 'GET',
            redirect: 'follow'
        })
        const data = await resp.json();
        console.log(data)
        dispatch(setCurrentPage(1))
        dispatch(getMovies(data.results, currentPage, perPage));
    };

    useEffect(() => {
        fetchMovies(currentPage, perPage);
    }, [currentPage])

    return (
        <div>
            <div><h3>Movies:</h3></div>
            <Movies moviesValue={moviesValue}/>
            <div className={'pages'}>
                {
                    pages.map((page, index) =>
                        <span key={index}
                              className={currentPage == page ? 'current-page' : 'page'}
                        onClick={()=> dispatch(setCurrentPage(page))}>{page}
                        </span>)
                }
            </div>
        </div>
    )
}