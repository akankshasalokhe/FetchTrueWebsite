'use client';

import { Bookmark } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import {Eye,User,PenIcon } from "lucide-react";
import { useRecommended } from "@/src/context/RecommendedContext";

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
    {
        id: 1,
        title: "Figma UI UX Design",
        subtitle: "Develop your future website",
        category: "Digital Marketing",
        users: "2400+ users",
        rating: 4,
        price: 450,
        discount: "30%",
        trusted: true,
        earn: "Earn Up to 5%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 2,
        title: "IT Consulting",
        subtitle: "Develop your future website",
        category: "UI / UX",
        users: "1800+ users",
        rating: 5,
        price: 380,
        discount: "25%",
        trusted: true,
        earn: "Earn Up to 4%",
        image: "/image/Educationcardbg.png",

    },
    {
        id: 3,
        title: "App Development",
        subtitle: "Develop your future website",
        category: "Graphic Design",
        users: "1200+ users",
        rating: 4,
        price: 280,
        discount: "20%",
        trusted: true,
        earn: "Earn Up to 3%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 4,
        title: "Cyber Security",
        subtitle: "Develop your future website",
        category: "Print Design",
        users: "950+ users",
        rating: 4,
        price: 220,
        discount: "15%",
        trusted: true,
        earn: "Earn Up to 2%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 5,
        title: "IT Consulting",
        subtitle: "Develop your future website",
        category: "Digital Marketing",
        users: "2100+ users",
        rating: 5,
        price: 320,
        discount: "35%",
        trusted: true,
        earn: "Earn Up to 5%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 6,
        title: "Web Development",
        subtitle: "Develop your future website",
        category: "UI / UX",
        users: "1600+ users",
        rating: 5,
        price: 520,
        discount: "20%",
        trusted: true,
        earn: "Earn Up to 6%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 7,
        title: "Cyber Security",
        subtitle: "Develop your future website",
        category: "Print Design",
        users: "1100+ users",
        rating: 4,
        price: 480,
        discount: "18%",
        trusted: true,
        earn: "Earn Up to 3%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 8,
        title: "Web Development",
        subtitle: "Develop your future website",
        category: "Graphic Design",
        users: "1400+ users",
        rating: 4,
        price: 260,
        discount: "22%",
        trusted: true,
        earn: "Earn Up to 3%",
        image: "/image/Educationcardbg.png",
    },
    {
        id: 9,
        title: "App Development",
        subtitle: "Develop your future website",
        category: "Branding",
        users: "900+ users",
        rating: 5,
        price: 750,
        discount: "40%",
        trusted: true,
        earn: "Earn Up to 7%",
        image: "/image/Educationcardbg.png",
    },
];

/* ---------------- COMPONENT ---------------- */

type SectionProps = {
    selectedRange?: string;
    selectedCategory?: string;
    searchQuery?: string;
    contextTitle?: string; 
};



