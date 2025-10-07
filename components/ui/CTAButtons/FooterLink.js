"use client";

import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const FooterLink = ({ item }) => {
  return (
    <section className="h-[20%] text-left snap-y snap-mandatory overflow-y-scroll ">
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-5">
        <Link001 href={item}>{item}</Link001>
      </div>
    </section>
  );
};

export { Link001, FooterLink };

const Link001 = ({ children, href, className }) => {
  return (
    <Link
      href={href.toLowerCase()}
      className={cn(
        "group relative flex items-center",
        "before:pointer-events-none before:absolute before:left-0 before:top-[1.5em] before:h-[0.05em] before:w-full before:bg-current before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100 text-white",
        className
      )}
    >
      {children}
      <svg
        className="ml-[0.3em] mt-[0em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
        fill="none"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Link>
  );
};
