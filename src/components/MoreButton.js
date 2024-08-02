import { Avatar, Box, Button, IconButton, Menu, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function MoreButton() {
  const auth = useAuth();
  let navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-appbar"

        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >

        <MenuItem >
          <Link to="/favorite" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography>Favorite</Typography>
          </Link>
        </MenuItem>

        <MenuItem >
          <Link to="/discovery/1" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography>Discovery</Typography>
          </Link>
        </MenuItem>

        <MenuItem >
          <Button onClick={() => auth.logout(() => navigate("/"))}>Logout</Button>
        </MenuItem>


      </Menu>
    </Box>
  )
}

export default MoreButton
