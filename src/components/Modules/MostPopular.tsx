"use client";

import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { User } from "lucide-react";
import { useMostPopular } from "@/src/context/MostPopularContext";



export default function MostPopular() {
    const { services,loading,error } = useMostPopular();

    if (loading) {
    return <div className="text-center py-20">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[24px] font-semibold mb-6">
          Most Popular
        </h2>

        {/* Cards Row */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">

          {services.map((item) => (
            <div
              key={item.serviceId}
              className="min-w-[352px] bg-[#FFFFFF] border border-[#D2D2D2] rounded-[12px] py-2 shadow-sm"
            >
              {/* Image */}
              <div className="relative mx-auto  w-[328px] h-[170px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.thumbnailImage}
                  alt={item.serviceName}
                  fill
                  className="object-cover"
                />

                  <span className="absolute top-3 left-3 bg-white text-[#2164F4] text-[11px] font-medium px-2 py-[2px] rounded-[7px] flex items-center gap-1">
                    <img src="/image/security.png" alt="" className="w-[12px]" />Trusted
                  </span>
              

                <span className="absolute top-3 right-12 bg-[#F9F5EE] text-[11px] px-2 py-[2px] rounded-full">
                  Discount 5%
                </span>

                <div className="absolute top-3 right-3 w-[28px] h-[28px] bg-black/80 rounded-full flex items-center justify-center">
                  <CiBookmark size={16} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-semibold mb-2">
                  {item.serviceName}
                </h3>
                <span className="ml-auto text-[11px] bg-[#548AFE] text-[#FFFFFF] px-2 py-[2px] rounded-full">
                   Earn {item.franchiseDetails?.commission}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] bg-[#F4F4F4] px-2 py-[2px] rounded-[12px]">
                    {item.category?.name}
                  </span>
                  
                  {/* <span className="text-[11px] bg-[#F4F4F4] px-2 py-[2px] rounded-[12px] flex items-center gap-1">
                    <span className="w-[6px] h-[6px] bg-green-500  rounded-full"></span>
                    {item.mode}
                  </span> */}

                  
                </div>

                                {/* Key Values */}
                {item.keyValues?.length > 0 && (
                  <div className="flex gap-4 text-[12px] text-gray-600 mb-3">
                    {item.keyValues.slice(0, 2).map((kv, i) => (
                      <p key={i}>{kv.value}</p>
                    ))}
                  </div>
                )}


                {/* Features */}
                {/* <div className="flex  gap-4 text-[12px] text-gray-600 space-y-1 mb-3">
                  <p>✏️ Create & Practice</p>
                  <p>👁 Design with empathy</p>
                </div> */}

                {/* Rating + Price */}
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <FaStar
                          key={i}
                          size={18}
                          color={i <= Math.round(item.averageRating) ? "#FFC107" : "#E0E0E0"}
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-[#919191] flex gap-1">
                      <User size={12}/> {item.totalReviews} Reviews
                    </p>
                  </div>

                  <div className="text-right bg-[#FFFFFF]">
                    <p className="text-[11px] text-[#9F9F9F]">
                      Starting from
                    </p>
                    <p className="text-[18px] font-semibold">
                      ₹ {item.price || "0000"} /-
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
