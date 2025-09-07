"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useGSAP } from "@gsap/react";

const SmallNavbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".SmNav",
        start: "50% 0%",
        end: "bottom 100%",
        scrub: 1,
      },
    });

    tl.to(".SmNav", {
      display: "flex",
    });

    tl.to(".SmNav", {
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <div className="SmNav hidden opacity-0 fixed z-50 justify-center items-center px-6 py-2 mt-6 rounded-lg bg-white/10 backdrop-blur-lg">
      {["Home", "About", "Projects", "Services"].map((item, idx) => (
        <p
          className="font-medium cursor-pointer px-4 py-2.5 flex justify-center items-center transition-all duration-300 ease-in-out rounded-lg hover:bg-neutral-900 border-white select-none"
          key={idx}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SmallNavbar;
