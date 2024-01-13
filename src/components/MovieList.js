import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" w-[98%] mx-auto  my-4  ">
      <h1 className=" font-semibold text-4xl text-white  ">{title}</h1>
      <div className="   my-4 ">
        <div className=" h-full flex  gap-4 overflow-x-scroll  ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
