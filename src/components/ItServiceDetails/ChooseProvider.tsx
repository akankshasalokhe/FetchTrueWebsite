// "use client";

// import React, { useState } from "react";

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
// const ChooseProvider: React.FC = () => {
//     const [showAll, setShowAll] = useState(false);
//     const [selectedId, setSelectedId] = useState<number | null>(null);

//     const visibleProviders = showAll ? PROVIDERS : PROVIDERS.slice(0, 1);

//     return (
//         <section className=" bg-gray-100 mb-12">
//             <div className="py-10 px-2 md:px-4  w-[320px] md:w-[770px] lg:w-[1320px] mx-auto">
//                 {/* TITLE */}
//                 <div className="flex items-start md:justify-center mb-4">
//                     <h2
//                         className="bg-black text-white px-6 md:px-10 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold"
//                         style={{
//                             clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
//                         }}
//                     >
//                         Choose Provider
//                     </h2>
//                 </div>
//                 <div className="bg-white/100  rounded-xl">
//                     <p className="text-start md:text-center text-gray-500  px-2 py-4 text-sm md:text-lg">
//                         Pick the right expert for your service
//                     </p>

//                     {/* PROVIDER LIST */}
//                     <div className="md:w-[700px] lg:w-[1190px] w-[300px] mx-auto">
//                         <div
//                             className={`
//                         space-y-4 transition-all duration-300 -mt-2
//                         overflow-y-auto max-h-[320px] pr-1
//                         md:overflow-visible md:max-h-none md:pr-0
//                     `} >


//                             {visibleProviders.map((provider) => (
//                                 <div
//                                     key={provider.id}
//                                     className="bg-gray-100 rounded-lg border p-2 md:p-2 lg:p-6 flex flex-col md:flex-row md:items-center md:justify-around  gap-3"
//                                 >
//                                     {/* ===== TOP ROW (MOBILE) + LEFT (DESKTOP) ===== */}
//                                     <div className="flex items-center  md:gap-4">
//                                         <div className="flex items-center gap-2 md:gap-8">
//                                             <div className="flex flex-col gap-2 lg:-ml-10">
//                                                 <img
//                                                     src={provider.logo}
//                                                     alt={provider.name}
//                                                     className="w-[44px] h-[44px] md:w-[55px] md:h-[55px] lg:w-[67px] lg:h-[67px] rounded-full object-cover"
//                                                 />

//                                                 <p className="bg-green-500 rounded-2xl md:px-2 px-2 text-white text-[6px] md:text-[8px] lg:text-[12px]">Promoted</p>
//                                             </div>

//                                             <div>
//                                                 <div className="flex items-center justify-center -mt-4 md:-mt-2 lg:-mt-8 gap-1 md:gap-4">
//                                                     <h3 className="font-semibold text-[14px] md:text-[24px] lg:text-[32px] whitespace-nowrap">
//                                                         {provider.name}
//                                                     </h3>
//                                                     {provider.verified && (
//                                                         <img src="/image/providerverified.png" alt="verified" className="object-cover w-[19px] h-[19px] md:w-[28px] md:h-[28px] lg:w-[41px] lg:h-[41px] " />
//                                                     )}
//                                                     <span className=" md:text-[10px] lg:text-[14px] text-[8px]">Available</span>
//                                                 </div>

//                                                 <p className="text-[10px] md:text-[12px] lg:text-[16px] text-gray-500">
//                                                     {provider.rating} ★ ({provider.reviews} reviews)
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* CHECKBOX */}
//                                         <input
//                                             type="checkbox"
//                                             checked={selectedId === provider.id}
//                                             onChange={() =>
//                                                 setSelectedId(
//                                                     selectedId === provider.id ? null : provider.id
//                                                 )
//                                             }
//                                             className="w-4 h-4 accent-green-600 -mt-8 cursor-pointer block md:hidden"
//                                         />
//                                     </div>

                        
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedId === provider.id}
//                                         onChange={() =>
//                                             setSelectedId(
//                                                 selectedId === provider.id ? null : provider.id
//                                             )
//                                         }
//                                         className="w-4 h-4 hidden md:-mt-10 lg:-mt-14 md:block accent-green-600 cursor-pointer"
//                                     />
//                                 </div>

//                             ))}
//                         </div>

//                         {/* SHOW MORE / LESS BUTTON */}
//                         <div className="flex justify-center mt-2 py-0 md:py-4">
//                             <button
//                                 onClick={() => setShowAll(!showAll)}
//                                 className="bg-black text-white text-[12px] md:text-[15px] lg:text-[20px] mb-2 px-4 py-1 rounded"
//                             >
//                                 {showAll ? "Show Less" : "See all Providers"}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ChooseProvider;




"use client";

import React, { useState } from "react";

/* ================= TYPES ================= */
type Provider = {
    id: number;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice: number;
    discount: string;
    cashback: string;
    logo: string;
    verified?: boolean;
};

