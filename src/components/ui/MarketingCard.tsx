"use client";

import { FaStar } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";

interface MarketingCardProps {
  image: string;
  title: string;
  category: string;
  price: number | string;
  rating?: number;
  reviews?: string;
  discount?: string;
  earnLabel?: string;
}

export default function MarketingCard({
  image,
  title,
  category,
  price,
  rating = 4,
  reviews = "2,400+ Reviews",
  discount = "Discount 30%",
  earnLabel = "Earn Up to 5%",
}: MarketingCardProps) {
  return (
    <div
      className="
        min-w-[300px]
        sm:min-w-[300px]
        md:min-w-[320px]
        lg:min-w-[369.93px]
        bg-white
        border
        border-[#DCDCDC]
        rounded-xl
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="
            h-[160px]
            sm:h-[180px]
            lg:h-[193px]
            w-full
            object-cover
            p-2
            rounded-xl
          "
        />

        {/* CHECK ICON */}
        <div className="absolute top-3 left-3 bg-white border rounded w-5 h-5 flex items-center justify-center">
          <VscWorkspaceTrusted className="text-blue-600 text-xs" />
        </div>

        {/* DISCOUNT */}
        <span className="absolute top-3 right-10 bg-[#89FF9B] text-[10px] sm:text-[11px] px-2 py-[2px] rounded">
          {discount}
        </span>

        {/* BOOKMARK */}
        <div className="absolute top-3 right-3 bg-black/60 p-1 rounded-full">
          <BsBookmark className="text-white" size={13} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 sm:px-4">
        <div className="flex items-start justify-between gap-2">
          <div className=" ">
            <h3 className="text-[15px] sm:text-[16px] font-semibold leading-tight truncate">
              {title}
            </h3>

            <p className="text-[11px] sm:text-[12px] text-center text-[#232323] mb-5 mt-1 bg-[#EFF4FF]  rounded-[9px] ">
              {category}
            </p>
          </div>

          {/* EARN TAG */}
          <span className="inline-block text-[10px] sm:text-[11px] text-white bg-[#548AFE] px-2 py-1 rounded-[6px] mb-3 whitespace-nowrap">
            {earnLabel}
          </span>
        </div>

        {/* FEATURES + PRICE */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex-1">
            <div className="flex  text-[10px] gap-1 lg:gap-3 lg:text-[12px] text-[#232323] mb-3">
              <span>⚡ Quick Recognize</span>
              <span>⏱ On Time guaranty</span>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={11}
                    className={i < rating ? "text-[#FBBD1D]" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#919191]">
                {reviews}
              </span>
            </div>
          </div>

          {/* PRICE */}
          <div className="flex flex-col items-center bg-[#F5F8FF] rounded-[12px] px-2 py-1">
            <span className="text-[9px] sm:text-[10px] text-gray-400">
              Starting from
            </span>
            <span className="text-[18px] sm:text-[20px] font-medium text-[#232323]">
              ₹ {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
