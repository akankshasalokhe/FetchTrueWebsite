// components/sections/RecommendedSection.tsx
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
    <section className="mt-14">
      {/* Section Heading with side padding */}
      <h2 className="font-inter font-semibold text-[28px] mb-8 px-4 sm:px-6 lg:px-8">
        {title}
      </h2>

      {/* Horizontal scroll container */}
      <div
        className="
          flex gap-6
          overflow-x-auto
          px-4 sm:px-6 lg:px-15
          pb-4
          no-scrollbar
        "
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
