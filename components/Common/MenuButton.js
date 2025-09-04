"use client";
import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useHomePageStore } from "@/stores/HomePageStore";

const MenuButton = () => {
  const { open, setOpen } = useHomePageStore();

  useGSAP(() => {
    if (open) {
      // Opening animation
      gsap.to(".lines-parent", {
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(".line3", {
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(".line3", {
        display: "none",
        duration: 0,
        delay: 0.3,
      });
      gsap.to(".line1", {
        rotate: 50,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.to(".line2", {
        rotate: -50,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });
    } else {
      // Closing animation (reverse)
      gsap.to(".line1", {
        rotate: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(".line2", {
        rotate: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(".line3", {
        display: "block",
        duration: 0,
      });
      gsap.to(".line3", {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.to(".lines-parent", {
        gap: 4,
        justifyContent: "end",
        alignItems: "center",
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, [open]);

  return (
    <div className="w-[33%] h-full lg:hidden flex gap-6 justify-end items-center border-red-500">
      <div
        onClick={() => setOpen(!open)}
        className="lines-parent flex flex-col gap-1 justify-center items-center cursor-pointer"
      >
        <div className="line1 w-8 h-[2.5px] bg-white"></div>
        <div className="line2 w-8 h-[2.5px] bg-white"></div>
        <div className="line3 w-8 h-[2.5px] bg-white"></div>
      </div>
    </div>
  );
};

export default MenuButton;
