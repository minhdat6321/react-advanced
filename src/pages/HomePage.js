import React, { useEffect, useState } from "react";
import { Alert, Box, Divider, Grid, ListItemButton } from "@mui/material";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config.js";
import MovieList from "../components/MovieList.js";
import LoadingScreen from "../components/LoadingScreen.js";
import MoiveCard from "../components/MovieCard.js";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState("");
  const [moviesGenre, setMoviesGenre] = useState([]);
  const [loading3, setLoading3] = useState(true);
  const [genreId, setGenreId] = useState(12);

  //Trending Part get API
  useEffect(() => {
    const getMoviesTrending = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`/trending/all/day?api_key=${API_KEY}`);
        console.log(res.data)
        setMovies(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMoviesTrending();
  }, []);

  useEffect(() => {
    const getListCategory = async () => {
      setLoading2(true);
      try {
        const res = await apiService.get(`/genre/movie/list?api_key=${API_KEY}`);
        console.log(`List Cate: ${res.data.genres}`)
        setGenres(res.data.genres);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading2(false);
    };
    getListCategory();
  }, []);

  useEffect(() => {
    const getMovieGenre = async () => {
      setLoading3(true);
      try {
        const res = await apiService.get(`/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        console.log(`List Movie genre: ${res.data.results}`)
        setMoviesGenre(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading3(false);
    };
    getMovieGenre();
  }, [genreId]);



  return (
    <div>
      {/* Trending Part */}
      <h1>Trending</h1>
      <Divider />
      <Box sx={{ position: "relative", height: 1 }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <MovieList movies={movies.results} />
            )}
          </>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />

      <h1>Category</h1>
      <Divider />
      <Box sx={{ position: "relative", height: 1 }}>
        {loading2 ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (

              <Alert severity="error">{error}</Alert>
            ) : (
              <div style={{ display: "flex" }} >
                <Grid item xs={1}>

                  <nav
                    style={{
                      borderRight: "solid 1px purple",
                      padding: "0.75rem"
                    }}
                  >
                    {genres.map((genre) => (
                      <ListItemButton
                        sx={{
                          py: 0,
                          minHeight: 40,
                          color: "cyan",
                          "&:focus": {
                            backgroundColor: "rgba(225,0,0,0.1)",
                          },
                          fontSize: "0.75rem",
                        }}

                        key={genre.id}
                        onClick={() => setGenreId(genre.id)}
                      >
                        {genre.name}
                      </ListItemButton>

                    ))}
                  </nav>
                </Grid>
                <Grid container direction="row" spacing={1} mt={2} ml={1}>
                  {loading3
                    ? <LoadingScreen />
                    :
                    moviesGenre.map((movie) => (
                      <Grid item xs={10} md={4} lg={3}>
                        <MoiveCard movie={movie} />
                      </Grid>
                    ))
                  }
                </Grid>

              </div>

            )}
          </>
        )}
      </Box>


    </div >
  );
}

export default HomePage;