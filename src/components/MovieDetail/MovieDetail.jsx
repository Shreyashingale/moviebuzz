import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchAsyncMoviesOrShowDetail} from '../../features/movies/movieSlice';
import removeSelectedMovieOrShow from '../../features/movies/movieSlice';
import {Link} from 'react-router-dom';
const MovieDetail = ()=>{
    let {imdbId} = useParams();
    const dispatch = useDispatch();
    const movieOrShowDetails = useSelector((state)=>state.movies.detailedMovieOrShow);
    console.log(movieOrShowDetails);
    useEffect(()=>{
        console.log(imdbId);
        dispatch(fetchAsyncMoviesOrShowDetail(imdbId))

        return (()=>{
            console.log("called back");
            dispatch(fetchAsyncMoviesOrShowDetail());
        })
    } , [dispatch,imdbId] );
    return(

        <>
        {/* React Link tag changes the url but doesnt render the component */}
        <button></button>
        <Link to="/">Home</Link>
        <div>
            <h2>{movieOrShowDetails.Title}</h2>
            <img src={movieOrShowDetails.Poster} alt="" />
            <h3>{movieOrShowDetails.Type}</h3>
            <h3>{movieOrShowDetails.Writer}</h3>
            <h3>{movieOrShowDetails.Year}</h3>
            <h3>{movieOrShowDetails.Actors}</h3>
            <h3>{movieOrShowDetails.Genre}</h3>
        </div>
        </>
    )
}

export default MovieDetail;