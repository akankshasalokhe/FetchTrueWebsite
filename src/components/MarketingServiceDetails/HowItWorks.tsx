// "use client";

// import {
//   Lightbulb,
//   PencilRuler,
//   PenTool,
//   MessageSquare,
//   Truck,
// } from "lucide-react";

// const STEPS = [
//   {
//     title: "Discover",
//     step: "STEP 01",
//     icon: Lightbulb,
//     points: [
//       "We begin by understanding your brand story, target audience, and goals.",
//       "This helps us capture the true essence of your identity before designing.",
//     ],
//   },
//   {
//     title: "Create",
//     step: "STEP 02",
//     icon: PencilRuler,
//     points: [
//       "Our designers brainstorm fresh ideas and sketch multiple logo concepts.",
//       "Each one reflects your brand’s personality and values.",
//     ],
//   },
//   {
//     title: "Design",
//     step: "STEP 03",
//     icon: PenTool,
//     points: [
//       "We turn the best ideas into professional digital logos using modern tools.",
//       "Every design is clean, creative, and ready for print & digital use.",
//     ],
//   },
//   {
//     title: "Refine",
//     step: "STEP 04",
//     icon: MessageSquare,
//     points: [
//       "We refine designs based on feedback to ensure perfection.",
//       "Polishing every detail for the best final result.",
//     ],
//   },
//   {
//     title: "Deliver",
//     step: "STEP 05",
//     icon: Truck,
//     points: [
//       "Final files are delivered in all required formats.",
//       "Ready for immediate use across platforms.",
//     ],
//   },
// ];

// type HowItWorksItem = {
//   _id: string;
//   title: string;
//   icon?: string;
//   description: string;
// };

// type howItWorksProps = {
//   howItWorks: HowItWorksItem[];
// };


// export default function HowItWorks({ howItWorks }: howItWorksProps) {
//   return (
//     <section className="bg-[#F7F7F7] py-10 px-4">
//       <h2 className="text-start md:text-center text-[#2164F4] text-[18px] md:text-[28px] lg:text-[36px] font-semibold mb-2">
//         How It Works?
//       </h2>

//       <div className="max-w-[1100px] mx-auto space-y-14">
//         {howItWorks.map((item: HowItWorksItem, index: number) => {
//           const Icon = item.icon;

//           return (
//             <div key={index}>
//               {/* DESKTOP / TABLET */}
//               <div className="hidden md:flex items-start justify-between relative">
//                 {/* LEFT SIDE (ARROW + CONTENT) */}
//                 <div className="relative flex-1">
//                   {/* ARROW IMAGE */}
//                   <img
//                     src="/image/arrowicon.png"
//                     alt="timeline arrow"
//                     className="w-full h-[220px] object-contain"
//                   />

//                   {/* ICON */}
                
//                   <div className="absolute top-[60px] left-[20px] lg:top-[30px] lg:left-[30px] w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] bg-white rounded-full 
//                                   flex items-center justify-center shadow">
//                     <Icon className="text-[#2164F4]" size={50} />
//                   </div>
        

//                   {/* TEXT */}
//                   <div className="absolute top-[24px] left-[130px] lg:left-[180px] max-w-[720px]">
//                     <h3 className="text-[32px] font-semibold mb-2">
//                       {item.title}
//                     </h3>

//                     <ul className="text-[#7A7A7A] text-[24px] space-y-1 list-disc pl-5">
//                       {/* {item.points.map((point, i) => (
//                         <li key={i}>{point}</li>
//                       ))} */}
//                       {item.description}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* STEP BADGE (FIXED ALIGNMENT) */}
//                 <div className="-ml-18 mt-[22px]">
//                   <span className="bg-[#2164F4] text-white text-[24px] px-4 py-1 rounded-md whitespace-nowrap">
//                     {item.step}
//                   </span>
//                 </div>
//               </div>

              

//               {/* MOBILE */}
//               <div className="block md:hidden md:flex lg:hidden items-start justify-between relative mb-16">
//                 {/* LEFT SIDE */}
//                 <div className="relative flex-1">
//                   {/* ARROW IMAGE */}
//                   <img
//                     src="/image/arrowicon.png"
//                     alt="timeline arrow"
//                     className="w-full h-[140px] md:h-[180px] object-contain"
//                   />

//                   {/* ICON */}
//                   <div className="
//       absolute 
//       top-[50px] left-[8px] 
//       md:top-[48px] md:left-[18px]
//       w-[30px] h-[30px] md:w-[64px] md:h-[64px]
//       bg-white rounded-full 
//       flex items-center justify-center 
//       shadow border border-[#2164F4]
//     ">
//                     <Icon className="text-[#2164F4]" size={24} />
//                   </div>

