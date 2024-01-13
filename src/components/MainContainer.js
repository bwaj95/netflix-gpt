import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" relative overflow-x-hidden w-full min-h-[95vh] ">
      <VideoBackground movieId={id} />
      {/* <div className=" w-full min-h-[95vh]  "> */}
      <VideoDetails title={original_title} overview={overview} />
      {/* </div> */}
    </div>
  );
};
export default MainContainer;
