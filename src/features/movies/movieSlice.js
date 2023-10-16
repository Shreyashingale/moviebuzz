// issue faced was like the first was that onclick where due to that the page was reloading and the all the states we have saved were going

// then after that while calling the fetch for detailed function we were saving only the previous values of detailed function so for that in spread operatior take all the values

// and then th current one is the remove callback function this is sync function may be so need to solve that
// will work on it

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/MovieApi";
import { APIKEY } from "../../common/api/MovieApiKey";
const initialState = {
    movies: {},
    shows :{},
    detailedMovieOrShow : {},
}


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (movieType) => {
        const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieType}&type=movie`)
            .catch((error) => {
                console.log(error);
            });
            console.log("movie data in slice is : ");
            console.log(response);
            return response.data;
    }
)


export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const movieType = "Friends";
        const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieType}&type=series`)
            .catch((error) => {
                console.log(error);
            });
            return response.data;
    }
)

export const fetchAsyncMoviesOrShowDetail = createAsyncThunk(
    
    'movies/fetchAsyncMoviesOrShowDetail' , 
    async(imdbID)=> {
        console.log("in function");
        const response = await movieApi.get(`?apiKey=${APIKEY}&i=${imdbID}`)
        .catch((error)=>{
            console.log(error);
        });

        return response.data;

    }
)
const movieSlice = createSlice({

    name: "movies",
    initialState,
    reducers: {
        //learn array destrucuting and spread operator
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        removeSelectedMovieOrShow :(state,action)=>{
            console.log("excuting");
            state.detailedMovieOrShow = {};
        },
    },
    extraReducers :{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state , action)=>{
            console.log("Fetched Succesfully");
            //learn spread operator and object destruring
            return {...state , movies:action.payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");    
        },
        [fetchAsyncShows.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncShows.fulfilled]:(state , action)=>{
            console.log("Fetched Succesfully");
            //learn spread operator and object destruring
            return {...state , shows:action.payload};
        },
        [fetchAsyncShows.rejected]:()=>{
            console.log("Rejected");    
        },
        [fetchAsyncMoviesOrShowDetail.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMoviesOrShowDetail.fulfilled] : (state , action)=>{
        // here was just saving the state detailedMovieOrShow instead of whole previous state man god level
            return {...state , detailedMovieOrShow:action.payload};
        },
        [fetchAsyncMoviesOrShowDetail.rejected]:()=>{
            console.log("Rejected");
        }
    }
});


export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;