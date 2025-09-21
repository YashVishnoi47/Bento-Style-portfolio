"use client";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTAButton = ({ text }) => {
  return (
    <div className="relative w-[180px] h-[50px] rounded-lg bg-white/5 backdrop-blur-lg flex gap-2 justify-center items-center transition-all duration-300 ease-in-out cursor-pointer text-md select-none :scale-110">
      {text}
      <FaArrowRight className="text-white" />
    </div>
  );
};
export default CTAButton;
