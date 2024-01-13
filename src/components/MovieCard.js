import { TMDB_IMAGE_PATH_500 } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        src={TMDB_IMAGE_PATH_500 + posterPath}
        alt="poster"
        className=" w-48 "
      />
    </div>
  );
};
export default MovieCard;
