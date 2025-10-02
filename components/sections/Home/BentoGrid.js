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
    <div className="BentoWidth relative h-[920px] grid mt-20 grid-cols-4 grid-rows-7 gap-4">
      <div className="col-span-3 row-span-2 flex justify-center items-center gap-4 rounded-2xl">
        {/* Left */}
        <div className="h-full w-[60%] relative flex flex-col justify-start items-start rounded-2xl p-4 white-div-inner-shadow">
          <div
            className="absolute inset-0 z-0 rounded-2xl"
            style={{
              background:
                "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
            }}
          />

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
        <motion.div
          onMouseEnter={() => imageAni.start({ rotate: 360 })}
          onMouseLeave={() => imageAni.start({ rotate: 0 })}
          className="h-full w-[40%] relative flex flex-col gap-4 justify-end items-start rounded-2xl p-4 white-div-inner-shadow transition-all duration-300 ease-in-out "
        >
          <div
            className="absolute inset-0 z-0 rounded-2xl"
            style={{
              background:
                "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
            }}
          />
          <MotionImage
            animate={imageAni}
            transition={{ duration: 0.5, repeatType: "reverse" }}
            src="/Social/figma.svg"
            className="relative z-99"
            width={55}
            height={55}
            alt="figma"
          />

          <div className="w-full flex flex-col justify-center items-start">
            <Heading1
              text="Visualize Before We Build"
              size={28}
              cl="text-white relative z-99"
            />
            <SubHeading
              text="Optimized for speed and smooth user experience."
              cl="text-white relative z-99"
            />
          </div>
        </motion.div>
      </div>

      <div className="row-span-7 flex flex-col gap-4 justify-center items-center rounded-2xl">
        <div className="w-full bg-[#FFDD09]/2 border-neutral-800 h-[40%] flex flex-col justify-end rounded-2xl gap-4 p-4">
          <MotionImage
            transition={{ duration: 0.5, repeatType: "reverse" }}
            src="/common/lighting.svg"
            className="relative z-99"
            width={55}
            height={55}
            alt="figma"
          />
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <Heading1
              text="Lightning Fast Websites"
              size={24}
              cl="text-white relative z-99"
            />
            <SubHeading
              text="Optimized for speed and smooth user experience."
              cl="text-white relative z-99 text-[10px] text-left"
            />
          </div>
        </div>

        <div className="w-full h-[60%] flex flex-col gap-20 justify-start items-center rounded-2xl p-6 bg-white/5 relative">
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
        <div className="bg-white/5 relative w-full h-[60%] gap-4 rounded-2xl flex flex-col justify-center items-center"></div>

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

        <div className="relative px-4 bg-white/5 w-full h-[20%] gap-4 rounded-2xl flex justify-center items-center">
          <div className="w-8 h-8 flex justify-center items-center rounded-lg bg-black">
            <Image
              src="/common/responsive.svg"
              width={30}
              height={30}
              alt="figma"
            />
          </div>
          <Heading2
            text="Optimized for Every Screen"
            size={18}
            cl="text-white relative z-99"
          />
        </div>
      </div>

      <div className="row-span-3 col-span-2 overflow-hidden rounded-2xl BentoGridBgGradiant">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <h1 className="text-[36px] mt-6 font-bold text-center BentoGridTextGradiant">
            Design to Production Website Developement
          </h1>

          <SmallSite />
        </div>
      </div>

      <div className="bg-white/5 row-span-2 col-span-2 rounded-2xl"></div>
    </div>
  );
};

export default BentoGrid;

// {/* Top Left */}
// <div className="h-[200px] flex gap-2 w-[72.5%] justify-start">
//   {/* Left */}
//   <div className="w-[599px] p-4 flex flex-col justify-start items-start white-div-inner-shadow rounded-2xl transition-all duration-200 ease-in-out">
//     <Heading1 text={"Scalable & Future-Proof Solutions"} size={32} />
//     <SubHeading
//       text={"Your website grows seamlessly as your business expands."}
//     />
//   </div>

//   {/* Right */}
//   <div className="w-[368px] p-4 rounded-2xl flex flex-col justify-end items-start white-div-inner-shadow transition-all duration-200 ease-in-out">
//     <Image src="/Social/figma.svg" width={55} height={55} alt="figma" />
//     <Heading1
//       cl={"mt-4"}
//       text={"Visualize Before We Build"}
//       size={24}
//     />
//     <SubHeading
//       cl={"ml-1"}
//       text={"Optimized for speed and smooth user experience."}
//     />
//   </div>
// </div>

//   {/* Center Box */}
//   <div className="h-[350px] w-[44.8%] flex-col flex justify-between items-center rounded-2xl BentoGridBgGradiant">
{
  /* <h1 className="text-[36px] mt-4 font-bold text-center BentoGridTextGradiant">
  Design to Production Website Developement
</h1>

<SmallSite /> */
}
//   </div>
