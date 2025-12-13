// 'use client'

// import { useRef, useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FiArrowUpRight } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";
// import Image from "next/image";
// import { Bookmark } from "lucide-react";
// import { image, label } from "framer-motion/client";

// export default function RealStatePage() {
//     const properties = [
//         {
//             id: 1,
//             bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
//             image: "/mockup/building.png",
//             title: "Residential Property",
//             type: "Real Estate",
//             rating: 4,
//             location: "Near Andheri West, Mumbai",
//             earning: "5%",
//             discount: "30%",
//             monthlyEarning: "10-20 Lac",
//             outlets: 10,
//             area: "1500 Sq - 1000 Sq",
//             price: "45L",
//             priceValue: 4500000
//         },
//         {
//             id: 2,
//             bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
//             image: "/mockup/building.png",
//             title: "Luxury Apartment",
//             type: "Real Estate",
//             rating: 5,
//             location: "Banjara Hills, Hyderabad",
//             earning: "7%",
//             discount: "25%",
//             monthlyEarning: "12-22 Lac",
//             outlets: 14,
//             area: "1800 Sq - 1200 Sq",
//             price: "72L",
//             priceValue: 7200000
//         },
//         {
//             id: 3,
//             bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
//             image: "/mockup/building.png",
//             title: "Commercial Space",
//             type: "Business Property",
//             rating: 4,
//             location: "Koramangala, Bangalore",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-15 Lac",
//             outlets: 7,
//             area: "1300 Sq - 900 Sq",
//             price: "89L",
//             priceValue: 8900000
//         },
//         {
//             id: 4,
//             bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
//             image: "/mockup/building.png",
//             title: "Studio Apartment",
//             type: "Real Estate",
//             rating: 3,
//             location: "Powai, Mumbai",
//             earning: "4%",
//             discount: "15%",
//             monthlyEarning: "6-12 Lac",
//             outlets: 6,
//             area: "900 Sq - 700 Sq",
//             price: "38L",
//             priceValue: 3800000
//         },
//         {
//             id: 5,
//             bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
//             image: "/mockup/building.png",
//             title: "Retail Shop",
//             type: "Commercial",
//             rating: 4,
//             location: "Gachibowli, Hyderabad",
//             earning: "6%",
//             discount: "20%",
//             monthlyEarning: "8-18 Lac",
//             outlets: 12,
//             area: "1100 Sq - 850 Sq",
//             price: "55L",
//             priceValue: 5500000
//         },
//     ];


//     // Price categories
//     const priceCategories = [
//         { id: "all", label: "All", min: 0, max: Infinity },
//         { id: "10-20", label: "10L-20L", min: 1000000, max: 2000000 },
//         { id: "20-30", label: "20L-30L", min: 2000000, max: 3000000 },
//         { id: "30-40", label: "30L-40L", min: 3000000, max: 4000000 },
//         { id: "40-50", label: "40L-50L", min: 4000000, max: 5000000 },
//         { id: "50+", label: "50L+", min: 5000000, max: Infinity },
//     ];

//     // State for selected category and filtered properties
//     const [selectedCategory, setSelectedCategory] = useState("all");
//     const [filteredProperties, setFilteredProperties] = useState(properties);

//     // Filter properties based on selected category
//     const filterPropertiesByPrice = (categoryId: string) => {
//         setSelectedCategory(categoryId);

//         if (categoryId === "all") {
//             setFilteredProperties(properties);
//             return;
//         }

//         const category = priceCategories.find(cat => cat.id === categoryId);
//         if (!category) return;

//         const filtered = properties.filter(property =>
//             property.priceValue >= category.min && property.priceValue <= category.max
//         );

//         setFilteredProperties(filtered);
//     };

//     const categoryItems = [
//         { label: "Residential Property", path: "/image/building1.png" },
//         { label: "Commercial Property", path: "/image/building2.png" },
//         { label: "Property Management", path: "/image/building3.png" }
//     ]

//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     // Calculate max scroll
//     const getMaxScroll = () => {
//         if (!containerRef.current) return 0;
//         return containerRef.current.scrollWidth - containerRef.current.clientWidth;
//     };

//     // Handle mouse/touch drag with boundary checks
//     const handleMouseDown = (e: MouseEvent) => {
//         if (!containerRef.current) return;

//         setIsDragging(true);
//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         setStartX(e.pageX - rect.left);
//         setScrollLeft(container.scrollLeft);
//         container.style.cursor = 'grabbing';
//         container.style.userSelect = 'none';
//     };

//     const handleMouseLeave = () => {
//         if (isDragging && containerRef.current) {
//             setIsDragging(false);
//             const container = containerRef.current;
//             container.style.cursor = 'grab';
//             container.style.removeProperty('user-select');
//         }
//     };

//     const handleMouseUp = () => {
//         if (!containerRef.current) return;

//         setIsDragging(false);
//         const container = containerRef.current;
//         container.style.cursor = 'grab';
//         container.style.removeProperty('user-select');

//         // Snap to nearest card
//         const cardElement = container.querySelector('.snap-center') as HTMLElement;
//         const cardWidth = cardElement?.offsetWidth || 300;
//         const gap = 24; // gap-6 = 24px
//         const scrollPos = container.scrollLeft;
//         const cardCount = Math.round(scrollPos / (cardWidth + gap));

//         container.scrollTo({
//             left: cardCount * (cardWidth + gap),
//             behavior: 'smooth'
//         });
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//         if (!isDragging || !containerRef.current) return;
//         e.preventDefault();

//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         const x = e.pageX - rect.left;
//         const walk = (x - startX) * 1.5; // Reduced multiplier for smoother controls

//         // Calculate new scroll position
//         let newScrollLeft = scrollLeft - walk;
//         const maxScroll = getMaxScroll();

//         // Apply boundaries
//         newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//         container.scrollLeft = newScrollLeft;
//     };

//     // Touch events for mobile
//     const handleTouchStart = (e: TouchEvent) => {
//         if (!containerRef.current) return;

//         setIsDragging(true);
//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         setStartX(e.touches[0].pageX - rect.left);
//         setScrollLeft(container.scrollLeft);
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//         if (!isDragging || !containerRef.current) return;
//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         const x = e.touches[0].pageX - rect.left;
//         const walk = (x - startX) * 1.5;

//         let newScrollLeft = scrollLeft - walk;
//         const maxScroll = getMaxScroll();
//         newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

//         container.scrollLeft = newScrollLeft;
//     };

//     // Add event listeners
//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         // Type event handlers for addEventListener
//         const mouseDownHandler = (e: globalThis.MouseEvent) => handleMouseDown(e as unknown as MouseEvent);
//         const mouseMoveHandler = (e: globalThis.MouseEvent) => handleMouseMove(e as unknown as MouseEvent);
//         const mouseUpHandler = () => handleMouseUp();
//         const mouseLeaveHandler = () => handleMouseLeave();

//         const touchStartHandler = (e: globalThis.TouchEvent) => handleTouchStart(e as unknown as TouchEvent);
//         const touchMoveHandler = (e: globalThis.TouchEvent) => handleTouchMove(e as unknown as TouchEvent);
//         const touchEndHandler = () => handleMouseUp();

//         container.addEventListener('mousedown', mouseDownHandler);
//         container.addEventListener('mouseleave', mouseLeaveHandler);
//         container.addEventListener('mouseup', mouseUpHandler);
//         container.addEventListener('mousemove', mouseMoveHandler);
//         container.addEventListener('touchstart', touchStartHandler);
//         container.addEventListener('touchmove', touchMoveHandler);
//         container.addEventListener('touchend', touchEndHandler);

