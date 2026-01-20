'use client';

import Recommended from '@/src/components/AIHubSubCategories/RecommendedService';
import { useState, use } from "react";
import Link from 'next/link';
import TopTrending from '@/src/components/AIHubSubCategories/TopTrending';
import FreeTrialAvailable from '@/src/components/AIHubSubCategories/FreeTrialAvailable';
import CategorySection from '@/src/components/AIHubSubCategories/CategorySection';
import CostSavingAI from '@/src/components/AIHubSubCategories/CostSavingAI';
import { ChevronLeft, SearchCheckIcon } from 'lucide-react';


type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const categories = [
    { label: "Leadership", path: "/image/Business.png" },
    { label: "Happiness", path: "/image/Marketing.png" },
    { label: "Creativity", path: "/image/Music.png" },
    { label: "Design", path: "/image/Design.png" },
    { label: "Motivation", path: "/image/Lifestyle.png" },
]


export default function SubCategoryPage({ params }: Props) {

    const { slug } = use(params);   // ✅ unwrap params
    const contextTitle = slug;



    const valueRange = [
        { label: "All", value: "all" },
        { label: "300", value: "0-300" },
        { label: "300-400 Rs", value: "300-400" },
        { label: "400-600 Rs", value: "400-600" },
        { label: "600-800 Rs", value: "600-800" },
        { label: "800-1000 Rs", value: "800-1000" },
    ];


    const [selectedRange, setSelectedRange] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

  
    const formatSlugToTitle = (slug: string) => {
        const decodedSlug = decodeURIComponent(slug);

        return decodedSlug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };


    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#EFFCFF] lg:bg-[#E2E9F1] flex items-center justify-between p-2 rounded-xl w-full">
                        {/* LEFT */}
                        <div className="flex  p-2 items-center gap-3 lg:gap-5">

                            <Link href="/MainModules/AIHub">
                                <img
                                    src="/image/AIHubback.png"
                                    className="hidden md:block w-[16px] h-[14px] lg:w-[38.6px] lg:h-[35.02px]"
                                    alt="Back"
                                />

                            </Link>

                            <Link href="/MainModules/AIHub">
                                <ChevronLeft className="block md:hidden w-5 h-5 lg:w-8 lg:h-8 text-black cursor-pointer" />
                            </Link>


                            <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                {formatSlugToTitle(slug)}
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <img
                            src="/image/AIHubbookmark.png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>

                <div className="mt-4 block md:hidden">
                    {/* SEARCH SECTION */}
                    <div className="max-w-4xl mx-auto px-8 md:px-8">
                        <div className="relative">
                            <SearchCheckIcon
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                            />

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="
                                w-full
                                pl-10
                                p-1 md:p-4
                                rounded-2xl
                                border border-gray-300
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-500
                            "
                            />
                        </div>
                    </div>


                </div>

            </section>



            <section className="w-full p-6 mt-6 md:mt-10">
                <Recommended />
                <FreeTrialAvailable />
                <TopTrending />
            </section>

            <section className="relative w-full mt-4 mb-2 p-6 lg:p-12">
                <div className="flex flex-col items-center text-center">
                    <h1 className="lg:text-[32px] font-semibold">Sort By Your Business Goal </h1>
                    <p className="lg:text-[20px]">get the service that matches your business goal </p>
                </div>
                <h1 className="text-[16px] md:text-[24px] font-semibold mb-5">Category</h1>

                <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:flex-wrap">
                    {categories.map((item, index) => {
                        const isActive = item.label === selectedCategory; // check if active

                        return (
                            <div
                                key={index}
                                className={`
                                    cursor-pointer
                                    flex items-center gap-2
                                    p-2 rounded-lg border border-black
                                    flex-shrink-0 px-4 py-2
                                    w-full md:w-[120px]
                                    ${isActive ? "bg-[#009ABF] text-white" : "bg-white text-black"}
                                    `}
                                onClick={() => setSelectedCategory(item.label)}
                            >
                                <img
                                    src={item.path}
                                    alt={item.label}
                                    className="w-[26px] h-[26px] object-contain"
                                />

                                <span className="text-[12px] font-medium leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>



            </section>
            <section className="w-full p-6 mt-2 md:mt-2">
                <CategorySection />
                <CostSavingAI />
            </section>



        </>
    )
}

