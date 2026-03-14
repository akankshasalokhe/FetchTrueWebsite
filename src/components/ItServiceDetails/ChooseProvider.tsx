// "use client";

// import React, { useState } from "react";
// import {Provider}  from "@/src/context/ServicewiseProviderContext";

// interface ChooseProviderProps {
//     providers: Provider[];
// }
// /* ================= TYPES ================= */
// type Provider = {
//     id: number;
//     name: string;
//     rating: number;
//     reviews: number;
//     price: number;
//     originalPrice: number;
//     discount: string;
//     cashback: string;
//     logo: string;
//     verified?: boolean;
// };

// /* ================= DATA ================= */
// const PROVIDERS: Provider[] = [
//     {
//         id: 1,
//         name: "FTFL Technology",
//         rating: 4.8,
//         reviews: 127,
//         price: 7040,
//         originalPrice: 8000,
//         discount: "12% Off",
//         cashback: "₹15%",
//         logo: "/image/providericon.png",
//         verified: true,
//     },
//     {
//         id: 2,
//         name: "Brandify Studio",
//         rating: 4.6,
//         reviews: 98,
//         price: 6500,
//         originalPrice: 7500,
//         discount: "13% Off",
//         cashback: "₹10%",
//         logo: "/image/providericon.png",
//         verified: true,
//     },
//     {
//         id: 3,
//         name: "Design Hub",
//         rating: 4.7,
//         reviews: 156,
//         price: 7200,
//         originalPrice: 8200,
//         discount: "10% Off",
//         cashback: "₹20%",
//         logo: "/image/providericon.png",
//         verified: true,
//     },
// ];

// /* ================= COMPONENT ================= */
// const ChooseProvider: React.FC<ChooseProviderProps> = ({ providers }) => {
//     const [showAll, setShowAll] = useState(false);
//     const [selectedId, setSelectedId] = useState<number | null>(null);

//     const visibleProviders = showAll ? providers : providers

//     return (
//         <section className="bg-gray-100 mb-12">
//             <div className="py-10 px-4 md:px-6 w-full max-w-[1320px] mx-auto">
//                 {/* TITLE */}
// <div className="flex items-start md:justify-center mb-4">
//     <h2
//         className="bg-black text-white px-6 md:px-10 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold"
//         style={{
//             clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
//         }}
//     >
//         Choose Provider
//     </h2>
// </div>

//                 <div className="bg-white rounded-xl p-6">
//                     <p className="text-start md:text-center text-gray-500 text-sm md:text-lg mb-6">
//                         Pick the right expert for your service
//                     </p>

//                     {/* PROVIDER LIST */}
//                     <div className="space-y-4">
//                         {visibleProviders.map((provider) => (
//                             <div
//                                 key={provider.id}
//                                 className="bg-gray-100 rounded-lg border p-4 md:p-6"
//                             >
//                                 {/* Mobile Layout (flex row with checkbox on right) */}
//                                 <div className="flex items-start gap-3 md:hidden">
//                                     {/* Logo and Promoted */}
//                                     <div className="flex flex-col items-center gap-1">
//                                         <img
//                                             src={provider.logo}
//                                             alt={provider.name}
//                                             className="w-[44px] h-[44px] rounded-full object-cover"
//                                         />
//                                         <p className="bg-green-500 text-white px-1.5 py-0.5 rounded-full text-[8px] whitespace-nowrap">
//                                             Promoted
//                                         </p>
//                                     </div>

//                                     {/* Name and Rating */}
//                                     <div className="flex-1">
//                                         <div className="flex items-center flex-wrap gap-1">
//                                             <h3 className="font-semibold text-[14px]">
//                                                 {provider.name}
//                                             </h3>
//                                             {provider.verified && (
//                                                 <img 
//                                                     src="/image/providerverified.png" 
//                                                     alt="verified" 
//                                                     className="w-4 h-4" 
//                                                 />
//                                             )}
//                                             <span className="text-[10px] text-gray-600">
//                                                 Available
//                                             </span>
//                                         </div>
//                                         <p className="text-[10px] text-gray-500 mt-0.5">
//                                             {provider.rating} ★ ({provider.reviews} reviews)
//                                         </p>
//                                     </div>

//                                     {/* Checkbox on right */}
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedId === provider.id}
//                                         onChange={() =>
//                                             setSelectedId(
//                                                 selectedId === provider.id ? null : provider.id
//                                             )
//                                         }
//                                         className="w-5 h-5 accent-green-600 cursor-pointer mt-1 flex-shrink-0"
//                                     />
//                                 </div>

