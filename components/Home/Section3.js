"use client";
import React from "react";
import { LuFlower } from "react-icons/lu";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const Projects = [
    {
      name: "Project 1",
      subheading:
        "This is subheading this will tell you more about my projects.",
      link: "https://github.com/yashvishnoi309",
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      name: "Project 1",
      subheading:
        "This is subheading this will tell you more about my projects.",
      link: "https://github.com/yashvishnoi309",
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
  ];

  return (
    <div className="commonWidth flex flex-col justify-center items-center gap-10">
      {/* Main Heading */}
      <div className="w-full flex flex-col justify-center items-center border border-neutral-800 py-4 rounded-md cardBgGradiant">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          My Projects
        </p>
        <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
          The Stuff I’ve Engineered
        </h3>
      </div>

      {/* 1st row */}
      <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-8">
        {/* Left */}
        <div className="lg:w-[57%] w-full min-h-[450px] rounded-2xl p-8 flex justify-between items- flex-col border border-neutral-800 cardBgGradiant relative">
          {/* Heading */}
          <div className="w-full flex flex-col justify-start items-start">
            <p className="text-[12px] font-semibold text-left subHeadingGradiant">
              🚀 Project 1
            </p>
            <h3 className="md:text-[40px] text-[30px] font-bold text-left headingGradiant">
              Snipppet
            </h3>
          </div>

          {/* Text */}
          <div className="w-full flex flex-col gap-4">
            <p className="text-[#B3B3B3] lg:text-[16px] text-[15px] w-full">
              Snippet is a collaborative code editor that allows you to code in
              real-time with your friends, making it easy to share ideas and
              work together on projects.
            </p>
            {/* Features */}
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 justify-start items-center"
                >
                  <LuFlower className="text-[#fff] font-light" />
                  <p className="text-[#fff] lg:text-[16px]  text-[15px] w-full">
                    This is Feature - {item} and this is awesome.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Icons */}
          <div className="w-full flex flex-wrap gap-2 justify-start items-center mt-">
            {[
              { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
              { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
              {
                name: "TailwindCSS",
                icon: "./Home/SkillsIcons/tailwindcss.svg",
              },
              {
                name: "Socket.IO",
                icon: "./Home/SkillsIcons/socket-io.svg",
              },
              {
                name: "Vercel",
                icon: "./Home/SkillsIcons/vercel.svg",
              },
            ].map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="text-xs text-bold flex justify-center items-center gap-2 bg-white/5 hover:bg-black/20 px-4 py-2 select-none rounded-lg transition-all dura2ion-300 ease-in-out text-center shrink-0"
                >
                  <Image src={item.icon} width={15} height={15} alt="icon" />
                  {item.name}
                </div>
              );
            })}
          </div>

          {/* Cta Button */}
          <div className="w-[100%] min-h-14 flex justify-center items-center rounded-2xl border border-neutral-800  relative white-div-inner-shadow2 cursor-pointer hover:bg-[#6E6E6E]/10 transition-all duration-300 ease-in-out">
            <div className="w-full h-full absolute bg-[#6E6E6E]/10 backdrop-blur-xs z-0 " />

            <span className="font-mono text-center text-sm relative flex  justify-center items-center z-1 select-none gap-2">
              Know more
              <FaArrowRight />
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="sec2ref lg:w-[40%] w-full h-[450px] rounded-2xl flex flex-col justify-center items-center  gap-8 relativeb border border-neutral-800 white-div-inner-shadow2"></div>
      </div>

      {/* 2nd row */}
      <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-8">
        {/* Left */}
        <div className="sec2ref lg:w-[40%] w-full h-[450px] rounded-2xl flex flex-col justify-center items-center  gap-8 relativeb border border-neutral-800 white-div-inner-shadow2"></div>

        {/* Right */}
        <div className="lg:w-[57%] w-full min-h-[450px] rounded-2xl p-8 flex justify-between items- flex-col border border-neutral-800 cardBgGradiant relative">
          {/* Heading */}
          <div className="w-full flex flex-col justify-start items-start">
            <p className="text-[12px] font-semibold text-left subHeadingGradiant">
              🚀 Project 2
            </p>
            <h3 className="md:text-[40px] text-[30px] font-bold text-left headingGradiant">
              Snipppet
            </h3>
          </div>

          {/* Text */}
          <div className="w-full flex flex-col gap-4">
            <p className="text-[#B3B3B3] lg:text-[16px] text-[15px] w-full">
              Snippet is a collaborative code editor that allows you to code in
              real-time with your friends, making it easy to share ideas and
              work together on projects.
            </p>
            {/* Features */}
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 justify-start items-center"
                >
                  <LuFlower className="text-[#fff] font-light" />
                  <p className="text-[#fff] lg:text-[16px]  text-[15px] w-full">
                    This is Feature - {item} and this is awesome.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Icons */}
          <div className="w-full flex flex-wrap gap-2 justify-start items-center mt-">
            {[
              { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
              { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
              {
                name: "TailwindCSS",
                icon: "./Home/SkillsIcons/tailwindcss.svg",
              },
              {
                name: "Socket.IO",
                icon: "./Home/SkillsIcons/socket-io.svg",
              },
              {
                name: "Vercel",
                icon: "./Home/SkillsIcons/vercel.svg",
              },
            ].map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="text-xs text-bold flex justify-center items-center gap-2 bg-white/5 hover:bg-black/20 px-4 py-2 select-none rounded-lg transition-all dura2ion-300 ease-in-out text-center shrink-0"
                >
                  <Image src={item.icon} width={15} height={15} alt="icon" />
                  {item.name}
                </div>
              );
            })}
          </div>

          {/* Cta Button */}
          <div className="w-[100%] min-h-14 flex justify-center items-center rounded-2xl border border-neutral-800  relative white-div-inner-shadow2 cursor-pointer hover:bg-[#6E6E6E]/10 transition-all duration-300 ease-in-out">
            <div className="w-full h-full absolute bg-[#6E6E6E]/10 backdrop-blur-xs z-0 " />

            <span className="font-mono text-center text-sm relative flex  justify-center items-center z-1 select-none gap-2">
              Know more
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;




// {/* Heading */}
// <div className="w-full flex flex-col juctify-center items-center">
//   <p className="text-[12px] font-semibold text-center subHeadingGradiant">
//     My Projects
//   </p>
//   <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
//     The Stuff I’ve Engineered
//   </h3>
// </div>

// {/* Project cards */}
// <div className="w-full flex flex-wrap gap-8 justify-center items-center">
//   {Projects.map((item, idx) => (
//     <ProjectCard key={idx} item={item} idx={idx} />
//   ))}
// </div>
