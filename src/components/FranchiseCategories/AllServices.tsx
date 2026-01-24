"use client";

import { useEffect } from "react";
import FranchiseMostPopularCard from "../ui/FranchiseMostPopularCard";
import Link from "next/link";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";

const bgColors = [
  "bg-[#E9B3A1]",
  "bg-[#B78CFF]",
  "bg-[#8EBEFF]",
];

interface Props {
  categoryId: string;
    moduleId: string;

}

export default function AllServices({ categoryId, moduleId }: Props) {
  const { services, fetchServicesByCategory, loading, error } = useCategorywiseServices();





  useEffect(() => {
    if (categoryId) {
      fetchServicesByCategory(categoryId);
    }
  }, [categoryId]);

    console.log("Top Trending API categoryId:", categoryId);


  if (loading)
    return <p className="text-center py-10">Loading top trending services...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (services.length === 0)
    return <p className="text-center py-10">No top trending services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <h2 className="text-[22px] font-semibold">All Services</h2>
      </div>

 


      {/* SCROLL */}
      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {services.map((service, index) => {
            const investment =
              service.franchiseDetails.investmentRange?.[0];
            const monthly =
              service.franchiseDetails.monthlyEarnPotential?.[0];
            const discount =
              service.franchiseDetails.franchiseModel?.[0]?.discount;

            return (
                          <Link key={service._id}
              href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}>
            
              <FranchiseMostPopularCard
                key={service._id}
                image={service.thumbnailImage}
                title={service.serviceName}
                category={service.category.name}
                rating={service.averageRating}
                earning={service.franchiseDetails.commission}
                discount={`${discount ?? 0}%`}
                monthly={`${monthly?.range} ${monthly?.parameters}`}
                investment={`${investment?.range} ${investment?.parameters}`}
                area="500–1000 Sq"
                bg={bgColors[index % bgColors.length]}
              />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}