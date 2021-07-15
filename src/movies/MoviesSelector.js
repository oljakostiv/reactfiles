import {useDispatch, useSelector} from "react-redux";
import {getMovies, setCurrentPage} from "../redux/actionCreators/ActionCreators";
import React, {useEffect, useState} from "react";
import Movies from "./MoviesValue";
import './MoviesValue.css'
import {createPages} from "./pagesPagination/createPages";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import GenresSelector from "../genres/GenresSelector";


export default function MoviesSelector() {
    const {moviesValue, currentPage, perPage, totalCount} = useSelector(store => store.moviesReducer);
    const pagesCount = Math.ceil(totalCount / perPage)
    const dispatch = useDispatch();
    const [searchMovie, setSearchMovie] = useState('')
    const pages = []
    createPages(pages, pagesCount, currentPage)

    const fetchMovies = async (currentPage, perPage) => {
        // if (apiSearch === '') {
        //     apiSearch = '41abab4f1d686bf9dc348a85920abfdf'
        // }
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

    function searchHandler() {
        dispatch(getMovies(searchMovie))
    }

    return (
        <div>
            <div className={'navMovies'}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="logo"/>
                <Router>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/genres/'}>Genres</Link>
                    <Switch>
                        <Route path={'/genres/'} render={(props) => <GenresSelector {...props}/>}/>
                    </Switch>
                </Router>
                <p className={'inputMovies'}>
                    <input value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} type="text"
                           placeholder={' movie title..'}/>
                    <button onClick={() => searchHandler()}>search</button>
                </p>
            </div>
            <div>
                <div><h3>Movies:</h3></div>

                <Movies moviesValue={moviesValue}/>

                <div className={'pages'}>
                    {
                        pages.map((page, index) =>
                            <span key={index}
                                  className={currentPage === page ? 'current-page' : 'page'}
                                  onClick={() => dispatch(setCurrentPage(page))}>{page}
                        </span>)
                    }
                </div>
            </div>
        </div>
    )
}