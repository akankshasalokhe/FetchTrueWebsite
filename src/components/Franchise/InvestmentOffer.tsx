"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function InvestmentOfferSection() {
  const [selectedTab, setSelectedTab] = useState("High earning");
  const [selectedYear, setSelectedYear] = useState("2025");

  const yearTabs = ["2025", "2024", "2023"];

  const data = [
    { name: "Food", value: 25, logo: "/image/food.png" },
    { name: "Burger", value: 40, logo: "/image/burger.png" },
    { name: "Noodles", value: 40, logo: "/image/noodles.png" },
    { name: "Mcd", value: 20, logo: "/image/mcd.png" },
  ];

  return (
    <section className="w-full py-16 px-5 flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* LEFT SIDE */}
      <div className="max-w-[350px]">
        <h2 className="text-[28px] font-semibold leading-snug">
          Our Best Franchise <br /> Investment Offer for you
        </h2>

        {/* Toggle Buttons */}
        <div className="bg-gray-100 flex items-center rounded-full px-2 py-1 mt-6 w-[260px]">
          {["High earning", "Low Investment"].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedTab(item)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
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
      <div className="w-full max-w-[500px] bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.08)] p-5">
        {/* Year Tabs */}
        <div className="flex gap-3 mb-3">
          {yearTabs.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm border ${
                selectedYear === year
                  ? "bg-black text-white"
                  : "text-gray-600 bg-gray-100"
              }`}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* Chart Label */}
        <p className="text-[14px] font-semibold text-teal-700 mb-1">High</p>

        {/* Chart */}
        <div className="w-full h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <YAxis tick={{ fontSize: 12 }} domain={[0, 60]} />
              <XAxis tick={false} />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#0C9E8A" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Logos Under Bars */}
        <div className="flex justify-between mt-3 px-3">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.logo}
                alt={item.name}
                className="w-[40px] h-[40px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
