import GrowthPartner from "@/src/components/GrowthPartner/GrowthPartner";
import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import Refer from "@/src/components/Refer/Refer";
import TopTrending from "@/src/components/TopTrending/TopTrending";
import Image from "next/image";

export default function Home() {
  return (
   <>
     <HeaderSection />
     <Modules />
     <TopTrending />
     <GrowthPartner />
     <Refer />
   </>
  );
}
