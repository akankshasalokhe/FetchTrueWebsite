
// type SafetyandAssuranceProps = {
//     safetyAndAssurance: string[];
// };



// export default function SafetyandAssurance({ safetyAndAssurance }: SafetyandAssuranceProps) {
//     const data = [
//         "Background-verified cleaners",
//         "No damage guarantee",
//         "Eco-friendly materials",
//         "100% service satisfaction"
//     ]
//     return (
//         <section className="w-full bg-gray-100 py-8 px-4">
//             {/* Title */}
//             <div className="flex items-start -ml-4 lg:ml-14 md:justify-start lg:items-start mb-2">
//                 <h2
//                     className="text-[#D56839] px-8 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold inline-block"
//                 >
//                     Safety and Assurance
//                 </h2>
//             </div>


//             <div className="md:max-w-6xl lg:max-w-none lg:w-[1320px] mx-auto ">
//                 <div className="bg-white rounded-2xl shadow-md text-gray-600">
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         {safetyAndAssurance.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-start gap-3 p-4 lg:p-8"
//                             >
//                                 <span className="mt-2 lg:mt-4 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
//                                 <p className="text-[12px] md:text-[18px] lg:text-[24px] leading-relaxed">
//                                     {item}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>



//         </section>
//     );
// }




"use client";

type SafetyandAssuranceProps = {
  safetyAndAssurance: string[];
};

export default function SafetyandAssurance({
  safetyAndAssurance,
}: SafetyandAssuranceProps) {

  /* ================= PARSE FUNCTION ================= */
  function parseSafetyAndAssurance(html: string): string[] {
    if (!html) return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const results: string[] = [];

    // 1️⃣ Extract <li> first
    doc.querySelectorAll("li").forEach(li => {
      const text = li.textContent?.trim();
      if (text) results.push(text);
    });

    // 2️⃣ Fallback to <p>
    if (results.length === 0) {
      doc.querySelectorAll("p").forEach(p => {
        const text = p.textContent?.trim();
        if (text) results.push(text);
      });
    }

    // 3️⃣ Final fallback: plain text
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

  /* ================= PARSED DATA ================= */
  const parsedSafety = safetyAndAssurance.flatMap(parseSafetyAndAssurance);

  if (parsedSafety.length === 0) return null;

  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      {/* Title */}
      <div className="flex items-start -ml-4 lg:ml-14 md:justify-start lg:items-start mb-2">
        <h2 className="text-[#D56839] px-8 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold inline-block">
          Safety and Assurance
        </h2>
      </div>

      <div className="md:max-w-[700px] lg:max-w-none lg:w-[1320px] mx-auto">
        <div className="bg-white rounded-2xl shadow-md text-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {parsedSafety.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 lg:p-8"
              >
                <span className="mt-2 lg:mt-4 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0" />
                <p className="text-[12px] md:text-[18px] lg:text-[24px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
