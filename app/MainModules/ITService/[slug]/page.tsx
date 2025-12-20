'use client';

import Recommendation from "@/src/components/ITModulesSubCategories/Recommendation";
import MostlyUsed from "@/src/components/ITModulesSubCategories/MostlyUsed";
import HighInDemand from "@/src/components/ITModulesSubCategories/HighInDemand";
import ExploreAllServices from "@/src/components/ITModulesSubCategories/ExploreAllServices";
import { useState, use } from "react";
import Link from "next/link";


type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default function SubCategoryPage({ params }: Props) {

    const { slug } = use(params);   // ✅ unwrap params
    const contextTitle = slug;

    
        const categories = [{ label: "Cyber Security", path: "/image/cybersecurity.png" },
        { label: "IT Consulting", path: "/image/itconsulting.png" },
        { label: "Web Development", path: "/image/webdevelopment.png" },
        { label: "App Development", path: "/image/appdevelopment.png" },]
    
        const [selectedRange, setSelectedRange] = useState("all");
        const [selectedCategory, setSelectedCategory] = useState("all");
        const [searchQuery, setSearchQuery] = useState("");
    
    
    
        const valueRange = [
            { label: "All", value: "all" },
            { label: "300", value: "0-300" },
            { label: "300-400 Rs", value: "300-400" },
            { label: "400-600 Rs", value: "400-600" },
            { label: "600-800 Rs", value: "600-800" },
            { label: "800-1000 Rs", value: "800-1000" },
        ];

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
                                className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
                                alt="Home"
                            />

                            <Link href="/MainModules/ITService" >
                            <img
                                src="/image/Vector (1).png"
                                className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
                                alt="Back"
                            />
                            </Link>

                            <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                {formatSlugToTitle(slug)}
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <img
                            src="/image/Vector (2).png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>



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
                    <div className="w-full px-4 md:px-8 mt-12">

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
                <Recommendation contextTitle={contextTitle} selectedRange={selectedRange}  selectedCategory={selectedCategory} searchQuery={searchQuery}/>
                <MostlyUsed contextTitle={contextTitle} selectedRange={selectedRange}  selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <HighInDemand contextTitle={contextTitle} selectedRange={selectedRange}  selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <ExploreAllServices contextTitle={contextTitle} selectedRange={selectedRange}  selectedCategory={selectedCategory} searchQuery={searchQuery} />
            </section>
        </>
    );
}
