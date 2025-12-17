"use client";

import Image from "next/image";
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
    gradient: "from-white to-[#89F6B8B8]",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
    gradient: "from-white to-[#E0C3FF]",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
    gradient: "from-white to-[#C3E7FF]",
  },
  {
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    price: 450,
    image: "/image/marketing.jpg",
    gradient: "from-white to-[#C3E7FF]",
  },
];

export default function CardService() {
  return (
    <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 mt-24 sm:mt-40 mb-10">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4">

        {services.map((item, index) => (
          <div
            key={index}
            className={`relative
              min-w-[300px] sm:min-w-[340px] lg:min-w-[385.02px]
              h-[300px] sm:h-[325px] lg:h-[353.89px]
              rounded-[11.53px]
              bg-gradient-to-br ${item.gradient}
              shadow-md shrink-0`}
          >
            {/* IMAGE */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2
              w-[90%] h-[150px] sm:h-[165px] lg:h-[180.36px]
              rounded-[11.53px] overflow-hidden"
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" />

              <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#2164F4]" />
                <span className="text-xs font-medium text-[#2164F4]">Trusted</span>
              </div>

              <div className="absolute top-3 right-12 bg-[#89FF9B] text-xs font-medium px-2 py-1 rounded-md">
                Discount 30%
              </div>

              <div className="absolute top-2 right-2 bg-black/70 p-1.5 rounded-full">
                <Bookmark className="text-white w-5 h-5" />
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div
              className="absolute
              top-[185px] sm:top-[195px] lg:top-[200.44px]
              left-1/2 -translate-x-1/2
              w-[90%] h-[120px] sm:h-[130px] lg:h-[140.63px]
              bg-[#FFFFFF6E]
              rounded-[11.53px]
              p-3 sm:p-4
              flex justify-between shadow-sm"
            >
              {/* LEFT */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] sm:text-[18px] font-semibold">
                  {item.title}
                </h3>

                <span className="text-xs bg-[#EEF2FF] text-[#4F46E5] px-3 py-1 rounded-full w-fit">
                  {item.category}
                </span>

                <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaUsers size={12} /> {item.users}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdTimer size={12} /> On Time
                  </span>
                </div>

                <div className="flex gap-1 text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                  <FaStar size={13} className="text-gray-300" />
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end justify-between">
                <span className="text-[11px] sm:text-xs text-green-600 font-medium">
                  Earn Up to 5%
                </span>

                <div className="bg-[#F2F6FF] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full">
                  <span className="font-semibold text-[16px] sm:text-[18px]">
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
