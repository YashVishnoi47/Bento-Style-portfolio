import React from "react";

const Section4 = () => {
  return (
    <div className="commonWidth min-h-[600px] flex gap-12 flex-col justify-center items-center rounded-2xl py-4 border border-neutral-800 cardBgGradiant">
      {/* Heading */}
      <div className="w-full flex flex-col juctify-center items-center">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          My Skills
        </p>
        <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
          Tools in My Digital Arsenal
        </h3>
      </div>

      <div className="w-[70%] h-[400px] border-2 border-white"></div>
    </div>
  );
};

export default Section4;