/* ================= DATA ================= */
const PROVIDERS: Provider[] = [
    {
        id: 1,
        name: "FTFL Technology",
        rating: 4.8,
        reviews: 127,
        price: 7040,
        originalPrice: 8000,
        discount: "12% Off",
        cashback: "₹15%",
        logo: "/image/providericon.png",
        verified: true,
    },
    {
        id: 2,
        name: "Brandify Studio",
        rating: 4.6,
        reviews: 98,
        price: 6500,
        originalPrice: 7500,
        discount: "13% Off",
        cashback: "₹10%",
        logo: "/image/providericon.png",
        verified: true,
    },
    {
        id: 3,
        name: "Design Hub",
        rating: 4.7,
        reviews: 156,
        price: 7200,
        originalPrice: 8200,
        discount: "10% Off",
        cashback: "₹20%",
        logo: "/image/providericon.png",
        verified: true,
    },
];

/* ================= COMPONENT ================= */
const ChooseProvider: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const visibleProviders = showAll ? PROVIDERS : PROVIDERS.slice(0, 1);

    return (
        <section className="bg-gray-100 mb-12">
            <div className="py-10 px-4 md:px-6 w-full max-w-[1320px] mx-auto">
                {/* TITLE */}
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
                
                <div className="bg-white rounded-xl p-6">
                    <p className="text-start md:text-center text-gray-500 text-sm md:text-lg mb-6">
                        Pick the right expert for your service
                    </p>

                    {/* PROVIDER LIST */}
                    <div className="space-y-4">
                        {visibleProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-gray-100 rounded-lg border p-4 md:p-6"
                            >
                                {/* Mobile Layout (flex row with checkbox on right) */}
                                <div className="flex items-start gap-3 md:hidden">
                                    {/* Logo and Promoted */}
                                    <div className="flex flex-col items-center gap-1">
                                        <img
                                            src={provider.logo}
                                            alt={provider.name}
                                            className="w-[44px] h-[44px] rounded-full object-cover"
                                        />
                                        <p className="bg-green-500 text-white px-1.5 py-0.5 rounded-full text-[8px] whitespace-nowrap">
                                            Promoted
                                        </p>
                                    </div>

                                    {/* Name and Rating */}
                                    <div className="flex-1">
                                        <div className="flex items-center flex-wrap gap-1">
                                            <h3 className="font-semibold text-[14px]">
                                                {provider.name}
                                            </h3>
                                            {provider.verified && (
                                                <img 
                                                    src="/image/providerverified.png" 
                                                    alt="verified" 
                                                    className="w-4 h-4" 
                                                />
                                            )}
                                            <span className="text-[10px] text-gray-600">
                                                Available
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-0.5">
                                            {provider.rating} ★ ({provider.reviews} reviews)
                                        </p>
                                    </div>

                                    {/* Checkbox on right */}
                                    <input
                                        type="checkbox"
                                        checked={selectedId === provider.id}
                                        onChange={() =>
                                            setSelectedId(
                                                selectedId === provider.id ? null : provider.id
                                            )
                                        }
                                        className="w-5 h-5 accent-green-600 cursor-pointer mt-1 flex-shrink-0"
                                    />
                                </div>

                                {/* Desktop Layout (3-column layout) */}
                                <div className="hidden md:flex md:items-start md:justify-between gap-4">
                                    {/* Left: Logo + Promoted */}
                                    <div className="flex flex-col items-start gap-2">
                                        <img
                                            src={provider.logo}
                                            alt={provider.name}
                                            className="w-[55px] h-[55px] lg:w-[67px] lg:h-[67px] rounded-full object-cover"
                                        />
                                        <p className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[10px] lg:text-[12px] whitespace-nowrap">
                                            Promoted
                                        </p>
                                    </div>

                                    {/* Middle: Name, Verified, Available, Rating */}
                                    <div className="flex-1">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <h3 className="font-semibold text-[20px] lg:text-[24px]">
                                                {provider.name}
                                            </h3>
                                            {provider.verified && (
                                                <img 
                                                    src="/image/providerverified.png" 
                                                    alt="verified" 
                                                    className="w-5 h-5 lg:w-6 lg:h-6" 
                                                />
                                            )}
                                            <span className="text-[12px] lg:text-[14px] text-gray-600">
                                                Available
                                            </span>
                                        </div>
                                        <p className="text-[14px] text-gray-500 mt-1">
                                            {provider.rating} ★ ({provider.reviews} reviews)
                                        </p>
                                    </div>

                                    {/* Right: Checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={selectedId === provider.id}
                                        onChange={() =>
                                            setSelectedId(
                                                selectedId === provider.id ? null : provider.id
                                            )
                                        }
                                        className="w-5 h-5 accent-green-600 cursor-pointer mt-1"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SHOW MORE / LESS BUTTON */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-black text-white text-sm md:text-base lg:text-lg px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                        >
                            {showAll ? "Show Less" : "See all Providers"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseProvider;