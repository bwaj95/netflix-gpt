import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  if (!movies.nowPlayingMovies) return null;

  // console.log(movies);

  return (
    <div className=" w-full   flex flex-col relative bg-black ">
      <div className=" pl-8 mt-[-10%] ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Recommended"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
