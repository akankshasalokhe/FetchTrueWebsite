"use client";

import { useState } from "react";

/* ================= TYPES ================= */
type moreInfoProps = {
    moreInfo: {
        _id: string;
        title: string;
        description: string;
        image: string;
    }[];
};


/* ================= COMPONENT ================= */
export default function MoreInformation({ moreInfo }: moreInfoProps) {
    const [activeIndex, setActiveIndex] = useState(0);



    return (
        <section className="bg-[#F7F7F7] py-16 px-4">
            {/* TITLE */}
            <div className="flex items-start ml-2 md:ml-12 mb-12">
                <h2 className="more-info-title">
                    More Information
                </h2>
            </div>


            {/* ================= DESKTOP (UNCHANGED) ================= */}
            <div className="hidden md:flex md:w-[700px] lg:w-[1320px] mx-auto h-auto gap-4">
                {moreInfo.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item._id} // still keep _id as key
                            onClick={() => setActiveIndex(index)}
                            className={`relative cursor-pointer md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden transition-all duration-500
        ${isActive ? "flex-[3]" : "flex-[1]"}
      `}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />

                            <div
                                className={`absolute inset-0 bg-black transition-opacity
          ${isActive ? "opacity-60" : "opacity-40"}
        `}
                            />

                            {isActive && (
                                <div className="absolute inset-0 p-8 text-white">
                                    <h3 className="md:text-[24px] lg:text-[36px] font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="md:text-[18px] lg:text-[24px] max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}

            </div>


            {/* ================= MOBILE COLUMN ================= */}
            <div className="md:hidden max-w-md mx-auto space-y-4">
                {moreInfo.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item._id} // keep stable key
                            onClick={() => setActiveIndex(index)}
                            className={`
          relative w-full rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-500 ease-in-out
          ${isActive ? "h-[292px]" : "h-[90px]"}
        `}
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* DARK OVERLAY */}
                            <div
                                className={`
            absolute inset-0 bg-black transition-opacity duration-300
            ${isActive ? "opacity-70" : "opacity-40"}
          `}
                            />

                            {/* CONTENT ON IMAGE */}
                            <div
                                className={`
            absolute inset-0 p-4 flex flex-col justify-start text-white
            transition-all duration-400
            ${isActive
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"}
          `}
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>



        </section>
    );
};

