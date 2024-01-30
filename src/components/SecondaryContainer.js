import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  if (!movies.nowPlayingMovies) return null;

  // console.log(movies);

  return (
    <div className=" w-full   flex flex-col relative bg-black min-h-min mb-16 ">
      <div className=" px-8 mt-[-8%] w-full ">
        {movies.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )}
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
