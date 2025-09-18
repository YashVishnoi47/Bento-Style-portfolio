"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaRegCopy } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import EmailCopy from "../Common/EmailCopy";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".sec2ref", {
      y: 50,
      delay: 2.5,
      opacity: 0,
      duration: 1,
      stagger: 1,
      // scrollTrigger: {
      //   trigger: ".sec2ref",
      //   start: "top 0%",

      // },
    });
  }, []);

  return (
    <div className="commonWidth flex lg:flex-row flex-col justify-between items-center gap-8">
      {/* Left */}
      <div className="sec2ref lg:w-[40%] w-full h-[450px] rounded-2xl flex flex-col justify-center items-center bgCardImage gap-8 relative white-div-inner-shadow2">
        <div className="w-full h-full absolute bg-black/10 "></div>
        <Image
          className="relative z-50"
          src={"/Common/myLogo.svg"}
          width={100}
          height={100}
          alt="Logo"
        />

        {/* text */}
        <div className="w-full flex flex-col justify-center items-center relative z-50">
          <div className="flex flex-col justify-center items-center">
            <h3 className="lg:text-[36px] md:text-[30px] text-[20px] font-bold text-center">
              Let’s turn your <span className="text-[#A78BFA]">vision</span>
            </h3>
            <h3 className="lg:text-[36px] md:text-[30px] text-[20px] font-bold text-center">
              into <span className="text-[#A78BFA]">reality</span> together
            </h3>
          </div>
        </div>

        {/* Email Copy */}
        <EmailCopy />
      </div>

      {/* Right */}
      <div className="sec2ref lg:w-[57%] w-full h-[450px] rounded-2xl border border-neutral-800 cardBgGradiant"></div>
    </div>
  );
};

export default Section2;
