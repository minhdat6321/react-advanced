
import React from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import Logo from "../components/Logo";
import SearchButton from "../components/SearchButton";
import FavoriteButton from "../components/FavoriteButton";
import MovieButton from "../components/MovieButton";

import useAuth from "../hooks/useAuth";
import MoreButton from "../components/MoreButton";

function MainHeader() {
  const { user } = useAuth();
  const auth = useAuth();
  let navigate = useNavigate()
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>

          <Typography
            component="h4"
            variant="h6"
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}

          >
            The Movie Web
          </Typography>

          <SearchButton />

          <Box sx={{ flexGrow: 1 }} />

          {user?.username ? (
            <>
              <Typography marginRight={10} variant="h6" color="inherit" component="div" sx={{ display: { xs: 'none', md: 'block' } }}
              >
                Welcome {user?.username}!
              </Typography>
              <IconButton sx={{ display: { xs: 'none', md: 'block' } }}
                s              >

                <Avatar
                  src="/images/avatar/1.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>

              <FavoriteButton />
              <MovieButton />

              <Button sx={{ display: { xs: 'none', md: 'block' } }}
                variant="contained"
                onClick={() => auth.logout(() => navigate("/"))}
              >
                Logout
              </Button>
              <MoreButton sx={{ display: { xs: 'flex', md: 'none' } }} />
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;

