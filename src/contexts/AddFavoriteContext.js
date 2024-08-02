import React, { createContext, useState } from 'react'

const AddFavoriteContext = createContext()

function AddFavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([])
  const handleAdd = (movie) => {
    setFavorite((preMovies) => {
      const movieExists = preMovies.some(preMovie => preMovie.id === movie.id);
      if (movieExists) {
        return preMovies;
      } else {
        return [...preMovies, movie];
      }
    });
  };


  return (
    <AddFavoriteContext.Provider value={{ favorite, handleAdd }}>

      {children}
    </AddFavoriteContext.Provider>
  )
}

export { AddFavoriteContext, AddFavoriteProvider } 
