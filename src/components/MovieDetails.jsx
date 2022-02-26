import React from "react";
import { useParams, Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function MovieDetails({ movies }) {
  let movieId = useParams().id;
  let movieSpecific;

  movieSpecific = movies.find((elt) => {
    return elt.id == movieId;
  });

  return (
    <div className="card-1 mb-3">
        <div className="row g-0 box-2">
            
            <div className="col-md-4 img-box">
                <img src={movieSpecific.posterURL} className="img-fluid-1" alt="movie_image" />
                <div className="star-box"><StarRating /></div>
            </div>

            <div className="col-md-8 text-box">
                <h2>-- MOVIE DETAILS --</h2>
                <div className="card-body-1">
                  <h5 className="card-titled"> {movieSpecific.title} </h5>
                  <p className="card-text description">{movieSpecific.description}</p>
                  <p className="card-text-1">
                      <small className="text-muted">
                          <b>Click the link below to watch the movie: </b> 
                          <br />
                        <Link to={`/moviedetails/${movieSpecific.link}`}>  {movieSpecific.link} </Link>
                      </small>
                  </p>

                  <Link to="/">
                      <button className="bottom-btn">Go back to home page</button>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
