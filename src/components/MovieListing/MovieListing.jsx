import React, { } from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux/";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
    const moviesData = useSelector((state) => state.movies.movies);
    const showsData = useSelector((state)=>state.movies.shows);
    let renderMovies = "";
    let renderShows = "";
    renderMovies = moviesData.Response === "True" ?
        (   /*
            when need to return use => ()  when need to write to js use=> {}
        */
            moviesData.Search.map((movies, index) => (
                // console.log(movies);
                <MovieCard key={index} data={movies} />
            ))
        )
        : (<h2>{moviesData.error}</h2>)

        renderShows = showsData.Response==="True"?
    (
        showsData.Search.map((shows,index)=>(
            <MovieCard key={index} data={shows}/>
        ))
    ):(
        <h2>Not able to read the data</h2>
    )
    return (<>
        <h2>Movies</h2>
        <div className="movie-banner">{renderMovies}</div>
        <h2>Shows</h2>
        <div className="movie-banner">{renderShows}</div>
    </>)
}

export default MovieListing;