"use client";

import Image from "next/image";
import CategoryModule from "@/src/components/Marketing/Category";
import { Home, LogOut, Bookmark, Search } from "lucide-react";

export default function MarketingHero() {
  return (
    <div className="bg-[#2A67F4]">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
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
        <div className="relative z-10 max-w-[1329px] mx-auto
                        px-4 sm:px-6 py-5
                        flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <Home className="w-5 h-5" />
            <LogOut className="w-5 h-5" />
          </div>

          <p className="text-sm font-medium opacity-90 hidden sm:block">
            Marketing Service
          </p>

          <Bookmark className="w-5 h-5" />
        </div>

        <div className="relative z-10 w-full h-px bg-white/30" />

        {/* ---------- HERO CONTENT ---------- */}
        <div className="relative z-10 max-w-[1328px] mx-auto px-4 sm:px-6 pt-14 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT TEXT */}
            <h1 className="text-white font-serif
                           text-[28px] sm:text-[32px]
                           leading-[40px] sm:leading-[44px]
                           max-w-[520px]">
              One Service That you need to
              <br />
              stand out in market
            </h1>

            {/* SEARCH */}
            <div className="flex justify-start lg:justify-end">
              <div className="flex items-center gap-2
                              bg-white/20 backdrop-blur-md
                              px-4 py-2 rounded-full
                              w-full max-w-[320px] text-white">
                <Search className="w-4 h-4 opacity-80" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none
                             placeholder:text-white/70
                             text-sm w-full"
                />
              </div>
            </div>
          </div>

          {/* ---------- HERO CARD ---------- */}
          <div className="mt-16 bg-white rounded-[26px]
                          max-w-[1200px] mx-auto px-4 sm:px-10 py-10">

            <div className="bg-gradient-to-br from-[#F7F2F9] to-[#E6EEFF]
                            rounded-[30px]
                            px-6 sm:px-16 py-14
                            max-w-[1037px] mx-auto shadow-xl">

              <div className="flex flex-col lg:flex-row
                              items-center justify-between gap-10">

                {/* TEXT */}
                <div className="max-w-[420px] text-center lg:text-left">
                  <h2 className="text-black text-[32px] sm:text-[40px] lg:text-[50px]
                                 font-semibold leading-tight">
                    Best Marketing’s
                    <br />
                    Services
                  </h2>

                  <p className="text-black mt-4
                                text-[18px] sm:text-[22px] lg:text-[30px]
                                leading-[26px]">
                    Quick and trusted service that
                    <br />
                    make you grow faster
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative">
                  <Image
                    src="/image/Figma.png"
                    alt="Marketing"
                    width={300}
                    height={350}
                    className="w-[220px] sm:w-[260px] lg:w-[300px]
                               h-auto"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center mt-14">
                <button
                  className="bg-[#2164F4] text-white
                             px-14 py-3 rounded-full
                             text-lg font-medium
                             hover:scale-105 transition">
                  Explore
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CategoryModule />
    </div>
  );
}
