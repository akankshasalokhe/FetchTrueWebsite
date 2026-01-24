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
        icon: "/image/ondemandft1.png"
    },
    {
        id: 2,
        title: "Transparent Workflow",
        description:
            "Complete process visibility, transparent communication, and real-time tracking.",
        icon: "/image/ondemandft2.png"
    },
    {
        id: 3,
        title: "Best Quality Assurance",
        description:
            "We personally check all the project quality before final delivery.",
        icon: "/image/ondemandft3.png"
    },
    {
        id: 4,
        title: "On-Time Delivery Result",
        description:
            "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
        icon: "/image/ondemandft4.png"
    },
    {
        id: 5,
        title: "End-to-End Execution",
        description:
            "From connecting customer to professional expert to completion, we handle everything under one platform.",
        icon: "/image/ondemandft5.png"
    },
    {
        id: 6,
        title: "Trusted Platform",
        description:
            "Fetch True ensures secure connections between clients and genuine professionals.",
        icon: "/image/ondemandft6.png"
    },
    {
        id: 7,
        title: "Reschedule Anytime",
        description:
            "If the customer is not satisfied with the service, we reschedule the providers for better results.",
        icon: "/image/ondemandft7.png"
    },
];


type assuredByFetchTrueProps = {

    assuredByFetchTrue: {
        title: string;
        description: string;
        icon: string;
    }[];
};
/* ================= COMPONENT ================= */
export default function AssuredByFetchTrue({ assuredByFetchTrue }: assuredByFetchTrueProps) {
    return (
        <section className="bg-[#EEF3F9] py-8 px-4">
            {/* TITLE */}
            <div className="flex items-start md:justify-start lg:items-start mb-4">
                <h2
                    className="text-[#D56839] lg:ml-14 px-6 md:px-12 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold"
                >
                    Assured by Fetch True
                </h2>
            </div>
            {/* CARDS GRID */}
            <div className="max-w-4xl lg:max-w-none lg:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 p-8 gap-18 md:gap-8">
                {assuredByFetchTrue.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white w-[140px] md:w-[330px] lg:w-[526px] min-h-[105px] md:min-h-[219px] rounded-2xl p-2 px-2 -ml-8 lg:ml-16 md:ml-1 py-2 md:px-6 md:pt-15 md:pb-6 mb-0 md:mb-8 lg:mb-8 shadow-md text-center"
                    >
                        {/* ICON PLACEHOLDER */}
                        <div className="absolute -top-5 md:-top-10 left-1/2 -translate-x-1/2">
                            <div className="flex items-center justify-center">
                                {/* You will add icon here */}

                                <img src={item.icon} alt="fetchtrue" className="object-cover md:w-[61px] md:h-[61px] lg:w-[88px] lg:h-[88px] w-[41px] h-[41px]" />
                            </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="md:text-[24px] lg:text-[32px] text-[12px] font-semibold text-black mt-5 mb-2">
                            {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 md:text-[18px] lg:text-[24px] text-[12px] justify-between leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};


