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
    {
        icon: CheckCircle,
        text: "Strong Brand Identity",
    },
    {
        icon: Sparkles,
        text: "Stand Out from Competitors",
    },
    {
        icon: Eye,
        text: "Professional & Trustworthy Look",
    },
    {
        icon: Smartphone,
        text: "Works on All Platforms",
    },
    {
        icon: Zap,
        text: "Quick Recognition",
    },
    {
        icon: Palette,
        text: "Consistent Branding",
    },
];

type BenefitProps = {
    benefits: string[];
};

export default function Benefits({ benefits }: BenefitProps) {

    const flattenedBenefits: string[] = benefits.flatMap((item) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(item, "text/html");

        const listItems = Array.from(doc.querySelectorAll("li")).map(li => li.innerHTML);
        const extraText = doc.querySelector("p")?.innerHTML;

        return extraText ? [...listItems, extraText] : listItems;
    });

    return (
        <section className="bg-[#F6F6F6] py-6">
            {/* ===== Title ===== */}
            <div className="flex items-start ml-2 md:ml-6 lg:ml-32 mb-8">
                <h2 className="more-info-title">
                    Benefits
                </h2>
            </div>

            {/* ===== Card ===== */}
            <div className="relative md:w-[700px] lg:w-[1320px] w-[290px] px-4 md:mx-auto bg-white rounded-md shadow-md ml-4  p-4 md:p-10">
                {/* Dotted Top Decoration */}
                <div className="absolute -top-2 left-4 right-4 py-6 flex justify-between">
                    {/* MOBILE → 14 dots */}
                    <div className="flex justify-between w-full md:hidden">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <span
                                key={`m-${i}`}
                                className="w-[8px] h-[8px] rounded-full bg-gray-300"
                            />
                        ))}
                    </div>

                    {/* DESKTOP → 18 dots */}
                    <div className="hidden md:flex justify-between w-full">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <span
                                key={`d-${i}`}
                                className="w-[18px] h-[18px] rounded-full bg-gray-300"
                            />
                        ))}
                    </div>
                </div>


                {/* Content */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-8 gap-y-8 gap-x-20 mt-6">
                    {benefits.map((item, index) => {
                        // const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-4">
                                // <Icon className="text-[#281A83] w-[24px] h-[24px] md:w-[33.21px] md:h-[33.21px]" /> 
                                // <p className="text-[#606060] text-[12px] md:text-[24px]">
                                 //   {item}
                                </p> //
                                <div
                                    className="text-[#606060] text-[12px] md:text-[24px]"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            </div>
                        );
                    })}
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-8 gap-y-8 gap-x-20 mt-6">
                    {flattenedBenefits.map((text, index) => (
                        <div
                            key={index}
                            className="text-[#606060] text-[12px] md:text-[18px] lg:text-[24px] whitespace-nowrap"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    ))}
                </div>




            </div>
        </section>
    );
}