//         return () => {
//             container.removeEventListener('mousedown', mouseDownHandler);
//             container.removeEventListener('mouseleave', mouseLeaveHandler);
//             container.removeEventListener('mouseup', mouseUpHandler);
//             container.removeEventListener('mousemove', mouseMoveHandler);
//             container.removeEventListener('touchstart', touchStartHandler);
//             container.removeEventListener('touchmove', touchMoveHandler);
//             container.removeEventListener('touchend', touchEndHandler);
//         };
//     }, [isDragging, startX, scrollLeft]);


//     return (
//         <>
//             {/* MAIN WRAPPER */}
//             <section
//                 style={{
//                     backgroundImage: "url('/image/Background design.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//                 className="
//           w-full h-auto rounded-[15px]
//           px-4 lg:px-10 py-6 lg:py-14
//           bg-gradient-to-r from-[#EFE3FE] to-[#F7F7FF]
//         "
//             >
//                 {/* ---------------- NAVBAR ---------------- */}
//                 <div
//                     className="
//             w-full mx-auto h-auto 
//             flex items-center justify-between
//             pb-4
//           "
//                 >
//                     {/* LEFT SIDE */}
//                     <div className="flex items-center p-2 gap-3  rounded-xl w-[98%] lg:gap-5"
//                         style={{ backgroundColor: "#FFFFFF" }}
//                     >
//                         <img
//                             src="/image/Group 2.png"
//                             className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
//                             alt="Home"
//                         />

//                         <img
//                             src="/image/Vector (1).png"
//                             className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
//                             alt="Back"
//                         />

//                         <h1 className="text-[18px] lg:text-[26px] font-semibold text-black">
//                             Real Estate
//                         </h1>
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="flex items-center gap-4 bg-white rounded-xl p-2 lg:gap-6">

//                         <img
//                             src="/image/Vector (2).png"
//                             className="w-[18px] h-[22px]"
//                             alt="Bookmark"
//                         />
//                     </div>
//                 </div>

//                 {/* ---------------- HERO SECTION ---------------- */}
//                 <div className="w-full mt-10">

//                     <div
//                         className="relative w-full h-[862px] mx-auto rounded-2xl  overflow-hidden bg-white"
//                      >
//                         {/* Bg Text Layer */}
//                         <div className="absolute inset-0 mt-45 ml-6 flex items-start pointer-events-none">
//                             <h1 className="text-[200px] font-bold left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start">
//                                 REAL <br /> ESTATE
//                             </h1>
//                         </div>

//                         {/* Arrow Button */}
//                         <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
//                             <FiArrowUpRight className="text-purple-500 w-10 h-10" />
//                         </div>


//                         {/* Main Heading (positioned with minimal margin) */}
//                         <h2
//                             className=" absolute top-14 left-10 font-[400] text-[#0C1B36]  "
//                             style={{
//                                 fontFamily: "GFS Didot",
//                                 fontWeight: 400,
//                                 fontStyle: "normal",
//                                 fontSize: "83.36px",
//                                 lineHeight: "86.37px",
//                                 letterSpacing: "0%",
//                                 verticalAlign: "middle",
//                             }}
//                         >
//                             Explore Our Real <br /> Estate Services
//                         </h2>


//                         {/* House Image */}
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                             <img
//                                 src="/image/Houseimage.png"
//                                 alt="House"
//                                 className="w-[296px] md:w-[620px] md:h-[440px] h-[227px] object-contain"
//                             />
//                         </div>

//                     </div>


//                 </div>

//                 {/* Category */}

//                 <div className="w-full relative overflow-hidden">
//                     <p className="text-2xl md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                         style={{ fontWeight: 600 }}>Category</p>
//                     <div className="flex gap-8 p-6">
//                         {categoryItems.map((items) => (

//                             <div key={items.label} className="relative w-[189.14px] h-[226.29px]">
//                                 {/* Background Image */}
//                                 <Image
//                                     src="/image/rectangularcategory.png"
//                                     alt="rectangular"
//                                     fill
//                                     className="object-cover"
//                                 />

//                                 {/* Centered Foreground Image */}
//                                 <Image
//                                     src={items.path}
//                                     alt="buildings"
//                                     width={140.16}
//                                     height={140.16}
//                                     className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
//                                 />

//                                 {/* Text over curved background */}
//                                 <p
//                                     className="absolute ml-10 top-1 left-1/2 -translate-x-1/2 text-start"
//                                     style={{
//                                         fontFamily: "Inter",
//                                         fontWeight: 400,
//                                         fontSize: "18.4px",
//                                         lineHeight: "20.6px",
//                                         color: "#000", // change if needed
//                                     }}
//                                 >
//                                     {items.label}
//                                 </p>
//                             </div>

//                         ))}
//                     </div>
//                 </div>



//                 {/* Search According To Your Budget */}
//                 {/* Price Categories */}
//                 <div className="bg-white rounded-xl ">
//                     <div className="w-full relative overflow-hidden p-6 md:p-4">
//                         <p className="text-2xl md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
//                             style={{ fontWeight: 600 }}>Search According To Your Budget</p>


//                     </div>

//                     {/* SWIPEABLE PROPERTY CARDS */}
//                     <div className="relative w-full overflow-hidden p-4 md:p-6">
//                         <div className="flex gap-4 mb-0 md:gap-8 p-4 md:p-2 overflow-x-auto md:ml-5 no-scrollbar">
//                             {priceCategories.map((category) => (
//                                 <div
//                                     key={category.id}
//                                     className={`relative w-[100px] h-[40px] flex items-center justify-center rounded-3xl cursor-pointer transition-all duration-300
//                                ${selectedCategory === category.id ? "bg-purple-500 text-white shadow-lg" : "bg-gray-200 text-black"}`}
//                                     onClick={() => filterPropertiesByPrice(category.id)}
//                                 >
//                                     <span className="font-semibold text-sm md:text-base">{category.label}</span>
//                                 </div>
//                             ))}
//                         </div>
//                         <div
//                             ref={containerRef}
//                             className="flex gap-4 md:gap-16 p-4 md:p-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
//                         >

//                             {filteredProperties.length > 0 ? (
//                                 filteredProperties.map((p) => (
//                                     <div
//                                         key={p.id}
//                                         className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none"
//                                         style={{
//                                             background: "radial-gradient(50% 50% at 50% 50%, rgba(58, 46, 194, 0.8) 0%, rgba(90, 142, 255, 0.8) 100%)"
//                                         }}


//                                     >
//                                         {/* IMAGE SECTION */}
//                                         <div className="relative w-full h-40 rounded-xl">
//                                             <Image
//                                                 src={p.image}
//                                                 alt="Property"
//                                                 fill
//                                                 className="object-cover rounded-xl pointer-events-none"
//                                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                             />

//                                             <span className="absolute top-2 flex left-2 bg-white text-blue-600  font-semibold  px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                                 <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted

