"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useGSAP } from "@gsap/react";

const SmallNavbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".SmNav", {
      opacity: 0,
      display: "none",
      transform: "translateY(-10px)",
    });

    gsap.set(".navAni-1", {
      transformOrigin: "center center",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".SmNav",
        start: "50% 0%",
        end: "bottom 100%",
        scrub: 1.2,
        // markers: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(".nav", {
      marginTop: "0",
      duration: 0.8,
      ease: "power2.out",
    })

      .to(
        ".nav",
        {
          backgroundColor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )

      .to(
        ".navAni-1",
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.2"
      )

      .to(".navAni-1", {
        width: "0",
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.05,
      })

      .set(".navAni-1", {
        display: "none",
      })

      .set(".SmNav", {
        display: "flex",
      })

      .to(
        ".SmNav",
        {
          opacity: 1,
          transform: "translateY(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.1"
      );

    return () => {
      gsap.set([".SmNav", ".navAni-1", ".nav"], { willChange: "auto" });
    };
  });

  return (
    <div className="SmNav hidden fixed opacity-0 z-95 mt-6 justify-center items-center px-6 py-2 rounded-lg bg-white/10 backdrop-blur-lg">
      {["Home", "About", "Projects", "Services"].map((item, idx) => (
        <p
          className="font-medium cursor-pointer px-4 py-2.5 flex justify-center items-center transition-all duration-300 ease-in-out rounded-lg hover:bg-neutral-900 border-white select-none"
          key={idx}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SmallNavbar;


