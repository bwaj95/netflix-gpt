import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className=" w-full h-60 flex items-center overflow-x-scroll  relative ">
      <div className=" w-max flex flex-row gap-x-3 items-center   absolute">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};
export default Shimmer;