//                                 {/* Desktop Layout (3-column layout) */}
//                                 <div className="hidden md:flex md:items-start md:justify-between gap-4">
//                                     {/* Left: Logo + Promoted */}
//                                     <div className="flex flex-col items-start gap-2">
//                                         <img
//                                             src={provider.logo}
//                                             alt={provider.name}
//                                             className="w-[55px] h-[55px] lg:w-[67px] lg:h-[67px] rounded-full object-cover"
//                                         />
//                                         <p className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[10px] lg:text-[12px] whitespace-nowrap">
//                                             Promoted
//                                         </p>
//                                     </div>

//                                     {/* Middle: Name, Verified, Available, Rating */}
//                                     <div className="flex-1">
//                                         <div className="flex items-center flex-wrap gap-2">
//                                             <h3 className="font-semibold text-[20px] lg:text-[24px]">
//                                                 {provider.name}
//                                             </h3>
//                                             {provider.verified && (
//                                                 <img 
//                                                     src="/image/providerverified.png" 
//                                                     alt="verified" 
//                                                     className="w-5 h-5 lg:w-6 lg:h-6" 
//                                                 />
//                                             )}
//                                             <span className="text-[12px] lg:text-[14px] text-gray-600">
//                                                 Available
//                                             </span>
//                                         </div>
//                                         <p className="text-[14px] text-gray-500 mt-1">
//                                             {provider.rating} ★ ({provider.reviews} reviews)
//                                         </p>
//                                     </div>

//                                     {/* Right: Checkbox */}
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedId === provider.id}
//                                         onChange={() =>
//                                             setSelectedId(
//                                                 selectedId === provider.id ? null : provider.id
//                                             )
//                                         }
//                                         className="w-5 h-5 accent-green-600 cursor-pointer mt-1"
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* SHOW MORE / LESS BUTTON */}
//                     <div className="flex justify-center mt-6">
//                         <button
//                             onClick={() => setShowAll(!showAll)}
//                             className="bg-black text-white text-sm md:text-base lg:text-lg px-6 py-2 rounded hover:bg-gray-800 transition-colors"
//                         >
//                             {showAll ? "Show Less" : "See all Providers"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ChooseProvider;




// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function ChooseProvider({
//   title,
//   buttonColor = "bg-[#5B3527]",
//   providers = [],
// }: any) {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(
//     providers?.length ? 0 : null
//   );

//   // Show first 3 initially, then all when showAll is true
//   const visibleProviders = showAll 
//     ? providers 
//     : providers.slice(0, 3);

//   // Update selected index when providers change
//   useEffect(() => {
//     if (providers?.length > 0 && selectedIndex === null) {
//       setSelectedIndex(0); // Select first by default
//     } else if (providers?.length === 0) {
//       setSelectedIndex(null);
//     }
//   }, [providers, selectedIndex]);

//   // If no providers, don't render or show a message
//   if (!providers || providers.length === 0) {
//     return (
//       <section className="w-full py-16">
//         <div className="max-w-[1200px] mx-auto px-4 text-center">
//           <p className="text-gray-500">No providers available</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="w-full py-16">
//       <div className="max-w-[1200px] mx-auto px-4">

//         <h2 className="text-center text-[26px] md:text-[28px] font-semibold text-[#5A3A1B] mb-3">
//           {title}
//         </h2>

//         <p className="text-center text-[14px] md:text-[16px] text-[#777] mb-10">
//           Pick the right expert for your service
//         </p>

//         <div className="space-y-6">
//           {visibleProviders.map((provider: any, index: number) => (
//             <div
//               key={index}
//               className="bg-white border border-[#E2E2E2] rounded-[10px] p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="relative shrink-0">
//                   <Image
//                     src={provider.logo}
//                     alt={provider.name}
//                     width={56}
//                     height={56}
//                     className="rounded-full mb-3"
//                   />
//                   {provider.promoted && (
//                     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] bg-green-500 text-white px-2 py-[1px] rounded">
//                       Promoted
//                     </span>
//                   )}
//                 </div>

//                 <div>
//                   <div className="flex items-center gap-2 flex-wrap">
//                     <h3 className="text-[16px] md:text-[18px] font-semibold">
//                       {provider.name}
//                     </h3>

