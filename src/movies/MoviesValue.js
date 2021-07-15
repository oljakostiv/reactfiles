import React from "react";
import './MoviesValue.css'
import {NavLink} from "react-router-dom";

export default function Movies({moviesValue}) {
    return (
        <div className={'moviesPage'}>
            {
                moviesValue.map(movie => (
                    <div className={'moviePage'} key={movie.id}>
                        <img style={{width: '200px'}} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                             alt="poster"/>
                        <div>{movie.vote_average}</div>
                        <div>
                                <NavLink to={`/movie/${movie.title}/${movie.id}`}>{movie.title}</NavLink>
                            <br/>
                            <i>{movie.release_date}</i>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}