import CursorFollower from "@/components/Common/CursorFollower";
import EntryAnimation from "@/components/Common/EntryAnimation";
import Footer from "@/components/Common/Footer";
import GOTOTOPBUtton from "@/components/Common/GOTOTOPBUtton";
import Navbar from "@/components/Common/Navbar";
import SmallNavbar from "@/components/Common/SmallNavbar";
import CoolStuff from "@/components/Home/CoolStuff";
import InfoBoxes from "@/components/Home/InfoBoxes";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";

export default function Home() {
  return (
    <div className="w-full relative selection:bg-[#A78BFA] selection:text-white min-h-[100vh] gap-10 flex flex-col items-center bg-black text-white">
      <CursorFollower />
      {/* <EntryAnimation /> */}
      <Navbar />
      <SmallNavbar />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section2 />
      <GOTOTOPBUtton />

      {/* Section 6 and cool stuff */}
      <div className="flex flex-col gap-32 commonWidth">
        <Section6 />
      </div>
      <InfoBoxes />
      <Footer />
    </div>
  );
}

<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Sphere Grid Background */}

  {/* Your Content/Components */}
</div>;
