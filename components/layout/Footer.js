"use client";
import Image from "next/image";
import React from "react";
import CTAButton from "../ui/CTAButtons/CTA Button";
import { Magnetic } from "../motion-primitives/magnetic";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CTAButton2 from "../ui/CTAButtons/CTAButton2";
import { Tilt } from "../motion-primitives/tilt";
import InfoBoxes from "../sections/Home/InfoBoxes";

const Footer = () => {
  return (
    <div className="relative w-full max-w-[1530px] flex justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
        `,
        }}
      />
      {/* Main content */}
      <div className="h-full w-full flex flex-col justify-between items-center relative z-99 gap-4">
        {/* Info boxes */}
        <div className="w-full relative flex flex-col gap-10 mt-50 z-99 justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <p className="textFont text-[14px] font-semibold text-left subHeadingGradiant">
              Check this out
            </p>
            <h3 className="headingFont md:text-[48px] w-[40%] text-[30px] font-bold text-center">
              <span className="text-[#DD88DE]">Explore and discover </span>more
              about the <span className="text-[#DD88DE]"> real me</span>
            </h3>
          </div>
          <InfoBoxes />
        </div>

        {/* Heading and logo */}
        <Tilt
          className="w-full flex justify-center items-center"
          rotationFactor={0}
          isRevese
        >
          <div className="commonWidth border border-neutral-800 shadow[0_0_30px_0_rgba(255,255,255,0.1)] bg-white/2 backdrop-blur-lg rounded-2xl h-[600px] flex flex-col gap-12 justify-center items-center mt-5 relative">
            {/* Logo */}
            <Image
              className="relative z-50"
              src={"/Common/final logo2.svg"}
              width={120}
              height={120}
              alt="Logo"
            />
            {/* Heading */}
            <div className="w-full flex flex-col justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black"
              >
                Transforming your Ambitious Vision Into
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:text-[40px] md:text-[30px] text-[20px] text-center font-black"
              >
                {/* your next <span className="text-[#A78BFA]">project</span> starts
              here */}
                <span className="text-[#DD88DE]">Powerful </span>&
                <span className="text-[#DD88DE]"> Scalable Webapps</span>
              </motion.h1>
            </div>

            {/* <Magnetic intensity={0.6} range={400}>
            </Magnetic> */}
            <CTAButton2 text={"Chat With Yash"} />
          </div>
        </Tilt>

        {/* Blur Box (info) */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="commonWidth mt-8 w-full h-[350px] flex flex-col justify-between items-center border--800 rounded-lg relative"
        >
          <div className="w-full h-full absolute z-0 bg-[#6E6E6E]/10 backdrop-blur-sm" />

          {/* Top */}
          <div className="w-full h-[80%] flex justify-between items-center relative z-90 p-4">
            {/* Left */}
            <div className="h-full w-[40%] flex gap-2 flex-col justify-start items-start">
              {/* Logo */}
              <Image
                className="relative z-50"
                src={"/Common/mylognobg.svg"}
                width={70}
                height={70}
                alt="Logo"
              />

              {/* Text */}
              <div className="flex justify-center items-start flex-col gap-2 ml-4">
                {/* <h4 className="text-3xl font-bold text-left ">Yash Vishnoi</h4> */}
                <p className="text-sm w-[70%] text-left text-[#eeeeee]">
                  I'm Yash Vishnoi - a full Stack Web Developer and UI/UX
                  designer. Thanks for checking out my site!
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="h-full w-1/2 flex justify-center items-center"></div>
          </div>

          {/* Bottom */}
          <div className="w-full h-[20%] flex justify-start items-center relative z-90 bg-black/50 px-4">
            <p className="text-sm text-left flex gap-2 justify-start items-center w-1/2 text-[#b6b6b6]">
              &copy; 2025 Yash Vishnoi. All rights reserved.
            </p>

            <div className="text-sm text-left w-1/2 text-[#b6b6b6] flex justify-end items-center gap-2">
              {[
                {
                  icon: (
                    <FaLinkedinIn
                      size={15}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
                  name: "LinkedIn",
                },
                {
                  icon: (
                    <FaGithub
                      size={15}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://github.com/YashVishnoi47",
                  name: "Github",
                },
                {
                  icon: (
                    <FaXTwitter
                      size={15}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://x.com/Yash_Vishnoi7",
                  name: "Twitter",
                },
              ].map((item, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger>
                    <Link
                      className="flex justify-center items-center gap-2 rounded-sm bg-white/5 px-2 py-1"
                      href={item.link}
                      target="_blank"
                    >
                      <span className="text-xs">{item.name}</span>
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className={"relative z-99 mb-2"}>
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
