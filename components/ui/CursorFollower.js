"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GoArrowRight } from "react-icons/go";
import { SpinningText } from "../motion-primitives/spinning-text";

export default function CursorFollower() {
  const followerRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    // Track cursor position for idle movement
    const moveFollower = (e) => {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveFollower);

    // Handle all hover-targets (for shape morphing)
    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const rect = el.getBoundingClientRect();

        gsap.to(followerRef.current, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          borderRadius: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(followerRef.current, {
          width: 15,
          height: 15,
          borderRadius: "50%",
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });

    const copyElements = document.querySelectorAll(".copy-target");
    copyElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // Animate text in
        gsap.to(textRef.current, {
          display: "flex",
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });

        // Animate box to fit text (add padding)
        gsap.to(followerRef.current, {
          width: "50px",
          height: "25px",
          borderRadius: "8px",
          duration: 0.3,
          backgroundColor: "rgba(0, 0, 0,0.5)",
          border: "none",
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        // Hide text
        gsap.to(textRef.current, {
          display: "none",
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          ease: "power3.in",
        });

        // Reset box size & shape
        gsap.to(followerRef.current, {
          width: 15,
          height: 15,
          borderRadius: "50%",
          duration: 0.3,
          backgroundColor: "trasnparent",
          border: "2px solid white",
          ease: "power3.out",
        });
      });
    });

    const projectElements = document.querySelectorAll(".project-target");
    projectElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // Animate box to fit text (add padding)
        gsap.to(followerRef.current, {
          width: "120px",
          height: "50px",
          borderRadius: "8px",
          duration: 0.3,
          backgroundColor: "rgba(0, 0, 0,0.5)",
          border: "none",
          ease: "power3.out",
        });

        // Animate text in
        gsap.to(".spin", {
          display: "flex",
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        // Hide text
        gsap.to(".spin", {
          display: "none",
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          ease: "power3.in",
        });

        // Reset box size & shape
        gsap.to(followerRef.current, {
          width: 15,
          height: 15,
          borderRadius: "50%",
          duration: 0.3,
          backgroundColor: "trasnparent",
          border: "2px solid white",
          ease: "power3.out",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "15px",
        height: "15px",
        border: "1px solid white",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
      }}
      className="flex justify-center items-center backdrop-blur-xl"
    >
      <span
        ref={textRef}
        className="justify-center items-center gap-2 "
        style={{
          display: "none",
          opacity: 0,
          transform: "scale(0.5)",
          pointerEvents: "none",
        }}
      >
        Copy
      </span>

      <span
        ref={textRef2}
        className="spin justify-center items-center gap-2 "
        style={{
          display: "none",
          opacity: 0,
          transform: "scale(0.5)",
          pointerEvents: "none",
        }}
      >
        Details
        <GoArrowRight size={20} />
      </span>

      {/* <SpinningText
        ref={textRef2}
        radius={5}
        fontSize={1.2}
        className="spin none font-medium absolute leading-none"
      >
        {`Details • Details • Details • `}
      </SpinningText> */}
    </div>
  );
}
