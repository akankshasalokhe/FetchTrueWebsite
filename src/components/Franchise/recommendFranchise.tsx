"use client";

import { FaStar } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Residential Property",
    subtitle: "3BHK Premium Apartment",
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "10–20Lac",
    outlets: 10,
    area: "1500 Sq – 1000 Sq",
    price: "45L",
    image: "/image/franchiseRecommand.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Residential Property",
    subtitle: "3BHK Premium Apartment",
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "10–20Lac",
    outlets: 10,
    area: "1500 Sq – 1000 Sq",
    price: "45L",
    image: "/image/franchiseRecommand.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Residential Property",
    subtitle: "3BHK Premium Apartment",
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "10–20Lac",
    outlets: 10,
    area: "1500 Sq – 1000 Sq",
    price: "45L",
    image: "/image/franchiseRecommand.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Residential Property",
    subtitle: "3BHK Premium Apartment",
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "10–20Lac",
    outlets: 10,
    area: "1500 Sq – 1000 Sq",
    price: "45L",
    image: "/image/franchiseRecommand.jpg",
    rating: 4,
  },
  {
    id: 1,
    title: "Residential Property",
    subtitle: "3BHK Premium Apartment",
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "10–20Lac",
    outlets: 10,
    area: "1500 Sq – 1000 Sq",
    price: "45L",
    image: "/image/franchiseRecommand.jpg",
    rating: 3,
  },
  // Add more objects for each service
];

export default function Recommended() {
  return (
    <section className="w-full flex flex-col gap-[35px] mt-20">
      {/* ---------- TITLE ---------- */}
      <h2 className="font-inter font-semibold text-[24px] leading-[36px] w-full max-w-[1304px] mx-auto">
        Recommended For You
      </h2>

      {/* ---------- HORIZONTAL SCROLL ---------- */}
      <div className="w-full max-w-[1304px] mx-auto overflow-x-auto no-scrollbar flex gap-6 pb-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/MainModules/Franchise/details/${item.id}`}
            className="min-w-[300px] max-w-[300px]"
          >
          <div
            key={item.id}
            className="min-w-[300px] max-w-[300px] h-auto bg-white rounded-[12px] border border-gray-300 shadow-sm p-3"
          >
            {/* ---------- IMAGE + OVERLAYS ---------- */}
            <div className="relative w-full h-[160px] rounded-[10px] overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />

              {/* ---------- TRUSTED BADGE ---------- */}
              <div
                className="
                  absolute 
                  top-[12.97px] 
                  left-[13.94px]
                  w-[53.24px]
                  h-[14.6px]
                  border border-gray-300
                  bg-white
                  rounded-[4.26px]
                  flex items-center justify-center
                  text-[7px] font-semibold
                  text-[#2164F4]
                "
              >
               <VscWorkspaceTrusted className="inline-block mr-1" /> Trusted
              </div>

              {/* ---------- BOOKMARK ICON ---------- */}
              <div
                className="
                  absolute 
                  top-[12.97px] 
                  right-[13px]
                  w-[24.27px]
                  h-[24.27px]
                  bg-[#000000]
                  rounded-full 
                  border 
                  flex items-center justify-center
                "
              >
                <CiBookmark size={16} color="#FFFFFF" />
              </div>

              {/* ---------- STAR RATING ---------- */}
              {/* Rating */}
                <div className="absolute bottom-[10px] right-[12px] flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      color={i < item.rating ? "#FFD700" : "#E0E0E0"}
                    />
                  ))}
                </div>

            </div>

            {/* ---------- TITLE ---------- */}
            <h3 className="mt-3 font-semibold text-[18px]">{item.title}</h3>
            <p className="text-[13px] text-gray-600 -mt-1">{item.subtitle}</p>

            {/* ---------- BADGES - RIGHT SIDE ---------- */}
            <div className="flex justify-between mt-1">
                
              <div className="flex items-center text-[13px]">
             <FaLocationDot /><p>{item.location}</p>
              </div>

              <div className="flex flex-col">
                {/* Earn Upto 5% */}
                <span
                  className="
                    border border-gray-300 
                    rounded-[4.78px] 
                    text-[12px]
                    px-2 py-1
                  "
                >
                  Earn Upto {item.earning}
                </span>

                {/* Discount */}
                <span
                  className="
                    bg-[#76FF8B] 
                    text-green-800 
                    text-[12px] 
                    px-2 py-1 
                    rounded-[4.78px] 
                    mt-1
                  "
                >
                  Discount {item.discount}
                </span>
              </div>
            </div>

            {/* ---------- DETAILS ---------- */}
            <div className="mt-3 text-[12px] text-gray-700 leading-[14px]">
                <p className="font-semibold">Details</p>
              <p>
                Monthly Earning Potential:{" "}
                <span className="font-semibold">{item.monthly}</span>
              </p>
              <p>Number Outlet:<span className="font-semibold">{item.outlets}</span> </p>
            </div>

            {/* ---------- AREA + PRICE ---------- */}
            <div className="mt-3 flex items-center justify-between text-[14px]">
            <div className="flex gap-1 items-center">
                <img src="/image/areaa.png" className="w-[14.3px] h-[14.3px]"/>
                <p className="font-semibold"> Area {item.area}</p>
            </div>
            
             <p className="font-bold text-[18px]"> ₹{item.price}</p>
            </div>
          </div>
           </Link>
        ))}
      </div>
    </section>
  );
}
