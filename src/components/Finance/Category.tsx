"use client";

import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";




const CategorySection = () => {

  const { categories, fetchCategoriesByModule, loading, error } = useModule();
    const { moduleId } = useParams<{ moduleId: string }>();

     useEffect(()=>{
        if(!moduleId) return;
        fetchCategoriesByModule(moduleId);
      },[moduleId]);

      if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="w-full pt-10 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-8">
          Category
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            pb-4
            scrollbar-hide
          "
        >
          {categories.map((item) => (
             <Link
              key={item._id}
                href={`/MainModules/Finance/${moduleId}/${item._id}`}
              className="snap-start"
            >
            <div
              key={item._id}
              className="
                flex-shrink-0
                flex
                flex-col
                items-center
                cursor-pointer
                transition
                hover:scale-105
              "
            >
              <div className="w-[165px] h-[155px] flex items-center justify-center bg-[#FFFDF9] rounded-[8px] border border-[#EDEDED] mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[117px] h-[112px] object-contain"
                />
              </div>

              <p className="text-[24px] font-normal text-[#000000] text-center whitespace-nowrap">
                {item.name}
              </p>
            </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
