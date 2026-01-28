"use client";

import { useEffect, useState } from "react";
import FranchiseMostPopularCard from "../ui/FranchiseMostPopularCard";
import Link from "next/link";
import { useCategorywiseServices } from "@/src/context/CategorywiseServiceContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import ServiceCard from "../ui/ServiceCard";

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

  const [viewAll, setViewAll] = useState(false);




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
      <div className="max-w-[1440px] mx-auto px-4 pb-8 py-8 flex justify-between">
        <h2 className="text-[22px] font-semibold">All Services</h2>

  {viewAll ? (
          <button
            onClick={() => setViewAll(false)}
            className="text-sm text-gray-600 hover:underline"
          >
            Back
          </button>
        ) : (
          <button
            onClick={() => setViewAll(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div
          className={
            viewAll
              ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              : "flex gap-4"
          }
        >
          {viewAll ? (
            services.map((service, index) => (
              <Link
                key={service._id}
                href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
              >
                <ServiceCard  
                                    key={service._id}
                                title={service.serviceName}
                                category={service.category?.name}
                                keyvalues={service.keyValues?.map(kv => kv.value)}
                                commission={service.franchiseDetails?.commission}
                                price={service.serviceDetails?.packages?.[0]?.price || 0}
                                discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
                                discount={service.serviceDetails?.packages?.[0]?.discount || 0}
                                rating={Math.round(service.averageRating || 0)}
                                totalreviews={service.totalReviews}
                                image={
                                  service.thumbnailImage ||
                                  service.category?.image ||
                                  "/image/defaultService.jpg"
                                }
                                slug={service.category?.name
                                  ?.toLowerCase()
                                  .replace(/\s+/g, "-")}
                                detailslug={service._id}
                  
                                  />
              </Link>
            ))
          ) : (
            <HorizontalScroll>
              {services.map((service, index) => (
                <Link
                  key={service._id}
                  href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
                >
                  <ServiceCard  
                                    key={service._id}
                                title={service.serviceName}
                                category={service.category?.name}
                                keyvalues={service.keyValues?.map(kv => kv.value)}
                                commission={service.franchiseDetails?.commission}
                                price={service.serviceDetails?.packages?.[0]?.price || 0}
                                discountedprice={service.serviceDetails?.packages?.[0]?.discountedPrice || 0}
                                discount={service.serviceDetails?.packages?.[0]?.discount || 0}
                                rating={Math.round(service.averageRating || 0)}
                                totalreviews={service.totalReviews}
                                image={
                                  service.thumbnailImage ||
                                  service.category?.image ||
                                  "/image/defaultService.jpg"
                                }
                                slug={service.category?.name
                                  ?.toLowerCase()
                                  .replace(/\s+/g, "-")}
                                detailslug={service._id}
                  
                                  />
                </Link>
              ))}
            </HorizontalScroll>
          )}
        </div>
      </div>
    </section>
  );
}