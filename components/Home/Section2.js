"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaRegCopy } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import EmailCopy from "../Common/EmailCopy";
import { TextLoop } from "../motion-primitives/text-loop";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   gsap.from(".sec2ref", {
  //     y: 50,
  //     delay: 2.5,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 1,
  //     // scrollTrigger: {
  //     //   trigger: ".sec2ref",
  //     //   start: "top 0%",

  //     // },
  //   });
  // }, []);

  const imageLogos = [
    {
      name: "Pytorch",
      src: "/Home/MoreSkillsIcon/pytorch.svg",
      alt: "Company 1",
    },
    {
      name: "Tensorflow",
      src: "/Home/MoreSkillsIcon/tensorflow.svg",
      alt: "Company 1",
    },
    {
      name: "Pandas",
      src: "/Home/SkillsIcons/pandas.svg",
      alt: "Company 3",
    },
    {
      name: "Kaggle",
      src: "/Home/MoreSkillsIcon/kaggle.svg",
      alt: "Company 3",
    },
  ];

  const imageLogos2 = [
    {
      name: "Pytorch",
      src: "/Home/SkillsIcons/vercel.svg",
      alt: "Company 1",
    },
    {
      name: "AWS",
      src: "/Home/MoreSkillsIcon/aws.svg",
      alt: "Company 2",
    },
    {
      name: "Typescript",
      src: "/Home/MoreSkillsIcon/typescript.svg",
      alt: "Company 2",
    },
    {
      name: "TailwindCSS",
      src: "/Home/SkillsIcons/tailwindcss.svg",
      alt: "Company 3",
    },
  ];

  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // get width of the wrapper
      const totalWidth = sliderRef.current.scrollWidth / 2; // half because we duplicate

      gsap.to(sliderRef.current, {
        x: `-${totalWidth}`, // move entire container left
        duration: 15, // adjust speed
        ease: "linear",
        repeat: -1, // infinite
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // reset seamlessly
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // get width of the wrapper
      const totalWidth = sliderRef2.current.scrollWidth / 2; // half because we duplicate

      gsap.to(sliderRef2.current, {
        x: `+${totalWidth}`, // move entire container left
        duration: 15, // adjust speed
        ease: "linear",
        repeat: -1, // infinite
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // reset seamlessly
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount
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
      <div className="sec2ref flex flex-col justify-between items-center py-4 lg:w-[57%] w-full h-[450px] rounded-2xl border border-neutral-800 cardBgGradiant overflow-hidden">
        {/* Heading */}
        <div className="w-full flex justify-center items-center">
          <h5 className="w-[70%] lg:text-[35px] md:text:[30px] text-[20px] text-center font-bold headingGradiant2">
            Psssinate about learning new Technologies
          </h5>
        </div>

        {/* Logos */}
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* Slider 1 */}
          <div
            ref={sliderRef}
            className="w-full flex justify-start items-center gap-4"
          >
            {[
              ...imageLogos,
              ...imageLogos,
              ...imageLogos,
              ...imageLogos,
              ...imageLogos,
              ...imageLogos,
            ].map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="logo-item flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-black cursor-default select-none shrink-0"
                >
                  <span className="text-xs">{item.name}</span>
                  <Image src={item.src} width={20} height={20} alt={item.alt} />
                </div>
              );
            })}
          </div>

          {/* Slider 2 */}
          <div
            ref={sliderRef2}
            className="w-full flex justify-end items-center gap-4"
          >
            {[
              ...imageLogos2,
              ...imageLogos2,
              ...imageLogos2,
              ...imageLogos2,
              ...imageLogos2,
              ...imageLogos2,
            ].map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="logo-item2 flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-black cursor-default select-none shrink-0"
                >
                  <span className="text-xs">{item.name}</span>
                  <Image src={item.src} width={20} height={20} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Last box */}
        <div className="w-[80%] min-h-20 flex justify-center items-center rounded-2xl border border-neutral-800  relative bgCardImage white-div-inner-shadow2">
          <div className="w-full h-full absolute bg-[#6E6E6E]/10 backdrop-blur-xs z-0 " />

          <span className="font-mono text-center text-sm relative z-1 cursor-default select-none">
            Websites that work smart, look sharp, and scale fast.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section2;
