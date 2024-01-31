import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoDetails = ({ title, overview }) => {
  return (
    <div className=" pt-36 px-12 absolute top-[30%] md:top-[12%] left-[2%] md:left-[5%] ">
      <h1 className=" font-bold text-4xl lg:text-6xl text-white ">{title}</h1>
      <p className=" py-6 text-lg hidden md:block lg:w-1/4 sm:w-1/2 text-white ">
        {overview}
      </p>

      <div className="flex items-center gap-x-4">
        <button className=" mt-8 lg:mt-0 flex items-center gap-x-2 bg-white hover:bg-opacity-85 rounded-lg py-1 md:py-4 px-6 md:px-12  cursor-pointer transition-all duration-200 ">
          <FaPlay className=" text-xl text-black " />
          <p className=" text-xl font-bold text-black ">Play Now</p>
        </button>
        <button className="hidden  lg:flex items-center gap-x-2 bg-gray-400 hover:bg-gray-600 bg-opacity-55 hover:bg-opacity-85 rounded-lg py-4 px-12  cursor-pointer transition-all duration-200 ">
          <CiCircleInfo className=" text-2xl  text-white " />
          <p className=" text-xl font-bold text-white ">More Info</p>
        </button>
      </div>
    </div>
  );
};
export default VideoDetails;
