import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CoolStuff = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full border border-white/20 h-[300px] rounded-2xl">
      {/* Text */}
      <div className="flex flex-col subHeadingGradiant2">
        <h1 className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black ">
          A lot of cool Stuff
        </h1>
        <h1 className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black ">
          Is coming soon
        </h1>
      </div>

      {/* Explore */}
      <div className="w-full flex justify-center items-center gap-2">
        <p className="subHeadingGradiant flex justify-center items-center text-[18px] text-medium cursor-pointer">
          Explore
        </p>
        <FaArrowRight className="text-[#B3B3B3]" />
      </div>
    </div>
  );
};

export default CoolStuff;
