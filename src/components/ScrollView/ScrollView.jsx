import MovieCard from "../MovieCard";

const ScrollView = ({ movies }) => {
  return (
    <div className=" w-max flex flex-row gap-x-3 items-center   absolute">
      {movies.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </div>
  );
};
export default ScrollView;
