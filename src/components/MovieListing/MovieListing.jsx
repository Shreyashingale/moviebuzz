import React, {  } from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux/";

const MovieListing = () => {
    const moviesData = useSelector((state)=>state.movies.movies.Search);
    return (<>
        {moviesData && moviesData.map((movies)=>{
            return(

                <>
                <h2 key={movies.imdbID}>{movies.Title}  </h2>
                <img key={movies.imdbID} src={movies.Poster} alt="" />
                </>

            )
        })}
        {console.log("Movies data from redux is : ")}
        {console.log(moviesData)};
    </>)
}

export default MovieListing;