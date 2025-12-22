'use client';

import { Bookmark } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";


/* ---------------- CATEGORY TABS ---------------- */
const CATEGORY_TABS = [
    { label: "All", value: "all" },
    { label: "300", value: "0-300" },
    { label: "300 - 400 Rs", value: "300-400" },
    { label: "400 - 600 Rs", value: "400-600" },
    { label: "600 - 800 Rs", value: "600-800" },
    { label: "800 - 1000 Rs", value: "800-1000" },
];

/* ---------------- SERVICES DATA ---------------- */
export const SERVICES = [
    {
        id: 1,
        title: "Personal Growth Mastery",
        subtitle: "Build confidence, habits & mindset",
        category: "Personal Development",
        users: "3200+ users",
        rating: 5,
        price: 299,
        discount: "30%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 2,
        title: "Full Stack Web Development",
        subtitle: "Become a job-ready developer",
        category: "Development",
        users: "4100+ users",
        rating: 5,
        price: 599,
        discount: "25%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 3,
        title: "Cyber Security Fundamentals",
        subtitle: "Protect systems & networks",
        category: "IT&Software",
        users: "2800+ users",
        rating: 4,
        price: 450,
        discount: "20%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 4,
        title: "Financial Planning & Investment",
        subtitle: "Manage money like a pro",
        category: "Finance Development",
        users: "2300+ users",
        rating: 5,
        price: 399,
        discount: "35%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 5,
        title: "Teaching with Technology",
        subtitle: "Modern tools for educators",
        category: "Teaching&Software",
        users: "1700+ users",
        rating: 4,
        price: 349,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 6,
        title: "Business Strategy & Growth",
        subtitle: "Scale startups & enterprises",
        category: "Business",
        users: "3600+ users",
        rating: 5,
        price: 499,
        discount: "30%",
        status: true,
        earn: "Earn Up to 7%",
        image: "/image/educardbg.png",
    },
    {
        id: 7,
        title: "Digital Marketing Bootcamp",
        subtitle: "SEO, Ads & social growth",
        category: "Marketing",
        users: "4200+ users",
        rating: 5,
        price: 449,
        discount: "40%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 8,
        title: "Music Production Essentials",
        subtitle: "Create & mix professional music",
        category: "Music",
        users: "1500+ users",
        rating: 4,
        price: 379,
        discount: "25%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 9,
        title: "UI / UX Design Masterclass",
        subtitle: "Design stunning user experiences",
        category: "Design",
        users: "3900+ users",
        rating: 5,
        price: 429,
        discount: "30%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 10,
        title: "Fitness & Wellness Program",
        subtitle: "Transform body & lifestyle",
        category: "Health&Fitness",
        users: "2700+ users",
        rating: 4,
        price: 299,
        discount: "35%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 11,
        title: "Photography & Video Editing",
        subtitle: "Shoot & edit like a pro",
        category: "Photography & Video",
        users: "2100+ users",
        rating: 5,
        price: 459,
        discount: "28%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 12,
        title: "Lifestyle Productivity System",
        subtitle: "Organize life & boost efficiency",
        category: "Lifestyle",
        users: "1900+ users",
        rating: 4,
        price: 269,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
];



export default function TopPopular() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");



    const CARD_CLASSES = `
    snap-center flex-shrink-0
    w-[88vw] sm:w-[70vw] md:w-[390px] md:h-[362.04px]
    rounded-3xl p-3
    shadow-lg
    `;


    return (
        <div className="w-full p-2 h-auto md:ml-6 md:p-6">
            {/* TITLE */}
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
                Our Top Popular
            </h2>


            {/* SWIPEABLE CARDS */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar"
            >
                <div className="flex gap-6 px-15 py-12  rounded-xl" style={{ backgroundColor: "orange" }}>
                    {SERVICES.map((item) => (

                        <div
                            key={item.id}
                            // onClick={() =>
                            //     router.push(`/MainModules/ITService/ServiceDetails`)
                            // }
                            className="cursor-pointer snap-center flex-shrink-0 w-[290px] min-h-[271px] md:h-[374px]
                        sm:w-[70vw] md:w-[352px] rounded-3xl overflow-hidden shadow-lg"
                            style={{ backgroundColor: "#E2E9F1" }}
                        >

                            {/* IMAGE SECTION */}
                            <div className="relative md:h-[200px] md:w-[395.31px] w-[285px] h-[156px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
                                    <img src="/image/security.png" width={14} height={14} />
                                    Trusted
                                </span>

                                {/* Discount */}
                                <span className="absolute top-3 md:top-4 right-15 md:right-24 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-lg">
                                    Discount {item.discount}
                                </span>

                                {/* Bookmark */}
                                <button className="absolute top-3 right-5 md:right-15 bg-black/70 p-2 rounded-full">
                                    <Bookmark size={16} className="text-white" />
                                </button>
                            </div>

                            {/* CONTENT SECTION */}
                            <div className="relative p-4 text-black">

                                {/* 🔒 TITLE ROW (FIXED HEIGHT) */}
                                <div className="flex items-start justify-between min-h-[44px]">
                                    <span
                                        className="
                                            text-[16px]
                                            font-semibold
                                            leading-snug
                                            line-clamp-2
                                            md:text-[20px]
                                            max-w-[65%] 
                                        "
                                    >
                                        {item.title}
                                    </span>

                                    <span className="
                                        bg-white text-xs px-3 py-1
                                        rounded-full whitespace-nowrap shrink-0
                                        ">
                                        {item.earn}
                                    </span>
                                </div>

                                {/* ⬇️ BELOW CONTENT (WILL NOT MOVE) */}
                                <div className="space-y-1 mt-1 mb-5">
                                    <span className="inline-block bg-white text-[9px] md:text-[10px] px-3 py-1 mb-4 rounded-full">
                                        {item.category}
                                    </span>

                                    {item.status && (
                                        <span className="text-black text-[9px] md:text-[10px] px-5 py-1 rounded-full font-medium">
                                            🟢 Online mode
                                        </span>
                                    )}

                                    <div>
                                        <h4 className="text-xs text-black leading-none">Reviews</h4>
                                        <div className="flex items-center text-yellow-400 text-[20.03px] md:text-[25.68px] gap-1 leading-none">
                                            {"★".repeat(item.rating)}
                                            {"☆".repeat(5 - item.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* PRICE */}
                                <div
                                    className="
                                        absolute bottom-8 right-4 
                                        bg-gray/20 text-black font-semibold
                                        text-[21.71px] md:text-[27.89px]
                                        px-4 py-1 rounded-2xl shadow-md
                                        max-w-[85%] truncate whitespace-nowrap
                                        "
                                >
                                    ₹ {item.price}
                                </div>
                            </div>

                        </div>

                    ))}
                    {/* : (
                <div className={`${CARD_CLASSES} bg-gray-500 flex items-center justify-center`}>
                    <div className="bg-white rounded-2xl p-6 text-center w-full">
                        <p className="text-lg font-semibold text-gray-800">
                            No Services Found
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Try another price range
                        </p>
                    </div>
                </div>
                ) */}

                    {/* MOBILE SPACER */}
                    <div className="md:hidden min-w-4" />
                </div>
            </div>
        </div>
    );
}
