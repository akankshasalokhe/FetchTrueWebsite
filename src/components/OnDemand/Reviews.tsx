// "use client";

// /* ================= MOCK DATA ================= */

// const OVERALL_RATING = {
//   rating: 4.8,
//   totalRatings: 2573,
// };

// const RATING_BREAKDOWN = [
//   { label: "Excellent", count: 1115, color: "bg-green-500" },
//   { label: "Very Good", count: 701, color: "bg-green-400" },
//   { label: "Good", count: 385, color: "bg-orange-400" },
//   { label: "Average", count: 125, color: "bg-orange-600" },
//   { label: "Poor", count: 247, color: "bg-red-500" },
// ];

// const FEATURE_RATINGS = [
//   { label: "Monthly Business", value: 4 },
//   { label: "ROI", value: 5 },
//   { label: "Marketing", value: 4 },
//   { label: "Franchise Service", value: 4 },
// ];

// /* ================= COMPONENT ================= */


// export default function RatingsReviews () {
//   const maxCount = Math.max(...RATING_BREAKDOWN.map((r) => r.count));

//   return (
//     // <section className="bg-gray-100 py-10">
//     <section className="bg-gray-100 py-10 px-3 md:px-0">

//           {/* TITLE */}
            // <div className="flex items-start md:justify-start lg:items-start mb-4">
            //     <h2
            //         className="text-[#D56839] lg:ml-14 -ml-6 px-6 md:px-12 py-2 text-[16px] md:text-[32px] font-semibold"
            //     >
            //          Ratings & Reviews
            //     </h2>
            // </div>


//       <div className="lg:w-[1321px] mx-auto rounded-xl p-2 md:p-10 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* ================= LEFT ================= */}
//           <div>
//             <p className="text-gray-500 text-xs md:text-[20px] mb-6">
//               Complete overview of franchise requirements and benefits.
//             </p>

//             <div className="flex gap-10">
//               {/* OVERALL SCORE */}
//               <div className="text-center">
//                 <div className="flex items-center justify-center  md:gap-2">
//                    <span className="text-yellow-400 text-2xl">★</span>
//                   <span className="text-[24px] text-[#D56839] md:text-4xl font-semibold">
//                     {OVERALL_RATING.rating}
//                   </span>
//                 </div>
//                 <div className="md:-ml-6">
//                 <p className="mt-2 font-semibold text-[#D56839] text-[12px] md:text-[20px]">
//                   {OVERALL_RATING.totalRatings}
//                 </p>
//                 <p className="text-gray-500 text-[12px]">Ratings</p>
//                 </div>
//               </div>

//               {/* BREAKDOWN */}
//               <div className="flex-1 space-y-3">
//                 {RATING_BREAKDOWN.map((item) => (
//                   <div
//                     key={item.label}
//                     className="grid grid-cols-[90px_1fr_40px] items-center gap-4 text-sm"
//                   >
//                     <span className="text-gray-600 text-[12px] md:text-[20px] whitespace-nowrap">{item.label}</span>

//                     <div className="h-2 bg-gray-200 -ml-5 md:-ml-0 rounded-full overflow-hidden">
//                       <div
//                         className={`h-full ${item.color}`}
//                         style={{
//                           width: `${(item.count / maxCount) * 100}%`,
//                         }}
//                       />
//                     </div>

//                     <span className="text-gray-500 ml-4 text-xs md:text-[16px]">
//                       {item.count}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT ================= */}
//           <div>
//             <h3 className="font-semibold md:text-[24px] text-[#D56839] mb-6">Ratings by features</h3>

//             <div className="flex gap-4 md:gap-8">
//               {FEATURE_RATINGS.map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex flex-col items-center"
//                 >
//                   {/* CIRCLE */}
//                   <div className="relative w-12 h-12 md:w-25 md:h-25 rounded-full border-4 border-gray-300 flex items-center justify-center">
//                     <div
//                       className="absolute inset-0 rounded-full border-4 border-[#D56839]"
//                       style={{
//                         clipPath: `inset(0 ${
//                           100 - (item.value / 5) * 100
//                         }% 0 0)`,
//                       }}
//                     />
//                     <span className="text-sm font-semibold z-10">
//                       {item.value}/5
//                     </span>
//                   </div>

