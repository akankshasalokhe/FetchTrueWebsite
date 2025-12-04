'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";

export default function TopTrending() {
    const properties = [
        {
            id: 1,
            bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
            image: "/image/building.png",
            title: "Residential Property",
            type: "Real Estate",
            rating: 4,
            location: "Near Andheri West, Mumbai",
            earning: "5%",
            discount: "30%",
            monthlyEarning: "10-20 Lac",
            outlets: 10,
            area: "1500 Sq - 1000 Sq",
            price: "45L",
        },
        {
            id: 2,
            bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
            image: "/image/building.png",
            title: "Luxury Apartment",
            type: "Real Estate",
            rating: 5,
            location: "Banjara Hills, Hyderabad",
            earning: "7%",
            discount: "25%",
            monthlyEarning: "12-22 Lac",
            outlets: 14,
            area: "1800 Sq - 1200 Sq",
            price: "72L",
        },
        {
            id: 3,
            bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
            image: "/image/building.png",
            title: "Commercial Space",
            type: "Business Property",
            rating: 4,
            location: "Koramangala, Bangalore",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-15 Lac",
            outlets: 7,
            area: "1300 Sq - 900 Sq",
            price: "89L",
        },
        {
            id: 4,
            bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
            image: "/image/building.png",
            title: "Studio Apartment",
            type: "Real Estate",
            rating: 3,
            location: "Powai, Mumbai",
            earning: "4%",
            discount: "15%",
            monthlyEarning: "6-12 Lac",
            outlets: 6,
            area: "900 Sq - 700 Sq",
            price: "38L",
        },
        {
            id: 5,
            bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
            image: "/image/building.png",
            title: "Retail Shop",
            type: "Commercial",
            rating: 4,
            location: "Gachibowli, Hyderabad",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-18 Lac",
            outlets: 12,
            area: "1100 Sq - 850 Sq",
            price: "55L",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            {properties.map((p) => (
                <div
                    key={p.id}
                    className="w-full max-w-sm rounded-2xl p-3 shadow-md text-white"
                    style={{ background: p.bgColor }}
                >
                    {/* Property Image */}
                    <div className="relative w-full h-40 rounded-xl overflow-hidden">
                        <Image
                            src={p.image}
                            alt="Property"
                            fill
                            className="object-cover"
                        />

                        {/* Trusted Badge */}
                        <span className="absolute top-2 left-2 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg shadow">
                            Trusted
                        </span>

                        {/* Bookmark Icon */}
                        <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full">
                            <Bookmark size={18} className="text-white" />
                        </button>

                        {/* Small Property Icon */}
                        <div className="absolute  bottom-0  -translate-x-1/2 right-0 bg-white p-1 rounded-xl shadow">
                            <Image
                                src="/mockup/propertyicon.png"
                                alt="icon"
                                width={93}
                                height={98}
                            />
                             <div className="flex items-center gap-1 text-yellow-300 text-sm">
                            {"⭐".repeat(p.rating)}
                        </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-1">
                        <h2 className="text-lg font-semibold">{p.title}</h2>
                        <p className="text-sm opacity-90">{p.type}</p>

                        {/* Rating */}
                       

                        {/* Location */}
                        <div className="bg-white/20 rounded-xl p-6 ">
                        <div className="flex items-start justify-between w-full ">

                           
                            <div>
                                <h3 className="text-sm font-semibold mb-1">Location</h3>
                                <p className="text-sm opacity-95 flex items-center gap-1">
                                    📍 {p.location}
                                </p>
                            </div>

                           
                            <div className="flex flex-col gap-2 items-end">
                                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-lg">
                                    Earn Up to {p.earning}
                                </span>

                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                                    {p.discount} Discount
                                </span>
                            </div>

                        </div>

                        {/* Details */}
                        <div className="mt-3 text-sm opacity-95 space-y-1">
                            <p>Details</p>
                            <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
                            <p>Number Outlet: <b>{p.outlets}</b></p>
                            <p>Area: <b>{p.area}</b></p>
                        </div>

                        </div>

                        {/* Price */}
                        <div className="flex justify-end mt-3">
                            <div className="bg-white text-black font-semibold px-4 py-1 rounded-xl shadow">
                                ₹{p.price}
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    );
}
