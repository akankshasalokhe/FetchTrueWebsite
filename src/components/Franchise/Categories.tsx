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
    <section className="w-full flex justify-center mt-10">
      <div className="w-full lg:w-[1440px] flex flex-wrap gap-[25px]">

        {categories.length === 0 && <p>No categories found</p>}

        {categories.map((item) => (
          <Link
            key={item._id}
            href={`/MainModules/Franchise/${moduleId}/category/${item._id}`}
          >
            <div className="w-[139px] h-[159px] border rounded-[19px] flex flex-col items-center">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
