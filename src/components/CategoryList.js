import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Alert, Box, Divider } from "@mui/material";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config.js";
import MovieList from "../components/MovieList.js";
import LoadingScreen from "../components/LoadingScreen.js";

function CategoryList({ genres }) {
  const auth = useAuth();
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //Category lise Part get API
  // useEffect(() => {
  //   const getListCategory = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await apiService.get(`/genre/movie/list?api_key=${API_KEY}`);
  //       console.log(`List Cate: ${res.gernes}`)
  //       setGenres(res.gernes);
  //       setError("");
  //     } catch (error) {
  //       console.log(error);
  //       setError(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   getListCategory();
  // }, []);

  return (
    <div >
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          fontSize: "2rem"
        }}
      >
        {genres.map((genre) => (
          <NavLink
            id="navLinkk"

            style={({ isActive }) => {
              return {
                display: 'block',
                margin: "1rem 0",
                color: isActive ? "red" : ''
              }
            }
            }

            // to={`/link do cac thws`}
            key={genre.id}
          >
            {genre.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default CategoryList
