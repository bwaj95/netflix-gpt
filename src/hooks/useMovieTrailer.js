import { useDispatch } from "react-redux";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addTrailerData } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  /**
   * Fetch movie videos list and update store with trailer data.
   */

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_FETCH_OPTIONS
    );

    const data = await response.json();

    const videosData = data.results;

    const trailersData = videosData.filter((video) => video.type === "Trailer");

    const trailerData = trailersData.length ? trailersData[0] : videosData[0];

    dispatch(addTrailerData(trailerData));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
