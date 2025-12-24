"use client";

import React, { useState } from "react";

/* ================= TYPES ================= */
type Provider = {
    id: number;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice: number;
    discount: string;
    cashback: string;
    logo: string;
    verified?: boolean;
};

/* ================= DATA ================= */
const PROVIDERS: Provider[] = [
    {
        id: 1,
        name: "FTFL Technology",
        rating: 4.8,
        reviews: 127,
        price: 7040,
        originalPrice: 8000,
        discount: "12% Off",
        cashback: "₹15%",
        logo: "/images/provider.png",
        verified: true,
    },
    {
        id: 2,
        name: "Brandify Studio",
        rating: 4.6,
        reviews: 98,
        price: 6500,
        originalPrice: 7500,
        discount: "13% Off",
        cashback: "₹10%",
        logo: "/images/provider.png",
    },
    {
        id: 3,
        name: "Design Hub",
        rating: 4.7,
        reviews: 156,
        price: 7200,
        originalPrice: 8200,
        discount: "10% Off",
        cashback: "₹20%",
        logo: "/images/provider.png",
    },
];

/* ================= COMPONENT ================= */
const ChooseProvider: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const visibleProviders = showAll ? PROVIDERS : PROVIDERS.slice(0, 1);

    return (
        <section className=" bg-gray-100 mb-12">
            <div className="py-10 px-2 md:px-4  w-[320px] md:w-[1320px] mx-auto ">
                {/* TITLE */}
                <div className="flex items-start md:justify-center mb-4">
                    <h2
                        className="bg-black text-white px-6 py-2 text-[12px] md:text-[32px] font-semibold"
                        style={{
                            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                        }}
                    >
                        Choose Provider
                    </h2>
                </div>
            <div className="bg-white/100  rounded-xl">
                <p className="text-center text-gray-500 py-8 text-sm md:text-lg">
                    Pick the right expert for your service
                </p>

                {/* PROVIDER LIST */}
                <div className="md:w-[1190px]  w-[300px] mx-auto">
                    <div
                        className={`
                        space-y-4 transition-all duration-300
                        overflow-y-auto max-h-[320px] pr-1
                        md:overflow-visible md:max-h-none md:pr-0
                    `} >


                        {visibleProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-gray-100 rounded-lg border p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                            >
                                {/* ===== TOP ROW (MOBILE) + LEFT (DESKTOP) ===== */}
                                <div className="flex items-center justify-between md:justify-start md:gap-4">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={provider.logo}
                                            alt={provider.name}
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                                        />

                                        <div>
                                            <div className="flex items-center gap-1">
                                                <h3 className="font-semibold text-[12px] md:text-[32px]">
                                                    {provider.name}
                                                </h3>
                                                {provider.verified && (
                                                    <span className="text-blue-500 text-xs">✔</span>
                                                )}
                                            </div>

                                            <p className="text-[16px] text-gray-500">
                                                {provider.rating} ★ ({provider.reviews} reviews)
                                            </p>
                                        </div>
                                    </div>

                                    {/* CHECKBOX */}
                                    <input
                                        type="checkbox"
                                        checked={selectedId === provider.id}
                                        onChange={() =>
                                            setSelectedId(
                                                selectedId === provider.id ? null : provider.id
                                            )
                                        }
                                        className="w-4 h-4 accent-green-600 cursor-pointer block md:hidden"
                                    />
                                </div>

                                {/* ===== BOTTOM ROW (MOBILE ONLY) ===== */}
                                <div className="flex items-center gap-4 md:hidden">
                                    <p className="font-semibold ml-10 text-sm whitespace-nowrap">
                                        ₹{provider.price}
                                        <span className="line-through text-gray-400 text-xs ml-2">
                                            ₹{provider.originalPrice}
                                        </span>
                                        <span className="text-gray-400 text-xs ml-1">
                                            ({provider.discount})
                                        </span>
                                    </p>

                                    <p className="text-[8px] text-green-600 ml-8 font-medium">
                                        Earn up to
                                        <div className="text-[15px]">{provider.cashback}</div>
                                    </p>
                                </div>

                                {/* ===== DESKTOP CENTER (UNCHANGED) ===== */}
                                <div className="hidden md:block text-right whitespace-nowrap">
                                    <p className="font-semibold text-[24px] flex items-center gap-2 justify-end">
                                        <span className="text-[24px]">₹{provider.price}</span>
                                        <span className="line-through text-gray-400 text-[24px]">
                                            ₹{provider.originalPrice}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            ({provider.discount})
                                        </span>
                                    </p>
                                </div>

                                {/* ===== DESKTOP RIGHT (UNCHANGED) ===== */}
                                <div className="hidden md:flex flex-col gap-2">
                                   
                                    <p className="text-14px text-green-600 ml-50 font-medium">
                                        Earn up to 
                                        <div className="text-[24px]">{provider.cashback}</div>
                                    </p>
                                </div>
                                 <input
                                        type="checkbox"
                                        checked={selectedId === provider.id}
                                        onChange={() =>
                                            setSelectedId(
                                                selectedId === provider.id ? null : provider.id
                                            )
                                        }
                                        className="w-4 h-4 hidden md:block accent-green-600 cursor-pointer"
                                    />
                            </div>

                        ))}
                    </div>

                    {/* SHOW MORE / LESS BUTTON */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-black text-white text-[12px] md:text-[20px] mb-4 px-6 py-2 rounded"
                        >
                            {showAll ? "Show Less" : "See all Providers"}
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseProvider;
