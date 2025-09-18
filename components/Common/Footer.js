import Image from "next/image";
import React from "react";
import CTAButton from "./CTA Button";
import { Magnetic } from "../motion-primitives/magnetic";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <div className="relative commonWidth flex justify-center items-center overflow-hidden mt-10">
      <Image
        src={"/Common/low-poly-grid-haikei footer.svg"}
        width={1350}
        height={220}
        className="opacity-80 absolute top-0 w-full h-full object-cover"
        alt="Footer"
      />

      {/* Main content */}
      <div className="w-full h-full flex flex-col justify-center items-center relative z-90 gap-30">
        {/* Top */}
        <div className="lg:w-[70%] w-full h-[400px] flex flex-col gap-8 justify-center items-center mt-5">
          {/* Logo */}
          <Image
            className="relative z-50"
            src={"/Common/myLogo.svg"}
            width={100}
            height={100}
            alt="Logo"
          />
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-[40px] md:text:[35px] text-[20px]  text-center font-black">
              Turning ideas into <span className="text-[#A78BFA]">designs</span>{" "}
              and <span className="text-[#A78BFA]">code</span>
            </h1>
            <h1 className="lg:text-[40px] md:text-[30px] text-[20px] text-center font-black">
              your next <span className="text-[#A78BFA]">project</span> starts
              here
            </h1>
          </div>
          <Magnetic intensity={0.6} range={400}>
            <CTAButton text={"Work with me"} />
          </Magnetic>
        </div>

        {/* Bottom */}
        <div className="lg:w-[80%] w-full h-[280px] flex flex-col justify-between items-center border--800 rounded-lg relative">
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
            <p className="text-sm text-left w-1/2 text-[#b6b6b6]">
              © 2025 Yash Vishnoi. All rights reserved
            </p>

            <div className="text-sm text-left w-1/2 text-[#b6b6b6] flex justify-end items-center gap-4">
              {[
                {
                  icon: (
                    <FaLinkedinIn
                      size={18}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
                  name: "LinkedIn",
                },
                {
                  icon: (
                    <FaGithub
                      size={18}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://github.com/YashVishnoi47",
                  name: "Github",
                },
                {
                  icon: (
                    <FaXTwitter
                      size={18}
                      className="hover:text-white transition-all duration-300 ease-in-out"
                    />
                  ),
                  link: "https://x.com/Yash_Vishnoi7",
                  name: "Twitter(X)",
                },
              ].map((item, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger>
                    <Link href={item.link} target="_blank">
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className={"relative z-90 mb-2"}>
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
