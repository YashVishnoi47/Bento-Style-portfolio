"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

const EntryAnimation = () => {
  const mainbox = useRef(null);
  const textref = useRef(null);
  const text2ref = useRef(null);

  useGSAP(() => {
    // Create splits with correct syntax
    let split = new SplitText(".anitext", { type: "words,chars" });
    let split2 = new SplitText(".anitext2", { type: "words,chars" });

    // Create main timeline
    const tl = gsap.timeline();

    // Phase 1: Animate first text chars in
    tl.from(split.chars, {
      delay: 0.5,
      duration: 0.6,
      opacity: 0,
      y: 50,
      rotationX: -90,
      transformOrigin: "0% 50% -50",
      ease: "back.out(1.7)",
      stagger: 0.02,
    });

    // Phase 2: Hold first text
    tl.to({}, { duration: 1.2 });

    // Phase 3: Fade out first text
    tl.to(".anitext", {
      duration: 0.5,
      opacity: 0,
      y: -30,
      ease: "power2.in",
    });

    // Phase 4: Hide first text and show second
    tl.set(".anitext", { display: "none" }).set(".anitext2", {
      display: "block",
    });

    // Phase 5: Animate second text words in
    tl.from(split2.words, {
      duration: 0.6,
      opacity: 0,
      y: 30,
      scale: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1,
    });

    // Phase 6: Hold second text
    tl.to({}, { duration: 1.5 });

    // Phase 7: Final exit animation
    tl.to(mainbox.current, {
      duration: 1.2,
      y: -1000,
      // opacity: 0,
      scale: 0.9,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(mainbox.current, { display: "none" });
      },
    });

    // Return timeline for cleanup if needed
    return tl;
  });

  return (
    <div
      ref={mainbox}
      className="w-full h-[100vh] flex justify-center items-center absolute z-99 bg-black"
    >
      <p ref={textref} className="anitext text-6xl font-bold">
        Hello👋
      </p>{" "}
      <p ref={text2ref} className="anitext2 hidden text-6xl font-bold">
        Welcome To My Portfolio
      </p>
    </div>
  );
};

export default EntryAnimation;
