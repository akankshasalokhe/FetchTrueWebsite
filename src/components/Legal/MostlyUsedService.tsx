

"use client";

import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "GST Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
  {
    title: "GST Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
     slug:"business-registration",
    detailslug:"llp"
  },
];

export default function MostlyUsedService() {
  return (
    <section
          className="
            w-full
            mx-auto
            px-4 sm:px-6 lg:px-15
            flex flex-col
            gap-4 sm:gap-6
            mb-16 sm:mb-20
            mt-[40px] sm:mt-[60px] lg:mt-[80px]
          "
        >
          {/* Title */}
          <h2 className="font-inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
            Mostly Used Services
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
