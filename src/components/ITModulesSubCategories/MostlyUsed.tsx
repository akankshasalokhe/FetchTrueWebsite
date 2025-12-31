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
  // ================= CYBER SECURITY =================
  {
    id: 1,
    title: "Cyber Security",
    subtitle: "Protect your digital assets",
    category: "Digital Marketing",
    users: "2400+ users",
    rating: 4,
    price: 450,
    discount: "30%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 2,
    title: "Cyber Security",
    subtitle: "Advanced threat protection",
    category: "IT Security",
    users: "1800+ users",
    rating: 5,
    price: 520,
    discount: "25%",
    trusted: true,
    earn: "Earn Up to 6%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 3,
    title: "Cyber Security",
    subtitle: "Network & system security",
    category: "Infrastructure",
    users: "1500+ users",
    rating: 4,
    price: 390,
    discount: "20%",
    trusted: true,
    earn: "Earn Up to 4%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 4,
    title: "Cyber Security",
    subtitle: "Compliance & risk management",
    category: "Governance",
    users: "1200+ users",
    rating: 4,
    price: 480,
    discount: "18%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },

  // ================= IT CONSULTING =================
  {
    id: 5,
    title: "IT Consulting",
    subtitle: "Smart business solutions",
    category: "Strategy",
    users: "2100+ users",
    rating: 5,
    price: 380,
    discount: "35%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 6,
    title: "IT Consulting",
    subtitle: "Enterprise IT planning",
    category: "Operations",
    users: "1700+ users",
    rating: 4,
    price: 420,
    discount: "20%",
    trusted: true,
    earn: "Earn Up to 4%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 7,
    title: "IT Consulting",
    subtitle: "Cloud & migration advisory",
    category: "Cloud",
    users: "1600+ users",
    rating: 5,
    price: 460,
    discount: "22%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 8,
    title: "IT Consulting",
    subtitle: "Process optimization",
    category: "Management",
    users: "1400+ users",
    rating: 4,
    price: 340,
    discount: "15%",
    trusted: true,
    earn: "Earn Up to 3%",
    image: "/image/itmodulecardbg.png",
  },

  // ================= WEB DEVELOPMENT =================
  {
    id: 9,
    title: "Web Development",
    subtitle: "Modern responsive websites",
    category: "UI / UX",
    users: "2600+ users",
    rating: 5,
    price: 520,
    discount: "20%",
    trusted: true,
    earn: "Earn Up to 6%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 10,
    title: "Web Development",
    subtitle: "Custom business websites",
    category: "Frontend",
    users: "2000+ users",
    rating: 4,
    price: 480,
    discount: "18%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 11,
    title: "Web Development",
    subtitle: "High-performance web apps",
    category: "Full Stack",
    users: "1900+ users",
    rating: 5,
    price: 600,
    discount: "25%",
    trusted: true,
    earn: "Earn Up to 7%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 12,
    title: "Web Development",
    subtitle: "SEO-friendly websites",
    category: "Optimization",
    users: "1700+ users",
    rating: 4,
    price: 430,
    discount: "15%",
    trusted: true,
    earn: "Earn Up to 4%",
    image: "/image/itmodulecardbg.png",
  },

  // ================= APP DEVELOPMENT =================
  {
    id: 13,
    title: "App Development",
    subtitle: "Android & iOS applications",
    category: "Mobile",
    users: "2200+ users",
    rating: 5,
    price: 750,
    discount: "40%",
    trusted: true,
    earn: "Earn Up to 7%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 14,
    title: "App Development",
    subtitle: "Cross-platform apps",
    category: "Flutter / React Native",
    users: "1900+ users",
    rating: 4,
    price: 620,
    discount: "25%",
    trusted: true,
    earn: "Earn Up to 6%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 15,
    title: "App Development",
    subtitle: "Enterprise mobile solutions",
    category: "Enterprise",
    users: "1600+ users",
    rating: 5,
    price: 820,
    discount: "30%",
    trusted: true,
    earn: "Earn Up to 8%",
    image: "/image/itmodulecardbg.png",
  },
  {
    id: 16,
    title: "App Development",
    subtitle: "UI-focused mobile apps",
    category: "Design",
    users: "1400+ users",
    rating: 4,
    price: 560,
    discount: "18%",
    trusted: true,
    earn: "Earn Up to 5%",
    image: "/image/itmodulecardbg.png",
  },
];


/* ---------------- COMPONENT ---------------- */
type SectionProps = {
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string; // ← from slug
};



export default function MostlyUsed({   selectedRange = "all",
  selectedCategory = "all",
  searchQuery = "",
  contextTitle = "",}: SectionProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const toSlug = (text: string) =>
        text.toLowerCase().trim().replace(/\s+/g, "-");



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

        // CONTEXT (from slug)
        // const contextMatch =
        //     !contextTitle ||
        //     item.title.toLowerCase() === contextTitle.toLowerCase();
        // const normalizedTitle = item.title.toLowerCase();
        // const normalizedContext = contextTitle?.toLowerCase();



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


    
    type CardBgProps = {
        active?: boolean;
    };

    const CardBg: React.FC<CardBgProps> = ({ active = false }) => (
        <svg
            viewBox="0 0 300 200"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            <path
                d="
            M 20 0
            H 280
            L 300 0
            V 70
            Q 350 230 220 200
            H 0
            V 30
            Q 0 0 20 0
            Z
          "
                fill="#E2E9F1"
            />
        </svg>
    );



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
                {filteredServices.length > 0 ? (
                    filteredServices.map((item) => (
                        <div
                            key={item.id}
                            // onClick={() =>
                            //   router.push(`/MainModules/ITService/${toSlug(item.title)}`)
                            // }
                            className="
                  relative snap-center flex-shrink-0
                  w-[290px] min-h-[271px]
                  sm:w-[70vw]
                  md:w-[390px] md:h-[362px]
                  overflow-hidden 
                "
                        >
                            {/* SVG BACKGROUND */}
                            <CardBg />

                            {/* CONTENT */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* IMAGE SECTION */}
                                <div className="relative md:h-[200px] w-full p-2 h-[156px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Discount */}
                                    <span className="absolute top-4 right-14 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-lg">
                                        Discount {item.discount}
                                    </span>

                                    {/* Bookmark */}
                                    <button className="absolute top-3 right-4 bg-black/70 p-2 rounded-full">
                                        <Bookmark size={16} className="text-white" />
                                    </button>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="relative p-4 text-black flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[16px] font-semibold leading-snug line-clamp-2 max-w-[65%]">
                                            {item.title}
                                        </span>

                                        <span className="bg-white text-xs px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                                            {item.earn}
                                        </span>
                                    </div>

                                    <p className="text-[12px] md:text-[16px] mt-1">
                                        {item.subtitle}
                                    </p>

                                    <div className="space-y-1">
                                        <span className="inline-block bg-white text-[9px] md:text-[10px] px-3 py-1 mb-4 rounded-full">
                                            {item.category}
                                        </span>

                                        <div>
                                            <h4 className="text-xs leading-none">Reviews</h4>
                                            <div className="flex items-center text-yellow-400 text-[20px] md:text-[25px] gap-1 leading-none">
                                                {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* PRICE */}
                                    <div
                                        className="
                                            absolute bottom-4 right-4
                                            bg-white text-black font-semibold
                                            text-[21.71px] md:text-[27.89px]
                                            px-4 py-2
                                            rounded-2xl shadow-md

                                            max-w-[85%]
                                            truncate
                                            whitespace-nowrap
                                        "
                                    >
                                        ₹ {item.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full bg-gray-500 flex items-center justify-center">
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
