import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const dispatch = useDispatch();

  const getUpcomingMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      dispatch(addUpcomingMovies(data?.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, [upcomingMovies, getUpcomingMovies]);
};

export default useUpcomingMovies;
