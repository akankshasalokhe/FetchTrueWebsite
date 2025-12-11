'use client'

import { useRef, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { image, label } from "framer-motion/client";

export default function RealStatePage() {
    const properties = [
        {
            id: 1,
            bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
            image: "/mockup/building.png",
            title: "Residential Property",
            type: "Real Estate",
            rating: 4,
            location: "Near Andheri West, Mumbai",
            earning: "5%",
            discount: "30%",
            monthlyEarning: "10-20 Lac",
            outlets: 10,
            area: "1500 Sq - 1000 Sq",
            price: "45L",
        },
        {
            id: 2,
            bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
            image: "/mockup/building.png",
            title: "Luxury Apartment",
            type: "Real Estate",
            rating: 5,
            location: "Banjara Hills, Hyderabad",
            earning: "7%",
            discount: "25%",
            monthlyEarning: "12-22 Lac",
            outlets: 14,
            area: "1800 Sq - 1200 Sq",
            price: "72L",
        },
        {
            id: 3,
            bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
            image: "/mockup/building.png",
            title: "Commercial Space",
            type: "Business Property",
            rating: 4,
            location: "Koramangala, Bangalore",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-15 Lac",
            outlets: 7,
            area: "1300 Sq - 900 Sq",
            price: "89L",
        },
        {
            id: 4,
            bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
            image: "/mockup/building.png",
            title: "Studio Apartment",
            type: "Real Estate",
            rating: 3,
            location: "Powai, Mumbai",
            earning: "4%",
            discount: "15%",
            monthlyEarning: "6-12 Lac",
            outlets: 6,
            area: "900 Sq - 700 Sq",
            price: "38L",
        },
        {
            id: 5,
            bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
            image: "/mockup/building.png",
            title: "Retail Shop",
            type: "Commercial",
            rating: 4,
            location: "Gachibowli, Hyderabad",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-18 Lac",
            outlets: 12,
            area: "1100 Sq - 850 Sq",
            price: "55L",
        },
    ];

    const categoryItems = [
        { label: "Residential Property", path: "/image/building1.png" },
        { label: "Commercial Property", path: "/image/building2.png" },
        { label: "Property Management", path: "/image/building3.png" }
    ]

    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Calculate max scroll
    const getMaxScroll = () => {
        if (!containerRef.current) return 0;
        return containerRef.current.scrollWidth - containerRef.current.clientWidth;
    };

    // Handle mouse/touch drag with boundary checks
    const handleMouseDown = (e: MouseEvent) => {
        if (!containerRef.current) return;

        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.pageX - rect.left);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        if (isDragging && containerRef.current) {
            setIsDragging(false);
            const container = containerRef.current;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');
        }
    };

    const handleMouseUp = () => {
        if (!containerRef.current) return;

        setIsDragging(false);
        const container = containerRef.current;
        container.style.cursor = 'grab';
        container.style.removeProperty('user-select');

        // Snap to nearest card
        const cardElement = container.querySelector('.snap-center') as HTMLElement;
        const cardWidth = cardElement?.offsetWidth || 300;
        const gap = 24; // gap-6 = 24px
        const scrollPos = container.scrollLeft;
        const cardCount = Math.round(scrollPos / (cardWidth + gap));

        container.scrollTo({
            left: cardCount * (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.pageX - rect.left;
        const walk = (x - startX) * 1.5; // Reduced multiplier for smoother controls

        // Calculate new scroll position
        let newScrollLeft = scrollLeft - walk;
        const maxScroll = getMaxScroll();

        // Apply boundaries
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

        container.scrollLeft = newScrollLeft;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
        if (!containerRef.current) return;

        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.touches[0].pageX - rect.left);
        setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging || !containerRef.current) return;
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].pageX - rect.left;
        const walk = (x - startX) * 1.5;

        let newScrollLeft = scrollLeft - walk;
        const maxScroll = getMaxScroll();
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

        container.scrollLeft = newScrollLeft;
    };

    // Add event listeners
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Type event handlers for addEventListener
        const mouseDownHandler = (e: globalThis.MouseEvent) => handleMouseDown(e as unknown as MouseEvent);
        const mouseMoveHandler = (e: globalThis.MouseEvent) => handleMouseMove(e as unknown as MouseEvent);
        const mouseUpHandler = () => handleMouseUp();
        const mouseLeaveHandler = () => handleMouseLeave();

        const touchStartHandler = (e: globalThis.TouchEvent) => handleTouchStart(e as unknown as TouchEvent);
        const touchMoveHandler = (e: globalThis.TouchEvent) => handleTouchMove(e as unknown as TouchEvent);
        const touchEndHandler = () => handleMouseUp();

        container.addEventListener('mousedown', mouseDownHandler);
        container.addEventListener('mouseleave', mouseLeaveHandler);
        container.addEventListener('mouseup', mouseUpHandler);
        container.addEventListener('mousemove', mouseMoveHandler);
        container.addEventListener('touchstart', touchStartHandler);
        container.addEventListener('touchmove', touchMoveHandler);
        container.addEventListener('touchend', touchEndHandler);

        return () => {
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseleave', mouseLeaveHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
            container.removeEventListener('mousemove', mouseMoveHandler);
            container.removeEventListener('touchstart', touchStartHandler);
            container.removeEventListener('touchmove', touchMoveHandler);
            container.removeEventListener('touchend', touchEndHandler);
        };
    }, [isDragging, startX, scrollLeft]);


    return (
        <>
            {/* MAIN WRAPPER */}
            <section
                style={{
                    backgroundImage: "url('/image/Background design.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="
          w-full h-auto rounded-[15px]
          px-4 lg:px-10 py-6 lg:py-14
          bg-gradient-to-r from-[#EFE3FE] to-[#F7F7FF]
        "
            >
                {/* ---------------- NAVBAR ---------------- */}
                <div
                    className="
            w-full mx-auto h-auto 
            flex items-center justify-between
            pb-4
          "
                >
                    {/* LEFT SIDE */}
                    <div className="flex items-center p-2 gap-3  rounded-xl w-[98%] lg:gap-5"
                        style={{ backgroundColor: "#FFFFFF" }}
                    >
                        <img
                            src="/image/Group 2.png"
                            className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
                            alt="Home"
                        />

                        <img
                            src="/image/Vector (1).png"
                            className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
                            alt="Back"
                        />

                        <h1 className="text-[18px] lg:text-[26px] font-semibold text-black">
                            Real Estate
                        </h1>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4 bg-white rounded-xl p-2 lg:gap-6">

                        <img
                            src="/image/Vector (2).png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>

                {/* ---------------- HERO SECTION ---------------- */}
                <div className="w-full mt-10">

                    <div
                        className="relative w-full h-[862px] mx-auto rounded-2xl  overflow-hidden bg-white"
                    >
                        {/* Bg Text Layer */}
                        <div className="absolute inset-0 mt-45 ml-6 flex items-start pointer-events-none">
                            <h1 className="text-[200px] font-bold left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start">
                                REAL <br /> ESTATE
                            </h1>
                        </div>

                        {/* Arrow Button */}
                        <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
                            <FiArrowUpRight className="text-purple-500 w-10 h-10" />
                        </div>


                        {/* Main Heading (positioned with minimal margin) */}
                        <h2
                            className=" absolute top-14 left-10 font-[400] text-[#0C1B36]  "
                            style={{
                                fontFamily: "GFS Didot",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "83.36px",
                                lineHeight: "86.37px",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                            }}
                        >
                            Explore Our Real <br /> Estate Services
                        </h2>


                        {/* House Image */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <img
                                src="/image/Houseimage.png"
                                alt="House"
                                className="w-[296px] md:w-[620px] md:h-[440px] h-[227px] object-contain"
                            />
                        </div>

                    </div>

                    {/* MOBILE LAYOUT */}
                    <div className="lg:hidden flex flex-col items-start gap-4 px-1">
                        <h1
                            className="text-black font-[500] text-[28px] leading-[32px]"
                            style={{ fontFamily: "Golos Text" }}
                        >
                            Sell Earn Repeat
                        </h1>

                        <p
                            className="text-black text-[14px] leading-[18px] w-[90%]"
                            style={{ fontFamily: "Golos Text" }}
                        >
                            how you can earn and earn up to maximum values. don’t wait start
                            your new journey with us
                        </p>

                        <div
                            className="bg-[#9747FF] px-6 py-2 rounded-[15px]"
                        >
                            <span
                                className="text-white text-[18px] font-semibold"
                                style={{ fontFamily: "Inter" }}
                            >
                                1,00,000/-
                            </span>
                        </div>

                        <img
                            src="/image/franchiseHero.png"
                            alt="Franchise Visual"
                            className="w-full max-w-[330px] mx-auto  object-contain"
                        />
                    </div>



                </div>

                {/* Category */}

                <div className="w-full relative overflow-hidden">
                    <p className="text-2xl md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8" 
                      style={{fontWeight:600}}>Category</p>
                    <div className="flex gap-8 p-6">
                        {categoryItems.map((items) => (

                            <div key={items.label} className="relative w-[189.14px] h-[226.29px]">
                                {/* Background Image */}
                                <Image
                                    src="/image/rectangularcategory.png"
                                    alt="rectangular"
                                    fill
                                    className="object-cover"
                                />

                                {/* Centered Foreground Image */}
                                <Image
                                    src={items.path}
                                    alt="buildings"
                                    width={140.16}
                                    height={140.16}
                                    className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
                                />

                                {/* Text over curved background */}
                                <p
                                    className="absolute top-1 left-1/2 -translate-x-1/2 text-start"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "18.4px",
                                        lineHeight: "20.6px",
                                        color: "#000", // change if needed
                                    }}
                                >
                                    {items.label}
                                </p>
                            </div>

                        ))}
                    </div>
                </div>


                {/* Today Top Picks */}
                <div className="relative w-full overflow-hidden p-4 md:p-6">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8"
                        style={{ fontWeight: 600 }}> Today Top Picks</h1>

                    {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
                    <div
                        ref={containerRef}
                        className="flex gap-4 md:gap-16 p-4 md:p-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
                    >
                        {properties.map((p) => (
                            <div
                                key={p.id}
                                className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] 
                                                 relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none
                                                 flex-grow-0 flex-shrink-0"
                                style={{ background: p.bgColor }}
                            >
                                {/* IMAGE SECTION */}
                                <div className="relative w-full h-40 rounded-xl">
                                    <Image
                                        src={p.image}
                                        alt="Property"
                                        fill
                                        className="object-cover rounded-xl pointer-events-none"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <span className="absolute top-2 flex left-2 bg-white text-blue-600  font-semibold  px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
                                        <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted

                                    </span>

                                    <button
                                        className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Bookmark size={18} className="text-white" />
                                    </button>

                                    <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
                                        <Image
                                            src="/mockup/propertyicon.png"
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className="object-contain pointer-events-none"
                                        />
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                                            {"⭐".repeat(p.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="mt-12 space-y-1">
                                    <h2 className="text-lg font-semibold">{p.title}</h2>
                                    <p className="text-sm opacity-90">{p.type}</p>
                                    <div className="relative mt-3">
                                        {/* Background image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src="/image/bordercut.png"
                                                alt="bordercut"
                                                className="w-full rounded-xl h-full object-cover"
                                                width={312}
                                                height={159}
                                            />
                                        </div>

                                        {/* Content overlay */}
                                        <div className="relative z-10 p-4">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-semibold mb-1">Location</h3>
                                                    <p className="text-xs opacity-95 font-inter flex items-center gap-1">
                                                        <MdLocationOn size={24} className="text-white-600" /> {p.location}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-2 items-end ml-4">
                                                    <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
                                                        Earn Up to {p.earning}
                                                    </span>
                                                    <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
                                                        {p.discount} Discount
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-3 text-xs opacity-95 space-y-1">
                                                <p className="font-medium">Details</p>
                                                <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
                                                <p>Number Outlet: <b>{p.outlets}</b></p>
                                                <div className="flex items-center gap-2">
                                                    <img src="/image/area.png" alt="area" width={20} height={20} />
                                                    <span>Area <b>{p.area}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-0">
                                        <div
                                            className="absolute bottom-2 right-0 w-[72px] h-[52px] bg-white text-black font-semibold px-4 py-4 rounded-2xl  z-20 pointer-events-none"
                                            style={{ fontSize: "20px", fontWeight: "600" }}
                                        >
                                            ₹{p.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add right padding spacer for mobile */}
                        <div className="md:hidden min-w-4 flex-shrink-0"></div>
                    </div>
                </div>



                {/* ---------------- MOBILE SEARCH BAR ---------------- */}
                <div className="lg:hidden w-full mt-6">
                    <div
                        className="
              w-full h-[50px]
              bg-white border border-[#DCDCDC] 
              rounded-[15px]
              shadow flex items-center px-4
            "
                    >
                        <CiSearch className="w-[18px] h-[18px] text-black" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full outline-none text-[16px] ml-4"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}