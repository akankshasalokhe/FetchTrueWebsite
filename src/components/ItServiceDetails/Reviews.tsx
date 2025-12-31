"use client";

import React from "react";

/* ================= MOCK DATA ================= */

const OVERALL_RATING = {
  rating: 4.8,
  totalRatings: 2573,
};

const RATING_BREAKDOWN = [
  { label: "Excellent", count: 1115, color: "bg-green-500" },
  { label: "Very Good", count: 701, color: "bg-green-400" },
  { label: "Good", count: 385, color: "bg-orange-400" },
  { label: "Average", count: 125, color: "bg-orange-600" },
  { label: "Poor", count: 247, color: "bg-red-500" },
];

const FEATURE_RATINGS = [
  { label: "Monthly Business", value: 4 },
  { label: "ROI", value: 5 },
  { label: "Marketing", value: 4 },
  { label: "Franchise Service", value: 4 },
];

/* ================= COMPONENT ================= */

const RatingsReviews = () => {
  const maxCount = Math.max(...RATING_BREAKDOWN.map((r) => r.count));

  return (
    // <section className="bg-gray-100 py-10">
    <section className="bg-gray-100 py-10 px-3 md:px-0">

                {/* HEADER */}
        <div className="flex items-start md:justify-center mb-6">
          <h2
            className="bg-black text-white px-10 py-2  text-[12px] md:text-[36px] font-semibold"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
            }}
          >
            Ratings & Reviews
          </h2>
        </div>

      <div className="md:w-[1321px] mx-auto bg-white rounded-2xl p-2 md:p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ================= LEFT ================= */}
          <div>
            <p className="text-gray-500 text-sm md:text-[20px] mb-6">
              Complete overview of franchise requirements and benefits.
            </p>

            <div className="flex gap-10">
              {/* OVERALL SCORE */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[24px] md:text-4xl font-semibold">
                    {OVERALL_RATING.rating}
                  </span>
                   <span className="text-yellow-400 text-2xl">★</span>
                </div>
                <div className="md:-ml-6">
                <p className="mt-2 font-semibold text-[12px] md:text-[20px]">
                  {OVERALL_RATING.totalRatings}
                </p>
                <p className="text-gray-500 text-[12px]">Ratings</p>
                </div>
              </div>

              {/* BREAKDOWN */}
              <div className="flex-1 space-y-6">
                {RATING_BREAKDOWN.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[90px_1fr_40px] items-center gap-4 text-sm"
                  >
                    <span className="text-gray-600 text-[12px] md:text-[20px] whitespace-nowrap">{item.label}</span>

                    <div className="h-2 bg-gray-200 -ml-5 md:-ml-0 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{
                          width: `${(item.count / maxCount) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="text-gray-500 ml-4 text-xs md:text-[16px]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <h3 className="font-semibold md:text-[24px] mb-6">Ratings by features</h3>

            <div className="flex gap-4 md:gap-8">
              {FEATURE_RATINGS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                >
                  {/* CIRCLE */}
                  <div className="relative  w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-black"
                      style={{
                        clipPath: `inset(0 ${
                          100 - (item.value / 5) * 100
                        }% 0 0)`,
                      }}
                    />
                    <span className="text-sm font-semibold z-10">
                      {item.value}/5
                    </span>
                  </div>

                  <p className="text-xs text-center mt-3">
                    {item.label} 
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsReviews;
