// 'use client';


// import { useState, useEffect } from "react";
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { useSubCategory } from '@/src/context/SubCategoriesContext';
// import { ChevronLeft } from 'lucide-react';
// import ServiceCard from '@/src/components/EducationSubCategories/ServiceCard';
// import { useRecommendedServiceByCategoryIdContext }
//     from "@/src/context/RecommendedServiceByCategoryIdContext";

// import { useMostPopularServiceByCategory }
//     from "@/src/context/MostPopularServiceByCategoryIdContext";

// import { useTopTrendingServiceByCategoryIdContext }
//     from "@/src/context/TopTrendingServiceByCategoryIdContext";


// /* ---------- TYPES ---------- */
// type Category = {
//     _id: string;
//     name: string;
// };

// type SubCategory = {
//     _id: string;
//     name: string;
//     image: string;
//     category: Category;
// };

// type keyValuesItem = {
//     value: string,
//     icon: string,
//     _id: string
// }[]

// export type UnifiedService = {
//     id: string;
//     title: string;
//     category: string;
//     image: string;
//     rating: number;
//     reviews: number;
//     price: number;
//     keyValues: keyValuesItem;
//     originalPrice: number;
//     discount: number;
//     source: "recommended" | "popular" | "trending";
// };


// export default function CategoryPage() {
//     const router = useRouter();

//     const params = useParams();

//     const moduleId = params.moduleId as string;
//     const categoryId = params.categoryId as string;

//     const {
//         subCategories,
//         loading,
//         error,
//         fetchSubCategories,
//     } = useSubCategory();

//     /* ---------- DERIVED CATEGORY ---------- */
//     const {
//         services: recommendedServices,
//         loading: recommendedLoading,
//         fetchRecommendedServicesByCategoryId,
//     } = useRecommendedServiceByCategoryIdContext();

//     const {
//         services: popularServices,
//         loading: popularLoading,
//         fetchMostPopularServiceByCategory
//     } = useMostPopularServiceByCategory();

//     const {
//         services: trendingServices,
//         loading: trendingLoading,
//         fetchTopTrendingServicesByCategoryId
//     } = useTopTrendingServiceByCategoryIdContext();

//     const currentCategory: Category | null =
//         (subCategories as SubCategory[])
//             .find(sc => sc._id === categoryId)?.category ??
//         (subCategories as SubCategory[])[0]?.category ??
//         null;

//     /* ---------- FILTER STATE ---------- */
//     const FILTERS = [
//         { label: "All", value: "all" },
//         { label: "High to Low", value: "high-to-low" },
//         { label: "Low to High", value: "low-to-high" },
//         { label: "Recommended", value: "recommended" },
//         { label: "Most Popular", value: "most-popular" },
//         { label: "Top Trending", value: "top-trending" },
//     ];


//     const [selectedRange, setSelectedRange] = useState<string>("all");
//     const [searchQuery, setSearchQuery] = useState<string>("");

//     /* ---------- FETCH SUBCATEGORIES ---------- */
//     useEffect(() => {
//         if (categoryId) {
//             fetchSubCategories(categoryId);
//         }
//     }, [categoryId, fetchSubCategories]);

//     useEffect(() => {
//         if (categoryId) {
//             fetchSubCategories(categoryId);
//             fetchRecommendedServicesByCategoryId(categoryId);
//             fetchMostPopularServiceByCategory(categoryId);
//             fetchTopTrendingServicesByCategoryId(categoryId);
//         }
//     }, [categoryId]);


//     const mapService = (
//         service: any,
//         source: UnifiedService["source"]
//     ): UnifiedService => {
//         const packages = service.serviceDetails?.packages ?? [];

//         const cheapest =
//             packages.length > 0
//                 ? packages.reduce((min, p) =>
//                     p.discountedPrice < min.discountedPrice ? p : min
//                 )
//                 : null;

//         return {
//             id: service._id,
//             title: service.serviceName,
//             category: service.category?.name ?? "Unknown",
//             image: service.thumbnailImage ?? "",
//             rating: service.averageRating ?? 0,
//             reviews: service.totalReviews ?? 0,
//             price: cheapest?.discountedPrice ?? 0,
//             originalPrice: cheapest?.price ?? 0,
//             discount: cheapest?.discount ?? 0,
//             keyValues: service?.keyValues ?? [],
//             source,
//         };
//     };




//     const allServices: UnifiedService[] = [
//         ...recommendedServices.map(s => mapService(s, "recommended")),
//         ...popularServices.map(s => mapService(s, "popular")),
//         ...trendingServices.map(s => mapService(s, "trending")),
//     ];




//     const filteredServices = allServices.filter(service => {
//         switch (selectedRange) {
//             case "recommended":
//                 return service.source === "recommended";

//             case "most-popular":
//                 return service.source === "popular";

//             case "top-trending":
//                 return service.source === "trending";

//             default:
//                 return true;
//         }
//     });

