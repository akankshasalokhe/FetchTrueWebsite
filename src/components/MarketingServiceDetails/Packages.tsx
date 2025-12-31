"use client";

import React from "react";

/* ================= TYPES ================= */
type PackageItem = {
    id: number;
    name: string;
    oldPrice?: string;
    price: string;
    discount?: string;
    features: string[];
    highlight?: boolean;
};

/* ================= MOCK DATA ================= */
const PACKAGES: PackageItem[] = [
    {
        id: 1,
        name: "Basic Plan",
        oldPrice: "₹5,999",
        price: "₹3,999",
        discount: "12% Off",
        features: ["2 Logo concepts", "2 Revisions", "JPG & PNG files"],
    },
    {
        id: 2,
        name: "Standard Plan",
        oldPrice: "₹8,999",
        price: "₹6,999",
        discount: "12% Off",
        highlight: true,
        features: [
            "4 Logo concepts",
            "3 Revisions",
            "Source file (AI, PDF)",
            "Transparent background",
        ],
    },
    {
        id: 3,
        name: "Premium Plan",
        oldPrice: "₹12,999",
        price: "₹9,999",
        discount: "15% Off",
        features: [
            "6 Logo concepts",
            "Unlimited revisions",
            "All source files",
            "Brand guidelines",
        ],
    },
];

/* ================= COMPONENT ================= */
const Packages: React.FC = () => {
    return (
        <section className="bg-[#F7F7F7] py-6 px-4 md:px-4">
            {/* TITLE */}
           <div className="flex items-start lg:items-center lg:justify-center mt-4 mb-4">
                <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
                   Packages
                </h2>
            </div>

            {/* ================= DESKTOP (UNCHANGED) ================= */}
            <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-3 gap-20">
                {PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>

            {/* ================= TABLET (SEPARATE UI) ================= */}
            {/* <div className="hidden md:grid lg:hidden max-w-84l mx-auto grid-cols-3 gap-6">
                {PACKAGES.slice(0, 2).map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
               
            </div> */}
              <div className="hidden lg:hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-20">
               {PACKAGES.map((pkg) => (
                        <div key={pkg.id} className="w-[270px] flex-shrink-0">
                            <PackageCard pkg={pkg} />
                        </div>
                    ))}
            </div>

            {/* ================= MOBILE (SWIPE + 3 PLANS) ================= */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4">
                <div className="flex gap-6 px-4 py-4">
                    {PACKAGES.map((pkg) => (
                        <div key={pkg.id} className="w-[170px] flex-shrink-0">
                            <PackageCard pkg={pkg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ================= CARD ================= */
const PackageCard = ({ pkg }: { pkg: PackageItem }) => {
    return (
        // <div className="relative bg-white rounded-2xl w-[172px] min-h-[300px] md:w-[322px] shadow-md md:p-6 p-2 md:min-h-[549px] flex flex-col">
        <div className="relative bg-white border-t-4 border-blue-500 rounded-2xl w-full min-h-[350px] md:w-[230px] md:min-h-[350px] lg:w-[322px] shadow-md md:p-6 p-3 lg:min-h-[449px] flex flex-col">


            {/* TITLE */}
            <h3 className="text-center text-[14px] md:text-[32px] font-semibold text-gray-700 mb-4">
                {pkg.name}
            </h3>

            {/* PRICE BOX */}
            <div className="border border-orange-300 rounded-lg py-3 px-4 w-fit mx-auto text-center mb-6">
                <p className="text-gray-400 line-through text-sm">
                    {pkg.oldPrice}{" "}
                    <span className="text-blue-500">{pkg.discount}</span>
                </p>
                <p className="text-2xl font-bold">{pkg.price}</p>
                <p className="text-xs text-gray-400">Onwords</p>
            </div>

            {/* FEATURES */}
            <div className="mx-auto">
            <p className="font-medium text-[12px] md:text-[18px] mb-3">What You Get -</p>
            <ul className="space-y-2 flex-1">
                {pkg.features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex  gap-2 text-[10px] md:text-[18px] text-gray-600"
                    >
                        <span className="text-green-500">✔</span>
                        {feature}
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    );
};

export default Packages;
