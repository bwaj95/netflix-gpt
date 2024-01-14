import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div className=" w-screen h-full relative  ">
      <div className=" w-full absolute top-0 left-0 right-0 z-[9999] ">
        <Header />
      </div>
      {/**
       * MainContainer
       *  - Video Background
       *  - Video Title, Details
       *
       * SecondaryContainer
       *  - MovieList * N
       *  - MovieCard * M
       */}

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default BrowsePage;
