// 'use client';

// import TopPicks from '@/src/components/EducationSubCategories/TopTrending';
// import TopPopular from '@/src/components/EducationSubCategories/MostPopular';
// import Recommended from '@/src/components/EducationSubCategories/Recommended';
// import { useState, useEffect } from "react";
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { useSubCategory } from '@/src/context/SubCategoriesContext';

// export default function SubCategoryPage() {

//   const router = useRouter();
//   const { moduleId, categorySlug } = useParams<{ moduleId: string; categorySlug: string }>();

//   const { categoryId } = useParams<{ categoryId: string }>();

//   const { subCategories, loading, error, fetchSubCategories } = useSubCategory();

//   const valueRange = [
//     { label: "All", value: "all" },
//     { label: "0-300 Rs", value: "0-300" },
//     { label: "300-400 Rs", value: "300-400" },
//     { label: "400-600 Rs", value: "400-600" },
//     { label: "600-800 Rs", value: "600-800" },
//     { label: "800-1000 Rs", value: "800-1000" },
//   ];

//   const [selectedRange, setSelectedRange] = useState("all");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch subcategories when categoryId changes
//  useEffect(() => {
//   if (!categorySlug) return;
//   fetchSubCategories(categorySlug);
// }, [categorySlug]);


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//     return (
//         <>
//             <section className="relative w-full">
//                 {/* ===== NAVBAR ===== */}
//                 <div className="hidden md:hidden lg:block w-screen">
//                     <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
//                         <div className="flex items-center gap-4 ml-15">
//                             <Link href="/">
//                                 <img src="/image/Vector (1).png" className="w-[30px] cursor-pointer" />
//                             </Link>
//                             <h1 className="text-lg md:text-2xl font-semibold">Education Service</h1>
//                         </div>

//                         {/* SEARCH */}
//                         <div className="flex items-center gap-4 mr-10">
//                             {/* SEARCH */}
//                             <div className="hidden md:block relative w-[260px] lg:w-[307px]">
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     className="
//                                                       w-full
//                                                       rounded-lg bg-white
//                                                       border border-gray-300
//                                                       px-10 py-2
//                                                       text-sm
//                                                       outline-none
//                                                       focus:border-blue-500
//                                                   "
//                                 />

//                                 {/* search icon */}
//                                 <span className="absolute left-3 top-1/2 -translate-y-1/2">
//                                     <img
//                                         src="/image/itsearch.png"
//                                         alt="searchicon"
//                                         className="w-[18px] h-[18px]"
//                                     />
//                                 </span>
//                             </div>

//                             {/* BOOKMARK / LOCATION ICON */}
//                             <img
//                                 src="/image/EducationServicebookmark.png"
//                                 className="w-[20px] cursor-pointer"
//                             />
//                         </div>


//                     </div>

//                 </div>

//                 <section className="relative w-full mt-15 px-4 ml-4 lg:ml-15">
//                     <h1 className="text-[16px] md:text-[24px] mb-5">Category</h1>

//                     <div
//                         className="
//       flex gap-4
//       overflow-x-auto
//       snap-x snap-mandatory
//       no-scrollbar
//       md:flex-wrap md:justify-start md:overflow-visible
//     "
//                     >
//                         {subCategories.map((item, index) => (
//                             <div
//                                 key={index}
//                                 // onClick={() => setSelectedCategory(item.label)}
//                                 onClick={() =>
//                                     router.push(`/MainModules/Education/${(item.name)}`)
//                                 }
//                                 className="
//                             snap-start cursor-pointer
//                             flex items-center gap-3
//                             px-6 py-3
//                             bg-[#2818A3]
//                             rounded-2xl
//                             min-w-[160px]
//                             md:w-[180px]
//                             flex-shrink-0
//                             ">
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-[26px] h-[26px] object-contain"
//                                 />

//                                 <span className="text-[12px] md:text-[16px] text-white font-medium text-center">
//                                     {item.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </section>


