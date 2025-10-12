"use client";
import React from "react";
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
import { motion } from "framer-motion";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";
import { Tilt } from "@/components/motion-primitives/tilt";

const AboutSection1 = () => {
  return (
    <div
      id="about"
      className="commonWidth relative mt-30 mb-30 flex lg:flex-row flex-col justify-between items-center gap-8"
    >
      {/* Left */}
      <div className="lg:w-[57%] w-full min-h-[450px] rounded-2xl p-8 flex flex-col gap-6">
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
              src={"/Common/My Logo white.svg"}
              className="bg-[#ffff/10 shadow-lg rounded-2xl"
              width={400}
              height={400}
              alt="yash"
            />
          </Link>
        </Tilt>
      </div>
    </div>
  );
};

export default AboutSection1;
