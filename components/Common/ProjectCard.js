import Image from "next/image";
import React from "react";

const ProjectCard = ({ item, idx }) => {
  return (
    <div
      key={idx}
      className="w-[532px] h-[360px] flex flex-col gap-4 justify-center items-center border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 ease-in-out cursor-pointer cardBgRadialGradiant"
    >
      {/* Heading and Subheading */}
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <h4 className="md:text-[32px] text[24px] font-bold text-center">
          {item.name}
        </h4>
        <p className="md:text-[16px] text-[12px] font-semibold text-center">
          {item.subheading}
        </p>
      </div>

      {/* Techs used */}
      <div className="w-full flex gap-2 justify-center items-center">
        {item.techs.map((item, idx) => {
          return (
            <div
              key={idx}
              className="text-xs text-bold flex justify-center items-center gap-2 bg-black/50 hover:bg-black/20 px-2 py-2 select-none rounded-lg transition-all dura2ion-300 ease-in-out text-center"
            >
              <Image src={item.icon} width={15} height={15} alt="icon" />
              {item.name}
            </div>
          );
        })}
      </div>

      {/* Image */}
      <div className="w-[60%] h-1/2 rounded-2xl bg-black border border-white/20 shrink-0"></div>
    </div>
  );
};

export default ProjectCard;
