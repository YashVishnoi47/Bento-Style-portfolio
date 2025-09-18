import React from "react";
import TemplateCard from "../Common/TemplateCard";

const Section6 = () => {
  const Templates = [
    {
      name: "Template 1",
      subheading:
        "This is subheading this will tell you more about my Templates.",
      link: "https://github.com/yashvishnoi309",
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-[800px] flex gap-12 flex-col justify-center items-center rounded-2xl py-4 border border-neutral-800">
      {/* Heading */}
      <div className="w-full flex flex-col juctify-center items-center">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          Next.Js Templates
        </p>
        <h3 className="md:text-[40px] text-[30px] font-bold text-center headingGradiant">
          Crafted Portfolio Templates for You
        </h3>
      </div>

      {Templates.map((item, idx) => (
        <div className="w-[70%]" key={idx}>
          <TemplateCard item={item} idx={idx} />
        </div>
      ))}
    </div>
  );
};

export default Section6;
