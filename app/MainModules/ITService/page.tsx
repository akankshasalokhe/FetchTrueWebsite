'use client';

import HighInDemand from '@/src/components/ITModules/HighInDemand';
import MostlyUsed from '@/src/components/ITModules/MostlyUsed';
import Recommendation from '@/src/components/ITModules/Recommendation';
import WhyChooseUs from '@/src/components/ITModules/WhyChooseUs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ITModulesPage() {

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


    type CategoryBgProps = {
        active: boolean;
    };

    const CategoryBg: React.FC<CategoryBgProps> = ({ active }) => (
        <svg
            viewBox="0 0 300 80"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            <path
                d="
        M 20 0
        H 280
        L 300 0
        V 30
        Q 300 80 230 80
        H 0
        V 20
        Q 0 0 20 0
        Z
      "
                fill={active ? '#000000' : '#E9EEF5'}
            />
        </svg>
    );

    const router = useRouter();
    const toSlug = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");


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

                            <Link href="/" >
                            <img
                                src="/image/Vector (1).png"
                                className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
                                alt="Back"
                            />
                            </Link>
                            
                            <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                IT Services
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

                {/* ===== HERO / BELOW CONTENT (SAME WIDTH) ===== */}
                <div className="w-full px-4 md:px-8 mt-6 mb-5">
                    <div className="relative w-full rounded-xl pb-22 md:pb-40">
                        {/* Background Image */}
                        <img
                            src="/image/ITModulebg.png"
                            alt="ITModulebg"
                            className="w-full h-[320px] md:h-[641px] object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 z-10 p-6 md:p-10 text-white">
                            <p className="text-[16px] md:text-[50px] text-[#42566D] font-semibold">
                                Smart IT Services
                            </p>

                            <p className="mt-2 text-sm md:text-[40px] text-[#414141] md:whitespace-nowrap font-normal max-w-sm md:max-w-3xl">
                                From daily tech support to advanced digital transformation
                            </p>

                            <div className="mt-25 text-[46.14px] md:text-[209.17px] -ml-6  md:ml-2 whitespace-nowrap text-white font-bold leading-none">
                                IT SERVICES
                            </div>

                            <img
                                src="/image/decode.png"
                                alt="Decode"
                                className=" w-[200px] object-contain md:w-[316px] md:-mt-35 -mt-25 absolute left-1/2 -translate-x-1/2 h-auto"
                            />
                        </div>
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


                    {/* CATEGORY */}
                    <div className="mt-10">
                        <h2 className="text-xl md:text-3xl font-semibold mb-4">
                            Category
                        </h2>

                        {/* <div className="flex gap-4 overflow-x-auto no-scrollbar">
                            {categories.map((cat, index) => {
                                const active = selectedCategory === cat.label;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCategory(cat.label)}
                                        className="relative min-w-[200px] h-[60px]"
                                    >
                                        <CategoryBg active={active} />

                                        <div className="relative z-10 flex items-center justify-between px-4">
                                            <span
                                                className={`text-sm font-medium ${active ? "text-white" : "text-black"
                                                    }`}
                                                     onClick={() =>
                                router.push(`/MainModules/ITService/${toSlug(cat.label)}`)
                            }
                                             >
                                                {cat.label}
                                            </span>

                                            <img
                                                src={cat.path}
                                                alt="categoryicon"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div> */}
                        <div className="flex gap-4 overflow-x-auto no-scrollbar">
                            {categories.map((cat, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            router.push(`/MainModules/ITService/${toSlug(cat.label)}`)
                                        }
                                        className="relative min-w-[200px] h-[60px] cursor-pointer"
                                    >
                                        {/* background (inactive always, since no filter here) */}
                                        <CategoryBg active={false} />

                                        <div className="relative z-10 flex items-center justify-between px-4">
                                            <span className="text-sm font-medium text-black">
                                                {cat.label}
                                            </span>

                                            <img
                                                src={cat.path}
                                                alt="categoryicon"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                    </div>


                </div>

            </section>

            <section className="w-full mt-6 md:mt-10">
                <Recommendation selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <MostlyUsed selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <HighInDemand selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <WhyChooseUs />
            </section>
        </>
    );
}