//                                             </span>
//                                             <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10" onClick={(e) => e.stopPropagation()}>
//                                                 <Bookmark size={18} className="text-white" />
//                                             </button>
//                                             <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
//                                                 <Image src="/mockup/propertyicon.png" alt="icon" width={80} height={80} className="object-contain pointer-events-none" />
//                                                 <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                                     {"⭐".repeat(p.rating)}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* CONTENT SECTION */}
//                                         <div className="mt-12 space-y-1">
//                                             <h2 className="text-lg font-semibold">{p.title}</h2>
//                                             <p className="text-sm opacity-90">{p.type}</p>
//                                             <div className="relative mt-3">
//                                                 <div className="absolute inset-0">
//                                                     <img src="/image/bordercut.png" alt="bordercut" className="w-full rounded-xl h-full object-cover" />
//                                                 </div>
//                                                 <div className="relative z-10 p-4">
//                                                     <div className="flex items-start justify-between w-full">
//                                                         <div className="flex-1">
//                                                             <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                                             <p className="text-xs opacity-95 font-inter flex items-center gap-1">
//                                                                 <MdLocationOn size={24} className="text-white-600" /> {p.location}
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex flex-col gap-2 items-end ml-4">
//                                                             <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                                 Earn Up to {p.earning}
//                                                             </span>
//                                                             <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                                 {p.discount} Discount
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="mt-3 text-xs opacity-95 space-y-1">
//                                                         <p className="font-medium">Details</p>
//                                                         <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                         <p>Number Outlet: <b>{p.outlets}</b></p>
//                                                         <div className="flex items-center gap-2">
//                                                             <img src="/image/area.png" alt="area" width={20} height={20} />
//                                                             <span>Area <b>{p.area}</b></span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="relative h-0">
//                                                 <div className="absolute bottom-2 right-0 w-[72px] h-[52px] bg-white text-black font-semibold px-4 py-4 rounded-2xl z-20 pointer-events-none" style={{ fontSize: "20px", fontWeight: "600" }}>
//                                                     ₹{p.price}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 // Placeholder card when no properties match
//                                 <div className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] h-[480px] relative rounded-2xl p-3 shadow-md text-black flex items-center justify-center bg-gray-500 select-none">
//                                     <p className="text-center text-lg font-semibold">Not Available within this budget</p>
//                                 </div>
//                             )}

//                             {/* Add right padding spacer for mobile */}
//                             <div className="md:hidden min-w-4 flex-shrink-0"></div>
//                         </div>
//                     </div>




//                     {/* Recommendation */}
//                     <div className="relative w-full overflow-hidden p-4 md:p-6">
//                         <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8"
//                             style={{ fontWeight: 600 }}> Recommended For You</h1>

//                         {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
//                         <div
//                             ref={containerRef}
//                             className="flex gap-4 md:gap-16 p-4 md:p-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
//                         >
//                             {properties.map((p) => (
//                                 <div
//                                     key={p.id}
//                                     className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] 
//                                                  relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none
//                                                  flex-grow-0 flex-shrink-0"
//                                     style={{
//                                         backgroundImage: `url(${"/image/recommendedrealestate.png"})`,
//                                         backgroundSize: "cover",
//                                         backgroundPosition: "center",
//                                     }}
//                                 >
//                                     {/* IMAGE SECTION */}
//                                     <div className="relative w-full h-40 rounded-xl">
//                                         <Image
//                                             src={p.image}
//                                             alt="Property"
//                                             fill
//                                             className="object-cover rounded-xl pointer-events-none"
//                                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                         />

//                                         <span className="absolute top-2 flex left-2 bg-white text-blue-600  font-semibold  px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                             <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted

//                                         </span>

//                                         <button
//                                             className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
//                                             onClick={(e) => e.stopPropagation()}
//                                         >
//                                             <Bookmark size={18} className="text-white" />
//                                         </button>


//                                         <div className="absolute bottom-2 right-2 flex items-center gap-2 text-yellow-400 text-2xl mt-1">
//                                             {Array(p.rating).fill(0).map((_, i) => (
//                                                 <span key={i}>★</span>
//                                             ))}

//                                             {Array(5 - p.rating).fill(0).map((_, i) => (
//                                                 <span key={i}>☆</span>
//                                             ))}
//                                         </div>


//                                     </div>

//                                     {/* CONTENT SECTION */}
//                                     <div className="mt-12 space-y-1">
//                                         <h2 className="text-lg text-black font-semibold">{p.title}</h2>
//                                         <p className="text-sm text-black opacity-90">{p.type}</p>
//                                         <div className="relative mt-3">
//                                             {/* Background image */}
//                                             <div className="absolute inset-0">
//                                                 <img
//                                                     src="/image/bordercut.png"
//                                                     alt="bordercut"
//                                                     className="w-full rounded-xl h-full object-cover"
//                                                     width={312}
//                                                     height={159}
//                                                 />
//                                             </div>

//                                             {/* Content overlay */}
//                                             <div className="relative z-10 p-4">
//                                                 <div className="flex items-start justify-between w-full">
//                                                     <div className="flex-1">
//                                                         <h3 className="text-sm text-black  mb-1">Location</h3>
//                                                         <p className="text-xs text-black font-semibold opacity-95 font-inter flex items-center gap-1">
//                                                             <MdLocationOn size={24} className="text-black-600" /> {p.location}
//                                                         </p>
//                                                     </div>

//                                                     <div className="flex flex-col gap-2 items-end ml-4">
//                                                         <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                             Earn Up to {p.earning}
//                                                         </span>
//                                                         <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                             {p.discount} Discount
//                                                         </span>
//                                                     </div>
//                                                 </div>

//                                                 <div className="mt-3 text-xs opacity-95 space-y-1">
//                                                     <p className="font-medium text-black">Details</p>
//                                                     <p className="text-black">Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                     <p className="text-black">Number Outlet: <b>{p.outlets}</b></p>
//                                                     <div className="flex items-center gap-2">
//                                                         <Image src="/image/area.png" alt="area" width={20} height={20} className="invert brightness-0" />
//                                                         <span className="text-black">Area <b>{p.area}</b></span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="relative h-0">
//                                             <div
//                                                 className="absolute bottom-2 right-0 w-[72px] h-[52px] bg-white text-black font-semibold px-4 py-4 rounded-2xl  z-20 pointer-events-none"
//                                                 style={{ fontSize: "20px", fontWeight: "600" }}
//                                             >
//                                                 ₹{p.price}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}


//                             <div className="md:hidden min-w-4 flex-shrink-0"></div>
//                         </div>




//                         {/* Today Top Picks */}
//                         <div className="relative w-full overflow-hidden p-4 md:p-6">
//                             <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8"
//                                 style={{ fontWeight: 600 }}> Today Top Picks</h1>

//                             {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
//                             <div
//                                 ref={containerRef}
//                                 className="flex gap-4 md:gap-16 p-2 md:p-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
//                             >
//                                 {properties.map((p) => (
//                                     <div
//                                         key={p.id}
//                                         className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] 
//                                                  relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none
//                                                  flex-grow-0 flex-shrink-0"
//                                         style={{ background: p.bgColor }}
//                                     >
//                                         {/* IMAGE SECTION */}
//                                         <div className="relative w-full h-40 rounded-xl">
//                                             <Image
//                                                 src={p.image}
//                                                 alt="Property"
//                                                 fill
//                                                 className="object-cover rounded-xl pointer-events-none"
//                                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                             />

//                                             <span className="absolute top-2 flex left-2 bg-white text-blue-600  font-semibold  px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
//                                                 <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted

//                                             </span>

//                                             <button
//                                                 className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
//                                                 onClick={(e) => e.stopPropagation()}
//                                             >
//                                                 <Bookmark size={18} className="text-white" />
//                                             </button>

