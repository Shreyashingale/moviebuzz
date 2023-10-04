/*
for import => https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
*/
import React , {useEffect , useState } from "react";
import movieApi from "../../common/api/MovieApi";
import {APIKEY} from "../../common/api/MovieApiKey";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = ()=>{

    const movieType = "Harry";
    const dispatch = useDispatch();
    useEffect (()=>{
        console.log("in use effect");
        const fetchMovies = async ()=>{
            const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieType}&type=movie`)
            .catch((error)=>{
                console.log(error);
            });
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    } , []);
    return (

        <>
            <MovieListing/>
        
        </>
    )
}

export default Home;