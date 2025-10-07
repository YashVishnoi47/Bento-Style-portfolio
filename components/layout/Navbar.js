"use client";
import React, { useRef, useState } from "react";
import MenuButton from "../ui/MenuButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useHomePageStore } from "@/stores/HomePageStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  const { open } = useHomePageStore();
  const NavbarRef = useRef(null);
  const MObNavbarRef = useRef(null);
  const [hover, setHover] = useState(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   if (open) {
  //     tl.to(NavbarRef.current, {
  //       height: "350px",
  //       flexDirection: "column",
  //       ease: "power3.out",
  //       duration: 0.5,
  //     });

  //     tl.to(".navsection-1", {
  //       height: "100px",
  //     });

  //     gsap.to(".navsection-2", {
  //       display: "flex",
  //     });
  //   } else {
  //     gsap.to(".navsection-2", {
  //       display: "none",
  //     });

  //     tl.to(".navsection-1", {
  //       height: "full",
  //     });
  //     tl.to(NavbarRef.current, {
  //       height: "100px",
  //       // flexDirection: "row",
  //       ease: "power3.out",
  //       duration: 0.5,
  //     });
  //   }

  //   // gsap.from(NavbarRef.current, {
  //   //   y: -200,
  //   //   delay: 0.5,
  //   //   opacity: 0,
  //   //   duration: 1,
  //   //   scrollTrigger: {
  //   //     trigger: ".nav",
  //   //     start: "top 0%",
  //   //   },
  //   // });
  // }, [open]);

  return (
    <nav className="w-full absolute h-full flex justify-center items-start">
      <motion.div
        ref={NavbarRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="nav fixed z-999  h-[70px] mt-5 w-[900px] px-[12px] flex justify-between items-center rounded-lg bg-white/5 backdrop-blur-xl"
      >
        <div className="navsection-1 w-full h-full flex justify-between items-center">
          {/* Left Section */}
          <div className="navAni-1 lg:w-[28%] w-[50%] h-full gap-4 flex justify-start items-center  border-red-500">
            {/* Logo */}
            <Image
              src="/common/My logo black.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </div>

          {/* Middle Section */}
          <div className="navAni-1 min-w-[33%] h-full hidden lg:flex justify-center items-center  border-red-500">
            <div
              ref={MObNavbarRef}
              className="flex justify-center items-center px-6 py-2 bg--800 rounded-lg"
            >
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Projects", link: "/projects" },
                { name: "More", link: "" },
              ].map((item, idx) => (
                <motion.div
                  onClick={() => router.push(`${item.link}`)}
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(null)}
                  className="font-medium relative cursor-pointer px-4 py-2.5 flex text-neutral-100 justify-center items-center transition-all duration-300 ease-in-out rounded-md hover:bg-whit10 border-white select-none shrink-0"
                  key={idx}
                >
                  {item.name}
                  {idx === hover && (
                    <motion.div
                      layoutId={"hover"}
                      className="absolute bottom-0 left-0 w-full h-full rounded-md bg-white/10"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="navAni-1 w-[33%] h-full hidden lg:flex gap-6 justify-end items-center border-red-500">
            <div className="w-20 h-10 rounded-lg flex justify-center items-center bg-white/20 shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 group">
              <MdOutlineKeyboardDoubleArrowDown
                size={30}
                className="text-white group-hover:rotate-360 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          <MenuButton />
        </div>

        <div className="navsection-2 text-white w-full h-full hidden flex-col justify-center items-center gap-4">
          {["Home", "About", "Projects", "Services"].map((item, idx) => (
            <Link
              href={`/${item.toLowerCase()}`}
              className="mobnavlinks font-medium cursor-pointer w-full py-2 px-4 flex justify-start items-center transition-all duration-300 ease-in-out rounded-lg hover:bg-neutral-800 border-white select-none"
              key={idx}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
