// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Star } from "lucide-react";

// type FooterVariant = "rating" | "cta" | "price";

// interface HomeCardProps {
//   image: string;
//   title: string;
//   category: string;
//   footerVariant: FooterVariant;
//   rating?: number;
//   offerText?: string;
//   priceText?: string;
//   ctaText?: string;
//   href: string;
// }

// export default function HomeCard({
//   image,
//   title,
//   category,
//   footerVariant,
//   rating,
//   offerText,
//   priceText,
//   ctaText,
//   href,
// }: HomeCardProps) {
//   const router = useRouter();

//   return (
//     <div
//       onClick={() => router.push(href)}
//       className="
//         w-[360px]
//         h-[420px]
//         bg-white
//         rounded-[16px]
//         border border-[#E7E7E7]
//         shadow-sm
//         cursor-pointer
//         transition
//         hover:shadow-md
//         flex
//         flex-col
//       "
//     >
//       {/* Image */}
//       <div className="relative w-full h-[220px] rounded-t-[16px] overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-4">
//         <p className="text-xs text-gray-500">{category}</p>
//         <h3 className="text-lg font-semibold mt-1">{title}</h3>
//       </div>

//       {/* Footer */}
//       <div className="px-4 pb-4">
//         {footerVariant === "rating" && (
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-1 text-sm">
//               <Star size={16} className="text-yellow-500" />
//               <span>{rating}</span>
//             </div>
//             <span className="text-sm font-medium text-green-600">
//               {offerText}
//             </span>
//           </div>
//         )}

//         {footerVariant === "cta" && (
//           <button className="
//             w-full
//             py-2
//             rounded-lg
//             bg-black
//             text-white
//             text-sm
//             font-medium
//           ">
//             {ctaText}
//           </button>
//         )}

//         {footerVariant === "price" && (
//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-500">Starting from</span>
//             <span className="text-lg font-semibold">
//               {priceText}
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// "use client"; import React from "react"; import { CiBookmark } from "react-icons/ci"; interface Feature { title: string; icon?: React.ReactNode; } interface HomeCardProps { image: string; title: string; category: string; type: "Finance" | "Legal Service" | "Education"; earnUpto?: string; rating?: number; reviews?: string; features?: Feature[]; oldPrice?: number; price?: number; discount?: string; } const HomeCard: React.FC<HomeCardProps> = ({ image, title, category, type, earnUpto, rating, reviews, features, oldPrice, price, discount, }) => { return ( <div className="w-[360px] lg:w-[424px] h-[426px] bg-gradient-to-b from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] shadow-[0px_4px_14px_rgba(0,0,0,0.05)] p-4 flex flex-col gap-4"> {/* IMAGE */} <div className="relative w-full h-[150px] sm:h-[170px] lg:h-[190px] rounded-lg overflow-hidden"> <img src={image} alt={title} className="w-full h-full object-cover" /> <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow"> <input type="checkbox" /> </div> <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"> <CiBookmark size={20} /> </div> </div> {/* HEADER */} <div className="flex flex-col sm:flex-row sm:justify-between gap-3"> <div> <h2 className="text-[15px] sm:text-[16px] font-medium line-clamp-2"> {title} </h2> <div className="flex flex-wrap items-center gap-2 mt-1"> <span className="text-[11px] px-2 py-[2px] rounded text-white bg-[#2164F4]"> {type} </span> <span className="text-[12px] text-[#868686] font-medium"> {category} </span> </div> </div> <div className="sm:text-right"> {earnUpto && ( <p className="text-xs text-green-600 font-medium"> {earnUpto} </p> )} {rating && ( <p className="text-xs text-gray-500 mt-1 leading-tight"> {"⭐".repeat(rating)} <br /> {reviews} </p> )} </div> </div> {/* FINANCE FEATURES */} {type === "Finance" && features && ( <div className="bg-white w-[392px] h-[100px] rounded-[10px] border border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-4 overflow-hidden"> {features.map((item, index) => ( <div key={index} className="px-3 py-3 text-center border-b sm:border-b-0 sm:border-r last:border-r-0 gap-[10px]" > <p className="text-[11px] text-[#777]"> {item.title.split(" ").slice(0, 2).join(" ")} </p> <p className="text-[14px] font-semibold"> {item.title.replace(/^[^0-9]*/, "")} </p> </div> ))} </div> )} {/* SERVICE / OFFER FEATURES */} {type !== "Finance" && features && ( <div className="bg-white w-[392px] h-[100px] rounded-[10px] border border-[#E7E7E7] p-3 flex flex-col gap-4"> <div className="flex flex-col sm:flex-row items-center justify-between gap-4"> <div className="space-y-2"> {features.map((item, index) => ( <div key={index} className="flex items-center gap-2 text-[13px] text-[#555]" > <span>✔</span> <span>{item.title}</span> </div> ))} </div> <div className="flex flex-col "> {discount && ( <span className="bg-[#22C55E] text-white text-[12px] px-2 py-[2px] rounded-md font-medium self-end"> {discount} </span> )} {(oldPrice || price) && ( <div className="flex flex-col justify-between items-end"> <p className="text-[13px] text-[#666]">Starting From</p> <div className="flex items-center gap-2"> {oldPrice && ( <span className="text-[#999] line-through text-[14px]"> ₹{oldPrice} </span> )} {price && ( <span className="text-[18px] font-semibold"> ₹{price} </span> )} </div> </div> )} </div> </div> </div> )} </div> ); }; export default HomeCard;



