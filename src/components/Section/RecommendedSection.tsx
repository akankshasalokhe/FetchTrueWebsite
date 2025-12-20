"use client";

import ServiceCard from "../ui/ServiceCard";

interface RecommendedSectionProps {
  title: string;
  services: any[];
}

export default function RecommendedSection({
  title,
  services,
}: RecommendedSectionProps) {
  return (
    <section
      className="
        w-full
        mx-auto
        px-4 sm:px-6 lg:px-15
        flex flex-col
        gap-4 sm:gap-6
        mb-16 sm:mb-20
        mt-[-160px] sm:mt-[-100px] lg:mt-[-120px]
      "
    >
      {/* Title */}
      <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
        {title}
      </h2>

      {/* Horizontal Scroll Cards */}
      <div
        className="
          flex
          gap-4 sm:gap-6 lg:gap-8
          overflow-x-auto
          pb-4
          scrollbar-hide
          snap-x snap-mandatory
        "
      >
        {services.map((item, index) => (
          <div key={index} className="snap-start shrink-0">
            <ServiceCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
