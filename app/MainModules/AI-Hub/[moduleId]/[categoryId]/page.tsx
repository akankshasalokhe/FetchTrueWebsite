'use client';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { ChevronLeft, SearchCheckIcon } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import { useSubCategory } from '@/src/context/SubCategoriesContext';
import { useRecommendedServiceByCategoryIdContext } from '@/src/context/RecommendedServiceByCategoryIdContext';
import { useMostPopularServiceByCategory } from '@/src/context/MostPopularServiceByCategoryIdContext';
import { useTopTrendingServiceByCategoryIdContext } from '@/src/context/TopTrendingServiceByCategoryIdContext';
import ServiceCard from "@/src/components/AIHubSubCategories/ServiceCard";


/* ---------- TYPES ---------- */
type Category = {
    _id: string;
    name: string;
};

type SubCategory = {
    _id: string;
    name: string;
    image: string;
    category: Category;
};

type keyValuesItem = {
    value: string,
    icon?: string,
    key: string,
    _id: string
};

export type UnifiedService = {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    keyValues: keyValuesItem[];
    originalPrice: number;
    discount: number;
    source: "recommended" | "popular" | "trending";
};

type BackendService = {
    _id: string;
    serviceName: string;
    thumbnailImage?: string;
    averageRating?: number;
    totalReviews?: number;
    category?: {
        _id: string;
        name: string;
    };
    keyValues: keyValuesItem[];
    serviceDetails?: {
        packages?: {
            price: number;
            discountedPrice: number;
            discount: number;
        }[];
    };
};



export default function SubCategoryPage() {

    const params = useParams();
    const searchParams = useSearchParams();


    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;
    const categoryName = searchParams.get("categoryName");

    const {
        subCategories,
        loading,
        error,
        fetchSubCategories,
    } = useSubCategory();



    useEffect(() => {
        if (categoryId) {
            fetchSubCategories(categoryId);
        }
    }, [categoryId, fetchSubCategories]);



    const [selectedRange, setSelectedRange] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    /* ---------- DERIVED CATEGORY ---------- */
    const {
        services: recommendedServices,
        loading: recommendedLoading,
        fetchRecommendedServicesByCategoryId,
    } = useRecommendedServiceByCategoryIdContext();

    const {
        services: popularServices,
        loading: popularLoading,
        fetchMostPopularServiceByCategory
    } = useMostPopularServiceByCategory();

    const {
        services: trendingServices,
        loading: trendingLoading,
        fetchTopTrendingServicesByCategoryId
    } = useTopTrendingServiceByCategoryIdContext();


    /* ---------- FILTER STATE ---------- */
    const FILTERS = [
        { label: "All", value: "all" },
        { label: "High to Low", value: "high-to-low" },
        { label: "Low to High", value: "low-to-high" },
        { label: "Recommended", value: "recommended" },
        { label: "Most Popular", value: "most-popular" },
        { label: "Top Trending", value: "top-trending" },
    ];


    useEffect(() => {
        if (categoryId) {
            fetchSubCategories(categoryId);
            fetchRecommendedServicesByCategoryId(categoryId);
            fetchMostPopularServiceByCategory(categoryId);
            fetchTopTrendingServicesByCategoryId(categoryId);
        }
    }, [categoryId]);


    const mapService = (
        service: BackendService,
        source: UnifiedService["source"]
    ): UnifiedService => {
        const packages = service.serviceDetails?.packages ?? [];

        const cheapest =
            packages.length > 0
                ? packages.reduce((min, p) =>
                    p.discountedPrice < min.discountedPrice ? p : min
                )
                : null;

        return {
            id: service._id,
            title: service.serviceName,
            category: service.category?.name ?? "Unknown",
            image: service.thumbnailImage ?? "",
            rating: service.averageRating ?? 0,
            reviews: service.totalReviews ?? 0,
            price: cheapest?.discountedPrice ?? 0,
            originalPrice: cheapest?.price ?? 0,
            discount: cheapest?.discount ?? 0,
            keyValues: service?.keyValues ?? [],
            source,
        };
    };




    const allServices: UnifiedService[] = [
        ...recommendedServices.map(s => mapService(s, "recommended")),
        ...popularServices.map(s => mapService(s, "popular")),
        ...trendingServices.map(s => mapService(s, "trending")),
    ];




    const filteredServices = allServices.filter(service => {
        switch (selectedRange) {
            case "recommended":
                return service.source === "recommended";

            case "most-popular":
                return service.source === "popular";

            case "top-trending":
                return service.source === "trending";

            default:
                return true;
        }
    });

    const filteredAndSorted = [...filteredServices].sort((a, b) => {
        switch (selectedRange) {
            case "high-to-low":
                return b.price - a.price;

            case "low-to-high":
                return a.price - b.price;

            default:
                return 0;
        }
    });



    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#EFFCFF] lg:bg-[#E2E9F1] flex items-center justify-between p-2 rounded-xl w-full">
                        {/* LEFT */}
                        <div className="flex  p-2 items-center gap-3 lg:gap-5">

                            <Link href={`/MainModules/AI-Hub/${moduleId}`}>
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
                                {categoryName}
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

                {/* FILTER PILLS */}
                <div className="w-full px-4 md:px-8 mt-15 lg:ml-12">
                    <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                        {FILTERS.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setSelectedRange(item.value)}
                                className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${selectedRange === item.value
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

            </section>


            {/* 
            <section className="w-full p-6 mt-6 md:mt-10">
                <Recommended categoryId={categoryId} moduleId={moduleId} />
                <FreeTrialAvailable categoryId={categoryId} moduleId={moduleId}/>
                <TopTrending categoryId={categoryId} moduleId={moduleId} />
            </section> */}


            <section className="px-6 mt-10">
                <div
                    className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
                gap-4
              "
                >
                    {filteredAndSorted.map(service => (
                        <ServiceCard
                            key={`${service.source}-${service.id}`}
                            service={service}
                        />

                    ))}
                </div>
            </section>




        </>
    )
}

