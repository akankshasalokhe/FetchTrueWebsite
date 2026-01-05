"use client";
import { useState } from "react";
import { ArrowLeft, Bookmark } from "lucide-react";

import BestSellingSection from "@/src/components/Finance/BestSelling";
import CostEfficientSection from "@/src/components/Finance/CostEfficient";
import MostSearches from "@/src/components/Finance/MostSearches";
import RecentlyAddedSection from "@/src/components/Finance/RecentlyAdded";
import RecommendedSection from "@/src/components/Finance/RecommendedSection";

const tabs = [
  { id: "saving", label: "Saving", icon: "💰" },
  { id: "bank", label: "Bank Account", icon: "🏦" },
  { id: "wealth", label: "Wealth Management", icon: "📊" },
  { id: "retirement", label: "Retirement", icon: "👴" },
];

export default function FinanceCategoryDetailPage() {
  const [active, setActive] = useState("saving");

  return (
    <>
      <section className="w-full bg-[#F6FBF8] py-4">
      <div className="max-w-[1440px] mx-auto px-4">
        <div
          className="
            flex items-center justify-between
            h-[60px]
            bg-[#EEF2F1]
            rounded-[14px]
            px-5 py-4
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <img src="/image/vector (29).png" className="w-[25px] h-[25px] text-[#1E9B60]" />
            <h2 className="text-[24px] font-semibold text-[#1A1A1A]">
                Personal Development
            </h2>
          </div>

          {/* RIGHT ICON */}
          <img src="/image/vector (30).png" className="w-[25px] h-[25px] text-[#1E9B60]" />
        </div>
      </div>
    


      {/* FILTER TABS */}
      <section className="w-full bg-[#F4FBF7] pt-8 lg:pt-15 sticky top-0 z-10">
  <div className="max-w-[1400px] mx-auto px-4">

    {/* SCROLLABLE TAB ROW */}
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        whitespace-nowrap
        scrollbar-hide
      "
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-[10px]
              border
              text-[14px]
              font-medium
              transition-all
              flex-shrink-0
              ${
                isActive
                  ? "bg-[#2F9E60] text-white border-[#2F9E60]"
                  : "bg-white text-[#4A4A4A] border-[#D8E6DD] hover:bg-[#F0F7F3]"
              }
            `}
          >
            <span className="text-[16px]">{tab.icon}</span>
            {tab.label}
          </button>
        );
      })}
    </div>

  </div>
</section>


      {/* FILTERED CONTENT */}
      {active === "saving" && (
        <>
          <RecommendedSection category="saving" />
          <BestSellingSection category="saving" />
          <RecentlyAddedSection category="saving" />
          <CostEfficientSection category="saving" />
          <MostSearches category="saving" />
        </>
      )}

      {active === "bank" && (
        <>
          <RecommendedSection category="bank" />
          <BestSellingSection category="bank" />
          <RecentlyAddedSection category="bank" />
          <CostEfficientSection category="bank" />
          <MostSearches category="bank" />
        </>
      )}

      {active === "wealth" && (
        <>
          <RecommendedSection category="wealth" />
          <BestSellingSection category="wealth" />
          <RecentlyAddedSection category="wealth" />
          <CostEfficientSection category="wealth" />
          <MostSearches category="wealth" />
        </>
      )}

      {active === "retirement" && (
        <>
          <RecommendedSection category="retirement" />
          <BestSellingSection category="retirement" />
          <RecentlyAddedSection category="retirement" />
          <CostEfficientSection category="retirement" />
          <MostSearches category="retirement" />
        </>
      )}

      </section>
    </>
  );
}
