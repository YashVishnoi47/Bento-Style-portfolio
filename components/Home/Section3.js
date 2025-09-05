import React from "react";
import ProjectCard from "../Common/ProjectCard";

const Section3 = () => {
  const Projects = [
    {
      name: "Project 1",
      subheading:
        "This is subheading this will tell you more about my projects.",
      link: "https://github.com/yashvishnoi309",
      techs: ["Nextjs", "Reactjs", "TailwindCSS"],
    },
    {
      name: "Project 1",
      subheading:
        "This is subheading this will tell you more about my projects.",
      link: "https://github.com/yashvishnoi309",
      techs: ["Nextjs", "Reactjs", "TailwindCSS"],
    },
  ];

  return (
    <div className="commonWidth min-h-[600px] flex gap-12 flex-col justify-center items-center rounded-2xl py-4 border border-neutral-800 cardBgGradiant">
      {/* Heading */}
      <div className="w-full flex flex-col juctify-center items-center">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          My Projects
        </p>
        <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
          The Stuff I’ve Engineered
        </h3>
      </div>

      <div className="w-full flex flex-wrap gap-8 justify-center items-center">
        {Projects.map((item, idx) => (
          <ProjectCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
