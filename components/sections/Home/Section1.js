"use client";
import React from "react";
import { motion } from "framer-motion";
import EmailCopy from "@/components/ui/CTAButtons/EmailCopy";
import { HiOutlineArrowRight } from "react-icons/hi";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";

const Section1demo = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full relative overflow-hidden z-99 flex flex-col gap-10 justify-center items-center rounded-2xl h-[800px] shadow[0_0_30px_rgba(255,255,255,0.2)]"
    >
      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center relative z-1">
        {/* Tag */}
        <div className="px-4 py-2 relative bg-white/5 backdrop:blur-2xl border border-neutral-800 rounded-lg flex justify-center items-center gap-2 mb-3 select-none cursor-pointer">
          <span className="px-2 text-sm bg-blue-500 text-white  rounded-sm">
            New
          </span>
          <TextShimmer
            duration={2}
            className="text-sm textFont [--base-color:var(--color-white)] [--base-gradient-color:var(--color-black)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
          >
            Snipppet is Live
          </TextShimmer>
          <HiOutlineArrowRight />
        </div>

        <h1 className="headingFont lg:text-[48px] md:text:[35px] text-[20px] text-center font-bold tex-[#A78BFA]">
          I design seamless{" "}
          <span className="text-[#A78BFA] italic"> UI/UX </span>and
        </h1>
        <h1 className="headingFont lg:text-[48px] md:text-[30px] text-[20px] text-center font-bold">
          build <span className="text-[#A78BFA] italic">modern websites</span>{" "}
          that bring ideas to life
        </h1>
      </div>

      {/* Sub heading */}
      <p className="lg:text-[20px]  md:text-[15px] text-[10px] text-center font-semibold  relative z-2 headingGradiant2">
        Hello I&apos;m <span className="">Yash Vishnoi</span> Full Stack Web
        Developer and UI/UX Designer
      </p>

      {/* CTA */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
        {/* <button
          className="relative z-99 hover:bg-white"
          onClick={() => setOpenDialog(!openDialog)}
        >
          Open sheet
        </button> */}

        <CTAButton2 text="Lets's Connect" />

        <EmailCopy />
      </div>
    </motion.div>
  );
};

export default Section1demo;
