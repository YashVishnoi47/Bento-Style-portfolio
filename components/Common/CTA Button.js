import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CTAButton = ({ text }) => {
  return (
    <div className="px-6 py-3 rounded-lg bg-white/20 lg:hover:bg-neutral-900 active:bg-neutral-900 flex justify-center items-center gap-2 transition-all duration-300 ease-in-out cursor-pointer text-md select-none ">
      {text}
      <FaArrowRight />
    </div>
  );
};

export default CTAButton;