export default function Recommendation({ selectedRange, selectedCategory, searchQuery = "", contextTitle }: SectionProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");


    const {services,
        loading,
        error,
        refetchServices: fetchServices} = useRecommended()

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

        const normalizedTitle = item.title.toLowerCase();
        const normalizedContext = contextTitle?.toLowerCase();

        const contextMatch =
            !contextTitle ||
            normalizedTitle === normalizedContext;

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
        <div className="w-full p-4 md:ml-15 ">
            {/* TITLE */}
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
                Recommended for You
            </h2>

            {/* SWIPEABLE CARDS */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto  snap-x snap-mandatory no-scrollbar"
            >
                {SERVICES.length > 0 ? (
                    SERVICES.map((item) => (
                        <div
                            key={item.id}
                            onClick={() =>
                                router.push(`/MainModules/Education/ServiceDetails`)
                            }
                            className="
                                relative snap-center flex-shrink-0
                                w-[290px] min-h-[271px]
                                sm:w-[70vw] h-[300px]
                                md:w-[331px] md:h-[372px] lg:h-[349px] lg:w-[352px]
                                overflow-hidden 
                                "
                        >
                            {/* SVG BACKGROUND */}
                            {/* <CardBg /> */}

                            {/* CONTENT */}
                            <div className="relative z-10 lg:h-[349px] bg-[#FFFFFF] border border-gray-300 rounded-xl flex flex-col">
                                {/* IMAGE SECTION */}
                                <div className="relative md:h-[170px] w-full p-4 h-[156px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[378px] h-full object-cover
                                    rounded-xl"
                                    />
                                    <div className="">
                                        <span className="absolute top-5 left-5 bg-white text-blue-600 text-[10px] font-semibold px-3 py-1 rounded-lg flex items-start gap-1">
                                            <img src="/image/security.png" width={14} height={14} />
                                            Trusted
                                        </span>

                                        {/* Discount */}
                                        <span className="absolute top-5 right-15 bg-white text-black text-[10px] font-semibold px-1 py-1 rounded-lg">
                                            Discount {item.discount}
                                        </span>

                                        {/* Bookmark */}
                                        <button className="absolute top-5 right-5 bg-black/70 p-2 rounded-full">
                                            <Bookmark size={16} className="text-white" />
                                        </button>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="relative p-2 lg:-mt-4 -mt-2 text-black flex-1">
                                    
                                    <div className="flex items-center justify-between mb-2 md:mb-6">
                                        <span className="inline-block bg-[#FFFFFF] font-semibold text-[12px] md:text-[16px] px-3 py-1 rounded-full">
                                            {item.title}
                                        </span>

                                        <span className="text-[8px] md:text-[10px] lg:mr-2 mr-2 px-1 py-1 bg-[#548AFE] rounded-lg whitespace-nowrap shrink-0">
                                            {item.earn}
                                        </span>
                                    </div>

                                    <div className="flex items-center lg:-mt-2 mb-2 gap-2">
                                        <div className="inline-flex items-center gap-2 text-[9px] bg-[#F4F4F4] rounded-xl md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                            IT & Software
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-[9px] bg-[#F4F4F4] rounded-xl md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                           
                                            <div className="w-[7px] h-[7px] rounded-full bg-green-500"/>Online mode
                                        </span>
                                    </div>


                                    <div className="flex items-cente mb-2">
                                        <div className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                            <PenIcon className="inline-block w-[12px] h-[12px] flex-shrink-0" />
                                           Create & Practice
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-[9px] md:text-[12px] px-3 py-1 whitespace-nowrap shrink-0">
                                            <Eye className="inline-block w-[12px] h-[12px] flex-shrink-0" />
                                            Design with empathy
                                        </span>
                                    </div>


                                    <div className="space-y-1">
                                        <div>
                                            {/* <h4 className="text-xs leading-none">Reviews</h4> */}
                                            <div className="flex items-center text-yellow-400 text-[20px] mt-4 md:text-[25px] gap-1 md:ml-2 lg:ml-2 leading-none">
                                                {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)}
                                            </div>
                                            <div className="lg:text-[10px] md:text-[10px] text-[9px] text-gray-700 md:ml-2 lg:ml-2">
                                                <User className="inline-block w-[12px] h-[12px] flex-shrink-0" /> 2,400+ reviews
                                            </div>
                                        </div>
                                    </div>

                                    {/* PRICE */}
                                    <div
                                        className="
                                            absolute lg:bottom-4 right-4 md:bottom-1 bottom-1
                                            bg-white text-black font-semibold
                                            text-[12.71px] md:text-[15px] lg:text-[20px] 
                                            lg:px-4 lg:py-1 md:px-4 md:py-2
                                            rounded-2xl shadow-md px-2 py-2
                                            flex flex-col items-center
                                            max-w-[85%]
                                            truncate 
                                            whitespace-nowrap
                                        "
                                    >
                                        <span className="lg:text-[10px] md:text-[10px] text-gray-500 ">Starting from</span>
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
