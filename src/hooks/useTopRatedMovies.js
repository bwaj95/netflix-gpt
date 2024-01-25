import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      dispatch(addTopRatedMovies(data?.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, [topRatedMovies, getTopRatedMovies]);
};

export default useTopRatedMovies;
