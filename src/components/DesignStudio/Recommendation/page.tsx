'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRef, useState } from "react";

/* ---------------- CATEGORY TABS ---------------- */
const CATEGORY_TABS = [
  { label: "All", value: "all" },
  { label: "Below ₹300", value: "0-300" },
  { label: "₹300 – ₹400", value: "300-400" },
  { label: "₹400 – ₹500", value: "400-500" },
  { label: "₹500+", value: "500+" },
];

/* ---------------- SERVICES DATA ---------------- */
const SERVICES = [
  {
    id: 1,
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    rating: 4,
    price: 450,
    discount: "30%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/branding.png",
    bg: "linear-gradient(135deg, #7B61FF, #5A3BFF)",
  },
  {
    id: 2,
    title: "Web Design",
    category: "UI / UX",
    users: "1800+ users",
    rating: 5,
    price: 380,
    discount: "25%",
    trusted: true,
    earn: "Earn Up to 4%",
    image: "/image/webdesign.png",
    bg: "linear-gradient(135deg, #FF8A8A, #FF5C5C)",
  },
  {
    id: 3,
    title: "Poster Design",
    category: "Graphic Design",
    users: "1200+ users",
    rating: 4,
    price: 280,
    discount: "20%",
    trusted: false,
    earn: "Earn Up to 3%",
    image: "/image/poster.png",
    bg: "linear-gradient(135deg, #4FD1FF, #007BFF)",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function Recommendation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = SERVICES.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "0-300") return item.price < 300;
    if (activeTab === "300-400") return item.price >= 300 && item.price < 400;
    if (activeTab === "400-500") return item.price >= 400 && item.price <= 500;
    if (activeTab === "500+") return item.price > 500;
  });

  return (
    <div className="w-full p-4 md:p-6">
      {/* TITLE */}
      <h2 className="text-xl md:text-3xl font-semibold mb-4">
        Branding Services
      </h2>

      {/* CATEGORY TABS */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
              ${
                activeTab === tab.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SWIPEABLE CARDS */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {filteredServices.map((item) => (
          <div
            key={item.id}
            className="snap-center flex-shrink-0
              w-[88vw] sm:w-[70vw] md:w-[360px]
              rounded-3xl p-3 text-white relative shadow-lg"
            style={{ background: item.bg }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* TRUSTED */}
              {item.trusted && (
                <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
                  <img src="/image/security.png" width={14} height={14} />
                  Trusted
                </span>
              )}

              {/* DISCOUNT */}
              <span className="absolute top-3 right-12 bg-green-300 text-black text-xs font-semibold px-3 py-1 rounded-lg">
                Discount {item.discount}
              </span>

              {/* BOOKMARK */}
              <button className="absolute top-3 right-3 bg-black/60 p-1.5 rounded-full">
                <Bookmark size={16} className="text-white" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="bg-white text-black rounded-2xl p-4 mt-4 relative">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <span className="inline-block mt-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>

              <div className="flex items-center gap-4 mt-3 text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  👤 {item.users}
                </span>
                <span className="flex items-center gap-1">
                  ⏱ On Time guaranty
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 text-yellow-400 mt-2">
                {"⭐".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              {/* PRICE */}
              <div className="absolute -bottom-5 right-4 bg-gray-100 text-black font-semibold text-xl px-5 py-3 rounded-2xl shadow-md">
                ₹{item.price}
              </div>

              {/* EARN */}
              <div className="absolute -top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                {item.earn}
              </div>
            </div>
          </div>
        ))}

        {/* MOBILE SPACER */}
        <div className="md:hidden min-w-4" />
      </div>
    </div>
  );
}
