import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import Header from './Header/Header';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1f172f6'; 
function App() {
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState([]); 
  const searchMovies = async (title) => { 
    const response = await fetch(`${API_URL}&s=${title}`); 
    const data = await response.json(); 
    
    setMovies(data.Search); 
  }

  useEffect(() => { 
    searchMovies('Harry potter'); 
  }, []);

  return (
    <div className="app">
       
      <Header></Header>

      <div className="search"> 
          <input 
              placeholder="Harry Potter"
              value={searchTerm} 
              onChange={(e) => { setSearchTerm(e.target.value) }} 
          /> 
          <img 
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/search-454.png"
              alt="search icon"
              onClick={() => searchMovies(searchTerm)} 
          /> 
      </div> 

      { 
        movies?.length > 0 
          ? (<div className="container"> 
            {movies.map((movie) => ( 
              <MovieCard movie={movie} key={Math.random()}/> 
            ))} 
          </div>) : ( 
            <div className="empty"> 
              <h2>No Movies found</h2> 
            </div> 
          ) 
      } 
    </div> 
  )
}

export default App
