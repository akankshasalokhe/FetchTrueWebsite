"use client";

import ExploreAllServices from "@/src/components/Legal/ExploreAllServices";

import Image from "next/image";
import { useRef,useEffect, useState } from "react";
import { Search,Bookmark } from "lucide-react";
import Link from "next/link";
import RecommendedForYou from "@/src/components/LegalCategories/RecommendedForYou";
import { useParams } from "next/navigation";
import { useModule } from "@/src/context/CategoriesContext";
import MostlyPopularService from "@/src/components/LegalCategories/MostPopular";
import TopTrending from "@/src/components/LegalCategories/TopTrending";
import AllServices from "@/src/components/LegalCategories/AllServices";


export default function LegalSubCategoryServiceDetailPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
const { categories,fetchCategoriesByModule } = useModule();
const [currentCategory, setCurrentCategory] = useState<any>(null);

 

  const { moduleId,categoryId } = useParams<{
    moduleId:string;
    categoryId:string;
  }>();

  
  console.log("Category ID IN CLIENT subcategoryPage:", categoryId);

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);

    useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  if (moduleId) {
    fetchCategoriesByModule(moduleId);
  }
}, [moduleId]);


useEffect(() => {
  if (categories?.length && categoryId) {
    const cat = categories.find(
      (c: any) => c._id === categoryId
    );
    setCurrentCategory(cat);
  }
}, [categories, categoryId]);
 


  return (
    <>
      <section className="flex justify-center ">
      {/* NAVBAR */}
      <div
        className="
          w-full
          h-[60px]
          bg-[#F9F5EE]
          flex
          items-center
          justify-between
          px-4 sm:px-6
          lg:px-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
        

          {/* Back Icon */}
          <Link href={`/MainModules/Legal-Services/${moduleId}`}>
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black hidden lg:block"    
          />
          </Link>

          {/* Title */}
          <h1
            className="
              font-inter
              font-semibold
              lg:text-[22px]
              text-black
            "
          > 
            {currentCategory?.name}
          </h1>
        </div>

        {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">
            {/* SEARCH */}
            <div className="flex items-center gap-2
                            bg-white backdrop-blur-md
                            px-4 py-2 rounded-full
                            border border-[#E1E1E1]
                            w-full max-w-[320px]">
              <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none
                           placeholder:text-[#00000078]
                           text-sm w-full"
              />
            </div>

            <Bookmark  className="w-8 h-8" color="#A3623A"/>
          </div>
      </div>
      </section>

      

      <AllServices categoryId={categoryId} moduleId={moduleId}/>
      <RecommendedForYou categoryId={categoryId} moduleId={moduleId}/>
      <MostlyPopularService categoryId={categoryId} moduleId={moduleId}/>
      <TopTrending categoryId={categoryId} moduleId={moduleId}/>
    </>
  );
};