//     const filteredAndSorted = [...filteredServices].sort((a, b) => {
//         switch (selectedRange) {
//             case "high-to-low":
//                 return b.price - a.price;

//             case "low-to-high":
//                 return a.price - b.price;

//             default:
//                 return 0;
//         }
//     });


//     /* ---------- LOADING / ERROR ---------- */
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <>
//             {/*DESKTOP NAVBAR */}
//             <section className="relative w-full">
//                 <div className="hidden lg:block w-screen">
//                     <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
//                         <div className="flex items-center gap-4 ml-15">
//                             <Link href={`/MainModules/Education/${moduleId}`}>
//                                 <img
//                                     src="/image/Vector (1).png"
//                                     alt="Back"
//                                     className="w-[30px] cursor-pointer"
//                                 />
//                             </Link>
//                             <h1 className="text-lg md:text-2xl font-semibold">
//                                 Education Service
//                             </h1>
//                         </div>

//                         <div className="flex items-center gap-4 mr-10">
//                             <div className="hidden md:block relative w-[260px] lg:w-[307px]">
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     className="w-full rounded-lg bg-white border border-gray-300 px-10 py-2 text-sm outline-none focus:border-blue-500"
//                                 />
//                                 <span className="absolute left-3 top-1/2 -translate-y-1/2">
//                                     <img
//                                         src="/image/itsearch.png"
//                                         alt="Search"
//                                         className="w-[18px] h-[18px]"
//                                     />
//                                 </span>
//                             </div>

//                             <img
//                                 src="/image/EducationServicebookmark.png"
//                                 alt="Bookmark"
//                                 className="w-[20px] cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* ================= NAVBAR MOBILE ================= */}
//             <section>
//                 <div
//                     className="
//                                 block md:block lg:hidden
//                                 w-full -mt-6 w-screen md:-mx-0 md:-mt-12
//                                 bg-[#E2E9F1]
//                                 flex flex-col
//                                 px-2 py-8 md:px-10 md:py-10
//                                 rounded-t
//                                 gap-3
//                             "
//                 >
//                     {/* ===== ROW 1: HEADER ===== */}
//                     <div className="flex items-center justify-between">
//                         {/* LEFT */}
//                         <div className="flex items-center gap-3 p-8 min-w-0">
//                             <Link href={`/MainModules/Education/${moduleId}`}>
//                                 <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0 -ml-2" />
//                             </Link>

//                             <h1 className="text-[16px] font-semibold truncate">
//                                 {/* {formatSlugToTitle(slug)} */} Education Service
//                             </h1>
//                         </div>

//                         {/* RIGHT */}
//                         <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
//                             <img
//                                 src="/image/EducationServicebookmark.png"
//                                 className="w-[14px] h-[14px]"
//                                 alt="Bookmark"
//                             />
//                         </div>
//                     </div>

//                     {/* ===== ROW 2: SEARCH ===== */}
//                     <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
//                         />
//                         <span className="absolute left-4 top-1/2 -translate-y-1/2">
//                             <img
//                                 src="/image/itsearch.png"
//                                 className="w-[18px] h-[16px]"
//                                 alt="Search"
//                             />
//                         </span>
//                     </div>
//                 </div>
//             </section>



//             {/* SUBCATEGORY LIST */}
//             <section className="relative max-w-8xl mt-15 px-4 ml-1 lg:ml-15">
//                 <h1 className="text-[16px] md:text-[24px] mb-5">Category</h1>

//                 <div className="flex gap-4 overflow-x-auto no-scrollbar md:flex-wrap">
//                     {(subCategories as SubCategory[]).map((item) => (
//                         <div
//                             key={item._id}
//                             onClick={() =>
//                                 router.push(
//                                     `/MainModules/Education/${moduleId}/${item._id}`
//                                 )
//                             }
//                             className="cursor-pointer flex items-center gap-3 justify-center bg-[#2818A3] rounded-2xl min-w-[160px] md:w-[180px]"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-[24px] h-[24px] object-contain"
//                             />
//                             <span className="text-[12px] md:text-[16px] text-white font-medium line-clamp-2 lg:p-2 md:p-2 p-2 max-w-[65%] max-h-[95%] items-center justify-start">
//                                 {item.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* FILTER PILLS */}
//             <div className="w-full px-4 md:px-8 mt-15 lg:ml-12">
//                 <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
//                     {FILTERS.map((item) => (
//                         <button
//                             key={item.value}
//                             onClick={() => setSelectedRange(item.value)}
//                             className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${selectedRange === item.value
//                                 ? "bg-[#2818A3] text-white border-black"
//                                 : "bg-white text-black border"
//                                 }`}
//                         >
//                             {item.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>


