"use client";
import { Check, CheckCheck } from "lucide-react";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const EmailCopy = ({ contact, cn }) => {
  const [copied, setCopied] = useState(false);

  const textToCopy = "yashvishnoi309@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className={`copy-target flex justify-center items-center text-neutral-300 hover:text-white gap-4 bg-/5 ${
        contact === true ? "w-full" : "w-[280px]"
      }  h-[56px] rounded-lg relative z-50 transition-all duration-500 ease-in-out cursor-pointer white-div-inner-shadow ${cn}`}
    >
      <AnimatePresence mode="wait">
        {!copied ? (
          <motion.div
            key="copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <FaRegCopy className="size-[20px]" />
            <p>yashvishnoi309@gmail.com</p>
          </motion.div>
        ) : (
          <motion.div
            key="copied"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <CheckCheck className="size-[20px]" />
            <p>copied to clipboard</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailCopy;
