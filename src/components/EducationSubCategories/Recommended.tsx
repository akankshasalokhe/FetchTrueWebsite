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
const SERVICES = [
    // Personal Development
    {
        id: 1,
        title: "Personal Development",
        subtitle: "Improve mindset & productivity",
        category: "Personal Development",
        users: "2200+ users",
        rating: 5,
        price: 299,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 2,
        title: "Personal Development",
        subtitle: "Build confidence & habits",
        category: "Personal Development",
        users: "1800+ users",
        rating: 4,
        price: 399,
        discount: "25%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },

    // Development
    {
        id: 3,
        title: "Development",
        subtitle: "Learn full-stack development",
        category: "Development",
        users: "3200+ users",
        rating: 5,
        price: 499,
        discount: "30%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 4,
        title: "Development",
        subtitle: "Frontend & backend mastery",
        category: "Development",
        users: "2600+ users",
        rating: 4,
        price: 599,
        discount: "20%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },

    // IT & Software
    {
        id: 5,
        title: "IT & Software",
        subtitle: "IT fundamentals & tools",
        category: "IT & Software",
        users: "2100+ users",
        rating: 4,
        price: 450,
        discount: "15%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 6,
        title: "IT & Software",
        subtitle: "Advanced software systems",
        category: "IT & Software",
        users: "1700+ users",
        rating: 5,
        price: 650,
        discount: "25%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },

    // Finance Development
    {
        id: 7,
        title: "Finance Development",
        subtitle: "Personal finance & investing",
        category: "Finance Development",
        users: "1400+ users",
        rating: 4,
        price: 350,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 8,
        title: "Finance Development",
        subtitle: "Financial planning skills",
        category: "Finance Development",
        users: "1600+ users",
        rating: 5,
        price: 550,
        discount: "30%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },

    // Teaching & Software
    {
        id: 9,
        title: "Teaching & Software",
        subtitle: "Teaching with modern tools",
        category: "Teaching & Software",
        users: "1300+ users",
        rating: 4,
        price: 280,
        discount: "15%",
        status: true,
        earn: "Earn Up to 3%",
        image: "/image/educardbg.png",
    },
    {
        id: 10,
        title: "Teaching & Software",
        subtitle: "E-learning & LMS systems",
        category: "Teaching & Software",
        users: "1500+ users",
        rating: 5,
        price: 420,
        discount: "25%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },

    // Business
    {
        id: 11,
        title: "Business",
        subtitle: "Entrepreneurship basics",
        category: "Business",
        users: "2900+ users",
        rating: 5,
        price: 600,
        discount: "35%",
        status: true,
        earn: "Earn Up to 6%",
        image: "/image/educardbg.png",
    },
    {
        id: 12,
        title: "Business",
        subtitle: "Startup & growth strategies",
        category: "Business",
        users: "2500+ users",
        rating: 4,
        price: 750,
        discount: "40%",
        status: true,
        earn: "Earn Up to 7%",
        image: "/image/educardbg.png",
    },

    // Marketing
    {
        id: 13,
        title: "Marketing",
        subtitle: "Digital marketing mastery",
        category: "Marketing",
        users: "3100+ users",
        rating: 5,
        price: 480,
        discount: "30%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 14,
        title: "Marketing",
        subtitle: "SEO & social media",
        category: "Marketing",
        users: "2700+ users",
        rating: 4,
        price: 360,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },

    // Music
    {
        id: 15,
        title: "Music",
        subtitle: "Music theory & practice",
        category: "Music",
        users: "900+ users",
        rating: 4,
        price: 300,
        discount: "15%",
        status: true,
        earn: "Earn Up to 3%",
        image: "/image/educardbg.png",
    },
    {
        id: 16,
        title: "Music",
        subtitle: "Production & mixing",
        category: "Music",
        users: "1100+ users",
        rating: 5,
        price: 520,
        discount: "25%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },

    // Design
    {
        id: 17,
        title: "Design",
        subtitle: "UI / UX design principles",
        category: "Design",
        users: "2600+ users",
        rating: 5,
        price: 450,
        discount: "30%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },
    {
        id: 18,
        title: "Design",
        subtitle: "Graphic design essentials",
        category: "Design",
        users: "2300+ users",
        rating: 4,
        price: 350,
        discount: "20%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },

    // Health & Fitness
    {
        id: 19,
        title: "Health & Fitness",
        subtitle: "Workout & nutrition plans",
        category: "Health & Fitness",
        users: "1900+ users",
        rating: 5,
        price: 400,
        discount: "25%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
    {
        id: 20,
        title: "Health & Fitness",
        subtitle: "Yoga & mindfulness",
        category: "Health & Fitness",
        users: "1700+ users",
        rating: 4,
        price: 320,
        discount: "20%",
        status: true,
        earn: "Earn Up to 3%",
        image: "/image/educardbg.png",
    },

    // Photography & Video
    {
        id: 21,
        title: "Photography & Video",
        subtitle: "Photography basics",
        category: "Photography & Video",
        users: "1200+ users",
        rating: 4,
        price: 380,
        discount: "20%",
        status: true,
        earn: "Earn Up to 3%",
        image: "/image/educardbg.png",
    },
    {
        id: 22,
        title: "Photography & Video",
        subtitle: "Video editing & filmmaking",
        category: "Photography & Video",
        users: "1400+ users",
        rating: 5,
        price: 600,
        discount: "30%",
        status: true,
        earn: "Earn Up to 5%",
        image: "/image/educardbg.png",
    },

    // Lifestyle
    {
        id: 23,
        title: "Lifestyle",
        subtitle: "Improve daily life skills",
        category: "Lifestyle",
        users: "1600+ users",
        rating: 4,
        price: 280,
        discount: "15%",
        status: true,
        earn: "Earn Up to 3%",
        image: "/image/educardbg.png",
    },
    {
        id: 24,
        title: "Lifestyle",
        subtitle: "Time & stress management",
        category: "Lifestyle",
        users: "1800+ users",
        rating: 5,
        price: 420,
        discount: "25%",
        status: true,
        earn: "Earn Up to 4%",
        image: "/image/educardbg.png",
    },
];


type SectionProps = {
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string; // ← from slug
};



export default function Recommended({ selectedRange = "all",
    selectedCategory = "all",
    searchQuery = "",
    contextTitle = "", }: SectionProps) {

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

    const filteredServices = SERVICES.filter((item) => {
        // PRICE FILTER
        const rangeMatch =
            selectedRange === "all" ||
            (selectedRange === "0-300" && item.price < 300) ||
            (selectedRange === "300-400" && item.price >= 300 && item.price < 400) ||
            (selectedRange === "400-600" && item.price >= 400 && item.price <= 600) ||
            (selectedRange === "600-800" && item.price >= 600 && item.price <= 800) ||
            (selectedRange === "800-1000" && item.price > 800);

        // CATEGORY FILTER
        const categoryMatch =
            selectedCategory === "all" ||
            item.title === selectedCategory;


        const itemSlug = toSlug(item.title);

        const contextMatch =
            !contextTitle || itemSlug === contextTitle;

        console.log("ITEM SLUG 👉", itemSlug);
        console.log("CONTEXT SLUG 👉", contextTitle);
        console.log("FINAL CONTEXT MATCH 👉", contextMatch);



        // SEARCH
        const searchMatch =
            searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());




        return rangeMatch && categoryMatch && searchMatch && contextMatch;
    });





    return (
        <div className="w-full p-4 md:ml-6 md:p-6">
            {/* TITLE */}
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
                Recommended for You
            </h2>



            {/* SWIPEABLE CARDS */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar"
            >

                {filteredServices.length > 0 ? (
                    filteredServices.map((item) => (
                        <div
                            key={item.id}
                            onClick={() =>
                                router.push(`/MainModules/ITModules/${toSlug(item.title)}`)
                            }
                            className="cursor-pointer snap-center flex-shrink-0 w-[290px] min-h-[271px] md:h-[344px]
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
                                <span className="absolute top-4 right-24 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-lg">
                                    Discount {item.discount}
                                </span>

                                {/* Bookmark */}
                                <button className="absolute top-3 right-15 bg-black/70 p-2 rounded-full">
                                    <Bookmark size={16} className="text-white" />
                                </button>
                            </div>

                            {/* CONTENT SECTION */}
                            <div className="relative p-4 text-black">

                                <div className="flex items-center justify-between">
                                    <span className="
                                            text-[16px]
                                            font-semibold
                                            leading-snug
                                            line-clamp-2
                                            max-w-[65%]
                                            ">
                                        {item.title}
                                    </span>


                                    <span className="
                                            bg-white text-xs px-3 py-1 rounded-full
                                            whitespace-nowrap shrink-0
                                            ">
                                        {item.earn}
                                    </span>

                                </div>



                                <div className=" space-y-1">
                                    <span className="inline-block bg-white text-[9px] md:text-[10px] px-3 py-1 mb-4 rounded-full"
                                        style={{ fontWeight: 400 }}>
                                        {item.category}
                                    </span>

                                    {/* STATUS */}
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
                                <div className="absolute bottom-4 md:bottom-4 right-4 bg-white text-black font-semibold text-xl px-5 py-3 rounded-2xl shadow-md">
                                    ₹ {item.price}
                                </div>
                            </div>
                        </div>


                    ))
                ) : (

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

                )}
                {/* MOBILE SPACER */}
                <div className="md:hidden min-w-4" />
            </div>


        </div>
    );
}
