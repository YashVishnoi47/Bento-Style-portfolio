import Image from "next/image";
import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="commonWidth flex lg:flex-row flex-col justify-center items-center  gap-8 rounded-2xl border-neutral-200">
      {/* Left */}
      <div className="lg:w-[40%] w-full h-[450px] rounded-2xl flex flex-col justify-center items-center bgCardImage gap-8 relative">
        <div className="w-full h-full absolute bg-black/10 "></div>
        <Image
          className="relative z-50"
          src={"/Common/myLogo.svg"}
          width={100}
          height={100}
          alt="Logo"
        />

        {/* text */}
        <div className="w-full flex flex-col justify-center items-center relative z-50">
          <div className="flex flex-col justify-center items-center">
            <h3 className="lg:text-[36px] md:text-[30px] text-[20px] font-bold text-center">
              Let’s turn your <span className="text-[#A78BFA]">vision</span>
            </h3>
            <h3 className="lg:text-[36px] md:text-[30px] text-[20px] font-bold text-center">
              into <span className="text-[#A78BFA]">reality</span> together
            </h3>
          </div>
        </div>

        {/* Email Copy */}
        <div className="flex justify-center items-center gap-4 bg-white/10 hover:bg-white/20 hover:text-neutral-300 px-6 py-4 rounded-lg relative z-50 transition-all duration-500 ease-in-out cursor-pointer">
          <FaRegCopy className="size-[20px]" />
          <p>yashvishnoi309@gmail.com</p>
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-[55.6%] w-full h-[450px] rounded-2xl border-white cardBgGradiant"></div>
    </div>
  );
};

export default Section2;