//                   <p className="text-xs md:text-[14px] text-center mt-3">
//                     {item.label} 
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




"use client";


/* ================= MOCK DATA ================= */

const OVERALL_RATING = {
  rating: 4.8,
  totalRatings: 2573,
};

const RATING_BREAKDOWN = [
  { label: "Excellent", count: 1115, color: "bg-green-500" },
  { label: "Very Good", count: 701, color: "bg-green-400" },
  { label: "Good", count: 385, color: "bg-orange-400" },
  { label: "Average", count: 125, color: "bg-orange-600" },
  { label: "Poor", count: 247, color: "bg-red-500" },
];

const FEATURE_RATINGS = [
  { label: "Monthly Business", value: 4 },
  { label: "ROI", value: 5 },
  { label: "Marketing", value: 4 },
  { label: "Franchise Service", value: 4 },
];

/* ================= COMPONENT ================= */

const RatingsReviews = () => {
  const maxCount = Math.max(...RATING_BREAKDOWN.map((r) => r.count));

  return (
    // <section className="bg-gray-100 py-10">
    <section className="bg-gray-100 py-10 px-3 md:px-0">

                {/* HEADER */}
                   <div className="flex items-start md:justify-start lg:items-start mb-4">
                <h2
                    className="text-[#D56839] lg:ml-14 -ml-6 px-6 md:px-12 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold"
                >
                     Ratings & Reviews
                </h2>
            </div>

      <div className="md:w-[700px] lg:w-[1321px] mx-auto bg-white rounded-2xl p-2 md:p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ================= LEFT ================= */}
          <div>
            <p className="text-gray-500 text-sm md:text-[15px] lg:text-[20px] mb-6">
              Complete overview of franchise requirements and benefits.
            </p>

            <div className="flex gap-10">
              {/* OVERALL SCORE */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[24px] md:text-[24px] text-[#D56839] lg:text-[40px] font-semibold">
                    {OVERALL_RATING.rating}
                  </span>
                   <span className="text-yellow-400 text-2xl">★</span>
                </div>
                <div className="md:-ml-6">
                <p className="mt-2 font-semibold text-[12px] text-[#D56839] md:text-[15px] lg:text-[20px]">
                  {OVERALL_RATING.totalRatings}
                </p>
                <p className="text-gray-500 md:text-[10px] lg:text-[12px]">Ratings</p>
                </div>
              </div>

              {/* BREAKDOWN */}
              <div className="flex-1 space-y-6">
                {RATING_BREAKDOWN.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[90px_1fr_40px] items-center md:gap-2 lg:gap-4 text-sm"
                  >
                    <span className="text-gray-600 text-[12px] md:text-[15px] lg:text-[20px] whitespace-nowrap">{item.label}</span>

                    <div className="h-2 bg-gray-200 -ml-5 md:-ml-4 lg:-ml-0 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{
                          width: `${(item.count / maxCount) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="text-gray-500 ml-4 text-xs md:text-[10px] lg:text-[16px]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <h3 className="font-semibold md:text-[15px] lg:text-[24px] mb-6">Ratings by features</h3>

            <div className="flex gap-4 md:gap-6 lg:gap-10">
              {FEATURE_RATINGS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                >
                  {/* CIRCLE */}
                  <div className="relative  w-12 h-12 md:w-15 md:h-15 lg:w-[106px] lg:h-[106px] rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-[#D56839]"
                      style={{
                        clipPath: `inset(0 ${
                          100 - (item.value / 5) * 100
                        }% 0 0)`,
                      }}
                    />
                    <span className="text-sm font-semibold z-10">
                      {item.value}/5
                    </span>
                  </div>

                  <p className="text-xs text-center mt-3">
                    {item.label} 
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsReviews;
