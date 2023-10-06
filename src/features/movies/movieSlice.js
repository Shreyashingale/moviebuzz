import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/MovieApi";
import { APIKEY } from "../../common/api/MovieApiKey";
const initialState = {
    movies: {},
    shows :{},
}


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieType = "Harry";
        const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieType}&type=movie`)
            .catch((error) => {
                console.log(error);
            });
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
const movieSlice = createSlice({

    name: "movies",
    initialState,
    reducers: {
        //learn array destrucuting and spread operator
        addMovies: (state, action) => {
            state.movies = action.payload;
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
        }
    }
});


export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;