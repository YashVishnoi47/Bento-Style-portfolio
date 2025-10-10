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
import { FooterLink } from "../ui/CTAButtons/FooterLink";
import { LampContainer } from "../ui/lamp";
import ContactDrawer from "./ContactDrawer";

const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1530px] flex justify-center items-center overflow-hidden">
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
        {/* Heading and logo */}
        <div className="commonWidth boder border-neutral-800 shadow[0_0_30px_0_rgba(255,255,255,0.1)] rounded-2xl h-[600px] flex flex-col gap-12 justify-center items-center mt-20 relative">
          {/* Logo */}
          <Image
            className="relative z-50"
            src={"/Common/My logo white.svg"}
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

          <ContactDrawer use={"foot"} />
        </div>

        {/* Blur Box (info) */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="commonWidth mt-8 w-full h-[350px] flex flex-col justify-between items-center border--800 rounded-lg relative"
        >
          <div className="w-full h-full absolute z-0 bg-[#ffff]/2 backdrop-blur-sm" />

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
                <p className="text-sm w-[70%] text-left text-[#eeeeee]">
                  I&apos;m Yash Vishnoi - a full Stack Web Developer and UI/UX
                  designer. Thanks for checking out my site!
                </p>

                <p className="text-sm w-[70%] mt-2 text-left text-[#b6b6b6]">
                  Open for Remote internships and freelance projects.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="h-full w-[45%] flex justify-between items-center py-2">
              <div className="w-[30%] h-full flex flex-col justify-center items-start">
                <p className="text-lg text-left font-mono mb-4">General</p>
                {["Home", "About", "Projects", "Services"].map((item, idx) => {
                  return <FooterLink key={idx} item={item} />;
                })}
              </div>

              <div className="w-[30%] h-full flex flex-col justify-center items-start">
                <p className="text-lg text-left font-mono mb-4">Specifics</p>
                {["ToolBox", "Leave a Message", "Know More", "Watching"].map(
                  (item, idx) => {
                    return <FooterLink key={idx} item={item} />;
                  }
                )}
              </div>

              <div className="w-[30%] h-full flex flex-col justify-start items-start">
                <p className="text-lg text-left font-mono mb-4">More</p>
                {["Chat with me", "Links"].map((item, idx) => {
                  return <FooterLink key={idx} item={item} />;
                })}
              </div>
            </div>
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
    </footer>
  );
};

export default Footer;
