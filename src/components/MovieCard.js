import { TMDB_IMAGE_PATH_500 } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        src={TMDB_IMAGE_PATH_500 + posterPath}
        alt="poster"
        className=" h-56 my-auto bg-gray-50 rounded-md "
      />
    </div>
  );
};
export default MovieCard;
