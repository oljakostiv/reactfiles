import React from "react";
import {getGenres, setCurrentPage} from "../redux/actionCreators/ActionCreators";
import {useDispatch} from "react-redux";

export default function Genres({genresValue}) {
    const dispatch4 = useDispatch();

    return (
        <div>
            {/*{*/}
            {/*    genresValue.map(genre => (*/}
            {/*        <div key={genre.id} onClick={()=> dispatch4(getGenres(genre))}>*/}
            {/*            {genre.name}*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    )
}