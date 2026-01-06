"use client";

import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function LowInvestmentFranchises() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-[22px] md:text-[32px] font-semibold">
          Here are 3 Best Franchises that are Low in Investment
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[18px] mt-2">
          start with low investment franchises
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 place-items-center">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-white w-full max-w-[353px] rounded-[20px] shadow-md overflow-hidden border"
          >
            {/* IMAGE */}
            <div className="relative h-[180px]">
              <img
                src="/image/pizzahut.jpg"
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* LOGO */}
              <div className="absolute top-4 right-4 bg-[#FFE8E8] w-[70px] h-[64px] md:w-[82px] md:h-[76px] rounded-xl flex items-center justify-center">
                <img src="/image/pizzahut.png" className="w-[60px]" />
              </div>

              {/* TITLE */}
              <div className="absolute top-4 left-4 text-white">
                <h3 className="font-semibold text-[16px] md:text-[18px]">
                  Pizza Hut
                </h3>
                <p className="text-[12px] md:text-[13px]">
                  Food & Beverage
                </p>

                {/* RATING */}
                <div className="flex gap-1 mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
              </div>

              {/* BADGES */}
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full">
                  Discount 20%
                </span>
                <span className="bg-blue-100 text-blue-700 text-[11px] px-3 py-1 rounded-full">
                  Earn Up to 30%
                </span>
              </div>
            </div>

            {/* DETAILS */}
            <div className="px-4 py-4">
              <p className="text-[13px] text-[#746969] mb-3">
                Details
              </p>

              {/* LOCATION + REVENUE */}
              <div className="flex justify-between gap-4 mb-5">
                <div>
                  <p className="text-[#746969] text-[11px]">
                    Available Location
                  </p>
                  <p className="font-medium flex items-center gap-1 text-[13px] md:text-[14px]">
                    <FaLocationDot className="text-[#EF1D1D]" size={14} />
                    Pune, Maharashtra
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[#746969] text-[11px]">
                    Monthly Revenue
                  </p>
                  <p className="font-semibold text-[13px] md:text-[14px]">
                    2.50 Lac – 4.50 Lac
                  </p>
                </div>
              </div>

              {/* BOTTOM STATS */}
              <div className="grid grid-cols-3 text-center gap-3">
                <div>
                  <p className="font-semibold text-[12px]">70%</p>
                  <p className="text-[10px] text-gray-500">
                    Profit Margin
                  </p>
                </div>

                <div className="border-x">
                  <p className="font-semibold text-[12px]">
                    10L – 20L
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Investment Range
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[12px]">100</p>
                  <p className="text-[10px] text-gray-500">
                    Total Outlet
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
