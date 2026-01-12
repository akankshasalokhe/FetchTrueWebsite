// "use client";

// import { useRef } from "react";
// import { FaStar } from "react-icons/fa";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { CiBookmark } from "react-icons/ci";

// interface ServiceType {
//   title: string;
//   category: string;
//   discount: string;
//   earn: string;
//   investment: string;
//   area: string;
//   outlets: string;
//   image: string;
//   rating: number;
//   trusted: string;
// }

// const services: ServiceType[] = [
//   {
//     title: "Residential Property Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 30%",
//     earn: "Earn Up to 5%",
//     investment: "10L - 20L",
//     area: "1000 SF - 1500 SF",
//     outlets: "10",
//     image: "/image/recentservice.jpg",
//     rating: 4,
//     trusted: "Trusted",
//   },
//   {
//     title: "Commercial Property Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 25%",
//     earn: "Earn Up to 3%",
//     investment: "20L - 50L",
//     area: "2000 SF - 3000 SF",
//     outlets: "5",
//     image: "/image/recentservice.jpg",
//     rating: 5,
//     trusted: "Trusted",
//   },
//   {
//     title: "Luxury Villa Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 35%",
//     earn: "Earn Up to 6%",
//     investment: "50L - 1Cr",
//     area: "3500 SF - 5000 SF",
//     outlets: "3",
//     image: "/image/recentservice.jpg",
//     rating: 5,
//     trusted: "Trusted",
//   },
//   {
//     title: "Affordable Housing Franchise",
//     category: "Real Estate",
//     discount: "Get discount upto 20%",
//     earn: "Earn Up to 2%",
//     investment: "5L - 10L",
//     area: "800 SF - 1200 SF",
//     outlets: "8",
//     image: "/image/recentservice.jpg",
//     rating: 3,
//     trusted: "Trusted",
//   },
// ];

// export default function Recommendation() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="w-full mt-20 mb-30 px-4 overflow-hidden relative">
//       <h3 className="text-2xl font-medium mb-8 ml-10">Recommendation For You</h3>

//       {/* Scrollable Row (no arrows, no scrollbar) */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar"
//       >
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className="min-w-[320px] sm:min-w-[360px] md:min-w-[380px] px-2"
//           >
//             <div
//               className="bg-white rounded-[12px] w-full h-auto 
//               border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.15)]
//               relative mx-auto py-2 pb-5"
//             >
//               {/* Image */}
//               <div className="relative w-[95%] h-[180px] md:h-[200px] mx-auto rounded-[12px] overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Bookmark */}
//                 <div className="absolute top-[12px] right-[12px] w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center shadow-md">
//                   <CiBookmark size={20} color="white" />
//                 </div>

//                 {/* Trusted */}
//                 <div className="absolute top-[15px] left-[15px] px-2 py-1 text-[10px] font-semibold text-[#2164F4] bg-white rounded-[7px]">
//                   <VscWorkspaceTrusted className="inline-block mr-1" />
//                   {service.trusted}
//                 </div>

//                 {/* Rating */}
//                 <div className="absolute bottom-[10px] right-[12px] flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       size={14}
//                       color={i < service.rating ? "#FFD700" : "#E0E0E0"}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="px-[15px] mt-2">
//                 <h4 className="text-[18px] font-semibold">{service.title}</h4>
//                 <p className="text-[12px] mt-[4px]">{service.category}</p>

//                 <div className="flex justify-between mt-[10px]">
//                   <span className="text-[15px]">{service.discount}</span>
//                   <span className="text-[12px] bg-[#EAF2FF] px-2 py-[3px] rounded-[10px]">
//                     {service.earn}
//                   </span>
//                 </div>

//                 <div className="flex justify-between mt-[12px] text-[11px] font-semibold">
//                   <div className="flex flex-col">
//                     <span>{service.investment}</span>
//                     <span className="font-normal">Investment</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span>{service.area}</span>
//                     <span className="font-normal">Area</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span>{service.outlets}</span>
//                     <span className="font-normal">Outlets</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useRecommended } from "@/src/context/RecommendedContext";

export default function RecommendedServices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { services, loading, error } = useRecommended();

  if (loading) {
    return <div className="text-center py-20">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section className="w-full py-16 bg-[#F6F9FF]">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[22px] font-semibold mb-8">
          Recommended Services
        </h2>

        {/* Manual Scroll Row */}
        <div
          ref={scrollRef}
          tabIndex={0}
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            focus:outline-none
          "
        >
          {services.map((service) => (
            <div
              key={service._id}
              className="min-w-[314px] bg-[#F4F4F4] rounded-[18px] p-4 shadow-sm"
            >
              {/* Image */}
              <div className="relative w-[286px] h-[152px] rounded-[15px] overflow-hidden">
                <img
                  src={service.thumbnailImage}
                  alt={service.serviceName}
                  className="w-full h-full object-cover"
                />

                {/* Bookmark */}
                <div className="absolute top-3 right-3 w-[32px] h-[32px] bg-black/70 rounded-full flex items-center justify-center">
                  <CiBookmark size={18} color="white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-[14px] font-semibold leading-tight line-clamp-2">
                {service.serviceName}
              </h3>

              {/* Category + Rating */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-[11px] font-semibold bg-[#FFFFFF] px-3 py-[1px] rounded-[12px]">
                  {service.category?.name}
                </span>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={18}
                      color={i < service.averageRating ? "#FFC531" : "#E0E0E0"}
                    />
                  ))}
                </div>
              </div>

              {/* Discount / Earn */}
              <div className="flex justify-between items-center  mt-4">
                {/* Setup */}
              <p className="text-[11px] text-gray-400 mt-3">
                Setup & Time
              </p>
              <div className="flex gap-2">
                <span className="text-[11px] bg-blue-100 text-blue-600 px-4 py-[1px]  rounded-full">
                  Discount 5%
                </span>
                <span className="text-[11px] bg-green-100 text-green-600 px-4 py-[1px] rounded-full">
                  Earn {service.franchiseDetails?.commission}
                </span>
                </div>
              </div>

              
            <div className="flex justify-between items-center mt-4"> 
              <ul className="text-[11px] text-[#000000] mt-2 space-y-1">
                <li>⚡ Setup: 1–3 days</li>
                <li>🤖 AI Training: Included</li>
                <li>🛠 Maintenance: Auto-managed</li>
              </ul>

              {/* Price */}
              <div className="flex flex-col justify-between items-center bg-[#FFFFFF] mt-4 py-2 px-6 rounded-[12px]">
                <span className="text-[11px] text-[#686363]">
                  Starting from
                </span>
                <span className="text-[16px] font-semibold text-[#000000]">
                 ₹ {"0000"} /-
                </span>
              </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


