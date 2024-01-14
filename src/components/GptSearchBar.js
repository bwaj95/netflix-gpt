import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);

  return (
    <div className=" absolute top-[150px] left-[10%] right-[10%] mb-24 z-[1] ">
      <div className=" w-[50%] h-16 mx-auto  flex items-center justify-center gap-x-4 ">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" w-[80%]  px-4 py-2 bg-gray-50 rounded-lg "
        />
        <button className=" text-white font-semibold cursor-pointer bg-red-500 hover:bg-red-600 w-32 py-2 px-6 rounded-lg ">
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};
export default GptSearchBar;
