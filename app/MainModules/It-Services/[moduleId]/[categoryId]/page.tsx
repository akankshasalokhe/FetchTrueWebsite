'use client';

import Recommendation from "@/src/components/ITModulesSubCategories/Recommendation";
import MostlyUsed from "@/src/components/ITModulesSubCategories/MostlyUsed";
import HighInDemand from "@/src/components/ITModulesSubCategories/HighInDemand";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";


export default function SubCategoryPage() {

    const params = useParams();
    const searchParams = useSearchParams();


    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;


  const categoryName = searchParams.get("categoryName");

    // const categories = [{ label: "Cyber Security", path: "/image/cybersecurity.png" },
    // { label: "IT Consulting", path: "/image/itconsulting.png" },
    // { label: "Web Development", path: "/image/webdevelopment.png" },
    // { label: "App Development", path: "/image/appdevelopment.png" },]

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
                {/* <div className="w-screen -mx-2 ">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl w-full">
                      
                        <div className="flex items-center gap-3 lg:gap-5">
                           

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

                        
                        <img
                            src="/image/Vector (2).png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div> */}

                <div className="hidden md:hidden lg:block w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl">
                        <div className="flex items-center gap-4">
                            {/* <img src="/image/Group 2.png" className="w-[30px]" /> */}
                            <Link href={`/MainModules/It-Services/${moduleId}`}>
                            <img src="/image/Vector (1).png" className="w-[23px] h-[20px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">{categoryName}</h1>
                        </div>

                        {/* SEARCH */}
                        <div className="flex items-center gap-4">
                            {/* SEARCH */}
                            <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                        w-full
                                        rounded-full bg-white
                                        border border-gray-300
                                        px-10 py-2
                                        text-sm
                                        outline-none
                                        focus:border-blue-500
                                    "
                                />

                                {/* search icon */}
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <img
                                        src="/image/itsearch.png"
                                        alt="searchicon"
                                        className="w-[18px] h-[18px]"
                                    />
                                </span>
                            </div>

                            {/* BOOKMARK / LOCATION ICON */}
                            <img
                                src="/image/ITServiceSubcategoriesbookmark.png"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>


                    </div>

                </div>


                {/* ================= NAVBAR MOBILE ================= */}
                <section>
                    <div
                        className="
                                block md:block lg:hidden
                                w-full -mt-6 w-screen md:-mx-0 md:-mt-12
                                bg-[#E2E9F1]
                                flex flex-col
                                px-4 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                    >
                        {/* ===== ROW 1: HEADER ===== */}
                        <div className="flex items-center justify-between">
                            {/* LEFT */}
                            <div className="flex items-center gap-3 p-8 min-w-0">
                                <Link href="/MainModules/OnDemand">
                                    <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                                </Link>

                                <h1 className="text-[16px] font-semibold truncate">
                                    {/* {formatSlugToTitle(slug)}  */}
                                </h1>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                                <img
                                    src="/image/ITServiceSubcategoriesbookmark.png"
                                    className="w-[14px] h-[14px]"
                                    alt="Bookmark"
                                />
                            </div>
                        </div>

                        {/* ===== ROW 2: SEARCH ===== */}
                        <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                <img
                                    src="/image/itsearch.png"
                                    className="w-[18px] h-[16px]"
                                    alt="Search"
                                />
                            </span>
                        </div>
                    </div>
                </section>



                {/* ================= SEARCH ACCORDING TO YOU ================= */}
                <div className="w-full px-4 md:px-8 mt-5">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">


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
                {/* <ExploreAllServices contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} /> */}
                <Recommendation categoryId={categoryId} moduleId={moduleId} />
                <MostlyUsed categoryId={categoryId} moduleId={moduleId} />
                <HighInDemand categoryId={categoryId} moduleId={moduleId} />
            </section>
        </>
    );
}
