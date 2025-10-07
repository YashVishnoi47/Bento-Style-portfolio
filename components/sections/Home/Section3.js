"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { Tilt } from "@/components/motion-primitives/tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CTAButton2 from "@/components/ui/CTAButtons/CTAButton2";

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const projectsRef = useRef(null);
  
  const Projects = [
    {
      tag: "🚀 Project 1",
      image: "/Common/macbook 1.svg",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
    {
      tag: "🚀 Project 1",
      image: "/Projects/Snipppet.png",
      name: "Snipppet",
      side: "right",
      subheading:
        "Snippet is a collaborative code editor that allows you to code in real-time with your friends.",
      link: "https://github.com/yashvishnoi309",
      features: [
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
        { name: "This is Feature - {item} and this is awesome." },
      ],
      techs: [
        { name: "Next JS", icon: "./Home/SkillsIcons/next-js.svg" },
        { name: "React JS", icon: "./Home/SkillsIcons/react.svg" },
        { name: "TailwindCSS", icon: "./Home/SkillsIcons/tailwindcss.svg" },
      ],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const projects = projectsRef.current;

    // Calculate how far the content needs to scroll
    const scrollWidth = projects.scrollWidth - window.innerWidth;

    // Create the horizontal scroll animation
    gsap.to(projects, {
      x: -scrollWidth - 50,
      scrollTrigger: {
        trigger: container,
        start: "12% top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full max-w-[1540px] px-2 relative mt-20 py-10 flex flex-col justify-center items-center gap-24 overflow-hidden"
    >
      {/* Main Heading */}
      <motion.div className="w-full flex gap-x-11 flex-col justify-center items-center">
        <p className="text-[12px] font-semibold text-center subHeadingGradiant">
          Featured Projects
        </p>
        <h3 className="md:text-[48px] text-[30px] font-bold text-center">
          The Stuff I&apos;ve <span className="text-[#DD88DE]">Engineered</span>
        </h3>
      </motion.div>

      <div
        ref={projectsRef}
        className="w-full flex relative flex- justify-start items-center gap-8"
      >
        {/* Projects */}
        {Projects.map((item, idx) => (
          <Tilt
            className="min-h-[350px] project-target lg:w-[30%] shrink-0 w-full"
            key={idx}
            rotationFactor={4}
            isRevese
          >
            <motion.div
              key={idx}
              className="w-full flex flex-col gap-8 justify-center items-center relative rounded-2xl hover:shdow-md border border-[#2B2B2B] hover:border-[#2B2B2B] backdrop-blur-2xl cursor-pointer hover:shadow-xl shadow-white/20 transition-all duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="w-[100%] h-[350px] p-4 flex justify-center items-center">
                <div className="w-full h-full bg-white/10  rounded-2xl flex justify-center items-center">
                  {/* <Image
                    className="rounded-2xl"
                    src={item.image}
                    width={400}
                    height={400}
                    alt="icon"
                  /> */}
                </div>
              </div>

              {/* Heading and  subheading */}
              <div className="w-[100%] justify-center items-start px-6 py-6 gap-4 flex flex-col">
                {/* Heading */}
                <div className="px-4 py-2 font-bold text-sm bg-white/20 rounded-lg">
                  <TextShimmer
                    duration={2}
                    className="text-sm [--base-color:var(--color-white)] [--base-gradient-color:var(--color-black)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
                  >
                    {item.name}
                  </TextShimmer>
                </div>

                {/* Subheading */}
                <div className="w-[100%] flex flex-col gap-4 justify-center items-center">
                  <p className="md:text-[16px] text-xs font-semibold text-start subHeadingGradiant">
                    {item.subheading}
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}

        {/* Cta */}
        <Tilt
          className="min-h-[350px] lg:w-[30%] shrink-0 w-full"
          rotationFactor={4}
          isRevese
        >
          <motion.div className="w-full py-20 flex flex-col gap-6 justify-center z-99 items-center relative rounded-2xl border border-[#2B2B2B] hover:border-white/30 cursor-pointer hover:shadow-2xl shadow-white/10 transition-all duration-500 ease-out overflow-hidden group">
            {/* Gradient Overlay Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="w-full h-[350px] p-8 flex flex-col justify-center items-center gap-6 relative z-10">
              {/* Heading */}
              <h4 className="text-4xl md:text-5xl text-center text-white font-bold leading-tight">
                Explore More Amazing
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                  Projects
                </span>
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-center max-w-md text-lg">
                Discover a collection of innovative solutions and creative works
              </p>

              {/* CTA Button */}
              <CTAButton2 text="View More" link="/projects" />
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/10 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Section3;

// mt-50
