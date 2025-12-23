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

// export default function RecommendedForYou() {
//   return (
//     <section className="w-full max-w-[1277px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-5 mb-20 mt-[-100.20px]">
//       {/* Heading */}
//       <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
//         Recommended For you
//       </h2>

//       {/* Cards Container */}
//       <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scroll-smooth pb-4 scrollbar-hide">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="
//               min-w-[280px]
//               sm:min-w-[320px]
//               lg:w-[384px]
//               bg-[#F9F5EE]
//               rounded-[13.09px]
//               relative
//               flex-shrink-0
//             "
//           >
//             {/* Image */}
//             <div className="relative m-3 h-[160px] sm:h-[180px] rounded-[13.09px] overflow-hidden">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />

//               {/* Trusted */}
//               <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-lg text-[11px] sm:text-[12px] font-medium text-[#2563EB] flex items-center gap-1">
//                 <img src="/image/security.png" alt="" width={11} />
//                 Trusted
//               </div>

//               {/* Discount */}
//               <div className="absolute top-2 right-12 px-3 py-1 rounded-lg border bg-[#F9F5EE] text-[11px] sm:text-[12px]">
//                 Discount 30%
//               </div>

//               {/* Bookmark */}
//               <button className="absolute top-2 right-2 w-9 h-9 bg-black rounded-full flex items-center justify-center">
//                 <Bookmark size={18} className="text-white" />
//               </button>
//             </div>

//             {/* Content */}
//             <div className="px-3 pb-4">
//               <h3 className="font-inter font-semibold text-[18px] sm:text-[20px]">
//                 {item.title}
//               </h3>

//               <div className="flex items-center justify-between mt-2">
//                 <span className="bg-white px-3 py-1 rounded-full text-[11px] sm:text-[12px] text-gray-500">
//                   {item.category}
//                 </span>

//                 <span className="bg-white  px-3 py-1 rounded-full text-[11px] sm:text-[12px]">
//                   Earn Up to 5%
//                 </span>
//               </div>

//               {/* Rating + Price */}
//               <div className="flex items-end justify-between mt-4">
//                 <div>
//                   <span className="text-[11px] text-gray-500">Reviews</span>
//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span
//                         key={star}
//                         className={`text-[28px] ${
//                           star <= item.rating
//                             ? "text-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-end gap-1">
//                   <span className="font-semibold text-[22px] sm:text-[26px]">
//                     ₹
//                   </span>
//                   <span className="font-semibold text-[22px] sm:text-[26px]">
//                     {item.price}
//                   </span>
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

import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
];

export default function RecommendedForYou() {
  return (
    <section className="w-full max-w-[1277px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-5 mb-20 mt-[-100.20px]">
      <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
        Recommended For you
      </h2>

      <div className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto pb-4 scrollbar-hide">
        {services.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
