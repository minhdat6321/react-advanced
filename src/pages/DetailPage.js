import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../app/config";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";
import MovieDetailCard from "../components/MovieDetailCard";


function DetailPage() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/${params.movieId}?api_key=${API_KEY}`
        );
        console.log(res.data.genres);
        setMovieDetail(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [params.movieId]);


  return (
    loading ? <LoadingScreen /> :
      <MovieDetailCard movie={movieDetail} />
  );
}

export default DetailPage;