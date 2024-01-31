import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className=" w-[90%] mx-auto mt-10  h-max ">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};
export default GptMovieSuggestions;
