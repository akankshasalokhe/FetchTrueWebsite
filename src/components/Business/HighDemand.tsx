"use client";

import { useEffect } from "react";
import BusinessCard from "../ui/BusinessCard";
import { useMostPopular } from "@/src/context/MostPopularContext";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  moduleId: string;
}

export default function HighDemand({ moduleId }: Props) {
  const { services, loading, fetchMostPopular } = useMostPopular();

  const { categoryId } = useParams<{
        moduleId: string;
        categoryId: string;
      }>();

  useEffect(() => {
    if (moduleId) {
      fetchMostPopular(moduleId);
    }
  }, [moduleId]);

  const createSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  if (loading) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-20">

        {/* SCROLL AREA (LEFT ON DESKTOP) */}
        <div
          className="
            relative
            order-2
            lg:order-1
            flex
            gap-6
            bg-[#D9DDE6]
            pt-10
            lg:pt-15
            pb-10
            lg:pb-20
            pe-4
            lg:pe-16
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            rounded-br-[36px]
          "
        >
          {/* FADED BACK TEXT */}
          <h2
            className="
              hidden lg:block
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-[50px]
              font-semibold
              text-[#1D4699]
              pointer-events-none
              opacity-5
            "
          >
            HIGH DEMAND
          </h2>

          {/* INNER SHADOW */}
          <div className="pointer-events-none absolute inset-0 rounded-tl-[36px]" />

          <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
            {services.map((service) => {
              const investment =
                service.franchiseDetails?.investmentRange?.[0]?.range || "—";

              const earnings =
                service.franchiseDetails?.monthlyEarnPotential?.[0]?.range ||
                "—";

              const roi =
                service.franchiseDetails?.commission || "—";

              return (
                                            <Link key={service.serviceId}   href={`/MainModules/Business/${moduleId}/${categoryId}/${service.serviceId}`}>

                <BusinessCard
                //   key={service.serviceId}
                  image={
                    service.thumbnailImage}
                  title={service.serviceName}
                  category={service.category?.name || ""}
                  earnPercent={Number(roi.replace("%", "")) || 0}
                  investment={investment}
                  earnings={earnings}
                  roi={roi}
                  rating={service.averageRating}
                  trusted={true}
                  slug={createSlug(service.category?.name || "")}
                  detailslug={createSlug(service.serviceName)}
                />
                </Link>
              );
            })}
          </div>
        </div>

        {/* TITLE (RIGHT ON DESKTOP) */}
        <div className="order-1 lg:order-2 min-w-[220px] flex flex-col justify-center items-start lg:items-end">
          <h2
            className="
              text-[28px]
              lg:text-[34px]
              font-medium
              text-[#1D4699]
              leading-tight
              text-left
              lg:text-right
              drop-shadow-[0_6px_10px_rgba(29,70,153,0.25)]
            "
          >
            High
            <br />
            <span className="text-[46px] font-semibold">DEMAND</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
