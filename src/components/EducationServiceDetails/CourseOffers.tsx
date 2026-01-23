// import React from "react";

// type IncludeItem = {
//     id: number;
//     title: string;
//     description: string;
//     path: string
// };

// const includesData: IncludeItem[] = [
//     {
//         id: 1,
//         title: "Customer Satisfaction:",
//         description:
//             "We provide up to 100% return if customer is not satisfied",
//         path: "/image/courseicon1.png"
//     },
//     {
//         id: 2,
//         title: "Transparent Workflow:",
//         description:
//             "Complete process visibility, transparent communication, and real-time tracking.",
//         path: "/image/courseicon2.png"
//     },
//     {
//         id: 3,
//         title: "Best Quality Assurance:",
//         description:
//             "We personally check all the project quality before final delivery",
//         path: "/image/courseicon3.png"
//     },
//     {
//         id: 4,
//         title: "On-Time Delivery Result:",
//         description:
//             "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
//         path: "/image/courseicon4.png"
//     },
//     {
//         id: 5,
//         title: "End-to-End Execution:",
//         description:
//             "From connecting customer to professional expert to completion, we handle everything under one platform.",
//         path: "/image/courseicon5.png"
//     },
//     {
//         id: 6,
//         title: "Trusted Platform:",
//         description:
//             "Fetch True ensures secure connections between clients and genuine professionals.",
//         path: "/image/courseicon6.png"
//     },
//     {
//         id: 7,
//         title: "Reschedule Anytime:",
//         description:
//             "If the customer is not satisfied with the service, we reschedule the providers for better results.",
//         path: "/image/courseicon7.png"
//     },
// ];

// const CourseOffers: React.FC = () => {
//     return (
//         <section className="bg-[#F7F7F7] p-2 md:p-18">
//             <div className="lg:bg-[#EFEFF6] lg:border lg:border-gray-400 rounded-xl p-2 md:p-12">
//                 <div className="max-w-[1200px] mx-auto px-0 md:px-4">
//                     {/* TITLE */}
//                     <div className="flex items-start ml-2 md:ml-12 mb-12">
//                         <h2 className="more-info-title">
//                             This course includes
//                         </h2>
//                     </div>

//                     {/* Cards Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
//                         {includesData.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="relative mx-auto w-full md:max-w-[500px] bg-white border border-gray-300 rounded-md shadow-sm px-4 py-1 md:px-5 md:py-6"
//                             >
//                                 {/* Pin placeholder */}
//                                 <div className="absolute -top-12 left-1/2 -translate-x-1/2">
//                                     <img src="/image/coursepin.png" alt="wooden_pin" className="object-contain w-[39px] h-[28px] md:w-[75px] md:h-[54px]" />
//                                 </div>

//                                 {/* Icon Section */}
//                                 <div className="mb-4 gap-3 flex flex-col md:flex-row md:items-center md:justify-between">
//                                     <img src={item.path} alt="icon" className="object-contain w-[13px] h-[15px] md:w-[50px] md:h-[50px] md:-mt-20" />

                                  
//                                     <div className="flex flex-col gap-2">
//                                         <h3 className="text-[10px] md:text-[32px] font-semibold text-gray-800 whitespace-normal md:whitespace-nowrap break-words">

//                                             {item.title}
//                                         </h3>

//                                         <p className="text-gray-500 text-[10px] md:text-[24px]">
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CourseOffers;






type assuredByFetchTrueProps = {
  assuredByFetchTrue?: {
      _id: string;
      title: string;
      description: string;
      icon: string;
  }[];
};


export default function CourseOffers ({ assuredByFetchTrue }: assuredByFetchTrueProps)  {

  return (
    <section className="bg-[#F7F7F7] p-2 md:p-8 lg:p-32">
      <div className="lg:bg-[#EFEFF6] lg:border lg:border-gray-400 rounded-xl p-2 md:p-2 lg:p-12">
        <div className="max-w-[1200px] mx-auto">
          {/* TITLE */}
          <div className="ml-2 md:ml-2 lg:ml-12 mb-12">
            <h2 className="more-info-title">Assured By Fetch True</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
            {assuredByFetchTrue?.map((item) => (
              <div
                key={item._id}
                className="relative bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 md:px-5 md:py-6"
              >
                {/* Pin */}
                <div className="absolute -top-5 md:-top-8 lg:-top-12 left-1/2 -translate-x-1/2">
                  <img
                    src="/image/coursepin.png"
                    alt="pin"
                    className="w-[39px] h-[28px] md:w-[55px] md:h-[34px] lg:w-[75px] lg:h-[54px]"
                  />
                </div>

                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:flex items-center gap-6">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] -mt-20"
                  />

                  <div>
                    <h3 className="md:text-[18px] lg:text-[32px] font-semibold text-gray-800 whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 md:text-[18px] lg:text-[24px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* ================= MOBILE LAYOUT ================= */}
                <div className="block md:hidden">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-[15px] h-[16px]"
                    />
                    <h3 className="text-[12px] font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-[12px] leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


