import { alpha, Box, InputBase, styled } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';


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



function SearchButton() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}&page=${page}`);
    }
    setQuery("")
  };

  useEffect(() => {
    setQuery('');
  }, []);
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          inputProps={{ "arial-label": "search" }}
        />
      </Search>
    </Box>
  )
}

export default SearchButton
