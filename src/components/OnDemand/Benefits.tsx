// "use client";

// type BenefitsProps = {
//     benefits: string[];
// };

// export default function Benefits({ benefits }: BenefitsProps) {
//     return (
//         <section className="relative w-full p-8 bg-gray-100">
//                 <div className="rounded-xl w-full  mt-5">
//                     {/* Title */}
//                     <div className="flex items-start md:justify-start lg:items-start">
//                         <h2
//                             className="text-[#D56839] px-6 py-2 -ml-6 lg:ml-10 text-[16px] md:text-[32px] font-semibold mb-6 inline-block"
                            
//                         >
//                             Benefits
//                         </h2>
//                     </div>

//                     {/* Benefits List */}
//                     <div className="flex flex-col mx-auto md:w-[1320px] md:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
//                         {benefits.map((item, index) => (
//                             <div key={index} className="flex items-start gap-2">
                              
//                                 <p className="text-black md:text-[24px]">{item}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//     );
// }




"use client";

type BenefitsProps = {
  benefits: string[];
};

export default function Benefits({ benefits }: BenefitsProps) {

  /* ===== SAME PARSING LOGIC ===== */
  function extractBenefits(html: string): string[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const results: string[] = [];

    // 1️⃣ <li>
    doc.querySelectorAll("li").forEach(li => {
      const text = li.textContent?.trim();
      if (text) results.push(text);
    });

    // 2️⃣ <p> not inside li
    doc.querySelectorAll("p").forEach(p => {
      if (!p.closest("li")) {
        const text = p.textContent?.trim();
        if (text) results.push(text);
      }
    });

    // 3️⃣ Plain text fallback
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

  return (
    <section className="relative w-full p-4 md:p-8 bg-gray-100">
      <div className="rounded-xl w-full mt-5">
        
        {/* ===== Title ===== */}
        <div className="flex items-start md:justify-start lg:items-start">
          <h2 className="text-[#D56839] px-6 py-2 -ml-6 lg:ml-10 text-[16px] md:text-[24px] lg:text-[32px] font-semibold mb-6 inline-block">
            Benefits
          </h2>
        </div>

        {/* ===== Benefits List ===== */}
        <div className="flex flex-col mx-auto md:w-[700px] lg:w-[1320px] md:h-full lg:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-4 gap-y-4 gap-x-8">

          {parsedBenefits.map((text, index) => {
            const icon = text.match(/^([\p{Emoji}]+)/u)?.[0] ?? "✔";
            const label = text.replace(icon, "").trim();

            return (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[20px] mt-[2px] shrink-0">
                  {icon}
                </span>
                <p className="text-black text-[14px] md:text-[18px] lg:text-[24px] leading-relaxed">
                  {label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
