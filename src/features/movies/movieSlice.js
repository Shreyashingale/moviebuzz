import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     movies : {},
}

const movieSlice = createSlice({

    name :"movies",
    initialState,
    reducers : {
        //learn array destrucuting and spread operator
        addMovies : (state , action) =>{
            state.movies = action.payload;
        },
    },
});


export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;