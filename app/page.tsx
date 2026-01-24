
import HeaderSection from "@/src/components/Header/Header";
import Modules from "@/src/components/Modules/Modules";
import Refer from "@/src/components/Refer/Refer";
import BestOffers from "@/src/components/Modules/BestOffers";
import GrowthPartner from "@/src/components/GrowthPartner/GrowthPartner";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import ScrollableRow from "@/src/components/ui/ScrollableRow";
import MostlyUsed from "@/src/components/Modules/MostPopular";
import HowAppWorks from "@/src/components/Modules/HowAppWorks";
import TopTrending from "@/src/components/Modules/TopTrending";
import WhyFetchTrue from "@/src/components/Modules/WhyFetchTrue";
import ModuleFeatures from "@/src/components/Modules/ModuleFeatures";
import Recommendation from "@/src/components/Modules/Recommendation";



export default function Home() {
  return (
   <>
     <Navbar />
     <HeaderSection />
     <Modules />
     <BestOffers />
     <Recommendation />
     {/* <ScrollableRow title="Recent Services" services={services} />
     <ScrollableRow title="Recommendation For You" services={services} /> */}
     {/* <RecentServices /> */}
     <MostlyUsed />
     <HowAppWorks />
     <TopTrending />
     <WhyFetchTrue />
     <ModuleFeatures />
     <GrowthPartner />
     <Refer />
     {/* <Footer /> */}
    
     
   </>
  );
}
