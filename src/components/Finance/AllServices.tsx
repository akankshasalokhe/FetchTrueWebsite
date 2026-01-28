"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useModulewiseServices } from "@/src/context/ModulewiseServiceContext";
import HorizontalScroll from "../ui/HorizontalScroll";
import FinanceCard from "../ui/FinanceCard";


interface Props {
  moduleId: string;
}

export default function AllServices({ moduleId }: Props) {
  const { services, fetchServicesByModule, loading, error } =
    useModulewiseServices();

  // ✅ DEFINE STATE HERE
  const [viewAll, setViewAll] = useState(false);

  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    if (moduleId) fetchServicesByModule(moduleId);
  }, [moduleId]);

  if (loading) return <p className="text-center py-10">Loading services...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!services.length)
    return <p className="text-center py-10">No services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-14">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6 flex justify-between">
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
            services.map((service) => (
              <Link
                key={service._id}
                href={`/MainModules/Finance/${moduleId}/${categoryId}/${service._id}`}
              >
               <FinanceCard  
                                             key={service._id}
                                         title={service.serviceName}
                                         category={service.category?.name}
                                         keyvalues={service.keyValues}
                                         earnUpto={service.franchiseDetails?.commission}
                                         
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
              {services.map((service) => (
                <Link
                  key={service._id}
                  href={`/MainModules/Legal-Services/${moduleId}/${categoryId}/${service._id}`}
                >
                <FinanceCard  
                                              key={service._id}
                                          title={service.serviceName}
                                          category={service.category?.name}
                                          keyvalues={service.keyValues}
                                          earnUpto={service.franchiseDetails?.commission}
                                          
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
