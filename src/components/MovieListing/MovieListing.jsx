import React from "react";
import { useReducer } from "react";
import {getAllMovies} from '../../features/movies/movieSlice';
const MovieListing = () => {
    const movies = useReducer((state)=>state.movies.movies.movies);
    return (<>
        moiveListing
        {console.log("Movies data from redux is : ")}
        {console.log(movies)}
    </>)
}

export default MovieListing;