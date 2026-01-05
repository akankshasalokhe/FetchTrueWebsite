'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Zap, Brain, Settings, Wrench, Sliders } from "lucide-react";
import { FaStar } from "react-icons/fa";





export default function Recommendation() {
    const properties = [
        {
            id: 1,
            bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
            image: "/image/AIHubcardbg.png",
            title: "Residential Property",
            type: "AI Service",
            rating: 4,
            location: "Near Andheri West, Mumbai",
            earning: "5%",
            discount: "30%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1500 Sq - 1000 Sq",
            price: "45L",
        },
        {
            id: 2,
            bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
            image: "/image/AIHubcardbg.png",
            title: "Luxury Apartment",
            type: "AI Service",
            rating: 5,
            location: "Banjara Hills, Hyderabad",
            earning: "7%",
            discount: "25%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1800 Sq - 1200 Sq",
            price: "72L",
        },
        {
            id: 3,
            bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
            image: "/image/AIHubcardbg.png",
            title: "Commercial Space",
            type: "AI Service",
            rating: 4,
            location: "Koramangala, Bangalore",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1300 Sq - 900 Sq",
            price: "89L",
        },
        {
            id: 4,
            bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
            image: "/image/AIHubcardbg.png",
            title: "Studio Apartment",
            type: "AI Service",
            rating: 3,
            location: "Powai, Mumbai",
            earning: "4%",
            discount: "15%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "900 Sq - 700 Sq",
            price: "38L",
        },
        {
            id: 5,
            bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
            image: "/image/AIHubcardbg.png",
            title: "Retail Shop",
            type: "AI Service",
            rating: 4,
            location: "Gachibowli, Hyderabad",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "1-3 days",
            outlets: "Included",
            maintenance: "Auto managed",
            area: "1100 Sq - 850 Sq",
            price: "55L",
        },
    ];

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Calculate max scroll
    const getMaxScroll = () => {
        if (!containerRef.current) return 0;
        return containerRef.current.scrollWidth - containerRef.current.clientWidth;
    };

    // Handle mouse/touch drag with boundary checks
    const handleMouseDown = (e) => {
        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.pageX - rect.left);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            const container = containerRef.current;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const container = containerRef.current;
        container.style.cursor = 'grab';
        container.style.removeProperty('user-select');

        // Snap to nearest card
        const cardWidth = container.querySelector('.snap-center')?.offsetWidth || 300;
        const gap = 24; // gap-6 = 24px
        const scrollPos = container.scrollLeft;
        const cardCount = Math.round(scrollPos / (cardWidth + gap));

        container.scrollTo({
            left: cardCount * (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    const handleMouseMove = (e) => {
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
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.touches[0].pageX - rect.left);
        setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e) => {
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

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleMouseUp);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div className="relative w-full lg:mt-8 p-1 lg:p-0">
            <h1 className="text-[16px] md:text-[24px] font-semibold mb-4 ml-6 md:mb-6 md:ml-8">Recommendation for you</h1>

            {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-8 p-1 md:p-8 md:w-[1024px] lg:w-[1535px] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
            >
                {properties.map((p) => (
                    <div
                        key={p.id}
                        className="snap-center flex-shrink-0 w-[314px] md:w-[308px] lg:w-[408px] -mt-6 
                               relative rounded-2xl p-8 -mb-8 shadow-md text-white overflow-hidden select-none
                               flex-grow-0 flex-shrink-0 bg-[#D0E0E7DB] lg:bg-white/50"
                    >
                        {/* IMAGE SECTION */}
                        <div className="relative w-full h-40 rounded-xl ">
                            <Image
                                src={p.image}
                                alt="Property"
                                fill
                                className="object-cover -ml-4 lg:-ml-0 rounded-xl pointer-events-none lg:w-[371px] lg:h-[197px] md:w-full md:h-[197px] w-[286px] h-[152px]"
                                //  className="object-cover -ml-4 lg:-ml-0 w-full h-full rounded-xl pointer-events-none"
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />


                            <button
                                className="absolute top-2 right-6 lg:right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Bookmark size={18} className="text-white" />
                            </button>

                            <div className="absolute -bottom-10 right-0 p-2 rounded-2xl flex flex-col items-center">

                                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                                    {"⭐".repeat(p.rating)}
                                </div>
                            </div>

                        </div>

                        {/* CONTENT SECTION */}
                        <div className="space-y-1">
                            <h2 className="lg:text-[20px] text-[14px] -mt-4 -ml-4 lg:-ml-0 lg:-mt-0 text-black font-semibold">{p.title}</h2>
                            <p className="lg:text-[12px] text-[10px] -ml-4 lg:-ml-0 text-black bg-white/100 opacity-290 inline-block lg:p-1 p-1 rounded-xl">{p.type}</p>
                            <div className="relative">


                                {/* Content overlay */}
                                <div className="relative z-10 p-2">
                                    <div className="flex w-full">
                                        <div className="flex gap-2 items-end ml-auto">
                                            <span className="bg-[#548AFE] text-black text-[10px] lg:text-[14px] px-2 py-1 rounded-lg font-semibold whitespace-nowrap">
                                                Discount {p.earning}
                                            </span>
                                            <span className="bg-[#89FF9B] text-black text-[10px] lg:text-[14px] px-2 py-1 rounded-lg font-semibold">
                                                Earn {p.discount}
                                            </span>
                                        </div>
                                    </div>



                                    <div className="mt-3 text-xs opacity-95 flex flex-col space-y-1 -ml-6 lg:-ml-4">
                                        <p className="font-semibold text-[10px] lg:text-[14px] text-black">Setup & Time</p>
                                        <p className="flex gap-2 text-[10px] lg:text-[14px] text-black"><Zap size={14} className="text-yellow-500" />Set up: {p.monthlyEarning}</p>
                                        <p className="flex gap-2 text-[10px] lg:text-[14px] text-black"><Brain size={14} className="text-red-500" />AI Training: {p.outlets}</p>
                                        <p className="flex gap-2 text-[10px] lg:text-[14px] text-black"><Settings size={14} />Maintenance: {p.maintenance}</p>

                                    </div>
                                </div>
                            </div>

                            {/* <div className="relative h-0">
                                <div className="absolute bottom-2 flex-col items-center flex right-0 -mr-0 sm:w-[72px] sm:h-[62px] w-[45px] h-[45px] lg:w-[142px] lg:h-[66px] bg-white text-black  lg:px-4 lg:py-2 px-12 py-2 rounded-2xl z-20 pointer-events-none">
                                    <p className="text-center text-[10px] lg:text-[14px] whitespace-nowrap"> Starting from </p>
                                    <p className="text-center font-semibold text-[16px] lg:text-[24px]  max-w-[85%] truncate whitespace-nowrap"> ₹{p.price} </p>
                                </div>
                            </div> */}
                            <div className="relative">
                                <div
                                    className="
                            absolute bottom-2 right-0
                            flex flex-col items-center
                            bg-white text-black
                            w-[113px] h-[55px]
                            md:w-[93px] md:h-[60px]
                            lg:w-[142px] lg:h-[66px]
                            p-2 lg:px-4 lg:py-2 md:px-1 md:py-2
                            rounded-2xl z-20 
                            pointer-events-none
                            "
                                >
                                    <p className="text-[10px] lg:text-[14px] whitespace-nowrap">
                                        Starting from
                                    </p>
                                    <p className="font-semibold text-[16px]  lg:text-[24px] whitespace-nowrap">
                                        ₹{p.price}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

               
            </div>
        </div>
    );
}




