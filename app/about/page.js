import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import React from "react";
import AboutSection1 from "@/components/sections/About/AboutSection1";

const About = () => {
  return (
    <div className="w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden">
      <div className="w-full h-[70vh] relative flex flex-col justify-center items-center">
        <div className="w-full h-full absolute progresiveImage"></div>
        <div className="w-[50%] flex flex-col justify-center items-center relative z-1 ">
          <p className="text-[18px] font-semibold text-center subHeadingGradiant">
            Know more
          </p>
          <h1 className="lg:text-[46px] md:text:[35px] text-[20px] text-center font-bold tex-[#A78BFA]">
            Unveiling the Story{" "}
            <span className="text-[#DD88DE]">Behind My Portfolio</span>
          </h1>
        </div>
      </div>
      <CursorFollower />

      <AboutSection1 />

      <Footer />
    </div>
  );
};

export default About;
