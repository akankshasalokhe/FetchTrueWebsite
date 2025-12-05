
import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import Refer from "@/src/components/Refer/Refer";
import GrowthPartner from "@/src/components/GrowthPartner/GrowthPartner";
import TopTrending from "@/src/components/TopTrending/TopTrending";

export default function Home() {
  return (
   <>
     <HeaderSection />
     <Modules />
     <div className="max-w-full">
      <TopTrending />
     <GrowthPartner />
     <Refer />

     </div>
     
   </>
  );
}
