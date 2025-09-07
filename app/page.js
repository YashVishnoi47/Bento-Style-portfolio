import Navbar from "@/components/Common/Navbar";
import SmallNavbar from "@/components/Common/SmallNavbar";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";

export default function Home() {
  return (
    <div className="w-full relative selection:bg-[#A78BFA] selection:text-white min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white">
      <Navbar />
      <SmallNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
