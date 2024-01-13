import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((state) => state.movies?.trailer);

  return (
    <div className=" -z-10 absolute w-full h-full overflow-hidden ">
      {trailer && (
        <iframe
          className="  w-full h-full scale-150 "
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&si=2NTyvLD2qx49savg&amp;controls=0`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};
export default VideoBackground;
