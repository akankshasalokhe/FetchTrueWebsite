"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

interface ServiceCardProps {
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export default function ServiceCard({
  title,
  category,
  price,
  rating,
  image,
}: ServiceCardProps) {
  return (
    <div
      className="
        min-w-[280px]
        sm:min-w-[320px]
        lg:w-[384px]
        bg-[#F9F5EE]
        rounded-[13.09px]
        relative
        flex-shrink-0
      "
    >
      {/* Image */}
      <div className="relative m-3 h-[160px] sm:h-[180px] rounded-[13.09px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Trusted */}
        <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-lg text-[11px] sm:text-[12px] font-medium text-[#2563EB] flex items-center gap-1">
          <img src="/image/security.png" alt="" width={11} />
          Trusted
        </div>

        {/* Discount */}
        <div className="absolute top-2 right-12 px-3 py-1 rounded-lg border bg-[#F9F5EE] text-[11px] sm:text-[12px]">
          Discount 30%
        </div>

        {/* Bookmark */}
        <button className="absolute top-2 right-2 w-9 h-9 bg-black rounded-full flex items-center justify-center">
          <Bookmark size={18} className="text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="px-3 pb-4">
        <h3 className="font-inter font-semibold text-[18px] sm:text-[20px]">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span className="bg-white px-3 py-1 rounded-full text-[11px] sm:text-[12px] text-gray-500">
            {category}
          </span>

          <span className="bg-white px-3 py-1 rounded-full text-[11px] sm:text-[12px]">
            Earn Up to 5%
          </span>
        </div>

        {/* Rating + Price */}
        <div className="flex items-end justify-between mt-4">
          <div>
            <span className="text-[11px] text-gray-500">Reviews</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-[28px] ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end gap-1">
            <span className="font-semibold text-[22px] sm:text-[26px]">₹</span>
            <span className="font-semibold text-[22px] sm:text-[26px]">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
