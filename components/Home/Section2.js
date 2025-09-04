import Image from "next/image";
import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="commonWidth h-[450px] border-neutral-200 flex justify-center items-center gap-8 rounded-2xl">
      {/* Left */}
      <div className="w-[536px] h-full rounded-2xl flex flex-col justify-center items-center bgCardImage gap-8">
        <Image src={"/Common/myLogo.svg"} width={100} height={100} alt="Logo" />

        {/* text */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className=" text-[36px] font-bold">
              Let’s turn your <span className="text-[#A78BFA]">vision</span>
            </h3>
            <h3 className="text-[36px] font-bold">
              into <span className="text-[#A78BFA]">reality</span> together
            </h3>
          </div>
        </div>

        {/* Email Copy */}
        <div className="flex justify-center items-center gap-4 bg-white/10 hover:bg-white/20 hover:text-neutral-300 px-6 py-4 rounded-lg transition-all duration-500 ease-in-out cursor-pointer">
          <FaRegCopy className="size-[20px]" />
          <p>yashvishnoi309@gmail.com</p>
        </div>
      </div>



      

      {/* Right */}
      <div className="w-[745px] border-white h-full rounded-2xl cardBgGradiant"></div>
    </div>
  );
};

export default Section2;
