import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie })  => {

    return (
        <div className="card col-12 col-md-3">
            <div>
                <div className="img-box">
                    <img className="card-img-top img-top" src={movie.posterURL} alt="oups!" />
                </div>
            
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text text-centered">{movie.rate}</p>
                    
                    <Link to={`/moviedetails/${movie.id}`}>
                            <button className="btn btn-primary">
                                    More Info
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
