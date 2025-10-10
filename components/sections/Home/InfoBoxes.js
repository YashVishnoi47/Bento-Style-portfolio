"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { Notebook } from "lucide-react";

const InfoBoxes = () => {
  const router = useRouter();
  const controller = useAnimation();
  const controller2 = useAnimation();
  const Imagecontroller = useAnimation();

  const MotionImage = motion(Image);
  return (
    <div className="commonWidth flex lg:flex-row flex-col lg:justify-between  lg:gap-0 gap-4 items-center">
      {/* Box 1 */}
      <motion.div
        transition={{ duration: 0.5, ease: "easeIn" }}
        onClick={() => router.push("/info/tools")}
        onMouseEnter={() => controller.start({ y: -10 })}
        onMouseLeave={() => controller.start({ y: 0 })}
        className="lg:w-[32.4%] p-4 w-full flex flex-col justify-end items-start gap-8 min-h-[250px] bg-black border border-neutral-800 rounded-2xl transition-all relative duration-300 ease-in-out white-div-inner-shadow cursor-pointer"
      >
        <div className="w-full flex gap-2 overflow-hiddn">
          <Image
            src="/infoBoxes/boxes3.svg"
            className="mb-"
            width={500}
            height={500}
            alt="icon"
          />
        </div>

        {/* Text */}
        <motion.div animate={controller} className="flex w-full flex-col gap-1">
          <motion.h4 className="md:text-[32px] text[24px] font-bold text-left">
            My Digital <span className="text-[#DD88DE]">Toolbox</span>
          </motion.h4>
          <div className="w-full flex gap-2 justify-between items-center">
            <p className="text-[14px] text-left subHeadingGradiant">
              Tools that power the journey from idea to creation.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Box 2 */}
      <motion.div
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
        onClick={() => router.push("/info/feedback")}
        onMouseEnter={() => controller2.start({ y: -10 })}
        onMouseLeave={() => controller2.start({ y: 0 })}
        className="lg:w-[32.4%] p-4 w-full flex flex-col justify-end items-start gap-8 min-h-[250px] bg-black border border-neutral-800 rounded-2xl transition-all relative duration-300 ease-in-out white-div-inner-shadow cursor-pointer"
      >
        <div className="w-full flex gap-4 overflow-hiddn">
          <Image
            src="/common/laptop.svg"
            className="mb-"
            width={100}
            height={100}
            alt="icon"
          />
          <Image
            src="/common/phone.svg"
            className="mb-"
            width={30}
            height={30}
            alt="icon"
          />
        </div>

        {/* Text */}
        <motion.div
          animate={controller2}
          className="flex w-full flex-col gap-1"
        >
          <motion.h4 className="md:text-[32px] text[24px] font-bold text-left">
            Leave a <span className="text-[#DD88DE]">Note</span>
          </motion.h4>
          <div className="w-full flex gap-2 justify-between items-center">
            <p className="text-[14px] text-left subHeadingGradiant">
              Share your thoughts, feedback, or just say hi!
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Box 3 */}
      <motion.div
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.8 }}
        onMouseEnter={() => Imagecontroller.start({ scale: 1.1 })}
        onMouseLeave={() => Imagecontroller.start({ scale: 1 })}
        className="lg:w-[32.4%] relative p-4 flex justify-center items-center w-full h-[250px] bg-black border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer"
      >
        <MotionImage
          className="object-cover absolute rounded-2xl w-full h-full progresivePoster"
          src="/common/anime poster.svg"
          width={500}
          height={500}
          alt="icon"
          animate={Imagecontroller}
        />

        {/* Text */}
        <motion.div className="flex w-full h-full justify-end flex-col gap-1 z-10">
          <motion.h4 className="md:text-[32px] text[24px] font-bold text-left">
            What Am I <span className="text-[#DD88DE]">watching</span>
          </motion.h4>
          <div className="w-full flex gap-2 justify-between items-center">
            <p className="text-[14px] text-left subHeadingGradiant">
              Share your thoughts, feedback, or just say hi!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoBoxes;
