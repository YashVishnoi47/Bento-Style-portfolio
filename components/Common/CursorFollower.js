"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const followerRef = useRef(null);
  const textRef = useRef(null);

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

    // Handle copy-targets (show copy text)
    const copyElements = document.querySelectorAll(".copy-target");

    copyElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // Measure text size
        const textRect = textRef.current.getBoundingClientRect();

        // Animate text in
        gsap.to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });

        // Animate box to fit text (add padding)
        gsap.to(followerRef.current, {
          width: textRect.width + 20, // add some padding
          height: textRect.height + 10,
          borderRadius: "8px", // rounded box instead of circle
          duration: 0.3,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        // Hide text
        gsap.to(textRef.current, {
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
        boxShadow: `
  0 0 10px rgba(255, 255, 255, 0.6),   /* inner glow */
  0 0 30px rgba(255, 255, 255, 0.4),   /* mid glow */
  0 0 60px rgba(255, 255, 255, 0.25)   /* outer soft glow */
`,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
      }}
    >
      <span
        ref={textRef}
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          pointerEvents: "none",
        }}
      >
        copy
      </span>
    </div>
  );
}
