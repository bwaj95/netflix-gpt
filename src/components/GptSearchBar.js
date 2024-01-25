import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { openai } from "../utils/openai";
import { useRef } from "react";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);

  const gptSearchQueryRef = useRef("");

  const dispatch = useDispatch();

  const tmdbSearchMovie = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      console.log("tmdbSearchMovie ----- " + movie);
      console.log(data);

      return data.results;
    } catch (error) {
      console.log("Error fetching movie form TMDB.");
      console.error(error);
    }
  };

  const handleGptQuerySearch = async () => {
    // if (!gptSearchQueryRef.current.value) return;

    // const query = `Act as a movire recommendation system and suggest some movies for the query: ${gptSearchQueryRef.current.value}.
    // only give me names of at max 5 movies, put in an array like the example given ["movie1","movie2","movie3","movie4","movie5",]
    // `;

    // const searchResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(searchResults);

    const gptResults = [
      "Leo (Bloody Sweet)",
      "The Godfather",
      "Nayakan",
      "Vikram",
      "Donnie Brasco",
    ];

    const movieDataPromises = gptResults.map((movie) => tmdbSearchMovie(movie));

    const movieData = await Promise.all(movieDataPromises);

    const movieDataFiltered = movieData.map((data, index) => {
      return data.filter((movie) => movie.title === gptResults[index]);
    });

    console.log("All Movie Data");
    console.log(movieDataFiltered);

    dispatch(
      addGptMovieResult({
        movieNames: gptResults,
        movieResults: movieDataFiltered,
      })
    );
  };

  return (
    <div className=" absolute top-[150px] left-[10%] right-[10%] mb-24 z-[1] ">
      <form
        className=" w-[50%] h-16 mx-auto  flex items-center justify-center gap-x-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" w-[80%]  px-4 py-2 bg-gray-50 rounded-lg "
          ref={gptSearchQueryRef}
        />
        <button
          className=" text-white font-semibold cursor-pointer bg-red-500 hover:bg-red-600 w-32 py-2 px-6 rounded-lg "
          onClick={handleGptQuerySearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
