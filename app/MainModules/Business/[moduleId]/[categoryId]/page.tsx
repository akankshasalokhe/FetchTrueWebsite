"use client";
import BusinessCard from "@/src/components/ui/BusinessCard";
import { useEffect, useMemo, useState } from "react";
import SubCategoryStrip from "@/src/components/Business/Subcategory";
import { useParams } from "next/navigation";
import { SubCategoryProvider, useSubCategory } from "@/src/context/SubCategoriesContext";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import AllServices from "@/src/components/BusinessCategories/AllServices";
import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";
import Recommended from "@/src/components/BusinessCategories/Recommended";
import MostPopular from "@/src/components/BusinessCategories/MostPopular";





const tabs = ["All", "Low to High", "High to Low", "Top Rated"];

export default function BusinessCategoryDetailPage() {

     const [active, setActive] = useState("All");


 const { moduleId, categoryId } = useParams<{
  moduleId: string;
  categoryId: string;
}>();

const { services,loading,fetchServicesByCategory } = useCategorywiseServices();

    const { fetchServiceDetails,service } = useServiceDetails();
    const [currentCategory, setCurrentCategory] = useState<any>(null);

    const {
      subCategories,
      error,
      fetchSubCategories,
    } = useSubCategory();



  console.log("Category ID IN CLIENT in business:", categoryId);
      const [roiMap, setRoiMap ] = useState<Record<string,string>>({});

    const { categories,fetchCategoriesByModule } = useModule();

    // const { moduleId} = useParams();
      console.log(moduleId, categoryId);

      useEffect(() => {
  if (categoryId) {
    fetchSubCategories(categoryId);
  }
}, [categoryId]);

      useEffect(()=>{
        if (categoryId){
          fetchServicesByCategory(categoryId)
        }
      },[categoryId]);

         useEffect(() => {
    const fetchAllROIs = async () => {
      const map: Record<string, string> = {};

      for (const s of services) {
        try {
          const res = await fetch(
            `https://api.fetchtrue.com/api/service/${s._id}`
          );
          const json = await res.json();

          map[s._id] =
            json?.data?.serviceDetails?.roi?.[0] || "—";
        } catch {
          map[s._id] = "—";
        }
      }

      setRoiMap(map);
    };

    if (services.length) {
      fetchAllROIs();
    }
  }, [services]);

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


const mappedServices = useMemo(() => {
  return services.map((service) => ({
    image:
      service.thumbnailImage ||
      service.category?.image ||
      "/image/placeholder.png",

    title: service.serviceName,
    category: service.category?.name || "",

    earnPercent: service.franchiseDetails?.commission || "—",
    investment:
      service.franchiseDetails?.investmentRange?.[0]?.range || "—",
    earnings:
      service.franchiseDetails?.monthlyEarnPotential?.[0]?.range || "—",
    roi: roiMap[service._id] || "—",

    rating: service.averageRating || 0,
    trusted: true,

    
  }));
}, [services, roiMap]);


  /* ================= FILTER LOGIC (UNCHANGED) ================= */
  const filteredData = (() => {
    switch (active) {
      case "Low to High":
        return [...mappedServices].sort((a, b) => a.rating - b.rating);

      case "High to Low":
        return [...mappedServices].sort((a, b) => b.rating - a.rating);

      case "Top Rated":
        return mappedServices.filter((item) => item.rating >= 4.5);

      case "All":
      default:
        return mappedServices;
    }
  })();




    return (
        <>
        
<div className="max-w-[1440px] mx-auto px-4 pt-3">
  <div className="flex items-center justify-between h-[72px]">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3 relative">
      
      {/* HOME ICON */}
      <Link href={`/MainModules/Business/${moduleId}`}>
      <img
        src="/image/Group 2.png"
        alt="home"
        className="w-[25px] h-[25px]"
      />
      </Link>

      {/* TITLE */}
      <h2 className="text-[18px] font-medium text-[#6A6A6A]">
          {currentCategory?.name}
      </h2>

    </div>

    {/* RIGHT ICON */}
    <img
      src="/image/Vector (2).png"
      alt="bookmark"
      className="w-[20px] h-[20px] cursor-pointer"
    />
  </div>
</div>



<SubCategoryProvider initialCategoryId={categoryId}>
  <SubCategoryStrip />
</SubCategoryProvider>


{/* <section className="w-full bg-white py-8 lg:py-12">
  <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 mb-6 lg:mb-12">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                px-6
                py-2.5
                rounded-[10px]
                text-[14px]
                font-medium
                transition
                ${
                  active === tab
                    ? "bg-[#1D4699] text-white shadow"
                    : "bg-[#ECEDEF] text-[#232323] hover:bg-[#E0E3E9]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  <div className="max-w-[1440px] mx-auto bg-[#F7F7F7] rounded-[24px] p-6 lg:p-12">

    <div
      className="
        grid
        grid-rows-3
        grid-flow-col-dense
        gap-3

        overflow-x-auto
        overflow-y-hidden

        lg:grid-rows-none
        lg:grid-cols-3
        lg:grid-flow-row
        lg:gap-12

        lg:overflow-x-hidden
        lg:overflow-y-auto

        max-h-none
        lg:max-h-[1256px]

        scrollbar-hide
      "
    >
    
      

      {!loading && filteredData.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">
                No services found
              </p>
            )}
    </div>

  </div>
</section> */}

<AllServices moduleId={moduleId} categoryId={categoryId} />
<Recommended moduleId={moduleId} categoryId={categoryId} />
<MostPopular moduleId={moduleId} categoryId={categoryId} />


        </>
    )
}