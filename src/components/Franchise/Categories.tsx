"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";
import {  useSubCategory } from "@/src/context/SubCategoriesContext";


export default function Categories() {
  const { categories, fetchCategoriesByModule, loading, error } = useModule();
const { moduleId } = useParams<{ moduleId: string }>();



 useEffect(() => {
  if (!moduleId) return;
  fetchCategoriesByModule(moduleId);
}, [moduleId]);




  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="w-full flex justify-center mt-10">
      <div
        className="
          w-full lg:w-[1440px]

    grid
    grid-rows-3
    grid-flow-col

    gap-[8px] lg:gap-[20px]
    px-4
    overflow-x-auto
    overflow-y-hidden
        "
      >
        {categories.length === 0 && <p>No categories found</p>}

        {categories.map((item) => (
          <Link
            key={item._id}
            href={`/MainModules/Franchise/${moduleId}/${item._id}`}
          >
            <div
              className="
                w-[110px] lg:w-[139px]
                h-[140px] lg:h-[159px]
                border border-[#D3D3D3]
                rounded-[19px]
                flex flex-col items-center
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full h-full
                  object-cover
                  rounded-[19px]
                "
              />
              <p className="-mt-11 text-[16px]  text-center px-1 ">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
