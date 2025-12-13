"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { MdLocationOn } from "react-icons/md";
import { useEffect, useRef } from "react";

interface Property {
  id: number;
  bgColor: string;
  bannerImage: string;
  cornerImage: string;
  title: string;
  type: string;
  rating: number;
  location: string;
  earning: string;
  discount: string;
  monthlyEarning: string;
  outlets: number;
  area: string;
  price: string;
}

const properties: Property[] = [
  {
    id: 1,
    bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
    bannerImage: "/mockup/banner1.jpg",
    cornerImage: "/mockup/corner1.png",
    title: "Residential Property",
    type: "Real Estate",
    rating: 4,
    location: "Near Andheri West, Mumbai",
    earning: "5%",
    discount: "30%",
    monthlyEarning: "10-20 Lac",
    outlets: 10,
    area: "1500 Sq - 1000 Sq",
    price: "45L",
  },
  {
    id: 2,
    bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
    bannerImage: "/mockup/banner2.jpg",
    cornerImage: "/mockup/corner2.png",
    title: "Luxury Apartment",
    type: "Real Estate",
    rating: 5,
    location: "Banjara Hills, Hyderabad",
    earning: "7%",
    discount: "25%",
    monthlyEarning: "12-22 Lac",
    outlets: 14,
    area: "1800 Sq - 1200 Sq",
    price: "72L",
  },
  {
    id: 3,
    bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
    bannerImage: "/mockup/banner3.jpg",
    cornerImage: "/mockup/corner3.png",
    title: "Commercial Space",
    type: "Business Property",
    rating: 4,
    location: "Koramangala, Bangalore",
    earning: "6%",
    discount: "20%",
    monthlyEarning: "8-15 Lac",
    outlets: 7,
    area: "1300 Sq - 900 Sq",
    price: "89L",
  },
];

export default function HighDemands() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // 🔁 AUTO SCROLL LOGIC
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    let interval: NodeJS.Timeout;

    const startScroll = () => {
      interval = setInterval(() => {
        slider.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 20);
    };

    startScroll();

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", startScroll);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col gap-6 px-4">
      {/* ---------- TITLE ---------- */}
      <h2 className="font-inter font-semibold text-[24px] leading-[36px] max-w-[1328px] mx-auto">
        High Demands
      </h2>

      {/* ---------- SLIDER ---------- */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar max-w-[1328px] mx-auto"
      >
        {[...properties, ...properties].map((p, index) => (
          <div
            key={index}
            className="min-w-[320px] rounded-3xl p-4 text-white relative"
            style={{ background: p.bgColor }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <Image
                src={p.bannerImage}
                alt="Property"
                fill
                className="object-cover"
              />

              <span className="absolute top-2 left-2 bg-white text-blue-600 
                               font-semibold px-2 py-1 rounded-lg text-xs">
                Trusted
              </span>

              <button className="absolute top-2 right-2 bg-black/70 p-2 rounded-full">
                <Bookmark size={16} />
              </button>

              {/* FLOAT IMAGE */}
              <div className="absolute -bottom-8 right-2 bg-white p-2 rounded-2xl shadow-lg">
                <Image
                  src={p.cornerImage}
                  alt="corner"
                  width={72}
                  height={72}
                />
                <div className="flex justify-center text-yellow-400 text-xs mt-1">
                  {"⭐".repeat(p.rating)}
                </div>
              </div>
            </div>

            {/* TITLE */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm opacity-90">{p.type}</p>
            </div>

            {/* DETAILS */}
            <div className="relative mt-3">
              <img
                src="/image/bordercut.png"
                className="w-full rounded-xl"
                alt="border"
              />

              <div className="absolute inset-0 p-4 text-xs">
                <div className="flex justify-between">
                  <p className="flex items-center gap-1">
                    <MdLocationOn size={14} />
                    {p.location}
                  </p>
                  <div className="flex flex-col gap-2">
                    <span className="bg-white text-black px-2 py-1 rounded-lg font-semibold">
                      Earn Up to {p.earning}
                    </span>
                    <span className="bg-green-300 text-black px-2 py-1 rounded-lg font-semibold">
                      Discount {p.discount}
                    </span>
                  </div>
                </div>

                <div className="mt-2 space-y-1">
                  <p>Monthly Earning: {p.monthlyEarning}</p>
                  <p>Outlets: {p.outlets}</p>
                  <p>Area: {p.area}</p>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="absolute bottom-4 right-4 bg-white text-black 
                            px-4 py-2 rounded-2xl font-semibold">
              ₹{p.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
