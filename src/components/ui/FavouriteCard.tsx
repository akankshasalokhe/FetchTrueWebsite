"use client";

import React from "react";
import { CiBookmark } from "react-icons/ci";

interface Feature {
  title: string;
  icon?: React.ReactNode;
}

interface FavouriteCardProps {
  image: string;
  title: string;
  category: string;
  type: string;
  earnUpto?: string;
  rating?: number;
  reviews?: string;
  features?: Feature[];
  oldPrice?: number;
  price?: number;
  discount?: string;
}

const FavouriteCard: React.FC<FavouriteCardProps> = ({
  image,
  title,
  category,
  type,
  earnUpto,
  rating,
  reviews,
  features = [],
  oldPrice,
  price,
  discount,
}) => {
  const isFinance = type?.toLowerCase() === "finance";

  return (
    <div className="w-full max-w-[424px] bg-gradient-to-b from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col gap-4">

      {/* IMAGE */}
      <div className="relative w-full h-[170px] lg:h-[190px] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Checkbox */}
        <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow">
          <input type="checkbox" />
        </div>

        {/* Bookmark */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <CiBookmark size={20} />
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between gap-3">
        <div>
          <h2 className="text-[15px] sm:text-[16px] font-medium line-clamp-2">
            {title}
          </h2>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] px-2 py-[3px] rounded text-white bg-[#2164F4]">
              {type}
            </span>

            <span className="text-[12px] text-[#868686]">
              {category}
            </span>
          </div>
        </div>

        <div className="text-right">
          {earnUpto && (
            <p className="text-xs text-green-600 font-medium">
              {earnUpto}
            </p>
          )}

          {rating !== undefined && (
            <p className="text-xs text-gray-500 leading-tight mt-1">
              {"⭐".repeat(Math.round(rating))}
              <br />
              {reviews}
            </p>
          )}
        </div>
      </div>

      {/* FEATURES */}
      {features.length > 0 && (
        isFinance ? (
          <div className="bg-white rounded-[10px] border border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
            {features.slice(0, 4).map((item, index) => {
              const parts = item.title.split(" ");
              const label = parts.slice(0, 2).join(" ");
              const value = parts.slice(2).join(" ");

              return (
                <div
                  key={index}
                  className="px-3 py-3 text-center border-b sm:border-b-0 sm:border-r last:border-r-0 flex flex-col items-center gap-1"
                >
                  {item.icon && <div>{item.icon}</div>}
                  <p className="text-[11px] text-[#777]">{label}</p>
                  <p className="text-[14px] font-semibold">{value}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[10px] border border-[#E7E7E7] p-3 flex justify-between gap-4">
            
            {/* Left features */}
            <div className="space-y-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[13px] text-[#555]"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            {/* Right pricing */}
            <div className="flex flex-col items-end justify-between">
              {discount && (
                <span className="bg-[#22C55E] text-white text-[11px] px-2 py-[3px] rounded-md font-medium">
                  {discount}
                </span>
              )}

              {(oldPrice || price) && (
                <div className="text-right">
                  <p className="text-[12px] text-[#666]">
                    Starting From
                  </p>

                  <div className="flex items-center gap-2">
                    {oldPrice && (
                      <span className="text-[#999] line-through text-[13px]">
                        ₹{oldPrice}
                      </span>
                    )}

                    {price && (
                      <span className="text-[18px] font-semibold">
                        ₹{price}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FavouriteCard;