//                 {/* ================= SEARCH ACCORDING TO YOU ================= */}
//                 <div className="w-full px-4 md:px-8 mt-5">
//                     {/* Header Row */}

//                     {/* ===== SEARCH & FILTER ===== */}
//                     <div className="w-full px-4 md:px-8 lg:ml-4 lg:mt-15">

//                         {/* FILTER PILLS */}
//                         <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
//                             {valueRange.map((item) => (
//                                 <button
//                                     key={item.value}
//                                     onClick={() => setSelectedRange(item.value)}
//                                     className={`
//                                           whitespace-nowrap rounded-full px-5 py-2 text-sm border transition
//                                           ${selectedRange === item.value
//                                             ? "bg-[#2818A3] text-white border-black"
//                                             : "bg-white text-black border-black"}
//                                             `}
//                                 >
//                                     {item.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="w-full mt-6 md:mt-10">
//                 {/* <Recommended contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//                 <TopPopular contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//                 <TopPicks contextTitle={contextTitle} selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} /> */}
//                 <Recommended selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//                 <TopPopular selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//                 <TopPicks selectedRange={selectedRange} selectedCategory={selectedCategory} searchQuery={searchQuery} />
//             </section>

//         </>
//     )
// }



'use client';

import TopPicks from '@/src/components/EducationSubCategories/TopTrending';
import TopPopular from '@/src/components/EducationSubCategories/MostPopular';
import Recommended from '@/src/components/EducationSubCategories/Recommended';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSubCategory } from '@/src/context/SubCategoriesContext';
import { ChevronLeft } from 'lucide-react';

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

export default function CategoryPage() {
    const router = useRouter();

    const params = useParams();
    console.log("ALL PARAMS:", params);

    const moduleId = params.moduleId as string;
    const categoryId = params.categoryId as string;

    console.log("moduleId:", moduleId);
    console.log("categoryId:", categoryId);


    const {
        subCategories,
        loading,
        error,
        fetchSubCategories,
    } = useSubCategory();

    /* ---------- DERIVED CATEGORY (NO STATE, NO EFFECT) ---------- */
    const currentCategory: Category | null =
        (subCategories as SubCategory[])
            .find(sc => sc._id === categoryId)?.category ??
        (subCategories as SubCategory[])[0]?.category ??
        null;

    /* ---------- FILTER STATE ---------- */
    const valueRange = [
        { label: "All", value: "all" },
        { label: "0-300 Rs", value: "0-300" },
        { label: "300-400 Rs", value: "300-400" },
        { label: "400-600 Rs", value: "400-600" },
        { label: "600-800 Rs", value: "600-800" },
        { label: "800-1000 Rs", value: "800-1000" },
    ];

    const [selectedRange, setSelectedRange] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    /* ---------- FETCH SUBCATEGORIES ---------- */
    useEffect(() => {
        if (categoryId) {
            fetchSubCategories(categoryId);
        }
    }, [categoryId, fetchSubCategories]);


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
                                className="cursor-pointer flex items-center gap-3 justify-center bg-[#2818A3] rounded-2xl min-w-[160px] md:w-[180px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[24px] h-[24px] object-contain"
                                />
                                <span className="text-[12px] md:text-[16px] text-white font-medium line-clamp-2 lg:p-2 md:p-2 p-2 max-w-[65%] max-h-[95%] items-center justify-start">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FILTER PILLS */}
                <div className="w-full px-4 md:px-8 mt-15 lg:ml-12">
                    <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                        {valueRange.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setSelectedRange(item.value)}
                                className={`rounded-full px-5 py-2 text-sm border whitespace-nowrap ${selectedRange === item.value
                                    ? "bg-[#2818A3] text-white border-black"
                                    : "bg-white text-black border-black"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
           

            {/* CONTENT SECTIONS */}
            <section className="w-full mt-6 md:mt-10">
                <Recommended categoryId={categoryId} moduleId={moduleId} />
                <TopPopular categoryId={categoryId} moduleId={moduleId} />
                <TopPicks categoryId={categoryId} moduleId={moduleId} />
            </section>
        </>
    );
}
