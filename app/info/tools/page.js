import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div
      className={`w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden`}
    >

      {/* Text and upperpart */}
      <div className="w-full h-[70vh] relative flex justify-centre items-center">
        <div className="w-full h-full absolute progresiveImage"></div>
        <div className="w-full flex flex-col gap-2 justify-center items-center relative z-1 ">
          <h1 className="lg:text-[46px] md:text:[35px] text-[20px] text-center font-bold tex-[#A78BFA]">
            My Digital <span className="text-[#DD88DE]">Toolbox</span>
          </h1>
          <p className="text-[14px] font-semibold text-center subHeadingGradiant">
            Tools that power the journey from idea to creation.
          </p>
        </div>
      </div>

      <h1 className="lg:text-[40px] md:text:[35px] text-[20px] text-[#ffff] text-center font-semibold">
        Tools 
      </h1>
      <div className="w-[70%] mb-100 flex gap-4 flex-wrap justify-center items-start relative">
        {[
          "/infoBoxes/tools/vs code.svg",
          "/infoBoxes/tools/pycharm.svg",
          "/infoBoxes/tools/notion.svg",
          "/infoBoxes/tools/postman.svg",
          "/infoBoxes/tools/spotify.svg",
          "/infoBoxes/tools/react scan.svg",
          "/infoBoxes/tools/chatgpt.svg",
          "/infoBoxes/tools/claude.svg",
          "/infoBoxes/tools/googleCalender.svg",
          "/Home/SkillsIcons/figma.svg",
          "/Home/SkillsIcons/github.svg",
          "/Home/SkillsIcons/shadCn.svg",
          "/Home/SkillsIcons/vercel.svg",
          "/Home/SkillsIcons/render.svg",
          //   "",
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[100px] h-[100px] flex flex-col border-2 border-neutral-800 items-center justify-center gap-4 rounded-xl bg-white/10 hover:-translate-y-3 hover:shadow-md shadow-white/50 transition-all duration-300 ease-in-out "
            >
              <div className="w-[90%] h-[90%] bg-black rounded-xl flex justify-center items-center">
                <Image src={item} width={40} height={40} alt="icon" />
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
