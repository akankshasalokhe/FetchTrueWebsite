'use client';


import Image from 'next/image';
import Link from 'next/link';
import Recommended from "@/src/components/MarketingCategories/Recommended";
import MostlyPopular from "@/src/components/MarketingCategories/MostPopular";
import TopTrending from '@/src/components/MarketingCategories/TopTrending';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSubCategory } from '@/src/context/SubCategoriesContext';

// const navItems = [
//     { label: 'Logo\nDesign', icon: '/image/logodesign.png' },
//     { label: 'Web\nDesign', icon: '/image/webdesign.png' },
//     { label: 'Graphic\nDesign', icon: '/image/graphicdesign.png' },
//     { label: 'Print\nDesign', icon: '/image/printdesign.png' },
// ];

export default function DesignStudioPage() {

     const { moduleId,categoryId } = useParams<{
        moduleId:string;
        categoryId:string;
      }>();

            const {
              subCategories,
              loading,
              error,
              fetchSubCategories,
            } = useSubCategory();
            
            const [currentCategory, setCurrentCategory] = useState<any>(null);
      
            useEffect(() => {
        if (subCategories.length) {
        //   setActive(subCategories[0]._id);
      
          const subCat = subCategories.find(sc => sc._id === categoryId);
          if (subCat) {
            setCurrentCategory(subCat.category);
          } else {
            setCurrentCategory(subCategories[0].category);
          }
        }
      }, [subCategories]);
      
            
            
             useEffect(() => {
              if (categoryId) {
                fetchSubCategories(categoryId);
              }
            }, []);
      
    return (
        <>
            {/* ---------------- NAVBAR / HERO SECTION ---------------- */}
            <section className="relative w-full bg-[#2563EB]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/image/marketingbgdesign.png"
                        alt="Marketingnavbarbg"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 min-h-[260px] md:min-h-[336px]">
                    {/* Header */}
                    <div className="border-b-2 border-white">
                    <div className="flex items-center gap-6 px-4 md:px-6 py-4 md:ml-8">
                        <div className="flex items-center gap-3 mt-5">
                            <Link href={`/MainModules/Marketing/${moduleId}`}>
                            <img
                                src="/image/designvector.png"
                                className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
                                alt="Back"
                            />
                            </Link>
                            <h1 className="text-white font-semibold text-base md:text-lg leading-none">
                                {currentCategory?.name}
                            </h1>
                        </div>
                    </div>
                </div>

                    {/* Nav Icons */}
                    <div
                        className="
              flex justify-start
              px-4 md:px-8 gap-6 md:gap-8
              py-6 md:py-8
              md:ml-8
            "
                    >
                        {subCategories.map((item) => (
                            
                            <div
                                key={item._id}
                                className="flex flex-col items-center text-white cursor-pointer"
                            >
                                <div className="w-[42px] h-[42px] md:w-[89.52px] md:h-[89.52px] rounded-full bg-white flex items-center justify-center shadow-md">
                                    <div className="relative w-[18px] h-[18px] md:w-[34px] md:h-[34px]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <p className="mt-2 text-[11px] md:text-sm font-medium text-center whitespace-pre-line leading-tight">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- REMAINING SECTIONS ---------------- */}
             <section className="w-full mt-6 md:mb-10">
              
          
           <Recommended categoryId={categoryId} moduleId={moduleId} />
           <MostlyPopular categoryId={categoryId} moduleId={moduleId} />
           <TopTrending categoryId={categoryId} moduleId={moduleId} />
              </section> 
        </>
    );
}

