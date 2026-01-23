// "use client";


// type TermsAndConditionsProps = {
//     termsAndConditions?: string[];
// };

// export default function TermsAndConditions ({ termsAndConditions }: TermsAndConditionsProps ) {
//     // mockTerms.ts
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
//                  <div className="flex items-start ml-2 md:ml-12 mb-8">
//                 <h2 className="more-info-title">
//                    Terms and Conditions
//                 </h2>
//               </div>

//             <div className="md:w-[700px] lg:w-[1321px] mx-auto">
              
//                 {/* CARD */}
//                 <div className="p-6 md:p-8 space-y-6 shadow-sm">
//                     {TERMS_DATA.map((item) => (
//                         <div key={item.id}>
//                             <h3 className="font-semibold text-gray-800 text-[12px] md:text-[24px] lg:text-[32px] mb-2">
//                                 {item.id}. {item.title}:
//                             </h3>

//                             <ul className="space-y-1 text-[14px] md:text-[18px] lg:text-[24px] text-gray-600">
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


"use client";

type TermsAndConditionsProps = {
  termsAndConditions?: string[];
};

export default function TermsAndConditions({
  termsAndConditions,
}: TermsAndConditionsProps) {
  return (
    <section className="bg-gray-100 -mt-12 py-10 px-4">
      {/* TITLE */}
      <div className="flex items-start ml-2 md:ml-12 mb-8">
        <h2 className="more-info-title">Terms and Conditions</h2>
      </div>

      <div className="md:w-[700px] lg:w-[1321px] mx-auto">
        <div className="p-6 md:p-8 shadow-sm bg-white space-y-6">
          {termsAndConditions?.map((html, index) => (
            <div
              key={index}
              className="terms-content text-[14px] md:text-[18px] lg:text-[24px] text-gray-700"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
