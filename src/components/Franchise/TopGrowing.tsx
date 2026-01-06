"use client";

import { useState } from "react";
import { CiBookmark } from "react-icons/ci";

const categories = [
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

const cardsData = [
  {
    id: 1,
    brand: "Mc donalds",
    category: "Hotels & Restaurant",
    price: "₹ 10L - 20L",
  },
  {
    id: 2,
    brand: "Mc donalds",
    category: "Food & Beverage",
    price: "₹ 10L - 20L",
  },
  {
    id: 3,
    brand: "Mc donalds",
    category: "Beauty",
    price: "₹ 10L - 20L",
  },
  {
    id: 4,
    brand: "Mc donalds",
    category: "Automotive",
    price: "₹ 10L - 20L",
  },
  {
    id: 5,
    brand: "Mc donalds",
    category: "Hotels & Restaurant",
    price: "₹ 10L - 20L",
  },
    {
    id: 6,
    brand: "Mc donalds",
    category: "Automotive",
    price: "₹ 10L - 20L",
  },
  {
    id: 7,
    brand: "Mc donalds",
    category: "Hotels & Restaurant",
    price: "₹ 10L - 20L",
  },
];

export default function TopGrowingFranchises() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCards =
    activeCategory === "All"
      ? cardsData
      : cardsData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="w-full py-16 px-4 mx-auto max-w-[1440px]">
      {/* TITLE */}
      <h2 className="text-[22px] font-semibold mb-6">
        Top Growing Brand Franchises
      </h2>

      {/* CATEGORY FILTER */}
      <div className="bg-[#F7F7F7] p-7">
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-[#9747FF] text-[#FFFFFF]"
                : "bg-white  text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARD SCROLL */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              className="w-[210px] bg-[#FFFFFF] rounded-[16px]  p-4 flex-shrink-0"
            >
              {/* HEADER */}
              <div className="flex justify-between items-start leading-4">
                <div>
                  <p className="font-semibold text-[16px]">
                    {item.brand}
                  </p>
                  <p className="text-[12px] text-gray-500">
                    {item.category}
                  </p>
                </div>
                <img
                  src="/image/mcDonald.png"
                  className="w-[65px] h-[41px] rounded-md "
                />
              </div>

              {/* RATING */}
              <div className="text-yellow-500 text-sm ">
                ★ ★ ★ ★ ☆
              </div>
              {/* BOOKMARK */}
              <div className="-mt-4  flex ml-35">
                <button className="text-[10px] bg-[#F7F7F7] text-gray-600 px-2 py-1 rounded">
                  <CiBookmark size={13} />
                </button>
              </div>

              {/* BADGES */}
              <div className="flex gap-2 mt-5">
                <span className="text-[10px] bg-[#EFF4FF] text-blue-600 px-2 py-1 rounded">
                  Earn Up to 5%
                </span>
                <span className="text-[10px] bg-[#E0FFD9] text-green-600 px-2 py-1 rounded">
                  Discount 30%
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-2 bg-[#8B5CF6] text-white text-center py-1 rounded-md font-semibold text-sm">
                {item.price}
              </div>

              {/* FOOTER */}
              <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                <div>
                  <p className="font-semibold text-black ">
                    500sq–1000sq
                  </p>
                  <p>Area Required</p>
                </div>
                <div>
                  <p className="font-semibold text-black">
                    ₹1–3 Lak
                  </p>
                  <p>Monthly Earning</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
