import React from "react";
import CTAButton from "../Common/CTA Button";

const Section1 = () => {
  return (
    <div className="commonWidth border border-neutral-800 flex flex-col gap-4 justify-center items-center rounded-2xl h-[450px]">
      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black text-[#A78BFA]">
          I am Yash Vishnoi👋
        </h1>
        <h1 className="lg:text-[40px] md:text-[30px] text-[20px] text-center font-bold">
          Full Stack Web Developer and UI/UX Desginer
        </h1>
      </div>

      {/* Sub heading */}
      <p className="lg:text-[20px] md:text-[15px] text-[10px] text-center font-semibold subHeadingGradiant">
        Let's Work togheter and turn your idea into reality.
      </p>

      {/* CTA */}
      <div className="mt-6">
        <CTAButton text="Let's Connect" />
      </div>
    </div>
  );
};

export default Section1;
