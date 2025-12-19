// "use client";

// import Image from "next/image";
// import { Bookmark } from "lucide-react";

// const services = [
//   {
//     title: "LLP Registration",
//     category: "Legal Service",
//     price: 4550,
//     rating: 4,
//     image: "/image/LLPRegistration.jpg",
//   },
//   {
//     title: "LLP Registration",
//     category: "Legal Service",
//     price: 4550,
//     rating: 4,
//     image: "/image/LLPRegistration.jpg",
//   },
//   {
//     title: "LLP Registration",
//     category: "Legal Service",
//     price: 4550,
//     rating: 4,
//     image: "/image/LLPRegistration.jpg",
//   },
//   {
//     title: "LLP Registration",
//     category: "Legal Service",
//     price: 4550,
//     rating: 4,
//     image: "/image/LLPRegistration.jpg",
//   },
// ];

// export default function TopLegalService() {
//   return (
//     <section className="w-full mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-0">
//       {/* Heading */}
//       <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px] ms-[120.20px]">
//         Top Legal Services
//       </h2>

//       {/* FULL WIDTH GRADIENT */}
//       <div className="bg-gradient-to-b from-[#4D2D21] via-[#F3D6CB] to-[#B3694D] py-8 sm:py-10 mb-10 w-full">

//         {/* INNER WRAPPER → GAP BETWEEN GRADIENT & CARDS */}
//         <div className="px-4 sm:px-6 lg:px-12">

//           {/* CARDS ROW */}
//           <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scroll-smooth pb-4 scrollbar-hide">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   min-w-[260px]
//                   sm:min-w-[320px]
//                   lg:w-[384px]
//                   bg-[#F9F5EE]
//                   rounded-[13.09px]
//                   flex-shrink-0
//                 "
//               >
//                 {/* Image */}
//                 <div className="relative m-3 h-[150px] sm:h-[170px] lg:h-[180px] rounded-[13.09px] overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />

//                   {/* Trusted */}
//                   <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-lg text-[10px] sm:text-[12px] font-medium text-[#2563EB] flex items-center gap-1">
//                     <img src="/image/security.png" alt="" width={11} />
//                     Trusted
//                   </div>

//                   {/* Discount */}
//                   <div className="absolute top-2 right-12 px-3 py-1 rounded-lg border bg-[#F9F5EE] text-[10px] sm:text-[12px]">
//                     Discount 30%
//                   </div>

//                   {/* Bookmark */}
//                   <button className="absolute top-2 right-2 w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center">
//                     <Bookmark size={16} className="text-white" />
//                   </button>
//                 </div>

//                 {/* Content */}
//                 <div className="px-3 pb-4">
//                   <h3 className="font-inter font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
//                     {item.title}
//                   </h3>

//                   <div className="flex items-center justify-between mt-2">
//                     <span className="bg-white px-3 py-1 rounded-full text-[10px] sm:text-[12px] text-gray-500">
//                       {item.category}
//                     </span>

//                     <span className="bg-white px-3 py-1 rounded-full text-[10px] sm:text-[12px]">
//                       Earn Up to 5%
//                     </span>
//                   </div>

//                   {/* Rating + Price */}
//                   <div className="flex items-end justify-between mt-4">
//                     <div>
//                       <span className="text-[10px] sm:text-[11px] text-gray-500">
//                         Reviews
//                       </span>
//                       <div className="flex gap-1">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <span
//                             key={star}
//                             className={`text-[18px] sm:text-[22px] lg:text-[28px] ${
//                               star <= item.rating
//                                 ? "text-yellow-400"
//                                 : "text-gray-300"
//                             }`}
//                           >
//                             ★
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex items-end gap-1">
//                       <span className="font-semibold text-[18px] sm:text-[22px] lg:text-[26px]">
//                         ₹
//                       </span>
//                       <span className="font-semibold text-[18px] sm:text-[22px] lg:text-[26px]">
//                         {item.price}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

        
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import ServiceCard from "../ServiceCard";

const services = [
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
];

export default function TopLegalService() {
  return (
    <section className="w-full mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-0">
      {/* Heading */}
      <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px] ms-[120.20px]">
        Top Legal Services
      </h2>

      {/* FULL WIDTH GRADIENT */}
      <div className="bg-gradient-to-b from-[#4D2D21] via-[#F3D6CB] to-[#B3694D] py-8 sm:py-10 mb-10 w-full">

        <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto pb-4 mx-15 scrollbar-hide">
                {services.map((item, index) => (
                  <ServiceCard key={index} {...item} />
                ))}
        </div>
         
        
      </div>
    </section>
  );
}