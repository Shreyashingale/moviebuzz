import React from "react";
import "./MovieCard.scss";
//keys and data are sending via props
const MovieCard = (props) => {
    const movies = props.data;
    return (

        <>
                <div className="movie-chart">
                

                    <img src={movies.Poster} alt="" />
                    <h4>{movies.Title}</h4>
                </div>

        </>
    )
}

export default MovieCard;