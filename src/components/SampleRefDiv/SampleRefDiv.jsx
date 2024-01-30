import { useEffect, useRef, useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SampleRefDiv = () => {
  const [images, setImages] = useState(data);
  const TRANSLATE_X_OFFSET = 200;

  const leftFixedRef = useRef(null);
  const rightFixedRef = useRef(null);

  const leftMovingRef = useRef(null);
  const rightMovingRef = useRef(null);

  const movingDivRef = useRef(null);

  //   states for ref positions as they don't get updated.

  const [leftMovingRefPosition, setLeftMovingRefPosition] = useState(0);
  const [rightMovingRefPosition, setRightMovingRefPosition] = useState(0);

  const [leftFixedRefPosition, setLeftFixedRefPosition] = useState(0);
  const [rightFixedRefPosition, setRightFixedRefPosition] = useState(0);

  useEffect(() => {
    const lf = leftFixedRef.current.offsetLeft;
    const rf = rightFixedRef.current.offsetLeft;

    const lm = leftMovingRef.current.offsetLeft;
    const rm = rightMovingRef.current.offsetLeft;

    setLeftMovingRefPosition(lm);
    setRightMovingRefPosition(rm);

    setLeftFixedRefPosition(lf);
    setRightFixedRefPosition(rf);

    console.log("Distance between the LEFTs : " + (lf - lm));
    console.log("Distance between the RIGHTs : " + (rf - rm));
  }, [images]);

  const getTranslateXValue = () => {
    const currentTranslateX =
      movingDivRef.current.style.transform || "translateX(0)";
    const match = currentTranslateX.match(/translateX\(([-\d]+)px\)/);

    console.log("Match: " + match);

    return match ? parseInt(match[1]) : 0;
  };

  const setNewTranslateValue = (newOffsetValue) => {
    setLeftMovingRefPosition((prev) => prev + newOffsetValue);
    setRightMovingRefPosition((prev) => prev + newOffsetValue);
  };

  const handleMoveLeft = () => {
    const rf = rightFixedRef.current.offsetLeft;
    // const rm = rightMovingRef.current.offsetLeft;

    console.log("Move left called...");
    console.log("values: ", rightMovingRefPosition, rf);

    if (rightMovingRefPosition <= rf) return;

    console.log("Moving left...");

    const currentTranslateX = getTranslateXValue();
    const newOffsetValue =
      -1 * Math.min(TRANSLATE_X_OFFSET, rightMovingRefPosition - rf);
    const newTranslateX = currentTranslateX + newOffsetValue;
    setNewTranslateValue(newOffsetValue);

    movingDivRef.current.style.transform = `translateX(${newTranslateX}px)`;
    // console.log(movingDivRef.current);
  };

  const handleMoveRight = () => {
    const lf = leftFixedRef.current.offsetLeft;
    // const lm = leftMovingRef.current.offsetLeft;

    console.log("Move right called...");
    console.log("values: ", leftMovingRefPosition, lf);
    if (leftMovingRefPosition >= lf) return;

    console.log("Moving right...");

    const currentTranslateX = getTranslateXValue();
    const newOffsetValue = Math.min(
      TRANSLATE_X_OFFSET,
      lf - leftMovingRefPosition
    );
    const newTranslateX = currentTranslateX + newOffsetValue;
    setNewTranslateValue(newOffsetValue);

    movingDivRef.current.style.transform = `translateX(${newTranslateX}px)`;
    // console.log(movingDivRef.current);
  };

  return (
    <div className="mx-auto overflow-x-hidden w-full">
      {/* main carousel component */}
      <div className="flex flex-row gap-x-0 w-[90%] h-[300px] relative mx-auto overflow-x-hidden ">
        {/* carousel left div */}
        <button
          onClick={handleMoveRight}
          className=" bg-gray-300 opacity-60 rounded-md py-1 px-3 hover:bg-gray-400 h-[40%] w-8 absolute left-0 top-[30%] bottom-[30%] z-20 "
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleMoveLeft}
          className=" bg-gray-300 opacity-60 rounded-md py-1 px-3 hover:bg-gray-400 h-[40%] w-8 absolute right-0 top-[30%] bottom-[30%] z-20 "
        >
          <FaChevronRight />
        </button>
        <div className=" h-full w-4 bg-red-500 " ref={leftFixedRef}></div>
        {/* carousel wrapper */}
        <div className=" w-full h-full border border-slate-500 ">
          {/* moving carousel div */}
          <div
            className=" flex flex-row items-center gap-x-0 h-[80%] absolute top-[10%] bottom-[10%] left-0 transition-all duration-700 ease-out "
            ref={movingDivRef}
          >
            <div
              className=" w-2 h-full bg-yellow-300"
              ref={leftMovingRef}
            ></div>
            <div className=" border border-slate-950 h-[95%] w-max flex gap-x-3 ">
              {/* min-w-[600px] for use later */}
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.id}
                  className=" h-[90%] my-auto "
                />
              ))}
            </div>
            <div
              className=" w-2 h-full bg-yellow-300"
              ref={rightMovingRef}
            ></div>
          </div>
        </div>

        {/* carousel right div */}
        <div className=" h-full w-4 bg-red-500 " ref={rightFixedRef}></div>
      </div>

      {/* buttons div */}
      <div className="flex flex-row gap-x-4 mt-16 z-10 mx-auto "></div>
    </div>
  );
};
export default SampleRefDiv;
