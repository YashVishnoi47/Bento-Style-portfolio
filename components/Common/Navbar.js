"use client";
import React, { useRef } from "react";
import CTAButton from "./CTA Button";
import MenuButton from "./MenuButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useHomePageStore } from "@/stores/HomePageStore";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { open } = useHomePageStore();
  const NavbarRef = useRef(null);
  const MObNavbarRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (open) {
      tl.to(NavbarRef.current, {
        height: "350px",
        flexDirection: "column",
        ease: "power3.out",
        duration: 0.5,
      });

      tl.to(".navsection-1", {
        height: "100px",
      });

      gsap.to(".navsection-2", {
        display: "flex",
      });
    } else {
      gsap.to(".navsection-2", {
        display: "none",
      });

      tl.to(".navsection-1", {
        height: "full",
      });
      tl.to(NavbarRef.current, {
        height: "100px",
        // flexDirection: "row",
        ease: "power3.out",
        duration: 0.5,
      });
    }
  }, [open]);

  return (
    <div
      ref={NavbarRef}
      className="nav fixed z-95 h-[100px] mt-5 commonWidth px-[35px] flex justify-between items-center rounded-2xl bg-white/5 border-neutral-800 backdrop-blur-2xl"
    >
      <div className="navsection-1 w-full h-full flex justify-between items-center">
        {/* Left Section */}
        <div className="navAni-1 lg:w-[33%] w-[50%] h-full gap-4 flex justify-start items-center  border-red-500">
          {/* Image */}
          <div className="w-16 h-16 rounded-full bg-neutral-400 shrink-0 cursor-pointer"></div>

          {/* Name */}
          <h1 className="lg:text-2xl md:text-xl text-md text-sm  font-black  cursor-pointer">
            Yash Vishnoi
            {/* Lorem Spam */}
          </h1>
        </div>

        {/* Middle Section */}
        <div className="navAni-1 w-[33%] h-full hidden lg:flex justify-center items-center  border-red-500">
          <div
            ref={MObNavbarRef}
            className="flex justify-center items-center px-6 py-2 bg--800 rounded-lg "
          >
            {["Home", "About", "Projects", "Services"].map((item, idx) => (
              <p
                className="font-medium cursor-pointer px-4 py-2.5 flex justify-center items-center transition-all duration-300 ease-in-out rounded-lg hover:bg-neutral-800 border-white select-none"
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="navAni-1 w-[33%] h-full hidden lg:flex gap-6 justify-end items-center border-red-500">
          {/* <MdOutlineDarkMode className="text-white text-2xl rounded-full cursor-pointer" /> */}
          <CTAButton text={"Work with me"} />
        </div>

        <MenuButton />
      </div>

      <div className="navsection-2 w-full h-full hidden flex-col justify-center items-center gap-4">
        {["Home", "About", "Projects", "Services"].map((item, idx) => (
          <p
            className="mobnavlinks font-medium cursor-pointer w-full py-2 px-4 flex justify-start items-center transition-all duration-300 ease-in-out rounded-lg hover:bg-neutral-800 border-white select-none"
            key={idx}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
