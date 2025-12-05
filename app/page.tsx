
import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import Refer from "@/src/components/Refer/Refer";
import BestOffers from "@/src/components/Modules/BestOffers";
import RecentServices from "@/src/components/Modules/RecentServices";
import Recommendation from "@/src/components/Modules/Recommendation";
import GrowthPartner from "@/src/components/GrowthPartner/GrowthPartner";
import TopTrending from "@/src/components/TopTrending/TopTrending";

export default function Home() {
  return (
   <>
     <HeaderSection />
     <Modules />
     <BestOffers />
     <RecentServices />
     <Recommendation />
     <TopTrending />
     <GrowthPartner />
     <Refer />

    
     
   </>
  );
}
