import './App.scss';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route} from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="movie/:imdbId" element = {<MovieDetail/>}/>
        <Route path="*" element = {<PageNotFound/>}/>

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
