"use client";
import React from "react";
import CTAButton from "../Common/CTAButtons/CTA Button";
import EmailCopy from "../Common/CTAButtons/EmailCopy";
import { Tilt } from "../motion-primitives/tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton2 from "../Common/CTAButtons/CTAButton2";

const Section1 = () => {
  return (
    <Tilt
      className="commonWidth"
      rotationFactor={2}
      isRevese
      springOptions={40}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full relative mt-[160px] border-neutral-800 flex flex-col gap-8 justify-center items-center rounded-2xl h-[520px] shadow[0_0_30px_rgba(255,255,255,0.2)] border select-none"
      >
        {/* <div className="w-full h-full absolute z-0 bg-white/0.5 backdrop-blur-md rounded-2xl"></div> */}
        <div
   className="absolute inset-0 z-0"
   style={{
     background: `
       radial-gradient(ellipse 140% 50% at 15% 60%, rgba(124, 58, 237, 0.11), transparent 48%),
       radial-gradient(ellipse 90% 80% at 85% 25%, rgba(245, 101, 101, 0.09), transparent 58%),
       radial-gradient(ellipse 120% 65% at 40% 90%, rgba(34, 197, 94, 0.13), transparent 52%),
       radial-gradient(ellipse 100% 45% at 70% 5%, rgba(251, 191, 36, 0.07), transparent 42%),
       radial-gradient(ellipse 80% 75% at 90% 80%, rgba(168, 85, 247, 0.10), transparent 55%),
       #000000
     `,
   }}
 />

        {/* Heading */}
        <div className="w-full flex flex-col justify-center items-center relative z-1 mt-">
          {/* Tag */}
          {/* <div className="px-4 py-1 bg-white/5 backdrop:blur-2xl border border-neutral-800 rounded-full flex gap-2 mb-3">
            <Image
              src="/Common/Dual ring loading.svg"
              width={15}
              height={15}
              alt="icon"
            />
            <span className="text-sm text-neutral-300">

            In Progress...
            </span>
          </div> */}

          <h1 className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black text-[#A78BFA]">
            I am Yash Vishnoi👋
          </h1>
          <h1 className="lg:text-[40px] md:text-[30px] text-[20px] text-center font-bold">
            Full Stack Web Developer and UI/UX Desginer
          </h1>
        </div>

        {/* Sub heading */}
        <p className="lg:text-[20px] md:text-[15px] text-[10px] text-center font-semibold  relative z-2 subHeadingGradiant">
          Collaborate with me to transform your vision into a tangible reality.
        </p>

        {/* CTA */}
        <div className="mt- flex justify-center items-center gap-4">
          {/* <CTAButton text="Work With Me" /> */}
          <CTAButton2 text="Lets's Connect" />
          <EmailCopy />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Section1;

// mt-[160px]

<div className="min-h-screen w-full bg-black relative">
 {/* Stellar Mist */}
 
 {/* Your Content/Components */}
</div>