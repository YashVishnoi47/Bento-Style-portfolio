"use client";
import React from "react";
import { motion } from "framer-motion";
import EmailCopy from "@/components/ui/CTAButtons/EmailCopy";
import { HiOutlineArrowRight } from "react-icons/hi";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ContactDrawer from "@/components/layout/ContactDrawer";

const Section1demo = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full relative overflow-hidden z-99 flex flex-col gap-6 justify-center items-center rounded-2xl h-[800px] shadow[0_0_30px_rgba(255,255,255,0.2)]"
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

        <h1 className="headingFont  lg:text-[50px]  md:text:[35px] text-[25px] text-center font-bold tex-[#A78BFA]">
          {/* <span className="text-[#A78BFA] italic"> UI/UX </span> */}I craft
          <span className="italic"> stunning</span>{" "}
          <span className="Heading-gradient-text italic font-semibold">
            digital experiences
          </span>
        </h1>

        <h1 className="headingFont  lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold">
          to help{" "}
          <span className="Heading-gradient-text italic font-semibold">
            founders
          </span>{" "}
          bring their vision to life.
        </h1>
      </div>

      {/* Sub heading */}
      <div className="lg:text-[20px] px-4 bg-white/5 backdrop-blur-2xl rounded-lg py-2 md:text-[15px] text-[10px] text-center font-bold  relative z-99 cursor-default ">
        <p className="headingGradiant2">
          Hello, I&apos;m <span className="">Yash Vishnoi</span> a FullStack Web
          Developer & UI/UX Designer
        </p>
      </div>

      {/* CTA */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
        {/* <CTAButton2 text="Lets's Connect" /> */}
        <ContactDrawer use={"nav"} />
        <EmailCopy  />
      </div>
    </motion.section>
  );
};

export default Section1demo;
