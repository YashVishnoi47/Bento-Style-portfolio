import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Tilt } from "@/components/motion-primitives/tilt";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import React from "react";
import ProjectSection1 from "@/components/sections/Projects/ProjectSection1";

const Projects = () => {
  const Projects = [
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
  ];
  return (
    <div className="w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden">
      <CursorFollower />

      <div className="w-full relative flex flex-col justify-center items-center">
        <div className="w-full h-full absolute progresiveImage"></div>
        <ProjectSection1 />
      </div>

      
      {/* Projects */}
      <div className="commonwidth flex py-20 relative flex-wrap justify-center items-center gap-18">
        {/* Projects */}
        {Projects.map((item, idx) => (
          <Tilt
            className="min-h-[350px] project-target lg:w-[40%] w-full"
            key={idx}
            rotationFactor={4}
            isRevese
          >
            <div
              key={idx}
              className="w-full flex flex-col gap-8 justify-center items-center relative rounded-2xl hover:shdow-md border border-black hover:border-[#2B2B2B] cursor-pointer hover:shadow-xl shadow-white/20 transition-all duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="w-[100%] h-[350px] p-4">
                {/* <Image
                    className="rounded-2xl shadow-[0_8px_20px_rgba(254,254,254,_0.2)]"
                    src={item.image}
                    width={600}
                    height={600}
                    alt="icon"
                  /> */}
                <div className="w-full h-full bg-white/20 rounded-2xl"></div>
              </div>

              {/* Heading and  subheading */}
              <div className="w-[100%] justify-center items-start px-6 py-6 gap-4 flex flex-col">
                {/* Heading */}
                <div className="px-4 py-2 font-bold text-sm bg-white/20 rounded-lg">
                  <TextShimmer
                    duration={2}
                    className="text-sm [--base-color:var(--color-white)] [--base-gradient-color:var(--color-black)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
                  >
                    {item.name}
                  </TextShimmer>
                </div>

                {/* Subheading */}
                <div className="w-[80%] flex flex-col gap-4 justify-center items-center">
                  <p className="md:text-[16px] text-xs font-semibold text-start subHeadingGradiant">
                    {item.subheading}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
