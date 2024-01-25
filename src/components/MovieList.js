import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="  flex flex-col gap-y-3 mt-16   ">
      <h1 className=" font-semibold text-4xl text-white  ">{title}</h1>

      <div className=" h-60 flex justify-between    ">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
