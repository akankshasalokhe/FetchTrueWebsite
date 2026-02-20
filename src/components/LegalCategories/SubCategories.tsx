"use client";

import { useSubCategory } from "@/src/context/SubCategoriesContext";
import Image from "next/image";



export default function SubCategorySlider({
  selectedSubCategory,
  onSelect,
}: {
  selectedSubCategory: string | null;
  onSelect: (id: string) => void;
}) {

    const { subCategories, loading } = useSubCategory();
    
      if (loading) return null;

  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-3 bg-white">
      

      {subCategories.map((item, index) => (
                  <div key={item._id} className="flex items-center gap-[24px]">
                    <button
                      onClick={() => onSelect(item._id)}
      
                      className={`
                        flex flex-col items-center justify-center
                        min-w-[140px] h-[120px] ml-5
                        rounded-[8px] transition
                        ${
        selectedSubCategory === item._id
          ? "bg-[#EDEEEF]"
          : "bg-transparent hover:bg-[#EAEBED]"
      }
      
                      `}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={81}
                        height={60}
                        className="object-contain ml-14"
                      />
      
                      <p className="mt-2 mr-10 text-[16px] font-medium text-[#232323] leading-tight text-left whitespace-pre-line">
                        {item.name}
                      </p>
                    </button>
      
                    {index !== subCategories.length - 1 && (
                      <div className="h-[60px] w-[1px] bg-[#D9D9D9]" />
                    )}
                  </div>
                ))}
    </div>
  );
}
