import { useEffect } from "react";
import { NETFLIX_BG_BANNER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  useEffect(() => {
    document.title = "NetflixGPT | GptSearch";

    return () => {
      document.title = "NetflixGPT";
    };
  }, []);

  return (
    <div className=" w-full h-full  -z-10 fixed ">
      <img
        src={NETFLIX_BG_BANNER}
        alt="bg-banner"
        className=" absolute top-0 -z-10 "
      />
      <div className="flex overflow-y-scroll ">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default GptSearch;
