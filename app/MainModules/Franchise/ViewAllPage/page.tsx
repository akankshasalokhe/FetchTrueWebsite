"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import FranchiseMostPopularCard from "@/src/components/ui/FranchiseMostPopularCard";
import { useModulewiseServices } from "@/src/context/ModulewiseServiceContext";

const bgColors = ["bg-[#E9B3A1]", "bg-[#B78CFF]", "bg-[#8EBEFF]"];

export default function ViewAllPAge() {
//   const { moduleId, categoryId } = useParams();
  const { moduleId } = useParams<{ moduleId: string }>();

  const { services, fetchServicesByModule, loading, error } =
    useModulewiseServices();

  useEffect(() => {
    if (moduleId) {
      fetchServicesByModule(moduleId);
    }
  }, [moduleId]);

  if (loading) return <p className="text-center py-10">Loading services...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;
  if (services.length === 0)
    return <p className="text-center py-10">No services found.</p>;

  return (
    <section className="w-full py-10">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[26px] font-semibold">All {moduleId} Services</h1>
          <Link
            href={`/MainModules/Franchise/${moduleId}`}
            className="text-sm text-blue-600 hover:underline"
          >
            Back
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const investment =
              service.franchiseDetails.investmentRange?.[0];
            const monthly =
              service.franchiseDetails.monthlyEarnPotential?.[0];
            const discount =
              service.franchiseDetails.franchiseModel?.[0]?.discount;

            return (
              <Link
                key={service._id}
                href={`/MainModules/Franchise/ViewAllPage`}
              >
                <FranchiseMostPopularCard
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
