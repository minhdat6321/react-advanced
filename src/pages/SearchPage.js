import { Alert, Box, Divider, Pagination, PaginationItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import LoadingScreen from '../components/LoadingScreen';
import { API_KEY } from '../app/config';
import apiService from '../app/apiService';

function SearchPage({ nameHeader = "" }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const pageNum = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`/search/multi?api_key=${API_KEY}&page=${pageNum}&query=${q}`);
        console.log(res.data)
        setMovies(res.data);
        setError("");
        console.log(`pageNum: ${pageNum} & query = ${q}`)
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
  }, [q, pageNum]);


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
          page={pageNum}
          count={500}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/search?q=${q}&page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </div>
  )
}

export default SearchPage