//                                             <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
//                                                 <Image
//                                                     src="/mockup/propertyicon.png"
//                                                     alt="icon"
//                                                     width={80}
//                                                     height={80}
//                                                     className="object-contain pointer-events-none"
//                                                 />
//                                                 <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                                     {"⭐".repeat(p.rating)}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* CONTENT SECTION */}
//                                         <div className="mt-12 space-y-1">
//                                             <h2 className="text-lg font-semibold">{p.title}</h2>
//                                             <p className="text-sm opacity-90">{p.type}</p>
//                                             <div className="relative mt-3">
//                                                 {/* Background image */}
//                                                 <div className="absolute inset-0">
//                                                     <img
//                                                         src="/image/bordercut.png"
//                                                         alt="bordercut"
//                                                         className="w-full rounded-xl h-full object-cover"
//                                                         width={312}
//                                                         height={159}
//                                                     />
//                                                 </div>

//                                                 {/* Content overlay */}
//                                                 <div className="relative z-10 p-4">
//                                                     <div className="flex items-start justify-between w-full">
//                                                         <div className="flex-1">
//                                                             <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                                             <p className="text-xs opacity-95 font-inter flex items-center gap-1">
//                                                                 <MdLocationOn size={24} className="text-white-600" /> {p.location}
//                                                             </p>
//                                                         </div>

//                                                         <div className="flex flex-col gap-2 items-end ml-4">
//                                                             <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                                 Earn Up to {p.earning}
//                                                             </span>
//                                                             <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                                                 {p.discount} Discount
//                                                             </span>
//                                                         </div>
//                                                     </div>

//                                                     <div className="mt-3 text-xs opacity-95 space-y-1">
//                                                         <p className="font-medium">Details</p>
//                                                         <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                                         <p>Number Outlet: <b>{p.outlets}</b></p>
//                                                         <div className="flex items-center gap-2">
//                                                             <img src="/image/area.png" alt="area" width={20} height={20} />
//                                                             <span>Area <b>{p.area}</b></span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="relative h-0">
//                                                 <div
//                                                     className="absolute bottom-2 right-0 w-[72px] h-[52px] bg-white text-black font-semibold px-4 py-4 rounded-2xl  z-20 pointer-events-none"
//                                                     style={{ fontSize: "20px", fontWeight: "600" }}
//                                                 >
//                                                     ₹{p.price}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}

//                                 {/* Add right padding spacer for mobile */}
//                                 <div className="md:hidden min-w-4 flex-shrink-0"></div>
//                             </div>



//                             {/* Footer Content */}

//              <div className="flex flex-col md:flex-row items-start justify-between mt-8 md:mt-15 ml-0 md:ml-10 gap-6 md:gap-8 lg:gap-10">

//                 {/* LEFT TEXT SECTION */}
//                 <div className="md:w-1/2 pl-2 md:pl-0">
//                     <p
//                     className="font-semibold hidden lg:block mt-30 leading-tight text-[22px] sm:text-[26px] md:text-3xl lg:text-4xl"
//                     style={{ fontWeight: 500 }}
//                     >
//                     We are Building <br /> Path for you
//                     </p>
//                 {/* Mobile  */}
//                 <p
//                     className="font-bold text-black block lg:hidden leading-tight text-[14px] sm:text-[26px] "
//                     //   style={{ fontWeight: 500 }}
//                     >
//                     We are Building  Path for you
//                     </p>

//                 {/* Desktop */}
//                     <p
//                     className="text-black mt-2 md:mt-3 hidden lg:block leading-snug text-[16px] sm:text-lg md:text-xl lg:text-2xl"
//                     style={{ fontWeight: 400 }}
//                     >
//                     an easy way of selling <br /> and purchase
//                     </p>
//                 {/* Mobile */}
//                     <p
//                     className="text-black mt-2 md:mt-3 block  lg:hidden leading-snug text-[14px] sm:text-lg md:text-xl lg:text-2xl"
//                     style={{ fontWeight: 400 }}
//                     >
//                     an easy way of selling and purchase
//                     </p>
//                 </div>

//                 {/* RIGHT GRID SECTION */}
//                 <div className="grid grid-cols-2 gap-3 md:gap-4 rounded-xl p-2 sm:p-3 md:p-4 w-full max-w-[517px]">

//                     {/* CARD — REUSABLE STYLE */}
//                     {[
//                     {
//                         num: "01",
//                         text: "Trusted and authorized Propertys",
//                         img: "/image/footerrect1.png",
//                     },
//                     {
//                         num: "02",
//                         text: "User Recommendation for better feed",
//                         img: "/image/footerrect2.png",
//                     },
//                     {
//                         num: "03",
//                         text: "In Your budget with category Selection",
//                         img: "/image/footerrect3.png",
//                     },
//                     {
//                         num: "04",
//                         text: "Clear detail about the property Retail Service",
//                         img: "/image/footerrect4.png",
//                     },
//                     ].map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-2xl p-2 sm:p-3 md:p-4 text-purple-700 font-semibold bg-white/50 backdrop-blur-lg relative 
//                                 h-[110px] sm:h-[130px] md:h-[150px] lg:h-[180px] overflow-hidden "
//                     >
//                         <Image
//                         src={item.img}
//                         alt="rectangular background"
//                         fill
//                         className="absolute object-cover rounded-2xl"
//                         />

//                         <div className="relative z-10">
//                         <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">
//                             {item.num}
//                         </p>

//                         <p className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-[18px] font-medium text-purple-800 leading-snug break-words">
//                             {item.text}
//                         </p>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//                 </div>



//                 </div> 


//             </div>
//         </div>


//                 {/* ---------------- MOBILE SEARCH BAR ---------------- */}
//                 {/* <div className="lg:hidden w-full mt-6">
//                     <div
//                         className="
//                         w-full h-[50px]
//                         bg-white border border-[#DCDCDC] 
//                         rounded-[15px]
//                         shadow flex items-center px-4
//                         "
//                     >
//                         <CiSearch className="w-[18px] h-[18px] text-black" />
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             className="w-full outline-none text-[16px] ml-4"
//                         />
//                     </div>
//                 </div> */}
//             </section>
//         </>
//     )
// }









'use client'

import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import { Bookmark } from "lucide-react";

