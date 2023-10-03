/*
for import => https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
*/
import React , {useEffect , useState } from "react";
import movieApi from "../../common/api/MovieApi";
import {APIKEY} from "../../common/api/MovieApiKey";
import { useDispatch } from "react-redux";
import {addMovies} from '../../features/movies/movieSlice';
import MovieListing from "../MovieListing/MovieListing";
const Home = ()=>{
    const dispatch = useDispatch();
    useEffect (()=>{
        const movieType = "Harry";
        console.log("in use effect");
        const fetchMovies = async ()=>{
            const respone = await movieApi.get(`?apiKey=${APIKEY}&s=${movieType}&type=movie`)
            .then((response)=>{
                dispatch(addMovies(response.data.Search));
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        fetchMovies();
    } , []);
    return (

        <>
            <MovieListing/>
        
        </>
    )
}

export default Home;