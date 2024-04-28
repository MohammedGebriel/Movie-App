import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddFavorites from './components/AddFavorites'
import RemoveFavorite from './components/RemoveFavorite'
import BreakingBad from './components/BreakingBad'

function App() {
  const [data,setData] = useState([]);
  const [favorites,setFavorites] = useState([]);
  const [searchValue,setSearchValue] = useState('Action');

  const getMovieRequest = async (variable) => {
    const url = `http://www.omdbapi.com/?s=${variable}&apikey=71ebf753`
    const response = await fetch(url);
    const responseJson = await response.json()
    if(responseJson.Search) {
      setData(responseJson.Search) 
    }
  }
  
  useEffect(()=> {  
    getMovieRequest(searchValue)
  },[searchValue])
  
  useEffect(()=> {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'))
    setFavorites(movieFavorites)
  },[])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites',JSON.stringify(items))
    
  }

  const addFavoritesMovie = (movie) => {
    if(!favorites.includes(movie)){
      const newFavoritesList = [...favorites, movie ]
      setFavorites(newFavoritesList)
      saveToLocalStorage(newFavoritesList)
    } 
  }

  const removeFavoritesMovie = (movie) => {
    const filterFavorite = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
    setFavorites(filterFavorite)
    saveToLocalStorage(filterFavorite)
  }
  
  return (
    <div className='px-5 py-3'>
      <div className=' flex items-center'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='flex overflow-x-auto overflow-y-hidden mb-10'>
        <MovieList movies={data} handleFavoriteClick={addFavoritesMovie} favoriteComponent={AddFavorites} />
      </div>
      <div className=' flex items-center'>
        <MovieListHeading heading='Favorites' />
      </div>
      <div className='flex overflow-x-auto overflow-y-hidden mb-10'>
        <MovieList movies={favorites} handleFavoriteClick={removeFavoritesMovie} favoriteComponent={RemoveFavorite} />
      </div>
      <div className='mb-10'>
        <BreakingBad />

      </div>

    </div>
  )
}

export default App
