import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { selectNowPlayingMovies } from "../utils/moviesSlice";
import Shimmer from "./Shimmer/Shimmer";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  const nowPlayingMovies = useSelector(selectNowPlayingMovies);

  if (!movies.nowPlayingMovies) return null;

  let nowPlayingMoviesList;
  if (
    nowPlayingMovies.status === "idle" ||
    nowPlayingMovies.status === "loading"
  ) {
    nowPlayingMoviesList = (
      <div className="  my-4 ">
        <Shimmer />
      </div>
    );
  } else if (nowPlayingMovies.status === "succeeded") {
    nowPlayingMoviesList = (
      <MovieList title={"Now Playing"} movies={nowPlayingMovies.movies} />
    );
  }

  return (
    <div className=" w-full   flex flex-col relative bg-black min-h-min mb-16 -mt-80 md:-mt-40 lg:mt-0  ">
      <div className=" px-8 mt-[-8%] w-full ">
        {/* {movies.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )} */}

        {nowPlayingMoviesList}

        {movies.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        )}
      </div>

      <div className=" w-full absolute bottom-[-5%] -z-50  bg-black min-h-[100px] "></div>
    </div>
  );
};
export default SecondaryContainer;
