"use client";

import React from "react";

const categories: string[] = [
  "All",
  "Food & Beverage",
  "Hotels & Restaurant",
  "Beauty",
  "Automotive",
  "Fashion & Jewelry",
  "Business & Consultancy",
  "Logistic",
  "Agents Dealers Distributers",
];

export default function TopGrowingFranchises() {
  const cards = Array.from({ length: 5 });

  return (
    <section className="w-full py-10 px-4 md:px-10 lg:px-28 bg-[#F7F7F7]">
      {/* ---------- TITLE ---------- */}
      <h2 className="text-[20px] md:text-[24px] font-semibold mb-5">
        Top Growing Brand Franchises
      </h2>

      {/* ---------- CATEGORY TABS ---------- */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full border text-xs md:text-sm whitespace-nowrap ${
              i === 0
                ? "bg-black text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ---------- HORIZONTAL CARD SCROLL ---------- */}
      <div className="mt-6 w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-5 w-max">
          {cards.map((_, index) => (
            <div
              key={index}
              className="
                w-[180px] 
                sm:w-[200px] 
                md:w-[203.97px] 
                h-auto 
                bg-white 
                rounded-[15.59px] 
                border 
                p-4 
                shadow-sm 
                flex-shrink-0
              "
            >
              {/* Top Logo + Title */}
              <div className="flex items-center justify-between mb-2 w-full">
                <div>
                  <p className="font-semibold text-[16px] md:text-[18.19px] text-black">
                    Mc Donalds
                  </p>
                  <p className="w-[110px] md:w-[127.32px] text-[11px] md:text-[12.99px] text-gray-500">
                    Hotels & Restaurant
                  </p>
                </div>
                <img
                  src="/image/mcDonald.png"
                  className="w-[50px] h-[45px] md:w-[59.96px] md:h-[53.46px] rounded-lg"
                  alt="brand"
                />
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm">
                ★ ★ ★ ★ ☆
              </div>

              {/* Badges */}
              <div className="mt-3 flex gap-2">
                <p className="text-[9px] md:text-[10px] bg-[#EFF4FF] text-blue-600 px-2 py-1 rounded-md">
                  Earn Up to 5%
                </p>
                <p className="text-[9px] md:text-[10px] bg-[#E0FFD9B8] text-green-600 px-2 py-1 rounded-md">
                  Discount 30%
                </p>
              </div>

              {/* Price */}
              <div className="mt-3 bg-[#2E9A91] text-white text-center font-semibold py-2 rounded-md text-sm">
                ₹ 10L - 20L
              </div>

              {/* Bottom Info */}
              <div className="flex justify-between items-center mt-3 text-[9px] md:text-[10px] text-gray-500 border-t pt-2">
                <p>
                  <span className="font-semibold">
                    1000 SF - 1500 SF
                  </span>
                  <br />
                  <span className="text-gray-600">Area Required</span>
                </p>
                <p>
                  <span className="font-semibold">10</span>
                  <br />
                  <span className="text-gray-600">Franchise Outlets</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
