'use client';


import BestSeller from '@/src/components/EducationSubCategories/BestSeller';
import TopPicks from '@/src/components/EducationSubCategories/TopPick';
import TopPopular from '@/src/components/EducationSubCategories/TopPopular';
import Recommended from '@/src/components/EducationSubCategories/Recommended';
import { useState, use } from "react";
import Link from 'next/link';


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
        return slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };


    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl w-full">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 lg:gap-5">
                            <img
                                src="/image/Group 2.png"
                                className="w-[26px] h-[30px] lg:w-[34.36px] lg:h-[42.95px]
                 filter hue-rotate-[140deg] saturate-200 brightness-105"
                                alt="Home"
                            />
                         <Link href="/MainModules/Education">
                            <img
                                src="/image/educationback.png"
                                className="hidden md:block w-[16px] h-[14px] lg:w-[38.6px] lg:h-[35.02px]"
                                alt="Back"
                            />

                         </Link>

                            <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                {formatSlugToTitle(slug)}
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <img
                            src="/image/educationbookmark.png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>


                <section className="relative w-full mt-15 px-4 md:px-8">
                    <h1 className="text-[16px] md:text-[24px] mb-5">Category</h1>


                    <div
                        className="
                        flex gap-4
                        overflow-x-auto
                        snap-x snap-mandatory
                        no-scrollbar
                        md:flex-wrap md:overflow-visible
                    "
                    >
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                className="
                                snap-start cursor-pointer
                                flex items-center gap-2
                                p-2 bg-[#FE8F36]
                                rounded-lg
                                min-w-[120px]
                                md:w-[120px]
                                flex-shrink-0
                            "
                             onClick={() => setSelectedCategory(item.label)}
                            >
                                <img
                                    src={item.path}
                                    alt={item.label}
                                    className="w-[26px] h-[26px] object-contain"
                                />

                                <span className="text-[12px] text-white font-medium leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>


                </section>

                {/* ================= SEARCH ACCORDING TO YOU ================= */}
                <div className="w-full px-4 md:px-8 mt-5">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">

                        <h2 className="text-xl md:text-3xl font-semibold mb-4">
                            Search According to you
                        </h2>


                        {/* Search Box */}
                        <div className="relative w-full md:w-[320px]">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}

                                className="
                                      w-full
                                      rounded-full
                                      border border-gray-300
                                      px-10 py-2
                                      text-sm
                                      outline-none
                                      focus:border-blue-500
                                      "
                            />
                            {/* search icon */}
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <img src="/image/itsearch.png" alt="searchicon" className='w-[20.66px] h-[20.66px]' />
                            </span>
                        </div>

                    </div>





                    {/* ===== SEARCH & FILTER ===== */}
                    <div className="w-full px-4 md:px-8 mt-5">

                        {/* FILTER PILLS */}
                        <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                            {valueRange.map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => setSelectedRange(item.value)}
                                    className={`
                                          whitespace-nowrap rounded-full px-5 py-2 text-sm border transition
                                          ${selectedRange === item.value
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-black border-black"}
                                            `}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>


            </section>



            <section className="w-full mt-6 md:mt-10">
                <TopPopular contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <Recommended contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <TopPicks contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <BestSeller contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
            </section>

        </>
    )
}

