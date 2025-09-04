import Navbar from "@/components/Common/Navbar";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";

export default function Home() {
  return (
    <div className="w-full selection:bg-[#A78BFA] selection:text-white h-[300vh] gap-10 flex flex-col items-center bg-black text-white">
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}
