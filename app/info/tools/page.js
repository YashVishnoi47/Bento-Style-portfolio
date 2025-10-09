import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div
      className={`w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden `}
    >
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

      <div className="w-full flex flex-col gap-20 justify-center items-center py-10">
        {[
          {
            heading: "AI Tools",
            icons: [
              { image: "/infoBoxes/tools/chatgpt.svg", name: "ChatGPT" },
              { image: "/infoBoxes/tools/github-copilot.svg", name: "Copilot" },
              { image: "/infoBoxes/tools/gemini.svg", name: "Gemini" },
              { image: "/infoBoxes/tools/perplxity.svg", name: "Perplxity" },
              { image: "/infoBoxes/tools/deepseek.svg", name: "Deepseek" },
            ],
          },
          {
            heading: "UI Libraries",
            icons: [
              { image: "/Home/SkillsIcons/shadcn.svg", name: "Shadcn" },
              { image: "/infoBoxes/tools/21st.svg", name: "21st" },
              { image: "/infoBoxes/tools/aceternity.png", name: "Aceternity UI" },
              { image: "/infoBoxes/tools/reactbits.svg", name: "React Bits" },

              ,
            ],
          },
          {
            heading: "Softwares",
            icons: [
              { image: "/infoBoxes/tools/vs code.svg", name: "VS Code" },
              { image: "/infoBoxes/tools/vim.svg", name: "VIM" },
              { image: "/infoBoxes/tools/postman.svg", name: "Postman" },
              { image: "/infoBoxes/tools/notion.svg", name: "Notion" },
              { image: "/Home/SkillsIcons/mongo.svg", name: "Compass" },
              { image: "/Home/SkillsIcons/figma.svg", name: "Figma" },
            ],
          },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="commonWidth flex flex-col gap-10 justify-center items-center"
            >
              <h1 className="lg:text-[40px] md:text:[35px] text-[20px] text-[#ffff] text-center font-semibold">
                {item.heading}
              </h1>
              <div className="w-[80%] flex gap-4 flex-wrap justify-center items-start relative">
                {item.icons.map((icon, idx) => {
                  return (
                    <div
                      key={idx}
                      className="w-[110px] h-[110px]  relative z-99 shrink-0 bg-white/5 backdrop-blur-xl border border-white/15 flex flex-col justify-center items-center gap-4 rounded-lg hover:shadow-md  shadow-white/50 hover:-translate-y-2 transition-all duration-200 ease-in-out cursor-default"
                    >
                      <Image
                        src={icon.image}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                      <span className="text-sm text-white text-center leading-none">
                        {icon.name}
                      </span>
                    </div>
                  );
                })}
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
