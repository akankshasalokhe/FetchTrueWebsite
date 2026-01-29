// "use client";

// import {
//     CheckCircle,
//     Sparkles,
//     Eye,
//     Smartphone,
//     Zap,
//     Palette,
// } from "lucide-react";

// const BENEFITS = [
//     { icon: CheckCircle, text: "Strong Brand Identity" },
//     { icon: Sparkles, text: "Stand Out from Competitors" },
//     { icon: Eye, text: "Professional & Trustworthy Look" },
//     { icon: Smartphone, text: "Works on All Platforms" },
//     { icon: Zap, text: "Quick Recognition" },
//     { icon: Palette, text: "Consistent Branding" },
// ];

// type benefitsProps = {
//     benefits: string[];
// };


// export default function Benefits({ benefits }: benefitsProps) {

//     function extractBenefits(html: string): string[] {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const results: string[] = [];

//         doc.querySelectorAll("li").forEach(li => {
//             const text = li.textContent?.trim();
//             if (text) results.push(text);
//         });

//         doc.querySelectorAll("p").forEach(p => {
//             if (!p.closest("li")) {
//                 const text = p.textContent?.trim();
//                 if (text) results.push(text);
//             }
//         });

//         if (results.length === 0) {
//             const text = doc.body.textContent || "";
//             text
//                 .split("\n")
//                 .map(t => t.trim())
//                 .filter(Boolean)
//                 .forEach(t => results.push(t));
//         }

//         return results;
//     }

//     const parsedBenefits = benefits.flatMap(extractBenefits);

//     // Split ONLY for desktop
//     const mid = Math.ceil(parsedBenefits.length / 2);
//     const left = parsedBenefits.slice(0, mid);
//     const right = parsedBenefits.slice(mid);

//     return (
//         <section className="bg-[#F6F6F6] py-8">
//             {/* ===== Title ===== */}
//             <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
//                 <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
//                     Benefits
//                 </h2>
//             </div>

//             {/* ===== Card ===== */}
//             <div
//                 className="relative w-[290px] md:w-[95%] lg:w-[1320px] mx-4 lg:mx-auto bg-white border-t-4 border-blue-500 rounded-xl shadow-md p-3 lg:p-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-10 lg:gap-x-20 mt-6 ">
//                     {benefits.map((item, index) => {
//                         // const Icon = item.icon;
//                         return (
//                             <div key={index} className="flex items-center gap-4">
//                                 {/* <Icon className="text-[#2164F4] w-[24px] h-[24px] lg:w-[33px] lg:h-[33px]" /> */}
//                                 <p className="text-[#606060] text-[12px] lg:text-[24px]">
//                                     {item}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//             </div>
//         </section>
//     );
// }






"use client";

type BenefitsProps = {
    benefits: string[]; // array of HTML strings
};

export default function Benefits({ benefits }: BenefitsProps) {

    // ===== HTML → TEXT EXTRACTOR (INLINE, NO UTILS) =====
    function extractBenefits(html: string): string[] {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const results: string[] = [];

        // 1️⃣ <li> first
        doc.querySelectorAll("li").forEach(li => {
            const text = li.textContent?.replace(/\u00A0/g, " ").trim();
            if (text) results.push(text);
        });

        // 2️⃣ <p> (ignore p inside li)
        doc.querySelectorAll("p").forEach(p => {
            if (!p.closest("li")) {
                const text = p.textContent?.replace(/\u00A0/g, " ").trim();
                if (text) results.push(text);
            }
        });

        // 3️⃣ Fallback (plain text)
        if (results.length === 0) {
            const text = doc.body.textContent || "";
            text
                .split("\n")
                .map(t => t.replace(/\u00A0/g, " ").trim())
                .filter(Boolean)
                .forEach(t => results.push(t));
        }

        return results;
    }

    // ===== PARSE ALL HTML STRINGS =====
    const parsedBenefits = benefits.flatMap(extractBenefits);

    // ===== SPLIT FOR DESKTOP (2 COLUMNS) =====
    const mid = Math.ceil(parsedBenefits.length / 2);
    const left = parsedBenefits.slice(0, mid);
    const right = parsedBenefits.slice(mid);

    return (
        <section className="bg-[#F6F6F6] py-8">
            {/* ===== Title ===== */}
            <div className="flex items-start md:justify-center lg:items-center lg:justify-center ml-4 mb-4">
                <h2 className="text-[#2164F4] font-semibold text-[16px] md:text-[24px] lg:text-[36px]">
                    Benefits
                </h2>
            </div>

            {/* ===== Card ===== */}
            <div className="relative w-[290px] md:w-[95%] lg:w-[1320px] mx-4 lg:mx-auto bg-white border-t-4 border-blue-500 rounded-xl shadow-md p-3 lg:p-10">

                {/* ===== MOBILE – SINGLE COLUMN ===== */}
                <div className="flex flex-col gap-4 md:hidden mt-6">
                    {parsedBenefits.map((text, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <p className="text-[#606060] text-[12px] leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ===== DESKTOP – TWO COLUMNS ===== */}
                <div className="hidden md:grid md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-6 lg:gap-y-8 mt-6">
                    {[left, right].map((column, colIdx) => (
                        <div key={colIdx} className="space-y-6">
                            {column.map((text, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <p className="text-[#606060] text-[14px] lg:text-[24px] flex items-center justify-center leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
