import EntryAnimation from "@/components/Common/EntryAnimation";
import GOTOTOPBUtton from "@/components/Common/GOTOTOPBUtton";
import Navbar from "@/components/Common/Navbar";
import SmallNavbar from "@/components/Common/SmallNavbar";
import CoolStuff from "@/components/Home/CoolStuff";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";

export default function Home() {
  return (
    <div className="w-full relative selection:bg-[#A78BFA] selection:text-white min-h-[900vh] gap-10 flex flex-col items-center bg-black text-white">
      <EntryAnimation />
      <Navbar />
      <SmallNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <GOTOTOPBUtton />

      {/* Section 6 and cool stuff */}
      <div className="flex flex-col gap-32 commonWidth">
        <Section6 />
        <CoolStuff />
      </div>
    </div>
  );
}
