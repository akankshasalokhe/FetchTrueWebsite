"use client";

import ExploreAllServices from "@/src/components/Legal/ExploreAllServices";
import MostlyUsedService from "@/src/components/Legal/MostlyUsedService";
import RecommendedSection from "@/src/components/Section/RecommendedSection";
import TopLegalServicesSection from "@/src/components/Section/TopLegalServicesSection";
import Image from "next/image";
import { useRef } from "react";


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
  
  const scrollByCard = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
  
    const cardWidth =
      sliderRef.current.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 0;
  
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="flex justify-center ">
      {/* NAVBAR */}
      <div
        className="
          w-[1329px]
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
          {/* Home Icon */}
          <img
            src="/image/Group 3.png"
            alt="Home Icon"
            className="text-#A3623A"
            style={{ width: "34.36px", height: "42.95px" }}
          />

          {/* Back Icon */}
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black hidden lg:block"
            
          />

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
        <img
          src="/image/Vector (4).png"
          alt="Bookmark Icon"
          className="text-#A3623A"
          style={{
            width: "18.61px",
            height: "27.25px",
          }}
        />
      </div>
      </section>

      <section className="relative z-10 w-full flex justify-center mt-18 lg:mt-20 mb-30 px-4 pb-20">
            <div className="w-full max-w-[1200px]">
      
      
              {/* ================= CAROUSEL ================= */}
              <div className="relative">
      
                {/* LEFT ARROW */}
                <button
                  onClick={() => scrollByCard("left")}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
                >
                  ‹
                </button>
      
                {/* RIGHT ARROW */}
                <button
                  onClick={() => scrollByCard("right")}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
                >
                  ›
                </button>
      
                {/* SLIDER */}
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
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      data-card
                      className="
                        relative
                        snap-center
                        min-w-[260px]
                        sm:min-w-[420px]
                        lg:min-w-[1007px]
                        h-[200px]
                        sm:h-[360px]
                        lg:h-[577px]
                        rounded-[35px]
                        bg-[#D9D9D9]
                        overflow-hidden
                        flex-shrink-0
                      "
                    >
                      <Image
                        src="/image/backImage.jpg"
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

      <RecommendedSection
        title="Recommended Legal Services"
        services={legalRecommendedServices}
      />

      <TopLegalServicesSection 
        title="Todays Top Services"
        services={legalRecommendedServices}
      />

      <MostlyUsedService />
      <ExploreAllServices />
    </>
  );
};

