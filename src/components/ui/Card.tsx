"use client";

import { FaStar } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";

export interface ServiceType {
  title: string;
  category: string;
  discount: string;
  earn: string;
  investment: string;
  area: string;
  outlets: string;
  image: string;
  rating: number;
  trusted: string;
}

interface ServiceCardProps {
  service: ServiceType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] px-2 flex-shrink-0">
      <div className="bg-white rounded-[12px] w-full h-auto border border-gray-200 shadow-lg relative py-2 pb-5">
        {/* Image */}
        <div className="relative w-[95%] h-[180px] md:h-[200px] mx-auto rounded-[12px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />

          {/* Bookmark */}
          <div className="absolute top-3 right-3 w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center shadow-md">
            <CiBookmark size={20} color="white" />
          </div>

          {/* Trusted */}
          <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-semibold text-[#2164F4] bg-white rounded-[7px] flex items-center">
            <VscWorkspaceTrusted className="inline-block mr-1" />
            {service.trusted}
          </div>

          {/* Rating */}
          <div className="absolute bottom-2 right-3 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={14}
                color={i < service.rating ? "#FFD700" : "#E0E0E0"}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="px-3 mt-2">
          <h4 className="text-[16px] font-semibold">{service.title}</h4>
          <p className="text-[12px] mt-1">{service.category}</p>

          <div className="flex justify-between ">
            <span className="text-[14px] text-[#39B64C]">{service.discount}</span>
            <span className="text-[12px] bg-[#EAF2FF] px-2 py-[3px] rounded-[10px]">
              {service.earn}
            </span>
          </div>

          <div className="flex justify-center items-center mt-3 text-[10px] sm:text-[11px] font-semibold gap-10">
            <div className="flex flex-col bg-[#108C81] px-3 py-1 text-center rounded-md">
              <span className="text-xs sm:text-sm">{service.investment}</span>
              <span className="font-normal text-[9px] sm:text-[10px]">Investment</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xs sm:text-sm">{service.area}</span>
              <span className="font-normal text-[9px] sm:text-[10px]">Area</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xs sm:text-sm">{service.outlets}</span>
              <span className="font-normal text-[9px] sm:text-[10px]">Outlets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
