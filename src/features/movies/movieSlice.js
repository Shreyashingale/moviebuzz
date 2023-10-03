import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies : [],
}


export const movieSlice = createSlice({

    name : "movies",
    initialState,
    reducers:{
        //here action.payload but we have destrctured it read it and also spread operator
        addMovies :(state,{payload})=>{
            state.movies = payload;
        },
    },

})


export const {addMovies}  = movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export default movieSlice.reducer;