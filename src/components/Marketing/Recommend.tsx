"use client";

import Image from "next/image";
import { useRef } from "react";
import { Bookmark, ShieldCheck } from "lucide-react";
import { FaStar, FaUsers } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

import MostlyUsed from "./MostlyUsed";
import CardService from "./CardService";
import WhyOurServices from "./WhyOurServices";
import SuggestedProviders from "./Providers";

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
  const sliderRef = useRef(null);

  return (
    <div className="w-full bg-white">
      <section className="w-full max-w-[1351px] mx-auto flex flex-col gap-6 px-4 sm:px-6 mt-14">

        {/* TITLE */}
        <h2 className="font-inter font-semibold text-[18px] sm:text-[20px] leading-[30px]">
          Recommended for You
        </h2>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-3"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[280px] sm:min-w-[340px] lg:min-w-[392px]
                         h-[300px] sm:h-[330px] lg:h-[362px]
                         rounded-[14px] overflow-hidden bg-gray-200 shrink-0"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* TRUSTED */}
              <div className="absolute top-3 left-3 bg-white rounded-lg px-2 py-1 flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#2164F4]" />
                <span className="text-xs font-medium text-[#2164F4]">
                  Trusted
                </span>
              </div>

              {/* DISCOUNT */}
              <div className="absolute top-3 right-14 bg-[#89FF9B] border border-[#DDDDDD]
                              rounded-lg px-2 py-[2px] text-xs font-medium">
                Discount 30%
              </div>

              {/* BOOKMARK */}
              <Bookmark
                size={30}
                className="absolute top-3 right-3 text-white bg-black/70 p-1 rounded-full"
              />

              {/* BOTTOM CARD */}
              <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl p-4 flex justify-between gap-4">

                {/* LEFT */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-inter font-semibold text-[16px] sm:text-[18px]">
                    {item.title}
                  </h3>

                  <span className="bg-[#EEF2FF] text-[#4F46E5] text-xs px-3 py-[2px] rounded-full w-fit">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaUsers size={12} />
                      {item.users}
                    </span>
                    <span className="flex items-center gap-1">
                      <MdTimer size={12} />
                      On Time
                    </span>
                  </div>

                  {/* RATING */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                    <FaStar size={14} className="text-gray-300" />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end justify-between shrink-0">
                  <span className="text-xs font-medium text-green-600">
                    Earn Up to 5%
                  </span>

                  <div className="bg-[#F2F6FF] rounded-full px-4 py-2">
                    <span className="font-semibold text-[16px]">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <MostlyUsed />
      <CardService />
      <WhyOurServices />
      <SuggestedProviders />
    </div>
  );
}
