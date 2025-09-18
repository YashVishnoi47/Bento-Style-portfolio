"use client";
import React, { useRef } from "react";
import CTAButton from "../Common/CTA Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import EmailCopy from "../Common/EmailCopy";

const Section1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainref = useRef(null);

  useGSAP(() => {
    gsap.from(mainref.current, {
      y: 50,
      delay: 1.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".nav",
        start: "top 0%",
      },
    });
  });

  return (
    <div
      ref={mainref}
      className="commonWidth relative mt-[160px] border border-neutral-800 flex flex-col gap-4 justify-center items-center rounded-2xl h-[450px] white-div-inner-shadow"
    >
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
      <div className="mt-6  flex justify-center items-center gap-8">
        <CTAButton text="Work With Me" />
        {/* <EmailCopy /> */}
      </div>
    </div>
  );
};

export default Section1;

// mt-[160px]
