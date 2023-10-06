/*
for import => https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
*/
import React , {useEffect} from "react";

import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies , fetchAsyncShows } from "../../features/movies/movieSlice";
const Home = ()=>{

    
    const dispatch = useDispatch();
    useEffect (()=>{
        console.log("in use effect");
        
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
        
    } , [dispatch]);
    return (

        <>
            <MovieListing/>
        
        </>
    )
}

export default Home;