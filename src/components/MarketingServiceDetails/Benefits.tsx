"use client";

import {
    CheckCircle,
    Sparkles,
    Eye,
    Smartphone,
    Zap,
    Palette,
} from "lucide-react";

const BENEFITS = [
    { icon: CheckCircle, text: "Strong Brand Identity" },
    { icon: Sparkles, text: "Stand Out from Competitors" },
    { icon: Eye, text: "Professional & Trustworthy Look" },
    { icon: Smartphone, text: "Works on All Platforms" },
    { icon: Zap, text: "Quick Recognition" },
    { icon: Palette, text: "Consistent Branding" },
];

export default function Benefits() {
    return (
        <section className="bg-[#F6F6F6] py-8">
            {/* ===== Title ===== */}
            <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
                <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
                    Benefits
                </h2>
            </div>

            {/* ===== Card ===== */}
            <div
                className="relative w-[290px] md:w-[95%] lg:w-[1320px] mx-4 lg:mx-auto bg-white border-t-4 border-blue-500 rounded-xl shadow-md p-3 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-10 lg:gap-x-20 mt-6 ">
                    {BENEFITS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-4">
                                <Icon className="text-[#2164F4] w-[24px] h-[24px] lg:w-[33px] lg:h-[33px]" />
                                <p className="text-[#606060] text-[12px] lg:text-[24px]">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
