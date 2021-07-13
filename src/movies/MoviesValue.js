import React, {useEffect, useState} from "react";
import './MoviesValue.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Movie from "./movie/Movie";
import {getMovies} from "../redux/actionCreators/ActionCreators";
import {useDispatch} from "react-redux";

export default function Movies({moviesValue, url}) {

    // const [moviePage, setMoviePage] = useState([]);
    // const dispatch2 = useDispatch();
    //
    // useEffect(() => {
    //     dispatch2(getMovies(moviesValue.id)).then(value => setMoviePage(value.data))
    // }, [])

    return (
        <div className={'moviesPage'}>
            {
                moviesValue.map(movie => (
                    <div className={'moviePage'} key={movie.id}>
                        <img style={{width: '200px'}} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                             alt="poster"/>
                        <div>{movie.vote_average}</div>
                        <Router>
                            <div>
                                <Link to={url + '/' + moviesValue.id}><b>{movie.title}</b></Link>
                                <br/>
                                <i>{movie.release_date}</i>
                            </div>

                            {/*<Switch>*/}
                            {/*    <Route path={url + '/' + moviesValue.id}*/}
                            {/*           render={(props) => <Movie moviePage={moviePage} {...props}/>}/>*/}
                            {/*</Switch>*/}
                        </Router>
                    </div>
                ))
            }
        </div>
    )
}