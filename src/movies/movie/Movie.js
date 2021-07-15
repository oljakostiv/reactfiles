import React from "react";
import './Movie.css'
import {useParams} from 'react-router-dom'


export default function Movie({moviePage}) {
    const {movieTitle, movieId} = useParams()
    return (
        <div>
            <div className={'movieStyle'}>
                <div className={'navMovies'}>
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="logo"/>
                    <button className={'movieBtn'} onClick={()=> moviePage.history.goBack()}>Home</button>
                </div>
            </div>
            <div>
                hello
                {/*{moviePage.title}*/}
                {/*<br/>*/}
                {/*{moviePage.overview}*/}
                {/*<br/>*/}
                {/*<img style={{width: '500px'}} src={'https://image.tmdb.org/t/p/w500/' + moviePage.poster_path}*/}
                {/*     alt="poster"/>*/}
            </div>
        </div>
    )
}


