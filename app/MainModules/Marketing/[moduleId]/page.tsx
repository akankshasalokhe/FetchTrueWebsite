"use client";

import Image from "next/image";
import CategoryModule from "@/src/components/Marketing/Category";
import { Home, Bookmark, Search } from "lucide-react";
import Link from "next/link";
import RecommendedForYou from "@/src/components/Marketing/Recommend";
import { useEffect,useRef} from "react";
import MostlyUsed from "@/src/components/Marketing/MostlyUsed";
import TopTrending from "@/src/components/Marketing/TopTrending";
import WhyJustOurServices from "@/src/components/Marketing/WhyOurServices";
import SuggestedProviders from "@/src/components/Marketing/Providers";
import { useParams } from "next/navigation";

export default function MarketingHero() {
   const sliderRef = useRef<HTMLDivElement | null>(null);

   const { moduleId } = useParams<{ moduleId: string }>();
   
   
     console.log("MODULE ID IN CLIENT:", moduleId);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 0.5; // smooth speed

    const scroll = () => {
      scrollAmount += speed;
      slider.scrollLeft = scrollAmount;

      // reset when half content is scrolled
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "/image/bannerMarketing.jpg",
    "/image/bannerMarketing.jpg",
    "/image/bannerMarketing.jpg",
    "/image/bannerMarketing.jpg",
    "/image/bannerMarketing.jpg",
    "/image/bannerMarketing.jpg",
  ];

  return (
    <div className="">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full relative bg-[#2A67F4] h-[360px] overflow-visible">

        {/* ---------- BACKGROUND IMAGE ---------- */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/marketingbgdesign.png"
            alt="Marketing Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2A67F4]/20" />
        </div>

        {/* ---------- TOP BAR ---------- */}
        <div
          className="relative z-20 w-full 
                     px-4 sm:px-6 py-5
                     flex items-center justify-between
                     text-white bg-[#2164F4]"
        >
          <div className="flex items-center gap-4 max-w-[1440px] lg:mx-10">
            <Link href="/">
              <Home className="w-5 h-5" />
            </Link>

            <p className="text-sm font-medium opacity-90 hidden sm:block">
              Marketing Service
            </p>
          </div>

          <div className="flex items-center gap-8">
            {/* SEARCH */}
            <div className="flex items-center gap-2
                            bg-[#FFFFFF38] backdrop-blur-md
                            px-4 py-2 rounded-full
                            border border-[#E1E1E1]
                            w-full max-w-[320px]">
              <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none
                           placeholder:text-white/70
                           text-sm w-full"
              />
            </div>

            <Bookmark className="w-8 h-8" />
          </div>
        </div>

        {/* ---------- HERO TEXT ---------- */}
        <div className="relative z-10 max-w-[1328px] h-[260px] mx-auto px-4 sm:px-6">
          <h1
            className="text-white text-center mt-10
                       text-[28px] sm:text-[32px]"
          >
            One Service That you need to stand out in market
          </h1>
        </div>
      

      {/* ================= OVERLAPPING CARD CAROUSEL ================= */}
      <section className="relative z-50 w-full -mt-[140px] pb-30">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-10 w-max px-10"
            >
              {[...images, ...images].map((img, index) => (
                <div key={index}>
                  <div className="
                    w-[300px] sm:w-[360px] lg:w-[480px]
                    h-[200px] sm:h-[240px] lg:h-[270px]
                    bg-black rounded-md overflow-hidden
                  ">
                    <img
                      src={img}
                      alt="Marketing Banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
          <CategoryModule/>
      <RecommendedForYou moduleId={moduleId}/>
      <MostlyUsed moduleId={moduleId}/>
    <TopTrending moduleId={moduleId}/>
    <WhyJustOurServices />
    <SuggestedProviders moduleId={moduleId}/>
    </div>
  );
}
