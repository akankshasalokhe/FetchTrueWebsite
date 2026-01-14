"use client";

import React from "react";

/* ================= TYPES ================= */
type AssuredItem = {
  id: number;
  title: string;
  description: string;
  icon?: string; // You will inject icons later
};

/* ================= MOCK DATA ================= */
const ASSURED_DATA: AssuredItem[] = [
  {
    id: 1,
    title: "Customer Satisfaction",
    description:
      "We provide up to 100% return if customer is not satisfied",
      icon: "/image/itfetchtrue1.png"
  },
  {
    id: 2,
    title: "Transparent Workflow",
    description:
      "Complete process visibility, transparent communication, and real-time tracking.",
    icon: "/image/itfetchtrue2.png"
  },
  {
    id: 3,
    title: "Best Quality Assurance",
    description:
      "We personally check all the project quality before final delivery.",
    icon: "/image/itfetchtrue3.png" 
  },
  {
    id: 4,
    title: "On-Time Delivery Result",
    description:
      "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
    icon: "/image/itfetchtrue4.png"  
  },
  {
    id: 5,
    title: "End-to-End Execution",
    description:
      "From connecting customer to professional expert to completion, we handle everything under one platform.",
    icon: "/image/itfetchtrue5.png"  
  },
  {
    id: 6,
    title: "Trusted Platform",
    description:
      "Fetch True ensures secure connections between clients and genuine professionals.",
    icon: "/image/itfetchtrue6.png"    
  },
  {
    id: 7,
    title: "Reschedule Anytime",
    description:
      "If the customer is not satisfied with the service, we reschedule the providers for better results.",
    icon: "/image/itfetchtrue7.png"
  },
];

/* ================= COMPONENT ================= */
const AssuredByFetchTrue: React.FC = () => {
  return (
    <section className="bg-[#EEF3F9] py-8 px-4">
      {/* TITLE */}
      <div className="flex items-start md:justify-center mb-12">
        <h2
          className="text-white bg-black px-6 md:px-12 py-2  text-[12px] md:text-[18px] lg:text-[36px] font-semibold"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
          Assured by Fetch True
        </h2>
      </div>

      {/* CARDS GRID */}
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
        {ASSURED_DATA.map((item) => (
          <div
            key={item.id}
            className="relative bg-white md:w-[330px] lg:w-[526px] min-h-[105px] md:min-h-[100px] lg:min-h-[219px] rounded-2xl p-2 md:px-6 md:pt-15 md:pb-6 mb-8 shadow-md text-center"
          >
            {/* ICON PLACEHOLDER */}
            <div className="absolute -top-5 md:-top-10 left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-center">
                {/* You will add icon here */}
                
                <img src={item.icon} alt="fetchtrue" className="object-cover md:w-[50px] md:h-[50px] lg:w-[88px] lg:h-[88px] w-[41px] h-[41px]" />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="lg:text-[32px] md:text-[24px] text-[12px] font-semibold text-black mt-5 mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 lg:text-[24px] md:text-[18px] text-[12px] justify-between leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssuredByFetchTrue;
