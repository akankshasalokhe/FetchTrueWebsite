'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Zap, Brain, Settings } from "lucide-react";






export default function LiveSection() {
    const properties = [
        {
            id: 1,
            bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
            image: "/image/AIHubcardbg.png",
            title: "Residential Property",
            type: "AI Service",
            rating: 4,
            location: "Near Andheri West, Mumbai",
            earning: "5%",
            discount: "30%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1500 Sq - 1000 Sq",
            price: "45L",
        },
        {
            id: 2,
            bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
            image: "/image/AIHubcardbg.png",
            title: "Luxury Apartment",
            type: "AI Service",
            rating: 5,
            location: "Banjara Hills, Hyderabad",
            earning: "7%",
            discount: "25%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1800 Sq - 1200 Sq",
            price: "72L",
        },
        {
            id: 3,
            bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
            image: "/image/AIHubcardbg.png",
            title: "Commercial Space",
            type: "AI Service",
            rating: 4,
            location: "Koramangala, Bangalore",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1300 Sq - 900 Sq",
            price: "89L",
        },
        {
            id: 4,
            bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
            image: "/image/AIHubcardbg.png",
            title: "Studio Apartment",
            type: "AI Service",
            rating: 3,
            location: "Powai, Mumbai",
            earning: "4%",
            discount: "15%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "900 Sq - 700 Sq",
            price: "38L",
        },
        {
            id: 5,
            bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
            image: "/image/AIHubcardbg.png",
            title: "Retail Shop",
            type: "AI Service",
            rating: 4,
            location: "Gachibowli, Hyderabad",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1100 Sq - 850 Sq",
            price: "55L",
        },
    ];

  const containerRef = useRef<HTMLDivElement | null>(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

// Max scroll
const getMaxScroll = () => {
  const container = containerRef.current;
  if (!container) return 0;
  return container.scrollWidth - container.clientWidth;
};

// ---------- MOUSE ----------
const handleMouseDown = (e: MouseEvent) => {
  const container = containerRef.current;
  if (!container) return;

  setIsDragging(true);
  const rect = container.getBoundingClientRect();
  setStartX(e.pageX - rect.left);
  setScrollLeft(container.scrollLeft);

  container.style.cursor = "grabbing";
  container.style.userSelect = "none";
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging) return;
  const container = containerRef.current;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const x = e.pageX - rect.left;
  const walk = (x - startX) * 1.5;

  let nextScroll = scrollLeft - walk;
  nextScroll = Math.max(0, Math.min(nextScroll, getMaxScroll()));

  container.scrollLeft = nextScroll;
};

const handleMouseUp = () => {
  const container = containerRef.current;
  if (!container) return;

  setIsDragging(false);
  container.style.cursor = "grab";
  container.style.removeProperty("user-select");

  const card = container.querySelector(".snap-center") as HTMLElement | null;
  const cardWidth = card?.offsetWidth ?? 300;
  const gap = 24;

  const index = Math.round(container.scrollLeft / (cardWidth + gap));
  container.scrollTo({
    left: index * (cardWidth + gap),
    behavior: "smooth",
  });
};

// ---------- TOUCH ----------
const handleTouchStart = (e: TouchEvent) => {
  const container = containerRef.current;
  if (!container) return;

  setIsDragging(true);
  const rect = container.getBoundingClientRect();
  setStartX(e.touches[0].pageX - rect.left);
  setScrollLeft(container.scrollLeft);
};

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging) return;
  const container = containerRef.current;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const x = e.touches[0].pageX - rect.left;
  const walk = (x - startX) * 1.5;

  let nextScroll = scrollLeft - walk;
  nextScroll = Math.max(0, Math.min(nextScroll, getMaxScroll()));

  container.scrollLeft = nextScroll;
};

