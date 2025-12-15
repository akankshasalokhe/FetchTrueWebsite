"use client";

import MostlyUsed from "@/src/components/Marketing/MostlyUsed";
import RecommendedForYou from "@/src/components/Marketing/Recommend";
import { Home, LogOut, Bookmark, Search } from "lucide-react";

export default function MarketingHero() {
  return (
    <>
    <section className="w-full bg-[#2A67F4] relative overflow-hidden">
      {/* ---------- TOP BAR ---------- */}
      <div className="max-w-[1328px] mx-auto px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <Home className="w-5 h-5" />
          <LogOut className="w-5 h-5" />
        </div>

        <p className="text-sm font-medium opacity-90">
          Marketing Service
        </p>

        <Bookmark className="w-5 h-5" />
      </div>

      <div className="w-full h-px bg-white/30" />

      {/* ---------- HERO CONTENT ---------- */}
      <div className="max-w-[1328px] mx-auto px-6 pt-14 pb-24 relative">
        {/* Background Shapes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT TEXT */}
          <h1 className="text-white font-serif text-[32px] leading-[44px] max-w-[520px]">
            One Service That you need to
            <br />
            stand out in market
          </h1>

          {/* SEARCH */}
          <div className="flex justify-start lg:justify-end">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-full max-w-[320px] text-white">
              <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none placeholder:text-white/70 text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* ---------- CARD ---------- */}
        <div className="relative z-10 mt-20">
          <div className="bg-gradient-to-br from-[#F7F9FF] to-[#EEF3FF] rounded-[28px] px-10 py-12 max-w-[980px] mx-auto shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* TEXT */}
              <div className="max-w-[420px]">
                <h2 className="text-black text-[32px] font-semibold leading-[42px]">
                  Best Marketing’s
                  <br />
                  Services
                </h2>

                <p className="text-gray-700 mt-4 text-[16px] leading-[26px]">
                  Quick and trusted service that
                  <br />
                  make you grow faster
                </p>
              </div>

              {/* FIGMA-STYLE ICON */}
              <div className="relative w-[140px] h-[140px]">
                <div className="absolute top-0 left-8 w-16 h-8 bg-[#FF5C2A] rounded-full" />
                <div className="absolute top-0 left-16 w-16 h-8 bg-[#FF7A6A] rounded-full" />
                <div className="absolute top-8 left-8 w-8 h-16 bg-[#9B5CFF] rounded-full" />
                <div className="absolute top-8 left-16 w-8 h-16 bg-[#22C0F2] rounded-full" />
                <div className="absolute top-16 left-8 w-8 h-16 bg-[#18C77A] rounded-full" />
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-12">
              <button className="bg-[#2A67F4] text-white px-14 py-3 rounded-full text-lg font-medium hover:scale-105 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RecommendedForYou />
    <MostlyUsed />
    </>
  );
}
