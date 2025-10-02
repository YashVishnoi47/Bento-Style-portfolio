import Footer from "@/components/layout/Footer";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import React from "react";

const FeedBack = () => {
  return (
    <div
      className={`w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden`}
    >
      <div className="h-[100vh]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="lg:text-[40px] md:text:[35px] text-[20px] text-[#DD88DE] text-center font-bold">
            This Feature will be available soon...
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedBack;
