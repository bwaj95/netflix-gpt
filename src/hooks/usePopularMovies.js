import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { useCallback, useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((state) => state.movies?.popularMovies);

  const getPopularMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [popularMovies, getPopularMovies]);
};

export default usePopularMovies;
