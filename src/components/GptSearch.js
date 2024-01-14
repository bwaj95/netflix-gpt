import { useEffect } from "react";
import { NETFLIX_BG_BANNER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  useEffect(() => {
    document.title = "NetflixGPT | GptSearch";
  }, []);

  return (
    <div className=" w-full h-full relative -z-10 ">
      <img
        src={NETFLIX_BG_BANNER}
        alt="bg-banner"
        className=" absolute top-0 -z-10 "
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GptSearch;
