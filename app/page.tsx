
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

// const services = [
//   {
//     title: "Residential Property Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 30%",
//     earn: "Earn Up to 5%",
//     investment: "10L - 20L",
//     area: "1000 SF - 1500 SF",
//     outlets: "10",
//     image: "/image/recentservice.jpg",
//     rating: 4,
//     trusted: "Trusted",
//   },
//   {
//     title: "Commercial Property Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 25%",
//     earn: "Earn Up to 3%",
//     investment: "20L - 50L",
//     area: "2000 SF - 3000 SF",
//     outlets: "5",
//     image: "/image/recentservice.jpg",
//     rating: 5,
//     trusted: "Trusted",
//   },
//   {
//     title: "Luxury Villa Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 35%",
//     earn: "Earn Up to 6%",
//     investment: "50L - 1Cr",
//     area: "3500 SF - 5000 SF",
//     outlets: "3",
//     image: "/image/recentservice.jpg",
//     rating: 5,
//     trusted: "Trusted",
//   },
//   {
//     title: "Affordable Housing Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 20%",
//     earn: "Earn Up to 2%",
//     investment: "5L - 10L",
//     area: "800 SF - 1200 SF",
//     outlets: "8",
//     image: "/image/recentservice.jpg",
//     rating: 3,
//     trusted: "Trusted",
//   },
//   {
//     title: "Affordable Housing Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 20%",
//     earn: "Earn Up to 2%",
//     investment: "5L - 10L",
//     area: "800 SF - 1200 SF",
//     outlets: "8",
//     image: "/image/recentservice.jpg",
//     rating: 3,
//     trusted: "Trusted",
//   },
// ];

export default function Home() {
  return (
   <>
     <Navbar />
     <HeaderSection />
     <Modules />
     <BestOffers />
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
