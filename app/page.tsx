
import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import Image from "next/image";
import Refer from "@/src/components/Refer/Refer";
import BestOffers from "@/src/components/Modules/BestOffers";
import RecentServices from "@/src/components/Modules/RecentServices";
import GrowthPartner from "@/src/components/GrowthPartner/GrowthPartner";
import TopTrending from "@/src/components/TopTrending/TopTrending";

export default function Home() {
  return (
   <>
     <HeaderSection />
     <Modules />
     <BestOffers />
     <RecentServices />
     <TopTrending />
     <GrowthPartner />
     <Refer />
   </>
  );
}
