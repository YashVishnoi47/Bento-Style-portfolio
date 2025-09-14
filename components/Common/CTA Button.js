"use client";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTAButton = ({ text }) => {
  const a_box = useRef(null);
  const textref = useRef(null);
  const onMouseEnter = () => {
    gsap.to(a_box.current, {
      width: "100%",
      duration: 0.3,
      position: "absolute",
      ease: "power3.out",
    });
    gsap.to(textref.current, {
      opacity: 0,
      x: -10,
      duration: 0.3,
      position: "absolute",
      ease: "power3.out",
    });
  };
  const onMouseLeave = () => {
    gsap.to(a_box.current, {
      width: "30%",
      duration: 0.3,
      position: "relative",
      ease: "power3.out",
    });
    gsap.to(textref.current, {
      opacity: 1,
      delay: 0.03,
      x: 0,
      duration: 0.3,
      position: "relative",
      ease: "power3.out",
    });
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative w-[180px] h-[50px] rounded-lg bg-white/20 flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer text-md select-none p-[px]"
    >
      <div
        ref={textref}
        className="text w-[70%] h-[95%] rounded-lg flex justify-center items-center"
      >
        {text}
      </div>

      <div
        ref={a_box}
        className="a-box border w-[30%] right-0 h-[90%] bg-white rounded-lg flex justify-center items-center"
      >
        <FaArrowRight className="text-black" />
      </div>
    </div>
  );
};
export default CTAButton;
