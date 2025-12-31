// "use client";

// const PACKAGES = [
//   {
//     title: "Basic Kitchen Cleaning",
//     price: "₹1,199",
//     time: "1.5–2 hrs",
//     items: [
//       "Basic deep cleaning of all surfaces",
//       "Stove & countertop cleaning",
//       "Exterior cleaning of appliances",
//       "Floor scrubbing",
//     ],
//   },
//   {
//     title: "Full Cleaning",
//     price: "₹1,799",
//     time: "2–3 hrs",
//     items: [
//       "Full chimney deep clean",
//       "Tiles, walls, floors scrubbing",
//       "Appliance exterior & reachable areas",
//       "Grease removal from shelves & corners",
//     ],
//   },
//   {
//     title: "Full Deep Cleaning",
//     price: "₹2,499",
//     time: "3–4 hrs",
//     items: [
//       "Everything in Full Deep Cleaning",
//       "Inside microwave + fridge cleaning",
//       "High-level chimney oil removal",
//       "Under-sink disinfecting",
//     ],
//   },
// ];

// export default function SelectPackage() {
//   return (
//     <section className="bg-[#f6f6f6] py-10 px-4">
//       <h2 className="text-[#e56b2f] text-[12px] lg:ml-22 lg:text-[36px] font-semibold mb-4">
//         Select Package
//       </h2>

//       {/* OUTER CONTAINER */}
//       <div className="bg-white lg:w-[1320px] mx-auto rounded-2xl shadow-lg p-6 md:p-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {PACKAGES.map((pkg, index) => (
//             <div
//               key={index}
//               className="border border-gray-100 rounded-xl overflow-hidden flex flex-col"
//             >
//               {/* CARD CONTENT */}
//               <div className="p-6 flex-1">
//                 <h3 className="text-[12px] lg:text-[24px] font-semibold mb-3">
//                   {pkg.title}
//                 </h3>

//                 <div className="h-px bg-gray-200 mb-4" />

//                 <p className="text-[12px] lg:text-[16px] font-medium mb-2">Includes</p>

//                 <ul className="space-y-2 text-gray-600 text-sm">
//                   {pkg.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-2">
//                       <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
//                       <span className="text-[10px] lg:text-[16px]">{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* PRICE */}
//                 <div className="mt-6">
//                   <p className="text-[#e56b2f] text-[24px] lg:text-[36px] font-semibold">
//                     {pkg.price}
//                   </p>
//                   <p className="text-[12px] lg:text-[20px] font-medium  mt-1">
//                     {pkg.time}<span className="text-gray-500"> Time</span>
//                   </p>
//                 </div>
//               </div>

//               {/* BUTTON */}
//               {/* <button className="bg-[#d86b38] text-white text-lg py-4 rounded-t-[30px] hover:bg-[#c85f2f] transition">
//                 Select Package
//               </button> */}
//               <button
//                 className="w-full bg-[#d86b38] text-white text-[18px] font-medium py-5 rounded-t-[-94px] rounded-b-[40px] hover:bg-[#c85f2f] transition">
//                 Select Package
//                 </button>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

type Package = {
  title: string;
  price: string;
  time: string;
  items: string[];
};


const PACKAGES: Package [] = [
  {
    title: "Basic Kitchen Cleaning",
    price: "₹1,199",
    time: "1.5–2 hrs",
    items: [
      "Basic deep cleaning of all surfaces",
      "Stove & countertop cleaning",
      "Exterior cleaning of appliances",
      "Floor scrubbing",
    ],
  },
  {
    title: "Full Cleaning",
    price: "₹1,799",
    time: "2–3 hrs",
    items: [
      "Full chimney deep clean",
      "Tiles, walls, floors scrubbing",
      "Appliance exterior & reachable areas",
      "Grease removal from shelves & corners",
    ],
  },
  {
    title: "Full Deep Cleaning",
    price: "₹2,499",
    time: "3–4 hrs",
    items: [
      "Everything in Full Deep Cleaning",
      "Inside microwave + fridge cleaning",
      "High-level chimney oil removal",
      "Under-sink disinfecting",
    ],
  },
];

export default function SelectPackage() {
  return (
    <section className="bg-[#f6f6f6] py-10 px-4">
      <h2 className="text-[#e56b2f] text-[16px] md:text-[20px] lg:text-[36px] font-semibold mb-6 ml-4 lg:ml-22">
        Select Package
      </h2>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="hidden md:block bg-white lg:w-[1320px] mx-auto rounded-2xl shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg: Package, index: number) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>

      {/* ================= MOBILE SWIPE ================= */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
          {PACKAGES.map((pkg: Package, index: number) => (
            <div
              key={index}
              className="min-w-[85%] snap-center"
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */
type Props = {
   pkg: Package
}

function PackageCard({ pkg }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-md h-full">
      {/* CONTENT */}
      <div className="p-6 flex-1">
        <h3 className="text-[12px] lg:text-[24px] font-semibold mb-3">
          {pkg.title}
        </h3>

        <div className="h-px bg-gray-200 mb-4" />

        <p className="text-[10px] lg:text-[16px] font-medium mb-2">
          Includes
        </p>

        <ul className="space-y-2 text-gray-600">
          {pkg.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
              <span className="text-[10px] lg:text-[16px]">{item}</span>
            </li>
          ))}
        </ul>

        {/* PRICE */}
        <div className="mt-6">
          <p className="text-[#e56b2f] text-[14px] lg:text-[36px] font-semibold">
            {pkg.price}
          </p>
          <p className="text-[10px] lg:text-[20px] font-medium mt-1">
            {pkg.time} <span className="text-gray-500">Time</span>
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <button className="w-full bg-[#d86b38] text-white text-[12px] lg:text-[18px] font-medium py-5 rounded-b-[40px] hover:bg-[#c85f2f] transition">
        Select Package
      </button>
    </div>
  );
}
