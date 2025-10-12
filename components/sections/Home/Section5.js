"use client";
import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Tilt } from "@/components/motion-primitives/tilt";

const Section5 = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });

  const transformScale = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0.9, 1]),
    {
      stiffness: 100,
      damping: 20,
      mass: 1,
    }
  );

  return (
    <motion.div
      transition={{ duration: 1, delay: 0.2 }}
      style={{ scale: transformScale }}
      ref={mainRef}
      id="about"
      className="commonWith w-[1540px] max-w-[1540px] py-20 relative rounded-2xl flex lg:flex-row flex-col justify-center items-center gap-8 bg-black/90 backdrop-blur-2xl"
    >
      {/* Left */}
      <div className="lg:w-[50%] w-full min-h-[450px] rounded-2xl p-8 flex flex-col gap-6">
        {/* Heading */}
        <div className="w-full flex flex-col justify-start items-start">
          <p className="textFont text-[14px] font-semibold text-left subHeadingGradiant">
            Know about me
          </p>
          <h3 className="headingFont md:text-[42px] text-[30px] font-bold text-left">
            Unveiling the Story{" "}
            <span className="text-[#DD88DE]"> Behind My Portfolio</span>
          </h3>
        </div>

        {/* Text */}
        <div className="w-full textFont flex flex-col gap-6">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[#B3B3B3] lg:text-[18px]  text-[15px] w-full"
          >
            I’m Yash, someone who believes growth comes from curiosity and
            consistency. I enjoy creating, exploring new ideas, and finding
            better ways to solve problems—things that keep me excited every day.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[#B3B3B3] lg:text-[18px]  text-[15px] w-full"
          >
            Outside of work, you’ll often find me at the gym, brainstorming
            fresh ideas, or relaxing and watching anime. Keeping that balance
            between learning and living helps me stay motivated and creative.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[#B3B3B3] lg:text-[18px]  text-[15px] w-full"
          >
            At my core, I value simplicity, honesty, and meaningful connections.
            Beyond the portfolio, that’s the real me.
          </motion.p>
        </div>

        {/* Social Icons */}
        <div className="w-full flex flex-col justify-start items-start gap-8 px-1 mt-4">
          {/* <div className="w-1/2 flex gap-3">
            <FaGithub className="size-5 cursor-pointer" />
            <FaXTwitter className="size-5 cursor-pointer" />
            <FaInstagram className="size-5 cursor-pointer" />
          </div> */}

          <div className="text-sm text-left text-[#b6b6b6] flex justify-end items-center gap-2">
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
                    <span className="text-sm">{item.name}</span>
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className={"relative z-90 mb-2"}>
                  {item.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* <div className="rounded-md bg-white/10 flex justify-end px-4 py-2 items-center cursor-pointer hover:gap-6 gap-4 transition-all duration-300 ease-in-out">
            <p className="text-[#B3B3B3] flex justify-center items-center text-[16px] ">
              Know more
            </p>
            <FaArrowRight className="text-[#B3B3B3]" />
          </div> */}

          <CTAButton2 text={"Know More"} />
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-[40%] w-full min-h-[450px] rounded-2xl flex flex-col justify-center items-center gap-8">
        <Tilt rotationFactor={5} isRevese>
          <Link
            className="target-Image relative rounded-2xl w-full h-full transition-all duration-300 ease-in-out"
            target="_blank"
            href={"https://github.com/YashVishnoi47"}
          >
            <Image
              src={"/Common/My logo white.svg"}
              className="shadow-lg rounded-2xl"
              width={400}
              height={400}
              alt="yash"
            />
          </Link>
        </Tilt>
      </div>
    </motion.div>
  );
};

export default Section5;