"use client";

import React from "react";
import { CiBookmark } from "react-icons/ci";

interface Feature {
  title: string;
  icon?: React.ReactNode;
}

interface HomeCardProps {
  image: string;
  title: string;
  category: string;
  type: string; // ✅ dynamic (from DB)
  earnUpto?: string;
  rating?: number;
  reviews?: string;
  features?: Feature[];
  oldPrice?: number;
  price?: number;
  discount?: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  image,
  title,
  category,
  type,
  earnUpto,
  rating,
  reviews,
  features = [],
  oldPrice,
  price,
  discount,
}) => {
  const isFinance = type?.toLowerCase() === "finance";

  return (
    <div className="w-[360px] lg:w-[424px] h-[426px] bg-gradient-to-b from-white to-[#D8E0F099] rounded-[14px] border border-[#E7E7E7] shadow-[0px_4px_14px_rgba(0,0,0,0.05)] p-4 flex flex-col gap-4">

      {/* IMAGE */}
      <div className="relative w-[392px] h-[150px] sm:h-[170px] lg:h-[190px] rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow">
          <input type="checkbox" />
        </div>

        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <CiBookmark size={20} />
        </div>
      </div>

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <div>
          <h2 className="text-[15px] sm:text-[16px] font-medium line-clamp-2">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-[11px] px-2 py-[2px] rounded text-white bg-[#2164F4]">
              {type}
            </span>
            {/* <span className="text-[12px] text-[#868686] font-medium">
              {category}
            </span> */}
          </div>
        </div>

        <div className="sm:text-right">
          {earnUpto && (
            <p className="text-xs text-green-600 font-medium">
              {earnUpto}
            </p>
          )}

          {rating !== undefined && (
            <p className="text-xs text-gray-500 mt-1 leading-tight">
              {"⭐".repeat(Math.round(rating))}
              <br />
              {reviews}
            </p>
          )}
        </div>
      </div>

      {/* FEATURES */}
      {features.length > 0 && (
        isFinance ? (
          <div className="bg-white w-full h-[100px] rounded-[10px] border border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
            {features.slice(0, 4).map((item, index) => {
              const label = item.title.split(" ").slice(0, 2).join(" ");
              const value = item.title.replace(/^[^0-9₹]*/, "");

              return (
                <div
                  key={index}
                  className="px-3 py-3 text-center border-b sm:border-b-0 sm:border-r last:border-r-0 flex flex-col items-center gap-1"
                >
                  {item.icon && <div>{item.icon}</div>}
                  <p className="text-[11px] text-[#777]">{label}</p>
                  <p className="text-[14px] font-semibold">{value}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white w-full h-[100px] rounded-[10px] border border-[#E7E7E7] p-3 flex justify-between gap-4">
            <div className="space-y-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[13px] text-[#555]">
                  {item.icon }
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-end justify-between">
              {discount && (
                <span className="bg-[#22C55E] text-white text-[12px] px-2 py-[2px] rounded-md font-medium">
                  {discount}
                </span>
              )}

              {(oldPrice || price) && (
                <div className="text-right">
                  <p className="text-[13px] text-[#666]">Starting From</p>
                  <div className="flex items-center gap-2">
                    {oldPrice && (
                      <span className="text-[#999] line-through text-[14px]">
                        ₹{oldPrice}
                      </span>
                    )}
                    {price && (
                      <span className="text-[18px] font-semibold">
                        ₹{price}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      )}

    </div>
  );
};

export default HomeCard;
