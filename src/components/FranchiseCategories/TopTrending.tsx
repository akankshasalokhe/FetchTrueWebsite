"use client";

import Link from "next/link";
import FranchiseCard from "../ui/FranchiseCard";
import { useEffect } from "react";
import { useTopTrendingServiceByCategoryIdContext } from "@/src/context/TopTrendingServiceByCategoryIdContext";

interface Props {
  categoryId: string;
  moduleId: string;
}

export default function TopTrending({ categoryId, moduleId }: Props) {
  const {
    services,
    loading,
    error,
    fetchTopTrendingServicesByCategoryId,
  } = useTopTrendingServiceByCategoryIdContext();

  useEffect(() => {
    if (categoryId) {
      fetchTopTrendingServicesByCategoryId(categoryId);
    }
  }, [categoryId]);

  console.log("Top Trending API categoryId:", categoryId);


  if (loading)
    return <p className="text-center py-10">Loading TopTrending services...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;

  if (services.length === 0)
    return <p className="text-center py-10">No TopTrending services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-18">
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <h2 className="text-[24px] font-semibold">TopTrending For You</h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-4">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}
            >
             <FranchiseCard 
                                         key={service._id}
                       image={service.thumbnailImage || "/default-service.png"}
                       title={service.serviceName}
                       category={service.category?.name || "Unknown"}
                       rating={service.averageRating || 0}
                       earning={service.franchiseDetails.commission || "N/A"}
                       discount={
                               service.franchiseDetails?.franchiseModel?.[0]?.discount
                                 ? `${service.franchiseDetails.franchiseModel[0].discount}%`
                                 : "0%"
                             }
                             monthly={
                               service.franchiseDetails?.monthlyEarnPotential?.[0]?.range
                               
                             }
                             parameter={
                               service.franchiseDetails?.monthlyEarnPotential?.[0]?.parameters
                               
                             }
                             investment={
                               service.franchiseDetails?.investmentRange?.[0]?.range ||
                               "N/A"
                             }
                             area={
                               service.keyValues?.find(
                                 (kv) => kv.key === "Area"
                               )?.value || "N/A"
                             }
                           />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