//                     {provider.available && (
//                       <span className="text-[11px] bg-[#F1F1F1] px-2 py-[2px] rounded">
//                         Available
//                       </span>
//                     )}
//                   </div>

//                   <p className="text-[13px] md:text-[14px] text-[#777] mt-1">
//                     ⭐ {provider.rating} ({provider.reviews} reviews)
//                   </p>
//                 </div>
//               </div>

//               {/* ✅ Selection */}
//               <div
//                 onClick={() =>
//                   setSelectedIndex(selectedIndex === index ? null : index)
//                 }
//                 className={`cursor-pointer rounded w-6 h-6 flex items-center justify-center shrink-0 border
//                   ${
//                     selectedIndex === index
//                       ? "bg-green-500 border-green-500 text-white"
//                       : "border-gray-400 text-transparent"
//                   }
//                 `}
//               >
//                 ✓
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show "See all Providers" button only if there are more than 3 providers */}
//         {providers.length > 3 && (
//           <div className="text-center mt-10">
//             <button
//               onClick={() => setShowAll((prev) => !prev)}
//               className={`${buttonColor} text-white px-6 py-3 rounded-[8px] text-[15px] md:text-[16px] font-medium w-full sm:w-auto`}
//             >
//               {showAll ? "Show Less" : "See all Providers"}
//             </button>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ChooseProvider({
    title,
    buttonColor = "bg-[#5B3527]",
    providers = [],
    onSelect, // ← new prop
}: any) {
    const [showAll, setShowAll] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const visibleProviders = showAll ? providers : providers.slice(0, 3);

    useEffect(() => {
        if (providers?.length > 0 && selectedIndex === null) {
            setSelectedIndex(0);
            // ✅ Fire onSelect with first provider on mount
            onSelect?.(providers[0]);
        } else if (providers?.length === 0) {
            setSelectedIndex(null);
        }
    }, [providers]);
    // useEffect(() => {
    //     if (providers?.length > 0) {
    //         setSelectedIndex(0);
    //         onSelect?.(providers[0]); // ← always fires when providers arrive
    //     } else {
    //         setSelectedIndex(null);
    //         onSelect?.(null);
    //     }
    // }, [providers]); // ← runs whenever providers array changes

    if (!providers || providers.length === 0) {
        return (
            <section className="w-full py-16">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <p className="text-gray-500">No providers available</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-start md:justify-center mb-4">
                    <h2
                        className="bg-black text-white px-6 md:px-10 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold"
                        style={{
                            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                        }}
                    >
                        Choose Provider
                    </h2>
                </div>

                <p className="text-center text-[14px] md:text-[16px] text-[#777] mb-10">
                    Pick the right expert for your service
                </p>

                <div className="space-y-6">
                    {visibleProviders.map((provider: any, index: number) => (
                        <div
                            key={index}
                            className="bg-white border border-[#E2E2E2] rounded-[10px] p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative shrink-0">
                                    <Image
                                        src={provider?.logo || "/image/placeholder.png"}
                                        alt="provider logo"
                                        width={56}
                                        height={56}
                                        className="rounded-full mb-3"
                                    />
                                    {provider.isPromoted && (
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] bg-green-500 text-white px-2 py-[1px] rounded">
                                            Promoted
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-[16px] md:text-[18px] font-semibold">
                                            {provider.name}
                                        </h3>
                                        {provider.available && (
                                            <span className="text-[11px] bg-[#F1F1F1] px-2 py-[2px] rounded">
                                                Available
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[13px] md:text-[14px] text-[#777] mt-1">
                                        ⭐ {provider.rating} ({provider.reviews} reviews)
                                    </p>
                                </div>
                            </div>

                            {/* ✅ Selection — now fires onSelect */}
                            <div
                                onClick={() => {
                                    const newIndex = selectedIndex === index ? null : index;
                                    setSelectedIndex(newIndex);
                                    onSelect?.(newIndex !== null ? provider : null);
                                }}
                                className={`cursor-pointer rounded w-6 h-6 flex items-center justify-center shrink-0 border
                  ${selectedIndex === index
                                        ? "bg-green-500 border-green-500 text-white"
                                        : "border-gray-400 text-transparent"
                                    }`}
                            >
                                ✓
                            </div>
                        </div>
                    ))}
                </div>

                {providers.length > 3 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className={`${buttonColor} text-white px-6 py-3 rounded-[8px] text-[15px] md:text-[16px] font-medium w-full sm:w-auto`}
                        >
                            {showAll ? "Show Less" : "See all Providers"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}