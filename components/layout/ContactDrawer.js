"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import CTAButton2 from "../ui/CTAButtons/CTAButton2";
import { useForm } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { icons, Send } from "lucide-react";
import Image from "next/image";

const ContactDrawer = ({ use }) => {
  const [state, handleSubmit, reset] = useForm("meorlwpk");
  const [hover, sethover] = useState(0);

  return (
    <div className="">
      <Drawer.Root className="w-full flex justify-center items-center">
        <Drawer.Trigger>
          {use === "nav" && <CTAButton2 text="Let's Connect" />}
          {use === "bent" && <CTAButton2 text="Get Started" />}
          {use === "foot" && <CTAButton2 text="Chat with Yash" />}
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="rounded-2xl w-[40%] mb-2 h-fit fixed bottom-0 left-1/2 -translate-x-1/2 outline-none">
            <Drawer.Title />

            <div className="h-[550px] border-2 border-neutral-700 py-4 relative z-99 w-full rounded-2xl bg-back backdrop-blur-2xl flex items-center flex-col">
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  backgroundColor: "#0a0a0a",
                  backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
                  backgroundSize: "10px 10px",
                  imageRendering: "pixelated",
                }}
              />

              <div className="w-full flex justify-center items-center absolute top-4">
                <div className="w-[30%] h-[3px] rounded-full bg-white/50" />
              </div>

              {/* Toggle */}
              <div className="mt-8 w-[90%] h-12 border border-neutral-900 rounded-md bg-black/90 flex  justify-center items-center relative text-white">
                {["Fill a form", "Socials"].map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => sethover(idx)}
                      className="w-[50%] h-full  flex justify-center cursor-pointer items-center rounded-md relative"
                    >
                      {hover === idx && (
                        <motion.div
                          layoutId="hover"
                          className="absolute inset-0 bg-white/10 rounded-md "
                        />
                      )}
                      <p
                        className={`text text-neutral-400 transition-all duration-300 ease-in-out ${
                          hover === idx ? "text-white" : ""
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>

              {hover === 0 ? (
                <motion.div
                  layoutId="form"
                  className="w-full flex justify-center relative z-10 mt-8  items-center h-fit "
                >
                  <form
                    onSubmit={handleSubmit}
                    className="w-full h-full flex py-4 flex-col gap-4 justify-center items-center"
                  >
                    <div className="w-full flex justify-center gap-4 items-center">
                      {[
                        {
                          name: "Name",
                          type: "text",
                          placeholder: "Your Name",
                        },
                        {
                          name: "Email",
                          type: "email",
                          placeholder: "Your Email",
                        },
                      ].map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className="w-[45%] gap-2 flex flex-col justify-center items-start"
                          >
                            <label
                              className="text-white text-md"
                              htmlFor="email"
                            >
                              {item.name}
                            </label>
                            <Input
                              reqired={"true"}
                              className={
                                "w-full text-white placeholder:text-white/50"
                              }
                              type={item.type}
                              name={item.name}
                              placeholder={item.placeholder}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="w-full flex justify-center items-center">
                      <Textarea
                        type={"text"}
                        name={"message"}
                        placeholder="Your Message"
                        className={"w-[94%] h-44 text-white"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.sending}
                      className="text-white text-sm py-2.5 rounded-md w-[94%] bg-white/10 hover:bg-white/20 backdrop-blur-2xl disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-medium"
                    >
                      {state.submitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  layoutId="form"
                  className="w-full flex justify-center relative z-10 mt-8 items-center"
                >
                  <motion.div className="w-[90%] flex flex-wrap gap-4 justify-center items-center">
                    {[
                      {
                        name: "Instagram",
                        link: "https://github.com/meorlwpk",
                        icons: "./Social/instagram.svg",
                      },
                      {
                        name: "Linkedin",
                        link: "https://www.linkedin.com/in/meorlwpk/",
                        icons: "/Home/SkillsIcons/github.svg",
                      },
                      {
                        name: "Twitter",
                        link: "https://www.instagram.com/meorlwpk/",
                        icons: "./Social/twitter.svg",
                      },
                      {
                        name: "Linkedin",
                        link: "https://www.instagram.com/meorlwpk/",
                        icons: "./Social/linkedin.svg",
                      },
                    ].map((item, idx) => {
                      return (
                        <Link
                          key={idx}
                          href={item.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-white bg-white/10 text-sm py-4 hover:bg-white/20 transition-all duration-300 ease-in-out flex gap-4 px-2 rounded-md w-[45%] cursor-pointer backdrop-blur-2xl"
                        >
                          <Image
                            src={item.icons}
                            alt={item.name}
                            width={20}
                            height={20}
                          />
                          <p className="text-md">{item.name}</p>
                        </Link>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default ContactDrawer;
