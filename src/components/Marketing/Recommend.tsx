"use client";

import Image from "next/image";
import { useRef } from "react";
import { Bookmark, ShieldCheck } from "lucide-react";
import { FaStar, FaUsers } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const services = [
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
  },
];

export default function RecommendedForYou() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-[1351px] mx-auto flex flex-col gap-[28px] px-6 mt-20">
      {/* ---------- TITLE ---------- */}
      <h2 className="font-inter font-semibold text-[20px] leading-[30px]">
        Recommended for You
      </h2>

      {/* ---------- MANUAL SCROLL SLIDER ---------- */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-3 cursor-grab active:cursor-grabbing"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[392.39px] h-[362.04px] rounded-[13.49px] overflow-hidden bg-gray-200 flex-shrink-0"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* TRUSTED BADGE */}
            <div className="absolute top-[17px] left-[13.49px] bg-white rounded-[7.87px] px-[8.99px] py-[3.37px] flex items-center gap-[11.24px]">
              <ShieldCheck size={14} className="text-[#2164F4]" />
              <span className="text-xs font-medium text-[#2164F4]">
                Trusted
              </span>
            </div>

            {/* DISCOUNT */}
            <div className="absolute top-[16.86px] left-[238.36px] bg-[#89FF9B] border border-[#DDDDDD] rounded-[7.51px] px-2 py-[2px] text-xs font-medium">
              Discount 30%
            </div>

            {/* BOOKMARK */}
            <Bookmark className="absolute top-[12.37px] left-[348.55px] w-[31.48px] h-[31.48px] text-white bg-black p-1 rounded-full" />

            {/* BOTTOM CARD */}
            <div className="absolute top-[228.24px] left-[13.49px] w-[366.53px] h-[123.68px] bg-white rounded-[11.24px] p-4 flex justify-between">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-2 w-[212.5px]">
                <h3 className="font-inter font-semibold text-[20px] leading-[30px]">
                  {item.title}
                </h3>

                <span className="inline-block bg-[#EEF2FF] text-[#4F46E5] text-xs px-3  rounded-[10.6px] w-fit">
                  {item.category}
                </span>

                <div className="flex items-center gap-[15.74px] text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaUsers size={12} />
                    {item.users}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdTimer size={12} />
                    On Time guaranty
                  </span>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-[2.77px] text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                  <FaStar size={14} className="text-gray-300" />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end justify-between">
                <span className="text-xs font-medium text-green-600">
                  Earn Up to 5%
                </span>

                <div className="bg-[#F2F6FF] rounded-[20.75px] px-6 py-3">
                  <span className="font-semibold text-[18px]">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
