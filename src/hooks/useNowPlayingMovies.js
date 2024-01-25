import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { useCallback, useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  const getNowPlayingMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [nowPlayingMovies, getNowPlayingMovies]);
};

export default useNowPlayingMovies;
