// "use client";


// const TermsAndConditions = () => {

//     const TERMS_DATA = [
//         {
//             id: 1,
//             title: "Platform Compliance",
//             points: [
//                 "All customer communication must be completed only through Fetch True Platform to maintain service authenticity, tracking and eligibility for customer benefits."
//             ]
//         },
//         {
//             id: 2,
//             title: "Booking Services",
//             points: [
//                 "All service bookings must be made through the Fetch True App."
//             ]
//         },
//         {
//             id: 3,
//             title: "Direct Contract Restriction",
//             points: [
//                 "If a customer chooses to engage directly with a service provider outside the Fetch True platform, such off-platform transactions/contract will not be considered under Fetch True’s responsibility."
//             ]
//         },
//         {
//             id: 4,
//             title: "Termination/Cancellation of Benefits",
//             points: [
//                 "In the event of an off-platform engagement the customer benefits will be terminated:",
//                 "Up to 100% Guarantee Return policy",
//                 "Customer support and dispute resolution assistance",
//                 "Transaction protection and service quality verification",
//                 "Refund Policy will be terminated if direct contract has been made."
//             ]
//         },
//         {
//             id: 5,
//             title: "Liability",
//             points: [
//                 "Fetch True is not liable for any loss, dispute, or claim arising from off-platform engagements or private transactions made outside its official system."
//             ]
//         },
//         {
//             id: 6,
//             title: "Refund Policy",
//             points: [
//                 "Refunds will only be initiated when service conditions meet refund eligibility. All refunds will be processed within the specified time frame."
//             ]
//         }
//     ];

//     return (
//         <section className="bg-gray-100 -mt-12 md:-mt-12 py-10 px-4">
//               {/* TITLE */}
//                  <div className="flex items-start lg:items-center lg:justify-center ml-2 mb-4">
//                 <h2 className="text-[#2164F4] font-semibold text-[16px] md:text-[24px] lg:text-[36px]">
//                     Terms & Conditions
//                 </h2>
//             </div>

//             <div className="md:max-w-6xl lg:max-w-none lg:w-[1321px] mx-auto border-t-4 border-blue-500 rounded-xl">
              
//                 {/* CARD */}
//                 <div className="p-6 md:p-8 space-y-6 shadow-sm">
//                     {TERMS_DATA.map((item) => (
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
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TermsAndConditions;






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
