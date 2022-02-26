import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({movies}) => {
    return(
        <> 
            <div className="container">
                <div className="row gap-4"> 
                    {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} /> ))}
                </div>
            </div>
        </>
    )
}

export default MovieList; 