import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const BrowsePage = () => {
  useNowPlayingMovies();

  return (
    <div className=" w-screen h-full relative ">
      <div className=" w-full absolute top-0 left-0 right-0 ">
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
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default BrowsePage;
