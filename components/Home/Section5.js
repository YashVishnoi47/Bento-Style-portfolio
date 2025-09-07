import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Section5 = () => {
  return (
    <div className="commonWidth flex lg:flex-row flex-col justify-between items-center gap-8">
      {/* Left */}
      <div className="lg:w-[57%] w-full min-h-[450px] rounded-2xl p-8 flex flex-col gap-4 border border-neutral-800 cardBgGradiant">
        {/* Heading */}
        <div className="w-full flex flex-col justify-start items-start">
          <p className="text-[12px] font-semibold text-left subHeadingGradiant">
            About me
          </p>
          <h3 className="md:text-[40px] text-[30px] font-bold text-left headingGradiant">
            Behind the Portfolio
          </h3>
        </div>

        {/* Text */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-[#B3B3B3] lg:text-[16px]  text-[15px] w-full">
            I’m Yash, someone who believes growth comes from curiosity and
            consistency. I enjoy creating, exploring new ideas, and finding
            better ways to solve problems—things that keep me excited every day.
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px]  text-[15px] w-full">
            Outside of work, you’ll often find me at the gym, brainstorming
            fresh ideas, or relaxing and watching anime. Keeping that balance
            between learning and living helps me stay motivated and creative.
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px]  text-[15px] w-full">
            At my core, I value simplicity, honesty, and meaningful connections.
            Beyond the portfolio, that’s the real me.
          </p>
        </div>

        {/* Social Icons */}
        <div className="w-full flex justify-center items-center gap-2 px-1 mt-4">
          <div className="w-1/2 flex gap-3">
            <FaGithub className="size-5 cursor-pointer" />
            <FaXTwitter className="size-5 cursor-pointer" />
            <FaInstagram className="size-5 cursor-pointer" />
          </div>

          <div className="w-1/2 flex justify-end px-2 items-center gap-2">
            <p className="text-[#B3B3B3] flex justify-center items-center text-[16px] cursor-pointer">
              Know more
            </p>
            <FaArrowRight className="text-[#B3B3B3]" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-[40%] w-full min-h-[450px] rounded-2xl flex flex-col justify-center items-center gap-8 border border-neutral-600"></div>
    </div>
  );
};

export default Section5;
