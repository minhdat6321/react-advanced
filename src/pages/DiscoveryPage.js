import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Box, Divider, Pagination, PaginationItem } from "@mui/material";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config.js";
import MovieList from "../components/MovieList.js";
import LoadingScreen from "../components/LoadingScreen.js";


function DiscoveryPage({ withGenreId = "", nameHeader = "" }) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useParams();
  const page = parseInt(params.pageId || '1', 10);


  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`discover/movie?api_key=${API_KEY}&page=${params.pageId}&language=en-US&with_genres=${withGenreId}`);
        console.log(res.data)
        setMovies(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
    console.log(params.pageId)
  }, [params.pageId]);


  return (
    <div>
      {!nameHeader ? "" : <>
        <h1>Discovery</h1>
        <Divider />
      </>}
      <Box sx={{ position: "relative", height: 1 }}>
        {loading ? (<LoadingScreen />) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <MovieList movies={movies.results} />
            )}
          </>
        )}
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", alignItems: "center", mt: 5 }} >
        <Pagination
          page={page}
          count={500}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/discovery/${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </div>
  );
}

export default DiscoveryPage
