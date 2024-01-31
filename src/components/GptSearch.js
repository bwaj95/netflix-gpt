import { useEffect } from "react";
// import { NETFLIX_BG_BANNER } from "../utils/constants";
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
    <div className={` w-full h-full  -z-10 fixed `}>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="bg-banner"
        className="  absolute top-0  -z-10 object-cover bg-center h-full w-full "
      />
      <div className=" w-full mx-auto px-2 h-screen flex flex-col  mt-8  ">
        <GptSearchBar />
        <div className=" w-full mx-auto mb-3 min-h-[100%] sm:min-h-max overflow-y-scroll flex flex-col backdrop-brightness-50 rounded-lg border border-slate-400 ">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};
export default GptSearch;
