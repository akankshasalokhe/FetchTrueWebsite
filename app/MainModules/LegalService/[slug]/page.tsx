"use client";

import ExploreAllServices from "@/src/components/Legal/ExploreAllServices";
import MostlyUsedService from "@/src/components/Legal/MostlyUsedService";
import RecommendedSection from "@/src/components/Section/RecommendedSection";
import TopLegalServicesSection from "@/src/components/Section/TopLegalServicesSection";
import Image from "next/image";
import { useRef,useEffect } from "react";
import { Search,Bookmark } from "lucide-react";
import RecommendedForYou from "@/src/components/Legal/RecommendForYou";
import TopTrending from "@/src/components/Legal/TopTrending";
import Link from "next/link";



const legalRecommendedServices = [
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"

  },
  {
    title: "GST Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Tax Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
];

export default function LegalServiceDetailPage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
  
      let animationFrame: number;
      const speed = 0.5; // adjust for faster/slower scroll
  
      const autoScroll = () => {
        slider.scrollLeft += speed;
  
        // reset scroll seamlessly when half is crossed
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
  
        animationFrame = requestAnimationFrame(autoScroll);
      };
  
      animationFrame = requestAnimationFrame(autoScroll);
  
      return () => cancelAnimationFrame(animationFrame);
    }, []);
  return (
    <>
      <section className="flex justify-center ">
      {/* NAVBAR */}
      <div
        className="
          w-full
          h-[60px]
          bg-[#F9F5EE]
          flex
          items-center
          justify-between
          px-4 sm:px-6
          lg:px-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
        

          {/* Back Icon */}
          <Link href="/MainModules/LegalService">
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black hidden lg:block"    
          />
          </Link>

          {/* Title */}
          <h1
            className="
              font-inter
              font-semibold
              lg:text-[22px]
              text-black
            "
          >
            {legalRecommendedServices[0].category}
          </h1>
        </div>

        {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">
            {/* SEARCH */}
            <div className="flex items-center gap-2
                            bg-white backdrop-blur-md
                            px-4 py-2 rounded-full
                            border border-[#E1E1E1]
                            w-full max-w-[320px]">
              <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none
                           placeholder:text-[#00000078]
                           text-sm w-full"
              />
            </div>

            <Bookmark  className="w-8 h-8" color="#A3623A"/>
          </div>
      </div>
      </section>

      <section className=" w-full flex justify-center my-10  px-4">
            <div className="w-full">
      
              {/* ================= CAROUSEL ================= */}
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="
                    flex
                    gap-8
                    overflow-x-auto
                    scroll-smooth
                    snap-x
                    snap-mandatory
                    px-[12%]
                    sm:px-[10%]
                    lg:px-[8%]
                    no-scrollbar
                  "
                >
                  {/* Duplicate items for infinite loop */}
                  {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => (
                    <div
                      key={index}
                      data-card
                      className="
                        relative
                        snap-center
                        w-[505px]
                        h-[265px]
                        bg-[#D9D9D9]
                        overflow-hidden
                        flex-shrink-0
                      "
                    >
                      <Image
                        src="/image/legalbanner.jpg"
                        alt="Legal Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
      
            </div>
          </section>

      {/* <RecommendedSection
        title="Recommended Legal Services"
        services={legalRecommendedServices}
      />

      <TopLegalServicesSection 
        title="Todays Top Services"
        services={legalRecommendedServices}
      /> */}
      <RecommendedForYou />
      <MostlyUsedService />
      <TopTrending />
      {/* <ExploreAllServices /> */}
    </>
  );
};

