'use client';

import Recommendation from "@/src/components/ITModulesSubCategories/Recommendation";
import MostlyUsed from "@/src/components/ITModulesSubCategories/MostlyUsed";
import HighInDemand from "@/src/components/ITModulesSubCategories/HighInDemand";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useRecommendedServiceByCategoryIdContext } from "@/src/context/RecommendedServiceByCategoryIdContext";
import { useMostPopularServiceByCategory } from "@/src/context/MostPopularServiceByCategoryIdContext";
import { useTopTrendingServiceByCategoryIdContext } from "@/src/context/TopTrendingServiceByCategoryIdContext";
import ServiceCard from "@/src/components/ITModulesSubCategories/ServiceCard";


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
    _id: string
}[]

export type UnifiedService = {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    keyValues: keyValuesItem;
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
  keyValues?: keyValuesItem;
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

    const [selectedRange, setSelectedRange] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");


     useEffect(() => {
            if (categoryId) {
                fetchRecommendedServicesByCategoryId(categoryId);
                fetchMostPopularServiceByCategory(categoryId);
                fetchTopTrendingServicesByCategoryId(categoryId);
            }
        }, [categoryId]);
    



     /* ---------- FILTER STATE ---------- */
    const FILTERS = [
        { label: "All", value: "all" },
        { label: "High to Low", value: "high-to-low" },
        { label: "Low to High", value: "low-to-high" },
        { label: "Recommended", value: "recommended" },
        { label: "Most Popular", value: "most-popular" },
        { label: "Top Trending", value: "top-trending" },
    ];

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
                                <Link href={`/MainModules/It-Services/${moduleId}`}>
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

            {/* <section className="w-full mt-6 md:mt-10">
                <ExploreAllServices contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
                <Recommendation categoryId={categoryId} moduleId={moduleId} />
                <MostlyUsed categoryId={categoryId} moduleId={moduleId} />
                <HighInDemand categoryId={categoryId} moduleId={moduleId} />
            </section> */}

              {/* CONTENT SECTIONS */}
            
                      
                        <section className="px-6 mt-10">
                            <div
                                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-2
                  lg:grid-cols-4
                  gap-2
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
    );
}
