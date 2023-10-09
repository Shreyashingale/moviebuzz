import React from "react";
import "./MovieCard.scss";
import {Link} from 'react-router-dom';
//keys and data are sending via props
const MovieCard = (props) => {
    const movies = props.data;
    return (

        <>
                <Link to={`/movie/${movies.imdbID}`}>
                <div className="movie-chart" onClick>
                    <img src={movies.Poster} alt="" />
                    <h4>{movies.Title}</h4>
                </div>
                </Link>

        </>
    )
}

export default MovieCard;