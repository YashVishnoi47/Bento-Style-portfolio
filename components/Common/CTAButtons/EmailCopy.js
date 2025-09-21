import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const EmailCopy = () => {
  return (
    <div className="copy-target flex justify-center items-center text-neutral-300 hover:text-white gap-4 bg-/5 px-6 py-4 rounded-lg relative z-50 transition-all duration-500 ease-in-out cursor-pointer white-div-inner-shadow">
      <FaRegCopy className="size-[20px]" />
      <p>yashvishnoi309@gmail.com</p>
    </div>
  );
};

export default EmailCopy;
