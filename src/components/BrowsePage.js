import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div className=" max-w-screen h-fit relative   ">
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

      <div className=" w-full  overflow-x-hidden overflow-y-clip ">
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};
export default BrowsePage;
