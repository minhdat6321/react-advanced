import { Divider } from '@mui/material'
import React, { useEffect } from 'react'
import useFavorite from '../hooks/useFavorite'
import MovieList from '../components/MovieList';

function FavoritePage() {
  const { favorite } = useFavorite();
  useEffect(() => {
    console.log(`day la obj favorite: ${favorite}`)
  }, [favorite])
  return (
    <div>
      <h1>Favorite Page</h1>
      <Divider />
      <MovieList movies={favorite} />


    </div>
  )
}

export default FavoritePage
