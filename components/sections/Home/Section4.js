"use client";
import Image from "next/image";
import React from "react";


const Section4 = () => {
  const skills = [
    {
      name: "React JS",
      icon: "./Home/SkillsIcons/react.svg",
    },
    {
      name: "Next JS",
      icon: "./Home/SkillsIcons/next-js.svg",
    },

    {
      name: "Node JS",
      icon: "./Home/SkillsIcons/node-js.svg",
    },
    {
      name: "Express JS",
      icon: "./Home/SkillsIcons/express.svg",
    },
    {
      name: "Javascript",
      icon: "./Home/SkillsIcons/javascript.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "./Home/SkillsIcons/tailwindcss.svg",
    },
    {
      name: "Python",
      icon: "./Home/SkillsIcons/python.svg",
    },
    {
      name: "Pandas",
      icon: "./Home/SkillsIcons/pandas.svg",
    },
    {
      name: "Numpy",
      icon: "./Home/SkillsIcons/numpy.svg",
    },
    {
      name: "FastAPI",
      icon: "./Home/SkillsIcons/FastAPI.svg",
    },
    {
      name: "Framer Motion",
      icon: "./Home/SkillsIcons/framerMotion.svg",
    },
    {
      name: "Vercel",
      icon: "./Home/SkillsIcons/vercel.svg",
    },
    {
      name: "Render",
      icon: "./Home/SkillsIcons/render.svg",
    },
    {
      name: "MongoDB",
      icon: "./Home/SkillsIcons/mongo.svg",
    },
    {
      name: "Figma",
      icon: "./Home/SkillsIcons/figma.svg",
    },
    {
      name: "Github",
      icon: "./Home/SkillsIcons/github.svg",
    },
    {
      name: "ShadCN",
      icon: "./Home/SkillsIcons/shadcn.svg",
    },
    {
      name: "Socket.io",
      icon: "./Home/SkillsIcons/socket-io.svg",
    },
    {
      name: "Zustang",
      icon: "./Home/SkillsIcons/zustang.svg",
    },
    {
      name: "Clerk",
      icon: "./Home/SkillsIcons/clerk.svg",
    },
    {
      name: "GSAP",
      icon: "./Home/SkillsIcons/gsap.svg",
    },
    {
      name: "Linux",
      icon: "./Home/SkillsIcons/linux.svg",
    },
  ];

  return (
    <div
      id="services"
      className="commonWidth min-h-[700px] flex gap-12 flex-col justify-center items-center rounded-2xl py-4"
    >
      {/* Heading */}
      <div className="w-full flex flex-col juctify-center items-center relative z-99">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          My Skills
        </p>
        <h3 className="md:text-[48px] text-[30px] font-bold text-center">
          Tools in My <span className="text-[#DD88DE]"> Digital Arsenal</span>
        </h3>
      </div>

      {/* Skills */}
      <div className="w-[90%] flex flex-wrap gap-x-6 gap-y-6 py-4 justify-center items-center border-white ">
        {skills.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[100px] h-[100px] hover:-translate-y-2  relative z-99 shrink-0 bg-white/5 backdrop-blur-xl border border-white/15 flex flex-col justify-center items-center gap-4 rounded-lg hover:shadow-md  shadow-white/50 transition-all duration-200 ease-in-out cursor-default"
            >
              <Image src={item.icon} width={30} height={30} alt="Logo" />

              <p className="text-sm text-white text-center leading-none">{item.name}</p>
            </div>
          );
        })}
      </div>

      {/* <CTAButton2 text={"Follow My Learning Journey"} /> */}
    </div>
  );
};

export default Section4;
