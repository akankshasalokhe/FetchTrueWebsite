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
        logo: "/image/providericon.png",
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
        logo: "/image/providericon.png",
        verified: true,
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
        logo: "/image/providericon.png",
        verified: true,
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
                <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
                    <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
                        Choose Provider
                    </h2>
                </div>
                <div className="bg-white/100  border-t-4 border-blue-500  rounded-xl">

                    {/* PROVIDER LIST */}
                    <div className="lg:w-[1190px] md:w-[300p]  w-[300px]  mx-auto md:mx-0 lg:mx-auto">
                        <div
                            className={`
                        space-y-4 transition-all duration-300 -mt-2
                        overflow-y-auto max-h-[320px] pr-1
                        md:overflow-visible md:max-h-none md:pr-0
                    `} >

                            <p className="text-start md:text-center text-gray-500  px-2 py-4 lg:pt-8 text-[14px] lg:text-[24px]">
                                Pick the right expert for your service
                            </p>

                            {visibleProviders.map((provider) => (
                                <div
                                    key={provider.id}
                                    className="bg-gray-100 rounded-lg border p-2 md:p-6  flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                                 >
                                    {/* ===== TOP ROW (MOBILE) + LEFT (DESKTOP) ===== */}
                                    <div className="flex items-center justify-between md:justify-start md:gap-4">
                                        <div className="flex items-center gap-2 md:gap-8">
                                            <div className="flex flex-col gap-2">
                                                <img
                                                    src={provider.logo}
                                                    alt={provider.name}
                                                    className="w-[44px] h-[44px] md:w-[67px] md:h-[67px] rounded-full object-cover"
                                                />

                                                <p className="bg-green-500 rounded-2xl md:px-2 px-2 text-white text-[6px] md:text-[12px]">Promoted</p>
                                            </div>

                                            <div>
                                                <div className="flex items-center -mt-4 md:-mt-8 gap-1 md:gap-4">
                                                    <h3 className="font-semibold text-[14px] md:text-[32px] whitespace-nowrap">
                                                        {provider.name}
                                                    </h3>
                                                    {provider.verified && (
                                                        <img src="/image/providerverified.png" alt="verified" className="object-cover w-[19px] h-[19px] md:w-[41px] md:h-[41px] " />
                                                    )}
                                                    <span className="md:text-[14px] text-[8px]">Available</span>
                                                </div>

                                                <p className="text-[10px] md:text-[16px] text-gray-500">
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
                                            className="w-4 h-4 accent-green-600 -mt-8 cursor-pointer block md:hidden"
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

                                        {/* <p className="text-[8px] text-black ml-8 font-medium">
                                        Earn up to
                                        <div className="text-[15px] text-green-600">{provider.cashback}</div>
                                    </p> */}
                                        <div className="flex flex-col gap-2">

                                            <p className="text-[8px] text-black ml-8 font-medium">
                                                Earn up to
                                            </p>
                                            <p className="text-[15px] ml-8 text-green-600">{provider.cashback}</p>
                                        </div>
                                    </div>

                                    {/* ===== DESKTOP CENTER (UNCHANGED) ===== */}
                                    <div className="hidden md:block text-right whitespace-nowrap ml-10">
                                        <p className="font-medium text-[24px] md:-mt-10 flex items-center gap-2 justify-end">
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

                                        <p className="text-[14px] text-black -mt-8  font-medium">
                                            Earn up to
                                        </p>
                                        <p className="text-[24px] text-green-600">{provider.cashback}</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={selectedId === provider.id}
                                        onChange={() =>
                                            setSelectedId(
                                                selectedId === provider.id ? null : provider.id
                                            )
                                        }
                                        className="w-4 h-4 hidden -mt-14 md:block accent-green-600 cursor-pointer"
                                    />
                                </div>

                            ))}
                        </div>

                        {/* SHOW MORE / LESS BUTTON */}
                        <div className="flex justify-center mt-2 py-0 md:py-4">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-[#2164F4] text-white text-[12px] md:text-[20px] mb-2 px-4 py-1 rounded"
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
