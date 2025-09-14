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
      name: "Vercel",
      icon: "./Home/SkillsIcons/vercel.svg",
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
      name: "Javascript",
      icon: "./Home/SkillsIcons/javascript.svg",
    },
  ];

  return (
    <div className="commonWidth min-h-[600px] flex gap-12 flex-col justify-center items-center rounded-2xl py-4 border border-neutral-800 cardBgGradiant">
      {/* Heading */}
      <div className="w-full flex flex-col juctify-center items-center mt-">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          My Skills
        </p>
        <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
          Tools in My Digital Arsenal
        </h3>
      </div>

      {/* Skills */}
      <div className="w-[65%] flex flex-wrap gap-x-2 gap-y-8 select-none py-4 justify-center items-center border-white">
        {skills.map((item, idx) => {
          return (
            <div
              key={idx}
              className="px-4 py-2 bg-black flex justify-center items-center gap-2 rounded-lg"
            >
              <Image src={item.icon} width={20} height={20} alt="Logo" />

              <p className="text-sm text-white leading-none">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
