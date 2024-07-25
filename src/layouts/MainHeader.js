import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
          <Typography
            component="h4"
            variant="h6"
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}

          >
            Job Routing
          </Typography>
          <Box component="form" >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "arial-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {user?.username ? (
            <>
              <Typography marginRight={10} variant="h6" color="inherit" component="div">
                {user?.username}
              </Typography>
              <Button
                variant="contained"
                onClick={() => auth.logout(() => navigate("/"))}
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
              <Avatar
                src="/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, ml: 1 }}
              />
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