import ScrollView from "./ScrollView/ScrollView";
// import ScrollView from "./ScrollView/ScrollView";

const MovieList = ({ title, movies }) => {
  return (
    <div className="  flex flex-col gap-y-3 mt-8 mb-20 w-full  ">
      <h1 className=" font-semibold text-4xl text-white  ">{title}</h1>

      <div className=" w-full h-60 flex items-center overflow-x-scroll  relative ">
        <ScrollView movies={movies} />
      </div>
    </div>
  );
};
export default MovieList;
