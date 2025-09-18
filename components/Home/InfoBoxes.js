import React from "react";

const InfoBoxes = () => {
  return (
    <div className="commonWidth flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-4 items-center">
      {/* Box 1 */}
      <div className="lg:w-[32.4%] w-full min-h-[250px] bg-white/2 border border-neutral-800 rounded-2xl"></div>

      {/* Box 2 */}
      <div className="lg:w-[32.4%] w-full min-h-[250px] bg-white/2 border border-neutral-800 rounded-2xl"></div>

      {/* Box 3 */}
      <div className="lg:w-[32.4%] w-full min-h-[250px] bg-white/2 border border-neutral-800 rounded-2xl"></div>
    </div>
  );
};

export default InfoBoxes;
