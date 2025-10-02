import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import Section1 from "@/components/sections/Home/Section1";
import ScrollVelocity from "@/components/ScrollVelocity";
import { useHomePageStore } from "@/stores/HomePageStore";
import BentoGrid from "@/components/sections/Home/BentoGrid";
import Section3 from "@/components/sections/Home/Section3";
import Section4 from "@/components/sections/Home/Section4";
import Section5 from "@/components/sections/Home/Section5";


export default function Home() {
  return (
    <div
      className={`w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden`}
    >
      <CursorFollower />

      {/* Home */}
      <div className="w-full relative flex justify-center items-center z-3">
        <div
          className="absolute inset-0 z-0"
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

        <Section1 />
      </div>

      <BentoGrid />

      {/* Projects */}
      <Section3 />

      {/* Skills */}
      <div className="w-full relative flex justify-center items-center">
        <Section4 />
      </div>

      {/* Velocity text */}
      <div className="w-full min-h-[70vh]  flex justify-center items-center">
        <ScrollVelocity
          texts={[
            "Responsive ✦ Optimized ✦ Scalable ✦ Modern ✦",
            "Responsive ✦ Optimized ✦ Scalable ✦ Modern ✦",
          ]}
          velocity={100}
          stiffness={400}
          className="custom-scroll-text text-[#E0E0E0] select-none"
        />
      </div>

      {/* About */}
      <div className="w-full relative flex justify-center items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(150% 150% at 50% 0%, #000000 40%, rgba(215,132,216,0.1) 100%)",
          }}
        />
        <Section5 />
      </div>

      <Footer />
    </div>
  );
}
