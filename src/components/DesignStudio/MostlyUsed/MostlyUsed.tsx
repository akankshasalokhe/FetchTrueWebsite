'use client';

import { Bookmark } from "lucide-react";
import { useRef } from "react";

/* ---------------- SERVICES DATA ---------------- */
const SERVICES = [
  {
    id: 1,
    title: "Logo Designing",
    category: "Digital Marketing",
    users: "2400+ users",
    rating: 4,
    price: 450,
    discount: "30%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 2,
    title: "Web Design",
    category: "UI / UX",
    users: "1800+ users",
    rating: 5,
    price: 380,
    discount: "25%",
    trusted: true,
    earn: "Earn Up to 4%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 3,
    title: "Poster Design",
    category: "Graphic Design",
    users: "1200+ users",
    rating: 4,
    price: 280,
    discount: "20%",
    trusted: true,
    earn: "Earn Up to 3%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 4,
    title: "Business Card Design",
    category: "Print Design",
    users: "950+ users",
    rating: 4,
    price: 220,
    discount: "15%",
    trusted: true,
    earn: "Earn Up to 2%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 5,
    title: "Social Media Creatives",
    category: "Digital Marketing",
    users: "2100+ users",
    rating: 5,
    price: 320,
    discount: "35%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 6,
    title: "Landing Page Design",
    category: "UI / UX",
    users: "1600+ users",
    rating: 5,
    price: 520,
    discount: "20%",
    trusted: true,
    earn: "Earn Up to 6%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 7,
    title: "Brochure Design",
    category: "Print Design",
    users: "1100+ users",
    rating: 4,
    price: 480,
    discount: "18%",
    trusted: true,
    earn: "Earn Up to 3%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 8,
    title: "Banner Design",
    category: "Graphic Design",
    users: "1400+ users",
    rating: 4,
    price: 260,
    discount: "22%",
    trusted: true,
    earn: "Earn Up to 3%",
    image: "/image/designstudiobg.png",
  },
  {
    id: 9,
    title: "Brand Identity Kit",
    category: "Branding",
    users: "900+ users",
    rating: 5,
    price: 750,
    discount: "40%",
    trusted: true,
    earn: "Earn Up to 7%",
    image: "/image/designstudiobg.png",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function MostlyUsed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full p-4 md:ml-6 md:p-6">
      {/* TITLE */}
      <h2 className="text-xl md:text-3xl font-semibold mb-4">
        Mostly Used
      </h2>

      {/* SWIPEABLE CARDS */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {SERVICES.map((item) => (
          <div
            key={item.id}
            className="
              snap-center flex-shrink-0
              w-[88vw] sm:w-[70vw] md:w-[390px] md:h-[362px]
              rounded-3xl p-3 text-white relative shadow-lg
              bg-cover bg-center
            "
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* TRUSTED */}
            {item.trusted && (
              <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
                <img src="/image/security.png" width={14} height={14} />
                Trusted
              </span>
            )}

            {/* DISCOUNT */}
            <span className="absolute top-3 right-12 bg-green-300 text-black text-xs font-semibold px-3 py-1 rounded-lg">
              Discount {item.discount}
            </span>

            {/* BOOKMARK */}
            <button className="absolute top-3 right-3 bg-black/60 p-1.5 rounded-full">
              <Bookmark size={16} className="text-white" />
            </button>

            {/* CONTENT */}
            <div className="bg-white text-black rounded-2xl p-4 mt-44 relative">
              <h3 className="text-base md:text-lg font-semibold text-left leading-tight break-words max-w-[110px] md:max-w-none">
                {item.title}
              </h3>

              <span className="inline-block mt-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>

              <div className="flex flex-nowrap md:flex-wrap items-center gap-2 mt-3 text-[9.89px] md:text-sm text-gray-700">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <img src="/image/userdesign.png" alt="user" width={16.66} height={16.66} />  {item.users}
                </span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <img src="/image/designtime.png" alt="user" width={16.66} height={16.66} />  On Time guaranty
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 text-yellow-400 mt-4">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              {/* PRICE */}
              {/* <div
                className="
                  absolute bottom-4 right-4
                  bg-gray-100 text-black font-semibold
                  text-[14px] md:text-xl
                  px-2 py-0.5 md:px-5 md:py-3
                  rounded-md md:rounded-2xl
                  shadow-md
                "
              >
                ₹{item.price}
              </div> */}
               <div
                            className="
                                absolute bottom-13 md:bottom-4 right-4
                                bg-gray-100 text-black font-semibold
                                text-[14px] md:text-xl
                                px-2 py-0.5 md:px-5 md:py-3
                                rounded-md md:rounded-2xl
                                shadow-md
                            "
                            >
                            ₹{item.price}
                            </div>

              {/* EARN */}
              <div className="absolute top-4 right-4 bg-white text-black text-[10px] md:text-xs px-3 py-1 rounded-full shadow">
                {item.earn}
              </div>
            </div>
          </div>
        ))}

        {/* MOBILE SPACER */}
        <div className="md:hidden min-w-4" />
      </div>
    </div>
  );
}
