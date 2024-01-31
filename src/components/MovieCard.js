import { TMDB_IMAGE_PATH_500 } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div>
      {posterPath ? (
        <img
          src={TMDB_IMAGE_PATH_500 + posterPath}
          alt="poster"
          className=" h-56 my-auto bg-gray-50 rounded-md "
        />
      ) : (
        <div className=" h-56 w-32 my-auto bg-gray-50 rounded-md flex items-center justify-center border border-slate-500 px-2  ">
          <p className=" text-black font-medium ">{title}</p>
        </div>
      )}
    </div>
  );
};
export default MovieCard;
