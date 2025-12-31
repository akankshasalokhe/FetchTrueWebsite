"use client";

import ServiceCard from "../ui/ServiceCard";

interface TopLegalServiceSectionProps {
  title: string;
  services: any[];
}

export default function TopLegalServicesSection({
  title,
  services,
}: TopLegalServiceSectionProps) {
  return (
    <section className="w-full mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-0">
      
      {/* Heading */}
      <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px] 
                     text-center lg:text-left lg:ms-[120px]">
        {title}
      </h2>

      {/* FULL WIDTH GRADIENT */}
      <div className="bg-gradient-to-b from-[#4D2D21] via-[#F3D6CB] to-[#B3694D] 
                      py-8 sm:py-10 mb-10 w-full ">
        
        <div className="flex
          gap-4  lg:gap-8
          overflow-x-auto
          pb-4
          scrollbar-hide
          snap-x snap-mandatory mx-8 lg:mx-15" >
          {services.map((item, index) => (
            <div key={index} className="snap-start shrink-0">
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
