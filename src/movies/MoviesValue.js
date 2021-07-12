import React from "react";

export default function Movies({moviesValue}) {
    return (
        <div>
            {
                moviesValue.map(movie => (
                <React.Fragment key={movie.id}>
                    <div>
                        {movie.id} - {movie.title}
                    </div>
                </React.Fragment>
                ))
            }
        </div>
    )
}