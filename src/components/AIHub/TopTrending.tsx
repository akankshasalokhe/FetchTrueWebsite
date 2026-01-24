'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useTopTrending } from "@/src/context/TopTrendingContext";

type TopTrendingProps = {
    moduleId: string;
};

interface Package {
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
}


export default function TopTrending({ moduleId }: TopTrendingProps) {
   
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const {
        services,
        loading,
        error, fetchTopTrending
    } = useTopTrending();

    useEffect(() => {
        if (!moduleId) return;

        fetchTopTrending(moduleId);
    }, [moduleId]);


    const getMaxScroll = () => {
        const container = containerRef.current;
        if (!container) return 0;
        return container.scrollWidth - container.clientWidth;
    };

    const handleMouseDown = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const container = containerRef.current;
        if (!container) return;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = Math.max(
            0,
            Math.min(scrollLeft - walk, getMaxScroll())
        );
    };

    const stopDrag = () => {
        const container = containerRef.current;
        if (!container) return;
        setIsDragging(false);
        container.style.cursor = "grab";
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseup", stopDrag);
        container.addEventListener("mouseleave", stopDrag);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseup", stopDrag);
            container.removeEventListener("mouseleave", stopDrag);
        };
    }, [isDragging, startX, scrollLeft]);

    const getStartingPackage = (packages: Package[] = []) => {
        if (!packages.length) return null;

        return packages.reduce((min, pkg) =>
            pkg.discountedPrice < min.discountedPrice ? pkg : min
        );
    };


    const mappedServices = services.map((service) => {
        const packages = service.serviceDetails?.packages || [];
        const startingPackage = getStartingPackage(packages);

        return {
            id: service._id,
            title: service.serviceName,
            category: service.category?.name || "Unknown",
            image: service.thumbnailImage || "/image/placeholder.png",

            rating: service.averageRating ?? 0,
            reviews: service.totalReviews ?? 0,

            price: startingPackage?.discountedPrice ?? 0,
            originalPrice: startingPackage?.price ?? 0,
            discount: startingPackage?.discount ?? 0,

            keyValues:
                service.keyValues?.map((item) => ({
                    id: item._id,
                    key: item.key,
                    label: item.value,
                })) || [],
        };
    });



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <div className="w-full">
            <h1 className="text-[16px] md:text-[24px] font-semibold mb-4 ml-4">
                Top Trending
            </h1>

            <div
                ref={containerRef}
                className="flex gap-6 w-full p-4 overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab"
            >
                {mappedServices.map((p) => (
                    <div
                        key={p.id}
                        className="
                            snap-center
                            w-[270px] md:w-[308px] lg:w-[408px] lg:h-[373.99px]
                            bg-[#F4F4F4] mx-auto
                            rounded-2xl
                            p-4
                            flex-shrink-0
                            overflow-hidden
                            relative
                        "
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-40 rounded-xl overflow-hidden">
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-fit rounded-xl pointer-events-none w-[286px] h-[132px] lg:w-[398px] lg:h-[183px]"
                            />
                            <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full">
                                <Bookmark size={18} className="text-white" />
                            </button>


                        </div>



                        {/* CONTENT */}
                        <div className="mt-3 space-y-1">

                            {/* <h2 className="text-[14px] lg:text-[20px] -mt-6 lg:-mt-2 font-semibold text-black leading-snug whitespace-normal max-w-[65%] break-words">
                                {p.title}
                            </h2> */}
                            <h2
                                className="
                        text-[14px] lg:text-[20px]
                        font-semibold
                        text-black -mt-1 lg:-mt-2
                        leading-snug
                        line-clamp-2 max-w-[65%]
                        min-h-[40px] lg:min-h-[56px]
                    "
                            >
                                {p.title}
                            </h2>


                            <span className="inline-block text-[10px] lg:text-[12px] bg-white px-2 py-1 rounded-lg">
                                {p.category}
                            </span>


                            <div className="flex -mt-12 md:-mt-18">
                                <div className=" items-end ml-auto gap-1 text-yellow-400 text-[22px] mb-4">
                                    {/* {"⭐".repeat(p.rating)} */}
                                    {"★".repeat(p.rating)}
                                </div>
                            </div>


                            <div className="flex justify-end gap-2 -mt-4">
                                {/* <span className="bg-[#548AFE] text-[10px] lg:text-[14px] px-2 py-1 rounded-lg font-semibold">
                                    Discount {p.discount} %
                                </span> */}
                                <span className="bg-green-600 text-white  text-[8px] lg:text-[10px] px-1 py-1 rounded-lg font-semibold">
                                    Earn Up to {p.discount} %
                                </span>
                            </div>

                            <div className="space-y-1 text-black mt-8">
                                {/* <p className="font-semibold text-[10px] lg:text-[14px]">
                                    Setup & Time
                                </p>
                                <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                    <Zap size={14} className="text-yellow-500" />
                                    Set up: {p.monthlyEarning}
                                </p>
                                <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                    <Brain size={14} className="text-red-500" />
                                    AI Training: {p.outlets}
                                </p>
                                <p className="flex gap-2 text-[10px] lg:text-[14px]">
                                    <Settings size={14} />
                                    Maintenance: {p.maintenance}
                                </p> */}
                                <p className="font-semibold text-[10px] lg:text-[14px] lg:-mt-5">
                                    Setup & Time
                                </p>
                                {p.keyValues.map((kv) => (
                                    <div
                                        key={kv.id}
                                        className="flex flex-col text-[10px] lg:text-[14px] text-gray-700 leading-snug"
                                    >
                                        <div className="flex flex-row space-x-1">
                                            <span className="font-medium">{kv.key}:</span>
                                            <span className="text-gray-500">{kv.label}</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>



                        {/* PRICE */}
                        <div className="absolute bottom-4 right-3 bg-white rounded-2xl px-3 lg:px-2 py-2 lg:py-1 text-center">
                            <p className="text-[10px] lg:text-[10px]">
                                Starting from
                            </p>

                            <div className="font-semibold text-[16px] lg:text-[20px] flex flex-col items-center">
                                <span>₹{p.price}</span>

                                {p.discount > 0 && (
                                    <div className="flex flex-row gap-2 text-center">
                                        <span className="line-through text-gray-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                            ₹{p.originalPrice}
                                        </span>
                                        <span className="text-blue-400 text-[8px] md:text-[10px] lg:text-[12px]">
                                            ({p.discount}% off)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
