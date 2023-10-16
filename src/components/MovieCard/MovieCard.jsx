import React from "react";
import "./MovieCard.scss";
import { Link } from 'react-router-dom';
//keys and data are sending via props
const MovieCard = (props) => {
    const movies = props.data;
    return (

        <>
            {/* issue faced page was reloading and then all the states saved was not able to access due to onclick adding mistakenly */}
                <Link to={`/movie/${movies.imdbID}`}>
                    <div className="movie-chart">
                        <img src={movies.Poster} alt="" />
                        <h4>{movies.Title}</h4>
                    </div>
                </Link>
           

        </>
    )
}

export default MovieCard;