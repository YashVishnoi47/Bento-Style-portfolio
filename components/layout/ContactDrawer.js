"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import CTAButton2 from "../ui/CTAButtons/CTAButton2";
import { useForm } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { Send } from "lucide-react";
import Image from "next/image";
import EmailCopy from "../ui/CTAButtons/EmailCopy";
import { MdEmail } from "react-icons/md";

const ContactDrawer = ({ use }) => {
  const [state, handleSubmit] = useForm("meorlwpk");
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
          <Drawer.Overlay className="fixed inset-0 bg-black/70" />
          <Drawer.Content className="rounded-2xl w-[40%] mb-2 h-fit fixed bottom-0 left-1/2 -translate-x-1/2 outline-none">
            <Drawer.Title />

            <div className="h-[580px] border-2 border-neutral-700 py-4 relative z-99 w-full rounded-2xl bg-back backdrop-blur-2xl flex items-center flex-col">
              <div className="w-full flex justify-center items-center absolute top-4">
                <div className="w-[30%] h-[3px] rounded-full bg-white/50" />
              </div>

              {/* Badge */}
              <div className="relative z-19 px-2 bg-white/10 backdrop-blur-2xl py-1 mt-8 rounded-sm">
                <p className="text-white font-normal text-md">
                  Feel free to reach me out
                </p>
                {/* <p className="text-white font-normal text-md">Connect with me</p> */}
              </div>

              {/* Toggle */}
              <div className="mt-6 w-[90%] h-12 border border-neutral-900 rounded-md bg-black/90 flex  justify-center items-center relative text-white">
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
                  className="w-full flex justify-center relative z-10 mt-4  items-center h-fit "
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
                            className="w-[45%] backdrop-blur-2xl gap-2 flex flex-col justify-center items-start"
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
                                "w-full text-white focus-visible:ring-0 focus:ring-0 hover:ring-0 border-neutral-500 placeholder:text-white/50"
                              }
                              type={item.type}
                              name={item.name}
                              placeholder={item.placeholder}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="w-full flex-col flex gap-2 justify-center items-center">
                      <div className="w-full flex  items-center justify-start px-6">
                        <label className="text-white text-md" htmlFor="message">
                          Message
                        </label>
                      </div>
                      <Textarea
                        type={"text"}
                        name={"message"}
                        placeholder="Your Message"
                        className={
                          "w-[94%] h-44 text-white border-neutral-500 backdrop-blur-2xl focus-visible:ring-0 focus:ring-0 hover:ring-0"
                        }
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
                  className="w-full flex justify-center relative z-10 mt-4 items-center"
                >
                  <motion.div className="w-[90%] flex flex-wrap gap-4 justify-center items-center">
                    {[
                      {
                        name: "Twitter",
                        link: "https://twitter.com/meorlwpk",
                        icons: "/Social/twitter2.svg",
                        userName: "@Yash_Vishnoi7",
                      },
                      {
                        name: "GitHub",
                        link: "https://github.com/YashVishnoi47",
                        icons: "/Home/SkillsIcons/github.svg",
                        userName: "@YashVishnoi47",
                      },
                      {
                        name: "LinkedIn",
                        link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
                        icons: "/Social/linkedin.svg",
                        userName: "@Yash Vishnoi",
                      },
                      {
                        name: "LinkedIn",
                        link: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
                        icons: "/Social/linkedin.svg",
                        userName: "@Yash Vishnoi",
                      },
                    ].map((item, idx) => {
                      return (
                        <Link
                          key={idx}
                          href={item.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group relative overflow-hidden text-white bg-gradient-to-r from-white/10 to-white/5 text-sm py-4 hover:from-white/15 hover:to-white/10 transition-all duration-300 ease-in-out flex justify-start items-center gap-3 px-4 rounded-xl w-[48%] cursor-pointer backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300 shrink-0">
                            <Image
                              src={item.icons}
                              alt={item.name}
                              width={20}
                              height={20}
                              className="group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>

                          <p className="text-[15px] font-medium tracking-wide">
                            {item.name}
                          </p>

                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </Link>
                      );
                    })}

                    <div className="w-[100%] flex flex-col gap-4">
                      <Link
                        href="mailto:yashvishnoi309@gmail.com"
                        className="group relative overflow-hidden w-full text-white bg-gradient-to-r from-white/10 to-white/5 text-sm py-4 hover:from-white/15 hover:to-white/10 transition-all duration-300 ease-in-out flex justify-start items-center gap-3 px-4 rounded-xl cursor-pointer backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                          <MdEmail
                            size={20}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-[15px] font-medium tracking-wide">
                          yashvishnoi309@gmail.com
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </Link>

                      <Link
                        href={"/contact"}
                        className="group relative overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex justify-start px-4 items-center gap-3 backdrop-blur-xl hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 ease-in-out cursor-pointer border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                          <Image
                            src="/Social/cal.svg"
                            alt="cal.com"
                            width={20}
                            height={20}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-[15px] text-white font-medium tracking-wide">
                          Book a meeting
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </Link>
                    </div>
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
