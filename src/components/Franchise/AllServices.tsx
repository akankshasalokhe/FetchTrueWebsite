"use client";

import { useEffect, useState } from "react";
import FranchiseMostPopularCard from "../ui/FranchiseMostPopularCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useModulewiseServices } from "@/src/context/ModulewiseServiceContext";

const bgColors = [
  "bg-[#E9B3A1]",
  "bg-[#B78CFF]",
  "bg-[#8EBEFF]",
];

interface Props {
  moduleId: string;
}

export default function AllServices({ moduleId }: Props) {
  const { services, fetchServicesByModule, loading, error } = useModulewiseServices();
const [viewAll, setViewAll] = useState(false);


    const { categoryId } = useParams<{
    moduleId: string;
    categoryId: string;
  }>();

  console.log("moduleId for all services:",moduleId)

  useEffect(() => {
    if (moduleId) {
      fetchServicesByModule(moduleId);
    }
  }, [moduleId]);

  if (loading)
    return <p className="text-center py-10">Loading All services...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (services.length === 0)
    return <p className="text-center py-10">No All services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6">
        <div className="flex justify-between">
        <h2 className="text-[22px] font-semibold">All Services</h2>

 <div className="flex gap-3">
  {!viewAll && (
    <button
      onClick={() => setViewAll(true)}
      className="text-sm font-medium text-blue-600 hover:underline"
    >
      View All
    </button>
  )}

  {viewAll && (
    <button
      onClick={() => setViewAll(false)}
      className="text-sm text-gray-600 hover:underline"
    >
      Back
    </button>
  )}
</div>


        
        </div>
      </div>

      {/* SCROLL */}
    <div
  className={`
    max-w-[1440px] mx-auto px-4
    ${viewAll ? "overflow-visible" : "overflow-x-auto no-scrollbar"}
  `}
>
  <div
    className={
      viewAll
        ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ms-8 lg:ms-0"
        : "flex gap-4"
    }
  >


          {services.map((service, index) => {
            const investment =
              service.franchiseDetails.investmentRange?.[0];
            const monthly =
              service.franchiseDetails.monthlyEarnPotential?.[0];
            const discount =
              service.franchiseDetails.franchiseModel?.[0]?.discount;

            return (
                          <Link key={service._id} href={`/MainModules/Franchise/${moduleId}/${categoryId}/${service._id}`}>
            
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