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
  // ===================== 1. Personal Development =====================
  { id: 1, title: "Personal Development", category: "Leadership", subtitle: "Leadership mindset", price: 299, rating: 5, users: "2200+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 2, title: "Personal Development", category: "Happiness", subtitle: "Positive living", price: 259, rating: 4, users: "1800+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 3, title: "Personal Development", category: "Creativity", subtitle: "Creative thinking", price: 349, rating: 5, users: "2000+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 4, title: "Personal Development", category: "Design", subtitle: "Design your life", price: 399, rating: 4, users: "1700+ users", discount: "30%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 5, title: "Personal Development", category: "Motivation", subtitle: "Daily motivation", price: 279, rating: 5, users: "2400+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },

  // ===================== 2. Business =====================
  { id: 6, title: "Business", category: "Leadership", subtitle: "Business leadership", price: 599, rating: 5, users: "3200+ users", discount: "35%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },
  { id: 7, title: "Business", category: "Happiness", subtitle: "Workplace happiness", price: 499, rating: 4, users: "2100+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 8, title: "Business", category: "Creativity", subtitle: "Startup ideas", price: 549, rating: 5, users: "2600+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 9, title: "Business", category: "Design", subtitle: "Brand design", price: 579, rating: 4, users: "2300+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 10, title: "Business", category: "Motivation", subtitle: "High performance", price: 629, rating: 5, users: "2900+ users", discount: "40%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },

  // ===================== 3. Development =====================
  { id: 11, title: "Development", category: "Leadership", subtitle: "Tech leadership", price: 699, rating: 5, users: "3400+ users", discount: "30%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },
  { id: 12, title: "Development", category: "Happiness", subtitle: "Stress-free coding", price: 499, rating: 4, users: "2600+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 13, title: "Development", category: "Creativity", subtitle: "Creative problem solving", price: 549, rating: 5, users: "3000+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 14, title: "Development", category: "Design", subtitle: "UI engineering", price: 579, rating: 4, users: "2800+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 15, title: "Development", category: "Motivation", subtitle: "Consistent coding", price: 599, rating: 5, users: "3300+ users", discount: "35%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },

  // ===================== 4. IT & Software =====================
  { id: 16, title: "IT & Software", category: "Leadership", subtitle: "IT leadership", price: 650, rating: 5, users: "3100+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 17, title: "IT & Software", category: "Happiness", subtitle: "Healthy IT work", price: 450, rating: 4, users: "2200+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 18, title: "IT & Software", category: "Creativity", subtitle: "System innovation", price: 520, rating: 5, users: "2700+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 19, title: "IT & Software", category: "Design", subtitle: "Software design", price: 560, rating: 4, users: "2500+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 20, title: "IT & Software", category: "Motivation", subtitle: "IT growth mindset", price: 590, rating: 5, users: "3000+ users", discount: "35%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },

  // ===================== 5. Finance Development =====================
  { id: 21, title: "Finance Development", category: "Leadership", subtitle: "Financial leadership", price: 480, rating: 5, users: "2400+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 22, title: "Finance Development", category: "Happiness", subtitle: "Money peace", price: 350, rating: 4, users: "1900+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 23, title: "Finance Development", category: "Creativity", subtitle: "Smart investing", price: 520, rating: 5, users: "2100+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 24, title: "Finance Development", category: "Design", subtitle: "Wealth planning", price: 550, rating: 4, users: "2000+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 25, title: "Finance Development", category: "Motivation", subtitle: "Financial discipline", price: 499, rating: 5, users: "2300+ users", discount: "35%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },

  // ===================== 6. Teaching & Software =====================
  { id: 26, title: "Teaching & Software", category: "Leadership", subtitle: "Teaching leadership", price: 420, rating: 5, users: "2100+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 27, title: "Teaching & Software", category: "Happiness", subtitle: "Joyful teaching", price: 320, rating: 4, users: "1800+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 28, title: "Teaching & Software", category: "Creativity", subtitle: "Creative teaching tools", price: 390, rating: 5, users: "2000+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 29, title: "Teaching & Software", category: "Design", subtitle: "Course design", price: 410, rating: 4, users: "1900+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 30, title: "Teaching & Software", category: "Motivation", subtitle: "Student motivation", price: 450, rating: 5, users: "2200+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },

  // ===================== 7. Marketing =====================
  { id: 31, title: "Marketing", category: "Leadership", subtitle: "Marketing leadership", price: 520, rating: 5, users: "3000+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 32, title: "Marketing", category: "Happiness", subtitle: "Customer happiness", price: 420, rating: 4, users: "2400+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 33, title: "Marketing", category: "Creativity", subtitle: "Ad creativity", price: 560, rating: 5, users: "2800+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 34, title: "Marketing", category: "Design", subtitle: "Visual branding", price: 460, rating: 4, users: "2600+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 35, title: "Marketing", category: "Motivation", subtitle: "Sales motivation", price: 550, rating: 5, users: "3100+ users", discount: "35%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },

  // ===================== 8. Music =====================
  { id: 36, title: "Music", category: "Leadership", subtitle: "Music leadership", price: 380, rating: 4, users: "1400+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 37, title: "Music", category: "Happiness", subtitle: "Music therapy", price: 320, rating: 5, users: "1600+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 38, title: "Music", category: "Creativity", subtitle: "Music composition", price: 520, rating: 5, users: "2000+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 39, title: "Music", category: "Design", subtitle: "Sound design", price: 480, rating: 4, users: "1700+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 40, title: "Music", category: "Motivation", subtitle: "Practice motivation", price: 360, rating: 5, users: "1900+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },

  // ===================== 9. Design =====================
  { id: 41, title: "Design", category: "Leadership", subtitle: "Design leadership", price: 560, rating: 5, users: "2600+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 42, title: "Design", category: "Happiness", subtitle: "Design happiness", price: 420, rating: 4, users: "2100+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 43, title: "Design", category: "Creativity", subtitle: "Creative design", price: 580, rating: 5, users: "2800+ users", discount: "25%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
  { id: 44, title: "Design", category: "Design", subtitle: "UI/UX mastery", price: 600, rating: 5, users: "3000+ users", discount: "35%", status: true, earn: "Earn Up to 6%", image: "/image/edsubbg.png" },
  { id: 45, title: "Design", category: "Motivation", subtitle: "Designer mindset", price: 499, rating: 4, users: "2300+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },

  // ===================== 10. Health & Fitness =====================
  { id: 46, title: "Health & Fitness", category: "Leadership", subtitle: "Fitness leadership", price: 420, rating: 5, users: "2200+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 47, title: "Health & Fitness", category: "Happiness", subtitle: "Healthy happiness", price: 350, rating: 5, users: "2000+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 48, title: "Health & Fitness", category: "Creativity", subtitle: "Creative workouts", price: 390, rating: 4, users: "1800+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 49, title: "Health & Fitness", category: "Design", subtitle: "Workout planning", price: 430, rating: 4, users: "1900+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 50, title: "Health & Fitness", category: "Motivation", subtitle: "Daily fitness drive", price: 460, rating: 5, users: "2400+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },

  // ===================== 11. Photography & Video =====================
  { id: 51, title: "Photography & Video", category: "Leadership", subtitle: "Creative leadership", price: 480, rating: 4, users: "1600+ users", discount: "20%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 52, title: "Photography & Video", category: "Happiness", subtitle: "Story happiness", price: 420, rating: 4, users: "1500+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 53, title: "Photography & Video", category: "Creativity", subtitle: "Creative shoots", price: 520, rating: 5, users: "1900+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 54, title: "Photography & Video", category: "Design", subtitle: "Visual composition", price: 500, rating: 4, users: "1800+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 55, title: "Photography & Video", category: "Motivation", subtitle: "Content consistency", price: 460, rating: 5, users: "2100+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },

  // ===================== 12. Lifestyle =====================
  { id: 56, title: "Lifestyle", category: "Leadership", subtitle: "Life leadership", price: 280, rating: 4, users: "1900+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 57, title: "Lifestyle", category: "Happiness", subtitle: "Mindful living", price: 320, rating: 5, users: "2100+ users", discount: "20%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 58, title: "Lifestyle", category: "Creativity", subtitle: "Creative habits", price: 300, rating: 4, users: "1800+ users", discount: "15%", status: true, earn: "Earn Up to 3%", image: "/image/edsubbg.png" },
  { id: 59, title: "Lifestyle", category: "Design", subtitle: "Life design", price: 360, rating: 5, users: "2000+ users", discount: "25%", status: true, earn: "Earn Up to 4%", image: "/image/edsubbg.png" },
  { id: 60, title: "Lifestyle", category: "Motivation", subtitle: "Daily drive", price: 340, rating: 5, users: "2300+ users", discount: "30%", status: true, earn: "Earn Up to 5%", image: "/image/edsubbg.png" },
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
            item.category === selectedCategory;


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
