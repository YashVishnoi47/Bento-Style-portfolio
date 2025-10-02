import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const TemplateCard = ({ item, idx }) => {
  return (
    <div
      key={idx}
      className={`border border-white/10 flex justify-between items-center w-full h-[420px] rounded-xl transition-all duration-300 ease-in-out cursor-pointer cardBgGradiant px-8 `}
    >
      {/* left */}
      <div className="h-[84%] w-[37.5%] border border-neutral-800 rounded-2xl"></div>
      {/* right */}
      <div className="h-[84%] relative items-center justify-between w-[62%] rounded-2xl gap-4 flex flex-col px-4 py-2">
        {/* Heading and tech used */}
        <div className="w-full flex flex-col gap-4 justify-center items-start">
          <h4 className="md:text-[32px] text[24px] font-bold text-left">
            {item.name}
          </h4>
          <p className="md:text-[16px] text-[12px] font-semibold text-left">
            {item.subheading}
          </p>

          {/* Tech Used */}
          <div className="w-full flex gap-2 justify-start items-center">
            {item.techs.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="text-xs text-bold flex justify-center items-center gap-2 bg-white/10 hover:bg-black/20 px-2 py-2 select-none rounded-lg transition-all dura2ion-300 ease-in-out text-center"
                >
                  <Image src={item.icon} width={15} height={15} alt="icon" />
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cta Button */}
        <div className="w-[95%] min-h-14 absolute bottom-0 flex justify-center items-center rounded-2xl border border-neutral-800  white-div-inner-shadow2 cursor-pointer hover:bg-[#6E6E6E]/10 transition-all duration-300 ease-in-out">
          <div className="w-full h-full absolute bg-[#6E6E6E]/10 backdrop-blur-xs z-0 " />

          <span className="font-mono text-center text-sm relative flex  justify-center items-center z-1 select-none gap-2">
            Know more
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

// {item.side === "left" ? (
//   <>
//     {/* left */}
//     <div className="h-[84%] w-[37.5%] border border-neutral-800 rounded-2xl"></div>
//     {/* right */}
//     <div className="h-[84%] w-[62%] rounded-2xl flex flex-col px-4 py-2">
//       {/* Heading */}
//       <div className="w-full flex flex-col gap-4 justify-center items-start">
//         <h4 className="md:text-[32px] text[24px] font-bold text-left">
//           {item.name}
//         </h4>
//         <p className="md:text-[16px] text-[12px] font-semibold text-left">
//           {item.subheading}
//         </p>
//       </div>
//     </div>
//   </>
// ) : (
//   <>
//     {/* Right */}
//     <div className="h-[84%] w-[62%] rounded-2xl flex flex-col px-4 py-2">
//       {/* Heading */}
//       <div className="w-full flex flex-col gap-4 justify-center items-start">
//         <h4 className="md:text-[32px] text[24px] font-bold text-left">
//           {item.name}
//         </h4>
//         <p className="md:text-[16px] text-[12px] font-semibold text-left">
//           {item.subheading}
//         </p>
//       </div>
//     </div>
//     {/* Left */}
//     <div className="h-[84%] w-[37.5%] border border-neutral-800 rounded-2xl"></div>
//   </>
// )}

// {/* Heading and subheading */}
// <div className="w-full flex flex-col gap-4 justify-center items-center">
//   <h4 className="md:text-[32px] text[24px] font-bold text-center">
//     {item.name}
//   </h4>
//   <p className="md:text-[16px] text-[12px] font-semibold text-center">
//     {item.subheading}
//   </p>
// </div>

// {/* Techs used */}
// <div className="w-full flex gap-2 justify-center items-center">
//   {item.techs.map((item, idx) => {
//     return (
//       <div
//         key={idx}
//         className="text-xs text-bold flex justify-center items-center gap-2 bg-white/10 hover:bg-black/20 px-2 py-2 select-none rounded-lg transition-all dura2ion-300 ease-in-out text-center"
//       >
//         <Image src={item.icon} width={15} height={15} alt="icon" />
//         {item.name}
//       </div>
//     );
//   })}
// </div>

// {/* Image */}

// <div className="w-[80%] h-[65%] mt-6 rounded-2xl bg-black  border-white/20 shrink-0"></div>
