import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/layout/Footer";
import Section1 from "@/components/sections/Home/Section1";
import ScrollVelocity from "@/components/ScrollVelocity";
import BentoGrid from "@/components/sections/Home/BentoGrid";
import Section3 from "@/components/sections/Home/Section3";
import Section4 from "@/components/sections/Home/Section4";
import Section5 from "@/components/sections/Home/Section5";
import InfoBoxes from "@/components/sections/Home/InfoBoxes";

export default function Home() {
  return (
    <div
      className={`w-full relative selection:bg-[#ffff] selection:text-black min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white overflow-x-hidden`}
    >
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

      {/* Home */}
      <Section1 />

      {/* BentoGrid */}
      <BentoGrid />

      {/* Projects */}
      <Section3 />

      {/* Skills */}
      <section className="w-full relative mt-10 flex justify-center items-center">
        <Section4 />
      </section>

      {/* Velocity text */}
      <div className="w-full min-h-[50vh]  flex justify-center items-center">
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
      <section className="w-full relative flex justify-center items-center">
        <Section5 />
      </section>

      <section className="w-full relative flex flex-col gap-10  mb-50 z-99 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <p className="textFont text-[14px] font-semibold text-left subHeadingGradiant">
            Check this out
          </p>
          <h3 className="headingFont md:text-[48px] w-[40%] text-[30px] font-bold text-center">
            <span className="text-[#DD88DE]">Explore and discover </span>more
            about the <span className="text-[#DD88DE]"> real me</span>
          </h3>
        </div>
        <InfoBoxes />
      </section>

      <Footer />
    </div>
  );
}