//             {/* CONTENT SECTIONS */}

          
//             <section className="px-6 mt-10">
//                 <div
//                     className="
//       grid
//       grid-cols-1
//       sm:grid-cols-2
//       md:grid-cols-2
//       lg:grid-cols-4
//       gap-6
//     "
//                 >
//                     {filteredAndSorted.map(service => (
//                         <ServiceCard
//                             key={`${service.source}-${service.id}`}
//                             service={service}
//                         />

//                     ))}
//                 </div>
//             </section>


//         </>
//     );
// }





'use client';


import { useState, useEffect } from "react";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSubCategory } from '@/src/context/SubCategoriesContext';
import { ChevronLeft } from 'lucide-react';
import ServiceCard from '@/src/components/EducationSubCategories/ServiceCard';
import { useRecommendedServiceByCategoryIdContext }
    from "@/src/context/RecommendedServiceByCategoryIdContext";

import { useMostPopularServiceByCategory }
    from "@/src/context/MostPopularServiceByCategoryIdContext";

import { useTopTrendingServiceByCategoryIdContext }
    from "@/src/context/TopTrendingServiceByCategoryIdContext";


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



export default function CategoryPage() {
    const router = useRouter();

    const params = useParams();

    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;

    const {
        subCategories,
        loading,
        error,
        fetchSubCategories,
    } = useSubCategory();

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

    const currentCategory: Category | null =
        (subCategories as SubCategory[])
            .find(sc => sc._id === categoryId)?.category ??
        (subCategories as SubCategory[])[0]?.category ??
        null;

    /* ---------- FILTER STATE ---------- */
    const FILTERS = [
        { label: "All", value: "all" },
        { label: "High to Low", value: "high-to-low" },
        { label: "Low to High", value: "low-to-high" },
        { label: "Recommended", value: "recommended" },
        { label: "Most Popular", value: "most-popular" },
        { label: "Top Trending", value: "top-trending" },
    ];


    const [selectedRange, setSelectedRange] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    /* ---------- FETCH SUBCATEGORIES ---------- */
    useEffect(() => {
        if (categoryId) {
            fetchSubCategories(categoryId);
        }
    }, [categoryId, fetchSubCategories]);

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


    /* ---------- LOADING / ERROR ---------- */
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {/*DESKTOP NAVBAR */}
            <section className="relative w-full">
                <div className="hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-15">
                            <Link href={`/MainModules/Education/${moduleId}`}>
                                <img
                                    src="/image/Vector (1).png"
                                    alt="Back"
                                    className="w-[30px] cursor-pointer"
                                />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">
                                Education Service
                            </h1>
                        </div>

                        <div className="flex items-center gap-4 mr-10">
                            <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-lg bg-white border border-gray-300 px-10 py-2 text-sm outline-none focus:border-blue-500"
                                />
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <img
                                        src="/image/itsearch.png"
                                        alt="Search"
                                        className="w-[18px] h-[18px]"
                                    />
                                </span>
                            </div>

                            <img
                                src="/image/EducationServicebookmark.png"
                                alt="Bookmark"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= NAVBAR MOBILE ================= */}
            <section>
                <div
                    className="
                                block md:block lg:hidden
                                w-full -mt-6 w-screen md:-mx-0 md:-mt-12
                                bg-[#E2E9F1]
                                flex flex-col
                                px-2 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                >
                    {/* ===== ROW 1: HEADER ===== */}
                    <div className="flex items-center justify-between">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <Link href={`/MainModules/Education/${moduleId}`}>
                                <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0 -ml-2" />
                            </Link>

                            <h1 className="text-[16px] font-semibold truncate">
                                {/* {formatSlugToTitle(slug)} */} Education Service
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                            <img
                                src="/image/EducationServicebookmark.png"
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



            {/* SUBCATEGORY LIST */}
            <section className="relative max-w-8xl mt-15 px-4 ml-1 lg:ml-15">
                <h1 className="text-[16px] md:text-[24px] mb-5">Category</h1>

                <div className="flex gap-4 overflow-x-auto no-scrollbar md:flex-wrap">
                    {(subCategories as SubCategory[]).map((item) => (
                        <div
                            key={item._id}
                            onClick={() =>
                                router.push(
                                    `/MainModules/Education/${moduleId}/${item._id}`
                                )
                            }
                            className="cursor-pointer flex items-center gap-3 justify-center border rounded-2xl min-w-[160px] md:w-[180px]"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[24px] h-[24px] object-contain"
                            />
                            <span className="text-[12px] md:text-[16px] text-black font-medium line-clamp-2 lg:p-2 md:p-2 p-2 max-w-[65%] max-h-[95%] items-center justify-start">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FILTER PILLS */}
            <div className="w-full px-4 md:px-8 mt-15 lg:ml-12">
                <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                    {FILTERS.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => setSelectedRange(item.value)}
                            className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${selectedRange === item.value
                                ? "bg-[#2818A3] text-white border-black"
                                : "bg-white text-black border"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>


            {/* CONTENT SECTIONS */}

          
            <section className="px-6 mt-10">
                <div
                    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
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
