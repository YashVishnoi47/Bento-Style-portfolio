"use client";
import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col justify-between items-center bg-black text-white overflow-x-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
          backgroundSize: "10px 10px",
          imageRendering: "pixelated",
        }}
      />

      <div className="w-full relative flex flex-col h-[500px] justify-center items-center">
        <div className="w-full h-full absolute progresiveImage" />
        <div className="w-full flex flex-col justify-center items-center relative z-1 ">
          <p className="text-[18px] font-semibold text-center subHeadingGradiant">
            Feel free to reach out
          </p>
          <h1 className="lg:text-[46px] md:text:[35px] text-[20px] text-center font-bold tex-[#A78BFA]">
            Let&apos;s <span className="text-[#DD88DE]">Work Together</span>
          </h1>
        </div>
      </div>

      <div className="w-full mb-20 mt-20 flex justify-center items-center">
        <Cal
          namespace="30min"
          calLink="yash-vishnoi/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll",backgroundColor:"black" }}
          config={{ layout: "month_view" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
