import { IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
function FavoriteButton() {
  return (
    <Link to="/favorite">

      <IconButton >
        <FavoriteIcon sx={{ display: { xs: 'none', md: 'block' }, width: 40, height: 40 }} />
      </IconButton>

    </Link>
  )
}
export default FavoriteButton
