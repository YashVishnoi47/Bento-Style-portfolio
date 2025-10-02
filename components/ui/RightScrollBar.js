"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const RightScrollBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 w-1.5 h-40 bg-white/10 rounded-full backdrop-blur-md z-50 border border-white/20 shadow-2xl"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.8
      }}
      whileHover={{ 
        scale: 1.15,
        width: "8px"
      }}
    >
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="relative w-full h-full bg-gradient-to-b from-[#A78BFA] via-[#9776fa] to-[#7141ff] rounded-full origin-top shadow-lg"
        initial={{ scaleY: 0 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
          mass: 0.8,
          delay: 0.3
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-white/60 rounded-full blur-sm"
          style={{ scaleY: scrollYProgress }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 40,
            delay: 0.5
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default RightScrollBar;