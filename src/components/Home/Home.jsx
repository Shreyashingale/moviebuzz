/*
for import => https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
*/
import React , {useEffect , useState} from "react";
import '../Home/Home.scss';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies , fetchAsyncShows } from "../../features/movies/movieSlice";
const Home = ()=>{
    const [searchBarValue , setSearchBarValue] = useState('Marvel');
    const handleSearchChange =  (e)=>{
        setSearchBarValue(e.target.value);
        console.log(e.target.value);
    }
    const searchClick = ()=>{
        dispatch(fetchAsyncMovies(searchBarValue));
    }
    const dispatch = useDispatch();
    useEffect (()=>{
        console.log("in use effect");
        
        dispatch(fetchAsyncMovies(searchBarValue));
        dispatch(fetchAsyncShows());
        
    } , [dispatch]);
    return (

        <>

            <input placeholder="Search Movie" type="search" className="searchBar" onChange={handleSearchChange} />
            <button className="searchBtn" onClick={searchClick}>Search</button>
            <MovieListing/>
        
        </>
    )
}

export default Home;