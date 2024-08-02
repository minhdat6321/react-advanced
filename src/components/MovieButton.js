import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

function MovieButton() {
  return (
    <Link to="/discovery/1">

      <IconButton >
        <MovieIcon sx={{ display: { xs: 'none', md: 'block' }, width: 40, height: 40 }} />
      </IconButton>

    </Link>
  )
}

export default MovieButton
