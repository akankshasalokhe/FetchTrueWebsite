/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// type TermsAndConditionsProps = {
//   termsAndConditions?: string[];
// };

// export default function TermsAndConditions({
//   termsAndConditions,
// }: TermsAndConditionsProps) {
//   return (
//     <section className="bg-gray-100 -mt-12 py-10 px-4">
// {/* TITLE */}
// <div className="flex items-start ml-2 md:ml-12 mb-8">
//   <h2 className="more-info-title">Terms and Conditions</h2>
// </div>

//       <div className="md:w-[700px] lg:w-[1321px] mx-auto">
//         <div className="p-6 md:p-8 shadow-sm bg-white space-y-6">
//           {termsAndConditions?.map((html, index) => (
//             <div
//               key={index}
//               className="terms-content text-[14px] md:text-[18px] lg:text-[24px] text-gray-700"
//               dangerouslySetInnerHTML={{ __html: html }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";

type TermsAndConditionsProps = {
  termsAndConditions?: string[] | string;
};

type ParsedTerm = {
  title: string;
  points: string[];
  rawPoints: string[]; // keeps original HTML for colors
};

// Determine if text is a heading/title
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
    const htmlContent = span.outerHTML; // keep colors/styles

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

export default function TermsAndConditions({
  termsAndConditions,
}: TermsAndConditionsProps) {
  const [parsedTerms, setParsedTerms] = useState<ParsedTerm[]>([]);

  useEffect(() => {
    if (!termsAndConditions) return;

    const html = Array.isArray(termsAndConditions)
      ? termsAndConditions[0]
      : termsAndConditions;

    const parsed = parseTermsHtml(html);
    setTimeout(() => setParsedTerms(parsed), 0);
  }, [termsAndConditions]);

  if (!parsedTerms.length) return null;

  return (
    <section className="bg-[#F7F7F7] py-10 px-4">
           {/* TITLE */}
      <div className="flex items-start ml-2 md:ml-12 mb-8">
        <h2 className="more-info-title">Terms and Conditions</h2>
      </div>

      <div className="lg:w-[1321px] bg-white mx-auto rounded-2xl">
        <div className="p-6 md:p-8 space-y-6 shadow-sm">
          {parsedTerms.map((item, idx) => (
            <div key={idx}>
              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-[12px] md:text-[24px] lg:text-[32px] mb-2">
                {idx + 1}. {item.title}
              </h3>

              {/* Points list */}
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