export default function RealStatePage() {
    const properties = [
        {
            id: 1,
            bgColor: "linear-gradient(135deg, #e8a58a, #d47c6e)",
            image: "/mockup/building.png",
            title: "Residential Property",
            type: "Real Estate",
            rating: 4,
            location: "Near Andheri West, Mumbai",
            earning: "5%",
            discount: "30%",
            monthlyEarning: "10-20 L",
            outlets: 10,
            area: "1500 Sq - 1000 Sq",
            price: "45L",
            priceValue: 4500000
        },
        {
            id: 2,
            bgColor: "linear-gradient(135deg, #b084f8, #9b63f4)",
            image: "/mockup/building.png",
            title: "Luxury Apartment",
            type: "Real Estate",
            rating: 5,
            location: "Banjara Hills, Hyderabad",
            earning: "7%",
            discount: "25%",
            monthlyEarning: "12-22 L",
            outlets: 14,
            area: "1800 Sq - 1200 Sq",
            price: "72L",
            priceValue: 7200000
        },
        {
            id: 3,
            bgColor: "linear-gradient(135deg, #4ccbb8, #2ea89c)",
            image: "/mockup/building.png",
            title: "Commercial Space",
            type: "Business Property",
            rating: 4,
            location: "Koramangala, Bangalore",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-15 L",
            outlets: 7,
            area: "1300 Sq - 900 Sq",
            price: "89L",
            priceValue: 8900000
        },
        {
            id: 4,
            bgColor: "linear-gradient(135deg, #ff9da7, #ff6b81)",
            image: "/mockup/building.png",
            title: "Studio Apartment",
            type: "Real Estate",
            rating: 3,
            location: "Powai, Mumbai",
            earning: "4%",
            discount: "15%",
            monthlyEarning: "6-12 L",
            outlets: 6,
            area: "900 Sq - 700 Sq",
            price: "38L",
            priceValue: 3800000
        },
        {
            id: 5,
            bgColor: "linear-gradient(135deg, #9df0ff, #59d9f3)",
            image: "/mockup/building.png",
            title: "Retail Shop",
            type: "Commercial",
            rating: 4,
            location: "Gachibowli, Hyderabad",
            earning: "6%",
            discount: "20%",
            monthlyEarning: "8-18 L",
            outlets: 12,
            area: "1100 Sq - 850 Sq",
            price: "55L",
            priceValue: 5500000
        },
    ];

    // Price categories
    const priceCategories = [
        { id: "all", label: "All", min: 0, max: Infinity },
        { id: "10-20", label: "10L-20L", min: 1000000, max: 2000000 },
        { id: "20-30", label: "20L-30L", min: 2000000, max: 3000000 },
        { id: "30-40", label: "30L-40L", min: 3000000, max: 4000000 },
        { id: "40-50", label: "40L-50L", min: 4000000, max: 5000000 },
        { id: "50+", label: "50L+", min: 5000000, max: Infinity },
    ];

    // State for selected category and filtered properties
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredProperties, setFilteredProperties] = useState(properties);

    // Filter properties based on selected category
    const filterPropertiesByPrice = (categoryId: string) => {
        setSelectedCategory(categoryId);

        if (categoryId === "all") {
            setFilteredProperties(properties);
            return;
        }

        const category = priceCategories.find(cat => cat.id === categoryId);
        if (!category) return;

        const filtered = properties.filter(property =>
            property.priceValue >= category.min && property.priceValue <= category.max
        );

        setFilteredProperties(filtered);
    };

    const categoryItems = [
        { label: "Residential Property", path: "/image/building1.png" },
        { label: "Commercial Property", path: "/image/building2.png" },
        { label: "Property Management", path: "/image/building3.png" }
    ]

    // FIXED: Create separate refs for each carousel
    const budgetRef = useRef<HTMLDivElement>(null);
    const recommendedRef = useRef<HTMLDivElement>(null);
    const topPicksRef = useRef<HTMLDivElement>(null);

    // FIXED: Separate state for each carousel
    const [isDragging, setIsDragging] = useState({
        budget: false,
        recommended: false,
        topPicks: false
    });
    const [startX, setStartX] = useState({ x: 0, section: '' });
    const [scrollLeft, setScrollLeft] = useState({ left: 0, section: '' });

    // Calculate max scroll for a specific container
    const getMaxScroll = (container: HTMLDivElement | null) => {
        if (!container) return 0;
        return container.scrollWidth - container.clientWidth;
    };

    // Generic drag handlers that work with any ref
    const createDragHandlers = (ref: React.RefObject<HTMLDivElement | null>, section: string) => {

        const handleMouseDown = (e: React.MouseEvent) => {
            if (!ref.current) return;

            setIsDragging(prev => ({ ...prev, [section]: true }));
            const container = ref.current;
            const rect = container.getBoundingClientRect();
            setStartX({ x: e.pageX - rect.left, section });
            setScrollLeft({ left: container.scrollLeft, section });
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
        };

        const handleMouseLeave = () => {
            if (isDragging[section as keyof typeof isDragging] && ref.current) {
                setIsDragging(prev => ({ ...prev, [section]: false }));
                const container = ref.current;
                container.style.cursor = 'grab';
                container.style.removeProperty('user-select');
            }
        };

        const handleMouseUp = () => {
            if (!ref.current) return;

            setIsDragging(prev => ({ ...prev, [section]: false }));
            const container = ref.current;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');

            // Snap to nearest card - FIXED for mobile responsiveness
            const cardElement = container.querySelector('.snap-center') as HTMLElement;
            const cardWidth = cardElement?.offsetWidth || 300;
            const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
            const scrollPos = container.scrollLeft;
            const cardCount = Math.round(scrollPos / (cardWidth + gap));

            container.scrollTo({
                left: cardCount * (cardWidth + gap),
                behavior: 'smooth'
            });
        };

        const handleMouseMove = (e: React.MouseEvent) => {
            if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
            e.preventDefault();

            const container = ref.current;
            const rect = container.getBoundingClientRect();
            const x = e.pageX - rect.left;
            const walk = (x - startX.x) * 1.5;

            // Calculate new scroll position
            let newScrollLeft = scrollLeft.left - walk;
            const maxScroll = getMaxScroll(container);

            // Apply boundaries
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

            container.scrollLeft = newScrollLeft;
        };

        // Touch event handlers
        const handleTouchStart = (e: React.TouchEvent) => {
            if (!ref.current) return;

            setIsDragging(prev => ({ ...prev, [section]: true }));
            const container = ref.current;
            const rect = container.getBoundingClientRect();
            setStartX({ x: e.touches[0].pageX - rect.left, section });
            setScrollLeft({ left: container.scrollLeft, section });
        };

        const handleTouchMove = (e: React.TouchEvent) => {
            if (!isDragging[section as keyof typeof isDragging] || !ref.current || startX.section !== section) return;
            const container = ref.current;
            const rect = container.getBoundingClientRect();
            const x = e.touches[0].pageX - rect.left;
            const walk = (x - startX.x) * 1.5;

            let newScrollLeft = scrollLeft.left - walk;
            const maxScroll = getMaxScroll(container);
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

            container.scrollLeft = newScrollLeft;
        };

        return {
            handleMouseDown,
            handleMouseLeave,
            handleMouseUp,
            handleMouseMove,
            handleTouchStart,
            handleTouchMove
        };
    };

    // Create handlers for each section
    const budgetHandlers = createDragHandlers(budgetRef, 'budget');
    const recommendedHandlers = createDragHandlers(recommendedRef, 'recommended');
    const topPicksHandlers = createDragHandlers(topPicksRef, 'topPicks');

    return (
        <>
            {/* MAIN WRAPPER */}
            <section
                style={{
                    backgroundImage: "url('/image/Background design.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="
          w-full h-auto rounded-[15px] overflow-x-hidden
          px-4 lg:px-10 py-6 lg:py-14
          bg-gradient-to-r from-[#EFE3FE] to-[#F7F7FF]
        "
            >
                {/* ---------------- NAVBAR ---------------- */}
                <div
                    className="
            w-full mx-auto h-auto 
            flex items-center justify-between
            pb-4
          "
                >
                    {/* LEFT SIDE */}
                    <div className="flex items-center p-2 gap-3 rounded-xl w-full lg:gap-5"
                        style={{ backgroundColor: "#FFFFFF" }}
                    >
                        <img
                            src="/image/Group 2.png"
                            className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
                            alt="Home"
                        />

                        <img
                            src="/image/Vector (1).png"
                            className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
                            alt="Back"
                        />

                        <h1 className="text-[18px] lg:text-[26px] font-semibold text-black">
                            Real Estate
                        </h1>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4 bg-white rounded-xl p-2 lg:gap-6">
                        <img
                            src="/image/Vector (2).png"
                            className="w-[18px] h-[22px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>

                {/* ---------------- HERO SECTION ---------------- */}
                <div className="w-full hidden lg:block mt-10">
                    <div
                        className="relative w-full h-[862px] mx-auto rounded-2xl overflow-hidden bg-white"
                    >
                        {/* Bg Text Layer */}
                        <div className="absolute inset-0 mt-45 ml-6 flex items-start pointer-events-none">
                            <h1 className="text-[200px] font-bold left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start">
                                REAL <br /> ESTATE
                            </h1>
                        </div>

                        {/* Arrow Button */}
                        <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
                            <FiArrowUpRight className="text-purple-500 w-10 h-10" />
                        </div>

                        {/* Main Heading */}
                        <h2
                            className="absolute top-14 left-10 font-[400] text-[#0C1B36]"
                            style={{
                                fontFamily: "GFS Didot",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "83.36px",
                                lineHeight: "86.37px",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                            }}
                        >
                            Explore Our Real <br /> Estate Services
                        </h2>

                        {/* House Image */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <img
                                src="/image/Houseimage.png"
                                alt="House"
                                className="w-[296px] md:w-[620px] md:h-[440px] h-[227px] object-contain"
                            />
                        </div>
                    </div>
                </div>



                {/* ---------------- HERO SECTION MOBILE VERSION ---------------- */}
                <div className="w-full block lg:hidden mt-10">
                    <div
                        className="relative w-full  min-h-[393px] mx-auto rounded-2xl overflow-hidden bg-white"
                    >
                        {/* Bg Text Layer */}
                        <div className="absolute inset-0 mt-25 ml-4 flex items-start pointer-events-none">
                            <h1 className="font-bold font-[400] text-[52.34px] left-0 text-gray-200 opacity-40 tracking-wider leading-none text-start"
                            >
                                REAL <br /> ESTATE
                            </h1>
                        </div>

                        {/* Arrow Button */}
                        <div className="absolute top-4 right-4 w-[70.04px] h-[70.04px] rounded-full bg-white shadow-lg flex items-center justify-center">
                            <FiArrowUpRight className="text-purple-500 w-10 h-10" />
                        </div>

                        {/* Main Heading */}
                        <h2
                            className="absolute top-5 left-5 font-[400] text-[#0C1B36]"
                            style={{
                                fontFamily: "GFS Didot",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "29.05px",
                                lineHeight: "30.01px",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                            }}
                        >
                            Explore Our<br /> Real Estate<br />Services
                        </h2>

                        {/* House Image */}
                        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2"> */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
                            {/* <div className="absolute bottom-4 right-5"> */}
                            <img
                                src="/image/Houseimage.png"
                                className="w-full max-w-[296px] h-auto object-contain"
                            />

                        </div>
                    </div>
                </div>



                {/* Category */}
                <div className="w-full hidden lg:block relative overflow-hidden">
                    <p className="text-2xl md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
                        style={{ fontWeight: 600 }}>Category</p>
                    <div className="flex gap-8 p-6">
                        {categoryItems.map((items) => (
                            <div key={items.label} className="relative w-[189.14px] h-[226.29px]">
                                {/* Background Image */}
                                <Image
                                    src="/image/rectangularcategory.png"
                                    alt="rectangular"
                                    fill
                                    className="object-cover"
                                />

                                {/* Centered Foreground Image */}
                                <img
                                    src={items.path}
                                    alt="buildings"
                                    width={140.16}
                                    height={140.16}
                                    className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
                                />

                                {/* Text over curved background */}
                                <p
                                    className="absolute ml-10 top-1 left-1/2 -translate-x-1/2 text-start"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "18.4px",
                                        lineHeight: "20.6px",
                                        color: "#000",
                                    }}
                                >
                                    {items.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>



                                {/* Category Mobile Version */}
                <div className="w-fullhidden block lg:hidden relative overflow-hidden">
                    <p className="text-[16px] text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
                        style={{ fontWeight: 600 }}>Category</p>
                    <div className="flex gap-14 p-6">
                        {categoryItems.map((items) => (
                            <div key={items.label} className="relative w-[103.72px] h-[123px]">
                                {/* Background Image */}
                                <Image
                                    src="/image/rectangularcategory.png"
                                    alt="rectangular"
                                    fill
                                    className="object-cover"
                                />

                                {/* Centered Foreground Image */}
                                <Image
                                    src={items.path}
                                    alt="buildings"
                                    width={96.19}
                                    height={96.19}
                                    className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-[10%] object-cover"
                                />

                                {/* Text over curved background */}
                                <p
                                    className="absolute ml-4 top-1 font-semibold text-[11px] left-1/2 -translate-x-1/2 text-start"
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        // fontSize: "18.4px",
                                        lineHeight: "12.6px",
                                        color: "#000",
                                    }}
                                >
                                    {items.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>




                {/* Search According To Your Budget */}
                <div className="bg-white rounded-xl">
                    <div className="w-full relative overflow-hidden p-0 md:p-4">
                        <p className="text-[16px] md:text-4xl text-black font-semibold mt-4 ml-6 md:mt-6 md:ml-8"
                            style={{ fontWeight: 600 }}>Search According To Your Budget</p>
                    </div>

                    {/* Price Categories */}
                    <div
                        className="
                                    flex gap-4 mb-0 md:gap-8 p-4 md:p-2 
                                    overflow-x-auto md:overflow-x-visible 
                                    ml-5 md:ml-10 
                                    no-scrollbar 
                                    snap-x snap-mandatory
                                ">
                        {priceCategories.map((category) => (
                            <div
                                key={category.id}
                                className={`
                                        relative w-[100px] h-[40px] 
                                        flex items-center justify-center 
                                        rounded-3xl cursor-pointer 
                                        transition-all duration-300 
                                        shrink-0 snap-start
                                        ${selectedCategory === category.id
                                        ? "bg-purple-500 text-white shadow-lg"
                                        : "bg-gray-200 text-black"
                                    }
                                    `}
                                onClick={() => filterPropertiesByPrice(category.id)}
                            >
                                <span className="font-semibold text-sm md:text-base">
                                    {category.label}
                                </span>
                            </div>
                        ))}
                    </div>


                    {/* SWIPEABLE PROPERTY CARDS - BUDGET SECTION */}
                    <div className="relative w-full overflow-hidden p-0 md:p-6">
                        <div
                            ref={budgetRef}
                            className="flex gap-4 md:gap-14 pl-4 md:pl-6 pr-2 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
                            onMouseDown={budgetHandlers.handleMouseDown}
                            onMouseLeave={budgetHandlers.handleMouseLeave}
                            onMouseUp={budgetHandlers.handleMouseUp}
                            onMouseMove={budgetHandlers.handleMouseMove}
                            onTouchStart={budgetHandlers.handleTouchStart}
                            onTouchMove={budgetHandlers.handleTouchMove}
                            onTouchEnd={budgetHandlers.handleMouseUp}
                        >
                            {filteredProperties.length > 0 ? (
                                filteredProperties.map((p) => (
                                    <div
                                        key={p.id}

                                        className="snap-center flex-shrink-0 
                                        // w-[80vw]      
                                        // sm:w-[300px]
                                        // md:w-[338px]
                                        w-[calc(100vw-2rem)]
                                        sm:w-[300px]
                                        md:w-[338px]
                                        relative rounded-2xl p-2 shadow-md text-white
                                        overflow-hidden select-none"

                                        style={{
                                            background: "radial-gradient(50% 50% at 50% 50%, rgba(58, 46, 194, 0.8) 0%, rgba(90, 142, 255, 0.8) 100%)"
                                        }}
                                    >
                                        {/* IMAGE SECTION */}
                                        <div className="relative w-full h-40 rounded-xl">
                                            <Image
                                                src={p.image}
                                                alt="Property"
                                                fill
                                                className="object-cover rounded-xl pointer-events-none"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />

                                            <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
                                                <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
                                            </span>

                                            <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10" onClick={(e) => e.stopPropagation()}>
                                                <Bookmark size={18} className="text-white" />
                                            </button>

                                            <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
                                                <Image src="/mockup/propertyicon.png" alt="icon" width={80} height={80} className="object-contain pointer-events-none" />
                                                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                                                    {"⭐".repeat(p.rating)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONTENT SECTION */}
                                        <div className="mt-12 space-y-1">
                                            <h2 className="text-lg font-semibold">{p.title}</h2>
                                            <p className="text-sm opacity-90">{p.type}</p>
                                            <div className="relative mt-3">
                                                <div className="absolute inset-0">
                                                    <img src="/image/bordercut.png" alt="bordercut" className="w-full rounded-xl h-full object-cover" />
                                                </div>
                                                <div className="relative z-10 p-4">
                                                    <div className="flex items-start justify-between w-full">
                                                        <div className="flex-1">
                                                            <h3 className="text-sm font-semibold mb-1">Location</h3>
                                                            <p className="text-xs opacity-95 font-inter flex items-center gap-1">
                                                                <MdLocationOn size={24} className="text-white-600" /> {p.location}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col gap-2 items-end ml-4">
                                                            <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold whitespace-nowrap">
                                                                Earn Up to {p.earning}
                                                            </span>
                                                            <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold whitespace-nowrap">
                                                                {p.discount} Discount
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 text-xs opacity-95 space-y-1">
                                                        <p className="font-medium">Details</p>
                                                        <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
                                                        <p>Number Outlet: <b>{p.outlets}</b></p>
                                                        <div className="flex items-center gap-2">
                                                            <img src="/image/area.png" alt="area" width={20} height={20} />
                                                            <span>Area <b>{p.area}</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative h-0">
                                                <div className="absolute bottom-2 right-0 -mr-0 sm:w-[72px] sm:h-[62px] w-[50px] h-[50px] bg-white text-black font-semibold sm:px-4 sm:py-5 px-2 py-4 rounded-2xl z-20 pointer-events-none" style={{ fontSize: "16px", fontWeight: "600" }}>
                                                    ₹{p.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="snap-center flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[338px] h-[480px] relative rounded-2xl p-3 shadow-md text-black flex items-center justify-center bg-gray-500 select-none">
                                    <p className="text-center text-lg font-semibold">Not Available within this budget</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>




                {/* Recommendation Section */}
                <div className="relative w-full overflow-visible md:overflow-hidden p-4 md:p-4">
                    <p className="text-[16px] md:text-4xl text-black font-semibold mt-4 ml-3 md:mt-6 md:ml-12"
                        style={{ fontWeight: 600 }}>Recommended For You</p>

                    {/* SWIPEABLE CONTAINER - RECOMMENDED SECTION */}
                    <div
                        ref={recommendedRef}
                        // className="flex gap-4 pl-4 pr-8 md:pl-6 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
                        className="
                            flex gap-6 md:gap-10
                            pl-4
                            md:pl-6 md:pr-6
                            overflow-x-auto
                            md:snap-x md:snap-mandatory
                            scroll-smooth
                            no-scrollbar
                            cursor-grab
                            "

                        onMouseDown={recommendedHandlers.handleMouseDown}
                        onMouseLeave={recommendedHandlers.handleMouseLeave}
                        onMouseUp={recommendedHandlers.handleMouseUp}
                        onMouseMove={recommendedHandlers.handleMouseMove}
                        onTouchStart={recommendedHandlers.handleTouchStart}
                        onTouchMove={recommendedHandlers.handleTouchMove}
                        onTouchEnd={recommendedHandlers.handleMouseUp}
                    >
                        {properties.map((p) => (
                            <div
                                key={p.id}
                                className="md:snap-center flex-shrink-0 
                                      w-[68vw]            /* mobile: full card + partial next */
                                    sm:w-[85vw]         /* small devices */
                                    md:w-[242.57px]     /* desktop unchanged */

                                            md:h-[300.26px]
                                           min-w-0
                                           relative rounded-2xl p-5 -ml-5 md:ml-5 shadow-md text-white overflow-hidden select-none"
                                style={{
                                    backgroundImage: `url(${"/image/recommendedrealestate.png"})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* IMAGE SECTION */}
                                <div className="relative w-[226.83px] h-[111.45px] max-w-full rounded-xl">

                                    <Image
                                        src={p.image}
                                        alt="Property"
                                        fill
                                        className="object-cover rounded-xl pointer-events-none"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
                                        <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
                                    </span>

                                    <button
                                        className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Bookmark size={18} className="text-white" />
                                    </button>

                                    <div className="absolute bottom-2 right-2 flex items-center gap-2 text-yellow-400 text-xl md:text-2xl mt-1">
                                        {Array(p.rating).fill(0).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                        {Array(5 - p.rating).fill(0).map((_, i) => (
                                            <span key={i}>☆</span>
                                        ))}
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="mt-2 space-y-0">
                                    <h2 className="text-black font-semibold text-[14px] md:[18.36px]" style={{ fontWeight: 600 }}>{p.title}</h2>
                                    <p className="text-black opacity-90" style={{ fontSize: "13.11px" }}>{p.type}</p>
                                    <div className="relative mt-0">
                                        {/* Background image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src="/image/bordercut.png"
                                                alt="bordercut"
                                                className="w-full rounded-xl h-full object-cover"
                                                width={312}
                                                height={159}
                                            />
                                        </div>

                                        {/* Content overlay */}
                                        <div className="relative z-10 p-2">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="flex-1">
                                                    <h3 className="text-xs text-black">Location</h3>
                                                    <p className="text-xs text-black font-semibold opacity-95 font-inter flex items-center gap-1"
                                                        style={{ fontSize: "8.48px" }}>
                                                        <MdLocationOn size={20} className="text-black-600" /> {p.location}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-1 items-end ml-1">
                                                    <span className="bg-white text-black md:text-[9px] text-[9px] px-1 py-1 rounded-lg font-semibold whitespace-nowrap"
                                                        >
                                                        Earn Up to {p.earning}
                                                    </span>
                                                    {/* <span className="bg-green-300 text-black text-[10px] md:w-[64.53px] md:h-[15.14px] p-4 px-1 py-1 rounded-md font-semibold whitespace-nowrap"
                                                        >
                                                        {p.discount} Discount
                                                    </span> */}
                                                    <span className="bg-green-300 text-black 
                                        px-2 py-1 md:text-[9px] text-[9px]
                                        rounded-md font-semibold whitespace-nowrap 
                                        flex items-center justify-center">
                                                        {p.discount} Discount
                                                    </span>

                                                </div>
                                            </div>

                                            <div className="mt-0 text-xs opacity-95 space-y-0 md:mb-2">
                                                <p className="font-medium text-[10px] md:text-[10px] text-black">Details</p>
                                                <p className="text-black text-[10px] md:text-[10px]">Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
                                                <p className="text-black text-[10px] md:text-[10px]">Number Outlet: <b>{p.outlets}</b></p>
                                                <div className="flex items-center gap-1">
                                                    <img src="/image/recloc.png" alt="area" width={20} height={20} />
                                                    <span className="text-black md:{text-1opx] text-[10px] break-words whitespace-normal">Area <b className="text-9px break-words">{p.area}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-0">
                                        <div
                                            className="absolute bottom-2 right-0 w-[52px] h-[42px]  text-black font-semibold px-7 md:px-5 py-5 md:py-3 rounded-2xl z-20 pointer-events-none"
                                            style={{ fontSize: "15px", fontWeight: "600" }}
                                        >
                                            ₹{p.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Today Top Picks Section */}
                <div className="relative w-full overflow-hidden p-0 md:p-6">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8"
                        style={{ fontWeight: 600 }}> Today Top Picks</h1>

                    {/* SWIPEABLE CONTAINER - TOP PICKS SECTION */}
                    <div
                        ref={topPicksRef}
                        className="flex gap-14 pl-4 md:pl-6 pr-2 md:pr-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab"
                        onMouseDown={topPicksHandlers.handleMouseDown}
                        onMouseLeave={topPicksHandlers.handleMouseLeave}
                        onMouseUp={topPicksHandlers.handleMouseUp}
                        onMouseMove={topPicksHandlers.handleMouseMove}
                        onTouchStart={topPicksHandlers.handleTouchStart}
                        onTouchMove={topPicksHandlers.handleTouchMove}
                        onTouchEnd={topPicksHandlers.handleMouseUp}
                    >
                        {properties.map((p) => (
                            <div
                                key={p.id}
                                className="snap-center flex-shrink-0 
                                           w-[calc(100vw-2rem)] 
                                           sm:w-[calc(100vw-3rem)]
                                           md:w-[338px]
                                           min-w-0
                                           relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none mx-1"
                                style={{ background: p.bgColor }}
                            >
                                {/* IMAGE SECTION */}
                                <div className="relative w-full h-40 rounded-xl">
                                    <Image
                                        src={p.image}
                                        alt="Property"
                                        fill
                                        className="object-cover rounded-xl pointer-events-none"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <span className="absolute top-2 flex left-2 bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg shadow" style={{ fontWeight: "600", fontSize: "12px" }}>
                                        <img src="/image/security.png" alt="security" width={16.66} height={16.66} /> Trusted
                                    </span>

                                    <button
                                        className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Bookmark size={18} className="text-white" />
                                    </button>

                                    <div className="absolute -bottom-10 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
                                        <Image
                                            src="/mockup/propertyicon.png"
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className="object-contain pointer-events-none"
                                        />
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                                            {"⭐".repeat(p.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="mt-12 space-y-1">
                                    <h2 className="text-lg font-semibold">{p.title}</h2>
                                    <p className="text-sm opacity-90">{p.type}</p>
                                    <div className="relative mt-3">
                                        {/* Background image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src="/image/bordercut.png"
                                                alt="bordercut"
                                                className="w-full rounded-xl h-full object-cover"
                                                width={312}
                                                height={159}
                                            />
                                        </div>

                                        {/* Content overlay */}
                                        <div className="relative z-10 p-4">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-semibold mb-1">Location</h3>
                                                    <p className="text-xs opacity-95 font-inter flex items-center gap-1">
                                                        <MdLocationOn size={24} className="text-white-600" /> {p.location}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-2 items-end ml-4">
                                                    <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
                                                        Earn Up to {p.earning}
                                                    </span>
                                                    <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
                                                        {p.discount} Discount
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-3 text-xs opacity-95 space-y-1">
                                                <p className="font-medium">Details</p>
                                                <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
                                                {/* <p className="leading-normal break-words">
                                                    Monthly Earning Potential:{' '}
                                                    <b className="text-xs md:text-base leading-none">
                                                        {p.monthlyEarning}
                                                    </b>
                                                </p> */}


                                                <p>Number Outlet: <b>{p.outlets}</b></p>
                                                <div className="flex items-center gap-2">
                                                    <img src="/image/area.png" alt="area" width={20} height={20} />
                                                    <span>Area <b>{p.area}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-0">
                                        <div className="absolute bottom-2 right-0 -mr-0 sm:w-[72px] sm:h-[62px] w-[50px] h-[50px] bg-white text-black font-semibold sm:px-4 sm:py-5 px-2 py-4 rounded-2xl z-20 pointer-events-none" style={{ fontSize: "16px", fontWeight: "600" }}>
                                            ₹{p.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 md:mt-15 ml-0 md:ml-10 gap-6 md:gap-8 lg:gap-10">
                    {/* LEFT TEXT SECTION */}
                    <div className="md:w-1/2 pl-2 md:pl-0">
                        <p
                            className="font-semibold hidden lg:block mt-30 leading-tight text-[22px] sm:text-[26px] md:text-3xl lg:text-4xl"
                            style={{ fontWeight: 500 }}
                        >
                            We are Building <br /> Path for you
                        </p>
                        {/* Mobile */}
                        <p
                            className="font-bold text-black block lg:hidden leading-tight text-[14px] sm:text-[26px]"
                        >
                            We are Building Path for you
                        </p>

                        {/* Desktop */}
                        <p
                            className="text-black mt-2 md:mt-3 hidden lg:block leading-snug text-[16px] sm:text-lg md:text-xl lg:text-2xl"
                            style={{ fontWeight: 400 }}
                        >
                            an easy way of selling <br /> and purchase
                        </p>
                        {/* Mobile */}
                        <p
                            className="text-black mt-2 md:mt-3 block lg:hidden leading-snug text-[14px] sm:text-lg md:text-xl lg:text-2xl"
                            style={{ fontWeight: 400 }}
                        >
                            an easy way of selling and purchase
                        </p>
                    </div>

                    {/* RIGHT GRID SECTION */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 rounded-xl p-2 sm:p-3 md:p-4 w-full max-w-[517px] overflow-hidden">
                        {/* CARD — REUSABLE STYLE */}
                        {[
                            {
                                num: "01",
                                text: "Trusted and authorized Propertys",
                                img: "/image/footerrect1.png",
                            },
                            {
                                num: "02",
                                text: "User Recommendation for better feed",
                                img: "/image/footerrect2.png",
                            },
                            {
                                num: "03",
                                text: "In Your budget with category Selection",
                                img: "/image/footerrect3.png",
                            },
                            {
                                num: "04",
                                text: "Clear detail about the property Retail Service",
                                img: "/image/footerrect4.png",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-2 sm:p-3 md:p-4 text-purple-700 font-semibold bg-white/50 backdrop-blur-lg relative 
                                     h-[110px] sm:h-[130px] md:h-[150px] lg:h-[180px] overflow-hidden"
                            >
                                <Image
                                    src={item.img}
                                    alt="rectangular background"
                                    fill
                                    className="absolute object-cover rounded-2xl"
                                />

                                <div className="relative z-10">
                                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">
                                        {item.num}
                                    </p>

                                    <p className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-[18px] ml-10 font-medium text-purple-800 leading-snug break-words">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}




