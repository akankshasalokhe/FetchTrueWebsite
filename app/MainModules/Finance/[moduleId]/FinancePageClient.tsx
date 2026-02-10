"use client";

import AllServices from "@/src/components/Finance/AllServices";
import BestSellingSection from "@/src/components/Finance/BestSelling";
import CategorySection from "@/src/components/Finance/Category";
import CostEfficientSection from "@/src/components/Finance/CostEfficient";
import HeaderScroll from "@/src/components/Finance/HeaderScroller";
import RecentlyAddedSection from "@/src/components/Finance/RecentlyAdded";
import RecommendedSection from "@/src/components/Finance/RecommendedSection";
import WhatYouWillArchive from "@/src/components/Finance/WhatYouWillArchive";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FinancePageClient() {

    const { moduleId } = useParams<{ moduleId: string }>();
    
    
      console.log("MODULE ID IN CLIENT:", moduleId);

  return (
    
    <>
      <div className="bg-[#F6FBF8] mx-auto ">
        
        <section className="bg-[#F0F8F3]">
           <section className="w-full flex justify-center  pt-8">
  <div className="w-full max-w-[1440px] h-[60px] flex items-center justify-between px-4 lg:px-6">

    {/* LEFT SIDE */}
    <div className="flex items-center gap-4 lg:gap-5">

      {/* Home Icon */}
      <Link href="/" className="flex items-center">
        <img
          src="/image/Group 1000003962.png"
          alt="Home"
          className="bg-white rounded-full p-2 w-[36px] h-[36px]"
        />
      </Link>


      {/* Page Title */}
      <h1 className="font-inter font-semibold text-[18px] lg:text-[20px] leading-[30px] text-black">
        Finance
      </h1>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-3 lg:gap-4">

      {/* Search Box (Tablet & Desktop) */}
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          className="
            w-[260px] md:w-[380px] lg:w-[540px]
            h-[40px]
            pl-10
            pr-4
            rounded-[15px]
            border border-[#BEBEBE]
            text-[14px]
            bg-white
            shadow-[0px_4px_4px_rgba(208,208,208,1)]
            focus:outline-none
          "
        />

        <img
          src="/image/Vector (27).png"
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
        />
      </div>

      {/* Bookmark Icon */}
      <button className="flex items-center justify-center bg-white rounded-full p-2 w-[36px] h-[36px]">
        <img
          src="/image/Vector (2).png"
          alt="Bookmark"
          className="w-[18.6px] h-[27.2px]"
        />
      </button>

    </div>

  </div>
</section>

  <section className="w-full  py-10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center text-center">

        {/* COINS */}
        <div className="relative mb-8">
          <img
            src="/image/coin.png"
            alt="coin"
            className="w-[200px] animate-bounce duration-1000ms"
          />

        </div>

        {/* HEADING */}
        <h1 className="text-[28px] md:text-[34px] font-medium text-[#232323] leading-tight">
          Smart Financial Decisions for Growing Businesses
        </h1>

        {/* SUBTEXT */}
        <p className="mt-3 text-[22px] font-medium text-[#868686]">
          Deploy ready-to-use and custom AI tools
        </p>

      </div>
    </section>

        </section>

        <HeaderScroll />


           <CategorySection />
           {/* <AllServices moduleId={moduleId} /> */}
           <RecommendedSection moduleId={moduleId} />
           <BestSellingSection moduleId={moduleId}/>
           <RecentlyAddedSection  moduleId={moduleId}/>
           <WhatYouWillArchive moduleId={moduleId}/>
           {/* <CostEfficientSection /> */}
      </div>
    </>
  )
}