// "use client";


// type TermsAndConditionsProps = {
//     termsAndConditions: string[];

// };
// export default function TermsAndConditions({ termsAndConditions }: TermsAndConditionsProps) {

//     return (
//         <section className="bg-gray-100 -mt-12 md:-mt-12 py-10 px-4">
//             <div className="md:w-[700px] lg:w-[1321px] mx-auto">
//                 {/* TITLE */}
//                 <div className="flex items-start md:justify-center mb-6">
//                     <h2
//                         className="bg-black text-white px-6 md:px-10 py-2 text-[12px] md:text-[24px] lg:text-[32px] font-semibold"
//                         style={{
//                             clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
//                         }}
//                     >
//                         Terms & Conditions
//                     </h2>
//                 </div>

//                 {/* CARD */}
//                 {/* <div className="bg-white rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
//                     {termsAndConditions.map((item) => (
//                         <div key={item.id}>
//                             <h3 className="font-semibold text-gray-800 text-[12px] md:text-[32px] mb-2">
//                                 {item.id}. {item.title}:
//                             </h3>

//                             <ul className="space-y-1 text-[14px] md:text-[24px] text-gray-600">
//                                 {item.points.map((point, index) => (
//                                     <li
//                                         key={index}
//                                         className={index === 0 ? "ml-0" : "ml-5 list-disc"}
//                                     >
//                                         {point}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div> */}
//                 <div className="md:w-[700px] lg:w-[1321px] mx-auto">
//                     <div className="p-6 md:p-8 shadow-sm bg-white rounded-lg space-y-6">
//                         {termsAndConditions?.map((html, index) => (
//                             <div
//                                 key={index}
//                                 className="terms-content text-[14px] md:text-[18px] lg:text-[24px] text-gray-700"
//                                 dangerouslySetInnerHTML={{ __html: html }}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };




"use client";

import { useEffect, useState } from "react";

type TermsAndConditionsProps = {
  termsAndConditions: string[];
};

type ParsedTerm = {
  title: string;
  points: string[];
  rawPoints: string[];
};

// Detect if a text is a title
function isLikelyTitle(text: string) {
  return (
    text.endsWith(":") ||
    (text.split(" ").length <= 3 && /^[A-Z][a-zA-Z ]+$/.test(text))
  );
}

// Parse HTML into structured terms while keeping <span> styles
function parseTermsHtml(html: string): ParsedTerm[] {
  if (typeof window === "undefined" || !html) return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const spans = Array.from(doc.querySelectorAll("span"));

  const result: ParsedTerm[] = [];
  let current: ParsedTerm | null = null;

  spans.forEach(span => {
    const text = span.textContent?.trim();
    const htmlContent = span.outerHTML;

    if (!text) return;

    if (isLikelyTitle(text)) {
      if (current) result.push(current);

      current = {
        title: text.replace(":", ""),
        points: [],
        rawPoints: [],
      };
    } else {
      current?.points.push(text);
      current?.rawPoints.push(htmlContent);
    }
  });

  if (current) result.push(current);

  return result;
}

export default function TermsAndConditions({ termsAndConditions }: TermsAndConditionsProps) {
  const [parsedTerms, setParsedTerms] = useState<ParsedTerm[]>([]);

  useEffect(() => {
    if (!termsAndConditions?.length) return;

    const html = termsAndConditions[0];
    const parsed = parseTermsHtml(html);
    setTimeout(() => setParsedTerms(parsed), 0);
  }, [termsAndConditions]);

  if (!parsedTerms.length) return null;

  return (
    <section className="bg-gray-100 -mt-12 md:-mt-12 py-10 px-4">
      <div className="md:w-[700px] lg:w-[1321px] mx-auto">
        {/* TITLE */}
        <div className="flex items-start md:justify-center mb-6">
          <h2
            className="bg-black text-white px-6 md:px-10 py-2 text-[12px] md:text-[24px] lg:text-[32px] font-semibold"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
            }}
          >
            Terms & Conditions
          </h2>
        </div>

        {/* CARD */}
        <div className="p-6 md:p-8 shadow-sm bg-white rounded-lg space-y-6">
          {parsedTerms.map((item, idx) => (
            <div key={idx}>
              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-[12px] md:text-[24px] lg:text-[32px] mb-2">
                {idx + 1}. {item.title}
              </h3>

              {/* Points */}
              <ul className="space-y-1 ml-5 list-disc">
                {item.rawPoints.map((pointHtml, i) => (
                  <li
                    key={i}
                    className="text-[14px] md:text-[18px] lg:text-[24px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: pointHtml }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