//                   {/* TEXT */}
//                   <div className="
//       absolute 
//       top-[36px] left-[46px]
//       md:left-[100px]
//       max-w-[260px] md:max-w-[420px]
//     ">
//                     <h3 className="text-[14px] md:text-[20px] font-semibold mb-1">
//                       {item.title}
//                     </h3>

//                     <ul className="text-[#7A7A7A] text-[12px] md:text-[14px] space-y-1 list-disc pl-4">
//                       {/* {item.points.map((point, i) => (
//                         <li key={i}>{point}</li>
//                       ))} */}
//                       {item.description}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* STEP BADGE */}
//                 <div className="ml-60 -mt-[106px] shrink-0">
//                   <span className="bg-[#2164F4] text-white text-[10px] md:text-[12px] px-3 py-1 rounded-md whitespace-nowrap">
//                     {item.step}
//                   </span>
//                 </div>
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }




"use client";

type HowItWorksItem = {
  _id: string;
  title: string;
  icon?: string; 
  description: string;
};

type HowItWorksProps = {
  howItWorks: HowItWorksItem[];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
 
  return (
    <section className="bg-[#F7F7F7] py-10 px-4">
      <h2 className="text-start md:text-center text-[#2164F4] text-[16px] md:text-[24px] lg:text-[36px] font-semibold mb-2">
        How It Works?
      </h2>

      <div className="max-w-[1100px] mx-auto space-y-14">
        {howItWorks.map((item, index) => {
          const stepLabel = `STEP ${String(index + 1).padStart(2, "0")}`;

          return (
            <div key={item._id}>
              {/* ================= DESKTOP / TABLET ================= */}
              <div className="hidden md:flex items-start justify-between relative">
                {/* LEFT SIDE */}
                <div className="relative flex-1">
                  {/* ARROW IMAGE */}
                  <img
                    src="/image/arrowicon.png"
                    alt="timeline arrow"
                    // className="w-full h-[220px] object-contain"
                    className="w-full h-[180px] md:h-[130px] lg:h-[220px] object-contain"
                  />

                  {/* ICON */}
                  {item.icon && (
                    <div className="absolute top-[12px] left-[35px] lg:top-[30px] lg:left-[30px] w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] bg-white rounded-full flex items-center justify-center shadow">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className="absolute top-[8px] lg:top-[25px] left-[130px] lg:left-[180px] max-w-[720px]">
                    <h3 className="md:text-[24px] lg:text-[32px] font-semibold mb-2">
                      {item.title}
                    </h3>

                    <ul className="text-[#7A7A7A] md:text-[18px] lg:text-[24px] space-y-1 list-disc pl-5">
                      <li>{item.description}</li>
                    </ul>
                  </div>
                </div>

                {/* STEP BADGE */}
                <div className="-ml-18 md:mt-[14px] lg:mt-[34px]">
                  <span className="bg-[#2164F4] text-white md:text-[18px] lg:text-[24px] px-4 py-1 rounded-md whitespace-nowrap">
                    {stepLabel}
                  </span>
                </div>
              </div>

              {/* ================= MOBILE ================= */}
              <div className="block md:hidden items-start justify-between relative mb-16">
                <div className="relative flex-1">
                  {/* ARROW IMAGE */}
                  <img
                    src="/image/arrowicon.png"
                    alt="timeline arrow"
                    className="w-full h-[140px] object-contain"
                  />

                  {/* ICON */}
                  {item.icon && (
                    <div
                      className="
                        absolute 
                        top-[50px] left-[8px]
                        w-[30px] h-[30px]
                        bg-white rounded-full 
                        flex items-center justify-center 
                        shadow border border-[#2164F4]
                      "
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[16px] h-[16px] object-contain"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div
                    className="
                      absolute 
                      top-[36px] left-[46px]
                      max-w-[260px]
                    "
                  >
                    <h3 className="text-[14px] font-semibold mb-1">
                      {item.title}
                    </h3>

                    <ul className="text-[#7A7A7A] text-[12px] space-y-1 list-disc pl-4">
                      <li>{item.description}</li>
                    </ul>
                  </div>
                </div>

                {/* STEP BADGE */}
                <div className="ml-60 -mt-[106px] shrink-0">
                  <span className="bg-[#2164F4] text-white text-[10px] px-3 py-1 rounded-md whitespace-nowrap">
                    {stepLabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
