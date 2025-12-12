"use client";

import { useState } from "react";

export default function InvestmentOfferSection() {
  const [selectedTab, setSelectedTab] = useState("High earning");
  const [selectedYear, setSelectedYear] = useState("2025");

  const data = [
    { name: "Food", value: 25, logo: "/image/Foods.png" },
    { name: "Burger", value: 60, logo: "/image/burgerKing.png" },
    { name: "Nestle", value: 65, logo: "/image/Nestle.png" },
    { name: "PizzaHut", value: 20, logo: "/image/pizzahut.png" },
    { name: "Mcd", value: 30, logo: "/image/mcDonald.png" },
  ];

  return (
    <section className="w-full py-16 px-5 flex flex-col lg:flex-row justify-around items-center gap-10">

      {/* LEFT SIDE */}
      <div className="max-w-[350px] text-center lg:text-left">
        <h2 className="text-[28px] font-semibold leading-snug">
          Our Best Franchise <br /> Investment Offer for you
        </h2>

        {/* Toggle Buttons */}
        <div className="bg-gray-100 flex items-center rounded-full px-2 py-1 mt-6 w-full max-w-[260px] mx-auto lg:mx-0">
          {["High earning", "Low Investment"].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedTab(item)}
              className={`px-4 py-2 rounded-full text-sm transition-all w-1/2 ${
                selectedTab === item
                  ? "bg-black text-white shadow-md"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE CHART CARD */}
      <div
        className="
          bg-white rounded-3xl shadow-sm p-6 
          w-full
          max-w-[600px]
          border
          border-[#E9E9E9]
        "
        style={{
          borderWidth: "1.64px",
          height: "auto",
        }}
      >
        {/* YEAR TABS */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {["2025", "2024", "2023"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{ borderRadius: "16.41px" }}
              className={`text-sm border px-4 py-2 flex-1 sm:flex-none sm:w-[141.14px] text-center ${
                selectedYear === year
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* GRAPH AREA */}
        <div className="flex w-full flex-col sm:flex-row">
          {/* LEFT Y-AXIS LABELS */}
          <div
            className="
              flex flex-col justify-between text-gray-600 text-xs sm:text-sm
              mb-4 sm:mb-0
            "
            style={{ width: "52.52px" }}
          >
            <p className="font-semibold text-teal-700">High</p>
            <p>60L</p>
            <p>50L</p>
            <p>40L</p>
            <p>30L</p>
            <p>20L</p>
            <p>10L</p>
            <p>0</p>
          </div>

          {/* BARS */}
          <div className="flex-1 flex items-end justify-between px-3 sm:px-8 h-[250px] sm:h-[330px]">

            {/* Responsive bar generator */}
            {[
              { h: 90, color: "#108C81" },
              { h: 160, color: "#E8E8E8" },
              { h: 140, color: "#108C81" },
              { h: 160, color: "#E8E8E8" },
              { h: 80, color: "#108C81" },
            ].map((bar, i) => (
              <div
                key={i}
                className="w-[24px] sm:w-[36.11px]"
                style={{
                  height: `${bar.h}px`,
                  borderRadius: "24.62px",
                  backgroundColor: bar.color,
                }}
              ></div>
            ))}

          </div>
        </div>

        {/* BOTTOM LOGOS */}
        <div
          className="
            flex items-center justify-between mt-10 mx-auto 
            gap-3 sm:gap-[32.82px] 
            w-full max-w-[430px] 
            flex-wrap
          "
        >
          {data.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={item.name}
              className="rounded-full"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#F4F4F4",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
