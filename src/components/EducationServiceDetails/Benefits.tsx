// "use client";

// type BenefitProps = {
//     benefits: string[];
// };

// export default function Benefits({ benefits }: BenefitProps) {

//     function extractBenefits(html: string): string[] {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const results: string[] = [];

//         // 1️⃣ Extract <li> items FIRST
//         doc.querySelectorAll("li").forEach(li => {
//             const text = li.textContent?.trim();
//             if (text) results.push(text);
//         });

//         // 2️⃣ Extract standalone <p> (not inside li)
//         doc.querySelectorAll("p").forEach(p => {
//             if (!p.closest("li")) {
//                 const text = p.textContent?.trim();
//                 if (text) results.push(text);
//             }
//         });

//         // 3️⃣ Fallback: plain text (if no tags exist)
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

//     const parsedBenefits = benefits.flatMap(html =>
//         extractBenefits(html)
//     );

//     // Split evenly for perfect column alignment
//     const mid = Math.ceil(parsedBenefits.length / 2);
//     const left = parsedBenefits.slice(0, mid);
//     const right = parsedBenefits.slice(mid);

//     return (
//         <section className="bg-[#F6F6F6] py-6">
//             {/* Title */}
//             <div className="flex items-start ml-2 md:ml-6 lg:ml-32 mb-8">
//                 <h2 className="more-info-title">Benefits</h2>
//             </div>

//             {/* Card */}
//             <div className="relative md:w-[700px] lg:w-[1320px] w-[290px] px-4 md:mx-auto bg-white rounded-md shadow-md ml-4 p-4 md:p-10">

//                 {/* Dots */}
//                 <div className="absolute -top-2 left-4 right-4 py-6 flex justify-between">
//                     <div className="hidden md:flex w-full justify-between">
//                         {Array.from({ length: 18 }).map((_, i) => (
//                             <span key={i} className="w-[18px] h-[18px] rounded-full bg-gray-300" />
//                         ))}
//                     </div>
//                     <div className="flex md:hidden w-full justify-between">
//                         {Array.from({ length: 14 }).map((_, i) => (
//                             <span key={i} className="w-[8px] h-[8px] rounded-full bg-gray-300" />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Benefits Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-6 p-2 md:p-8">

//                     {[left, right].map((column, colIdx) => (
//                         <div key={colIdx} className="space-y-6">
//                             {column.map((text, index) => {
//                                 const icon =
//                                     text.match(/^([\p{Emoji}]+)/u)?.[0] ?? "✔";
//                                 const label = text.replace(icon, "").trim();

//                                 return (
//                                     <div
//                                         key={index}
//                                         className="flex items-center md:items-center gap-4 text-[#606060]"
//                                     >
//                                         <span className="mt-[3px] w-[30px] h-[30px] flex md:items-center justify-start text-[20px] md:text-[26px] shrink-0">
//                                             {icon}
//                                         </span>

//                                         <span className="text-[12px] md:text-[18px] lg:text-[24px] leading-relaxed flex items-center justify-center">
//                                             {label}
//                                         </span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     );
// }






"use client";

type BenefitProps = {
    benefits: string[];
};

export default function Benefits({ benefits }: BenefitProps) {

    function extractBenefits(html: string): string[] {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const results: string[] = [];

        doc.querySelectorAll("li").forEach(li => {
            const text = li.textContent?.trim();
            if (text) results.push(text);
        });

        doc.querySelectorAll("p").forEach(p => {
            if (!p.closest("li")) {
                const text = p.textContent?.trim();
                if (text) results.push(text);
            }
        });

        if (results.length === 0) {
            const text = doc.body.textContent || "";
            text
                .split("\n")
                .map(t => t.trim())
                .filter(Boolean)
                .forEach(t => results.push(t));
        }

        return results;
    }

    const parsedBenefits = benefits.flatMap(extractBenefits);

    // Split ONLY for desktop
    const mid = Math.ceil(parsedBenefits.length / 2);
    const left = parsedBenefits.slice(0, mid);
    const right = parsedBenefits.slice(mid);

    return (
        <section className="bg-[#F6F6F6] py-6">
            {/* Title */}
            <div className="flex items-start ml-2 md:ml-6 lg:ml-32 mb-8">
                <h2 className="more-info-title">Benefits</h2>
            </div>

            {/* Card */}
            <div className="relative md:w-[700px] lg:w-[1320px] w-[290px] md:mx-auto ml-4 bg-white rounded-md shadow-md p-4 md:p-10">

                {/* Dots */}
                <div className="absolute -top-2 left-4 right-4 py-6 flex justify-between">
                    <div className="hidden md:flex w-full justify-between">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <span key={i} className="w-[18px] h-[18px] rounded-full bg-gray-300" />
                        ))}
                    </div>
                    <div className="flex md:hidden w-full justify-between">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <span key={i} className="w-[8px] h-[8px] rounded-full bg-gray-300" />
                        ))}
                    </div>
                </div>

                {/* BENEFITS */}
                <div className="mt-6 p-2 md:p-8">

                    {/* MOBILE – single column */}
                    <div className="flex flex-col gap-6 md:hidden">
                        {parsedBenefits.map((text, index) => {
                            const icon = text.match(/^([\p{Emoji}]+)/u)?.[0] ?? "✔";
                            const label = text.replace(icon, "").trim();

                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 text-[#606060]"
                                >
                                    <span className="mt-[2px] w-[28px] h-[28px] flex items-center justify-center text-[20px] shrink-0">
                                        {icon}
                                    </span>

                                    <span className="text-[14px] leading-relaxed">
                                        {label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* DESKTOP – two columns */}
                    <div className="hidden md:grid md:grid-cols-2 gap-x-20">
                        {[left, right].map((column, colIdx) => (
                            <div key={colIdx} className="space-y-6">
                                {column.map((text, index) => {
                                    const icon =
                                        text.match(/^([\p{Emoji}]+)/u)?.[0] ?? "✔";
                                    const label = text.replace(icon, "").trim();

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 text-[#606060]"
                                        >
                                            <span className="w-[30px] h-[30px] flex items-center justify-center text-[24px] shrink-0">
                                                {icon}
                                            </span>

                                            <span className="text-[18px] lg:text-[22px] leading-relaxed">
                                                {label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