// ---------- EFFECT ----------
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  container.addEventListener("mousedown", handleMouseDown);
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseup", handleMouseUp);
  container.addEventListener("mouseleave", handleMouseUp);

  container.addEventListener("touchstart", handleTouchStart, { passive: true });
  container.addEventListener("touchmove", handleTouchMove, { passive: true });
  container.addEventListener("touchend", handleMouseUp);

  return () => {
    container.removeEventListener("mousedown", handleMouseDown);
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseup", handleMouseUp);
    container.removeEventListener("mouseleave", handleMouseUp);

    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchmove", handleTouchMove);
    container.removeEventListener("touchend", handleMouseUp);
  };
}, [isDragging, startX, scrollLeft]);

    return (
        <>
            <div className="max-w-8xl">
                <div className="flex lg:flex-row flex-col lg:justify-between">
                    <div
                        className="text-[146.14px] md:text-[190px] lg:text-[209.17px] text-center -ml-6 md:ml-2 whitespace-nowrap font-bold leading-none text-[#E2E9F1]"
                        style={{
                            WebkitTextStroke: "1px white", backgroundColor: "#C9DEE9",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        LIVE
                    </div>
                    <div className="mx-auto -mt-22 lg:mt-0">
                        <h1 className="text-[20px] md:text-[28px] lg:text-[32px] text-center font-semibold mb-4 ml-6 md:mb-6 md:ml-8 mt-12 text-black">Live in 24 hours</h1>
                        <p className="text-[16px] md:text-[16px] lg:text-[20px] text-center font-regular mb-4 ml-6 md:mb-6 md:ml-8 max-w-xl text-black md:whitespace-nowrap lg:whitespace-normal">
                           The AI solution will be set up, activated, and ready to deliver value within one day.
                           </p>
                    </div>
                    <div
                        className="hidden lg:block text-[146.14px] lg:text-[209.17px] text-center -ml-6 md:ml-2 whitespace-nowrap font-bold leading-none text-[#E2E9F1]"
                        style={{
                            WebkitTextStroke: "1px white", backgroundColor: "#C9DEE9",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        LIVE
                    </div>
                </div>

                  {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
                         <div
                                        ref={containerRef}
                                        className="flex gap-6 w-full p-4 overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab"
                                     >
                                        {properties.map((p) => (
                                            <div
                                                key={p.id}
                                                className="
                                                    snap-center
                                                    w-[270px] md:w-[308px] lg:w-[408px]
                                                    bg-[#F4F4F4] mx-auto
                                                    rounded-2xl
                                                    p-4
                                                    flex-shrink-0
                                                    overflow-hidden
                                                    relative
                                                "
                                            >
                                                {/* IMAGE */}
                                                <div className="relative w-full h-40 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={p.image}
                                                        alt={p.title}
                                                        fill
                                                        className="object-cover rounded-xl pointer-events-none"
                                                    />
                                                    <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full">
                                                        <Bookmark size={18} className="text-white" />
                                                    </button>
                        
                        
                                                </div>
                        
                        
                        
                                                {/* CONTENT */}
                                                <div className="mt-3 space-y-1">
                        
                                                    {/* <h2 className="text-[14px] lg:text-[20px] -mt-6 lg:-mt-2 font-semibold text-black leading-snug whitespace-normal max-w-[65%] break-words">
                                                        {p.title}
                                                    </h2> */}
                                                    <h2
                                                        className="
                                                text-[14px] lg:text-[20px]
                                                font-semibold
                                                text-black -mt-6 lg:-mt-2
                                                leading-snug
                                                line-clamp-2 max-w-[65%]
                                                min-h-[40px] lg:min-h-[56px]
                                            "
                                                    >
                                                        {p.title}
                                                    </h2>
                        
                        
                                                    <span className="inline-block text-[10px] lg:text-[12px] bg-white px-2 py-1 rounded-lg">
                                                        {p.type}
                                                    </span>
                        
                        
                                                    <div className="flex -mt-8 md:-mt-15">
                                                        <div className=" items-end ml-auto gap-1 text-yellow-400 text-sm mb-4">
                                                            {"⭐".repeat(p.rating)}
                                                        </div>
                                                    </div>
                        
                        
                                                    <div className="flex justify-end gap-2">
                                                        <span className="bg-[#548AFE] text-[10px] lg:text-[14px] px-2 py-1 rounded-lg font-semibold">
                                                            Discount {p.earning}
                                                        </span>
                                                        <span className="bg-[#89FF9B] text-[10px] lg:text-[14px] px-2 py-1 rounded-lg font-semibold">
                                                            Earn {p.discount}
                                                        </span>
                                                    </div>
                        
                                                    <div className="space-y-1 text-black">
                                                        <p className="font-semibold text-[10px] lg:text-[14px]">
                                                            Setup & Time
                                                        </p>
                                                        <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                                            <Zap size={14} className="text-yellow-500" />
                                                            Set up: {p.monthlyEarning}
                                                        </p>
                                                        <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                                            <Brain size={14} className="text-red-500" />
                                                            AI Training: {p.outlets}
                                                        </p>
                                                        <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                                            <Settings size={14} />
                                                            Maintenance: {p.maintenance}
                                                        </p>
                                                    </div>
                                                </div>
                        
                        
                        
                                                {/* PRICE */}
                                                <div className="absolute bottom-3 right-3 bg-white rounded-2xl px-3 lg:px-8 py-2 text-center">
                                                    <p className="text-[10px] lg:text-[14px]">
                                                        Starting from
                                                    </p>
                                                    <p className="font-semibold text-[16px] lg:text-[24px]">
                                                        ₹{p.price}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                             <div
                        className="block lg:hidden text-[146.14px]  md:text-[190px] lg:text-[209.17px] text-center -ml-6 md:ml-2 whitespace-nowrap font-bold leading-none text-[#E2E9F1]"
                        style={{
                            WebkitTextStroke: "1px white", backgroundColor: "#C9DEE9",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        LIVE
                    </div>

            </div>

        </>
    );
}





                                            // <div className="relative">
                                            //     <div
                                            //         className="
                                            //         absolute bottom-2 right-4 md:right-0
                                            //         flex flex-col items-center
                                            //         bg-white text-black
                                            //         w-[93px] h-[55px]
                                            //         md:w-[93px] md:h-[60px]
                                            //         lg:w-[142px] lg:h-[66px]
                                            //         px-1 py-2 lg:px-4 lg:py-2 md:px-1 md:py-2
                                            //         rounded-2xl z-20 
                                            //         pointer-events-none
                                            //         "
                                            //     >
                                            //         <p className="text-[10px] lg:text-[14px] whitespace-nowrap">
                                            //             Starting from
                                            //         </p>
                                            //         <p className="font-semibold text-[16px]  lg:text-[24px] whitespace-nowrap">
                                            //             ₹{p.price}
                                            //         </p>
                                            //     </div>
                                            // </div>