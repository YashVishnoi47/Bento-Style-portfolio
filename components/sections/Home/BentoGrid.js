"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
const SmallSite = () => {
  return (
    <div className="w-[250px] h-[170px] flex flex-col items-center gap-4 rounded-tr-xl rounded-tl-xl bg-black">
      {/* Nav */}
      <div className="w-full h-[30px] flex border-b border-[#2d2d2d] justify-start px-2 items-center gap-2 rounded-tr-xl rounded-tl-xl border">
        {["#FC5753", "#FEBB40", "#34C848"].map((item, idx) => {
          return (
            <div
              key={idx}
              className={`w-[11px] h-[11px] rounded-full`}
              style={{
                backgroundColor: item,
              }}
            />
          );
        })}
      </div>

      {/* I-land */}
      <div className="h-[16px] w-[40%] flex justify-end px-1 items-center bg-white/20 rounded-full">
        <div className="w-[10px] h-[10px] bg-white/50 rounded-full" />
      </div>

      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center ">
        <span className="text-center w-[70%] text-[14px] font-semibold headingGradiant">
          Websites that work Smart and scale fast{" "}
        </span>
      </div>
    </div>
  );
};
import LogoLoop from "@/components/LogoLoop";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";

const MobileSite = () => {
  return (
    <div className="w-[150px] h-[170px] flex absolute bottom-0 flex-col items-center gap-4 rounded-tr-xl rounded-tl-xl bg-black">
      {/* I-land */}
      <div className="h-[16px] w-[40%] mt-3 flex justify-end px-1 items-center bg-white/20 rounded-full">
        <div className="w-[10px] h-[10px] flex justify-center items-center bg-white/50 rounded-full"></div>
      </div>

      {/* Heading */}
      <div className="w-full flex flex-col mt-4 gap-2 justify-center items-center overflow-hidden">
        <div className="w-[90%] h-12 rounded-lg bg-white/10"></div>

        <div className="w-[90%] flex justify-center items-center gap-2 h-6 rounded-lg">
          <div className="w-[48%] flex justify-center items-center gap-2 h-full rounded-lg bg-white/10"></div>
          <div className="w-[48%] flex justify-center items-center gap-2 h-full rounded-lg bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

const SubHeading = ({ text, cl }) => {
  return (
    <p
      className={`lg:text-[14px] text-[10px] text-center font-semibold relative headingGradiant2 ${cl}`}
    >
      {text}
    </p>
  );
};

const Heading1 = ({ text, size, cl }) => {
  return (
    <h1
      style={{ fontSize: `${size}px` }}
      className={`font-bold text-center BentoGridTextGradiant ${cl}`}
    >
      {text}
    </h1>
  );
};

const Heading2 = ({ text, size, cl }) => {
  return (
    <h1
      style={{ fontSize: `${size}px` }}
      className={`font-bold text-center BentoGridTextGradiant2 ${cl}`}
    >
      {text}
    </h1>
  );
};

const imageLogos = [
  {
    src: "Home/MoreSkillsIcon/kaggle.svg",
    alt: "Company 1",
  },
  {
    src: "Home/MoreSkillsIcon/pytorch.svg",
    alt: "Company 2",
  },
  {
    src: "Home/MoreSkillsIcon/tensorflow.svg",
    alt: "Company 3",
  },
  {
    src: "Home/MoreSkillsIcon/typescript.svg",
    alt: "Company 3",
  },
  {
    src: "Home/SkillsIcons/pandas.svg",
    alt: "Company 3",
  },
  {
    src: "Home/SkillsIcons/zustang.svg",
    alt: "Company 3",
  },
  {
    src: "Home/SkillsIcons/node-js.svg",
    alt: "Company 3",
  },
  {
    src: "Home/SkillsIcons/vercel.svg",
    alt: "Company 3",
  },
  {
    src: "Home/SkillsIcons/numpy.svg",
    alt: "Company 3",
  },
];

const BentoGrid = () => {
  const imageAni = useAnimation();
  const MotionImage = motion(Image);

  return (
    <section className="BentoWidth relative h-[920px] grid mt-20 grid-cols-4 grid-rows-7 gap-4">
      <div className="col-span-3 row-span-2 flex justify-center items-center gap-4 rounded-2xl">
        {/* Left */}
        <div className="h-full w-[60%] relative flex flex-col justify-start items-start rounded-2xl p-4 bg-white/5 backdrop-blur-2xl">
          <Heading1
            text="Scalable & Future-Proof Solutions"
            size={32}
            cl="text-white relative z-99"
          />
          <SubHeading
            text=" SEO-ready websites built to boost visibility and traffic."
            cl="text-white relative z-99"
          />
        </div>

        {/* Right */}
        <motion.div className="h-full w-[40%] relative flex flex-col gap-4 justify-center items-center rounded-2xl p-4 bg-white/5 backdrop-blur-2xl transition-all duration-300 ease-in-out ">
          <div className="relative w-30 h-30 flex justify-center items-center group">
            {/* Subtle rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Outer glass container with gradient border */}
            <div className="relative w-30 h-30 flex justify-center items-center rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl shadow-black/20">
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>

              <div className="relative w-22 h-22 flex justify-center items-center rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-inner">
                {/* Icon glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>

                <MotionImage
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  src="/Social/figma.svg"
                  className="relative z-10"
                  width={55}
                  height={55}
                  alt="figma"
                />
              </div>
            </div>

            {/* Subtle pulse ring effect */}
            <div className="absolute inset-0 rounded-full border border-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-700 ease-out"></div>
          </div>

          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <Heading1
              text="Visualize Before We Build"
              size={28}
              cl="text-white relative z-99 text-center"
            />
            <SubHeading
              text="Designing ideas into plans that succeed from the start."
              cl="text-white relative z-99 text-center"
            />
          </div>
        </motion.div>
      </div>

      <div className="row-span-7 flex flex-col gap-4 justify-center items-center rounded-2xl">
        <div className="w-full bg-[#ffff]/5 backdrop-blur-2xl border-neutral-800 h-[10%] flex flex-col items-center justify-center rounded-2xl gap-4 p-4">
          <Heading1
            text="Effortless Digital Flow"
            size={26}
            cl="text-white relative z-99"
          />
        </div>

        <div className="w-full bg-[#ffff]/5 backdrop-blur-2xl border-neutral-800 h-[30%] flex flex-col items-center justify-center rounded-2xl gap-4 p-4">
          {/* Lighting logo */}
          <div className="w-30 h-30 bg-green-500 flex justify-center items-center border rounded-full">
            <div className="w-26 h-26 flex bg-black justify-center items-center border rounded-full">
              <MotionImage
                transition={{ duration: 0.5, repeatType: "reverse" }}
                src="/common/lighting.svg"
                className="relative z-99 mt-2"
                width={55}
                height={55}
                alt="figma"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <Heading1
              text="Lightning Fast Websites"
              size={24}
              cl="text-white relative z-99"
            />
            <SubHeading
              text="Optimized for speed and smooth user experience."
              cl="text-white relative z-99 text-[10px]"
            />
          </div>
        </div>

        <div className="w-full h-[60%] flex flex-col gap-20 justify-start items-center rounded-2xl p-6 bg-white/5  backdrop-blur-2xl relative">
          {/* heading */}
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <Heading1
              text="Psssinate about learning new Technologies"
              size={24}
              cl="text-white relative z-99"
            />
          </div>

          {/* Logo Loop */}
          <div className="w-full flex flex-col justify-center items-center gap-15">
            <div className="w-full relative ">
              <LogoLoop
                logos={imageLogos}
                speed={120}
                direction="left"
                logoHeight={20}
                gap={40}
                pauseOnHover={false}
                scaleOnHover={false}
                fadeOut
                fadeOutColor="#111111"
                ariaLabel="Technology partners"
              />
            </div>
            <div className="w-full relative ">
              <LogoLoop
                logos={imageLogos}
                speed={120}
                direction="right"
                logoHeight={20}
                gap={40}
                pauseOnHover={false}
                scaleOnHover={false}
                fadeOut
                fadeOutColor="#111111"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          <MobileSite />
        </div>
      </div>

      <div className="row-span-5 col-span-1 flex flex-col justify-center items-center gap-4 rounded-2xl">
        <div className="bg-white/5 backdrop-blur-2xl relative w-full h-[60%] gap-4 rounded-2xl flex flex-col justify-center items-center ">
          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[60%] h-[85%] bg-gradient-to-b from-neutral-900 to-black relative rounded-2xl flex flex-col justify-start items-center border border-neutral-800 shadow-2xl"
          >
            {/* Dynamic Island / Notch */}
            <motion.div
              initial={{ width: "35%" }}
              animate={{ width: ["35%", "45%", "35%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="h-[24px] mt-3 relative flex justify-end px-2 items-center bg-black rounded-full shadow-inner border border-neutral-900"
            >
              {/* Camera */}
              <div className="absolute left-3 w-[6px] h-[6px] bg-neutral-700 rounded-full"></div>
              {/* Face ID sensors */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex gap-1 items-center"
              >
                <div className="w-[8px] h-[8px] bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Screen Content */}
            <div className="flex-1 flex flex-col justify-center items-center gap-3 px-4">
              {/* Profile Section */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-center items-center gap-3"
              >
                {/* Profile Image with Glow */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                  ></motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      className="relative z-10 border-2 border-neutral-700/50 rounded-full shadow-lg"
                      src={"/Common/mylognobg.svg"}
                      width={80}
                      height={80}
                      alt="Logo"
                    />
                  </motion.div>
                </div>

                {/* Name with gradient */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex flex-col items-center gap-1"
                >
                  <p className="text-lg font-semibold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    Yash Vishnoi
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="text-xs text-neutral-500"
                  >
                    Product Designer
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>

            {/* Home Indicator (iPhone style) */}
            <motion.div
              animate={{
                width: ["35%", "25%", "35%"],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-[4px] mb-2 bg-white/30 rounded-full"
            ></motion.div>

            {/* Screen bezel reflection effect */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"
              style={{ backgroundSize: "200% 200%" }}
            ></motion.div>

            {/* Ambient light reflection */}
            <motion.div
              animate={{
                opacity: [0, 0.1, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent rounded-t-2xl pointer-events-none"
            ></motion.div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden w-full h-[20%] gap-4 rounded-2xl flex flex-col justify-center items-center">
          <Image
            className="w-full h-full absolute z-0 object-cover rounded-2xl"
            src="/common/bentoBG.svg"
            width={55}
            height={55}
            alt="figma"
          />
          <div className="w-full h-full absolute bg-white/2 backdrop-blur-sm" />

          <Heading2
            text="SEO-Optimized Websites"
            size={34}
            cl="text-white relative z-99"
          />
        </div>

        <div className="relative px-4 bg-white/5 backdrop-blur-2xl w-full h-[20%] gap-4 rounded-2xl flex justify-center items-center">
          {/* <div className="w-8 h-8 flex justify-center items-center rounded-lg bg-black">
            <Image
              src="/common/responsive.svg"
              width={30}
              height={30}
              alt="figma"
            />
          </div> */}
          <Heading1
            text="Optimized for All Devices"
            size={24}
            cl="text-white relative z-99"
          />
        </div>
      </div>

      <div className="row-span-3 col-span-2 overflow-hidden rounded-2xl BentoGridBgGradiant">
        <div className="w-full h-full bg-black/2 backdrop-blur-2xl flex flex-col justify-between items-center">
          <h1 className="text-[36px] mt-6 font-bold text-center BentoGridTextGradiant">
            Design to Production Website Developement
          </h1>

          <SmallSite />
        </div>
      </div>

      <div className="bg-white/5 relative row-span-2 col-span-2 p-4 rounded-2xl flex gap-8 flex-col justify-center items-center">
        <div
          className="absolute inset-0 z-0 rounded-2xl BentoInnerShadow"
          style={{
            background:
              "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
          }}
        />
        <Heading2
          text="Future-Ready Websites That Elevate Your Brand"
          size={34}
          cl="text-white relative z-99 w-[85%]"
        />

        <CTAButton2 text={"Get Started"} />
      </div>
    </section>
  );
};

export default BentoGrid;
