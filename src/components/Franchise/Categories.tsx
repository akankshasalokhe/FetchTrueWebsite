"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useModule } from "@/src/context/CategoriesContext";
import Link from "next/link";

export default function Categories() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { categories, fetchCategoriesByModule, loading, error } = useModule();

  useEffect(() => {
    if (!moduleId) return;
    fetchCategoriesByModule(moduleId);
  }, [moduleId]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="w-full flex justify-center mt-10 px-3 lg:px-0">
      <div
        className="
          w-full lg:w-[1440px]
          flex flex-wrap
          gap-[8px] lg:gap-[20px]
          justify-center lg:justify-start
        "
      >
        {categories.length === 0 && <p>No categories found</p>}

        {categories.map((item) => (
          <Link
            key={item._id}
            href={`/MainModules/Franchise/${moduleId}/category`}
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
              <p className="-mt-10 text-sm lg:text-base text-center px-1">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
