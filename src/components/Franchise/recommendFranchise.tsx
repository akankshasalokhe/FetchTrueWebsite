"use client";

import Link from "next/link";
import FranchiseCard from "../ui/FranchiseCard";
import { useEffect } from "react";
import { useRecommendedServices } from "@/src/context/RecommendedContext";

// const data = [
//   {
//     id: 1,
//     title: "Property Buying & Selling",
//     category: "Real Estate",
//     investment: "10L – 25L",
//     subtitle: "Real Estate",
//     location: "Mumbai",
//     earning: "5%",
//     discount: "30%",
//     monthly: "1–3 Lak",
//     outlets: 10,
//     area: "500–1000sq",
//     price: "45L",
//     image: "/image/thumbnailMain.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Property Buying & Selling",
//     category: "Real Estate",
//     investment: "10L – 25L",
//     subtitle: "Real Estate",
//     location: "Mumbai",
//     earning: "5%",
//     discount: "30%",
//     monthly: "1–3 Lak",
//     outlets: 10,
//     area: "500–1000 Sq",
//     price: "45L",
//     image: "/image/thumbnailMain.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     title: "Property Buying & Selling",
//     category: "Real Estate",
//     investment: "10L – 25L",
//     subtitle: "Real Estate",
//     location: "Mumbai",
//     earning: "5%",
//     discount: "30%",
//     monthly: "1–3 Lak",
//     outlets: 10,
//     area: "500–1000 Sq",
//     price: "45L",
//     image: "/image/thumbnailMain.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     title: "Property Buying & Selling",
//     category: "Real Estate",
//     investment: "10L – 25L",
//     subtitle: "Real Estate",
//     location: "Mumbai",
//     earning: "5%",
//     discount: "30%",
//     monthly: "1–3 Lak",
//     outlets: 10,
//     area: "500–1000 Sq",
//     price: "45L",
//     image: "/image/thumbnailMain.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 5,
//     title: "Property Buying & Selling",
//     category: "Real Estate",
//     investment: "10L – 25L",
//     subtitle: "Real Estate",
//     location: "Mumbai",
//     earning: "5%",
//     discount: "30%",
//     monthly: "1–3 Lak",
//     outlets: 10,
//     area: "500–1000 Sq",
//     price: "45L",
//     image: "/image/thumbnailMain.jpg",
//     rating: 4.5,
//   },
// ];


interface Props {
  moduleId: string;
}

export default function RecommendedSection({moduleId}:Props) {
  const { services, loading, error, fetchRecommendedServices } = useRecommendedServices();

  useEffect(()=>{
    if(moduleId){
      fetchRecommendedServices(moduleId)
    }
  },[moduleId])

    if (loading) return <p className="text-center py-10">Loading recommended services...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (services.length === 0) return <p className="text-center py-10">No recommended services found.</p>;

  return (
    <section className="w-full mt-8 lg:mt-18">
      
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center mb-6">
        <h2 className="text-[24px] font-semibold">
          Recommended For You
        </h2>
      </div>

      {/* SCROLL */}
      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-4">
          {services.map((service) => (
            <Link key={service._id} href={`/MainModules/Franchise/details/${service._id}`}>
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
                  service.franchiseDetails?.monthlyEarnPotential?.[0]?.parameters ||
                  "N/A"
                }
                investment={
                  service.franchiseDetails?.investmentRange?.[0]?.parameters ||
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
