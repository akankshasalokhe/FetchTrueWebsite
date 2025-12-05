// 'use client';

// import Image from "next/image";
// import { Bookmark } from "lucide-react";

// export default function TopTrending() {
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
//         },
//     ];

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//             {properties.map((p) => (
//                 <div
//                     key={p.id}
//                     className="relative w-full max-w-sm rounded-2xl p-3 shadow-md text-white"
//                     style={{ background: p.bgColor }}
//                 >

//                     {/* IMAGE SECTION */}
//                     <div className="relative w-full h-40 rounded-xl ">
//                         <Image
//                             src={p.image}
//                             alt="Property"
//                             fill
//                             className="object-cover"
//                         />

//                         {/* Trusted Badge */}
//                         <span className="absolute top-2 left-2 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg shadow">
//                             Trusted
//                         </span>

//                         {/* Bookmark Icon */}
//                         <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full">
//                             <Bookmark size={18} className="text-white" />
//                         </button>


//                         <div className="absolute bottom-[-88px] right-[-1px] bg-white p-1 rounded-2xl shadow-lg flex flex-col items-center
//                                 ">
//                             <Image
//                                 src="/mockup/propertyicon.png"
//                                 alt="icon"
//                                 width={90}
//                                 height={90}
//                                 className="object-contain"
//                             />

//                             <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                 {"⭐".repeat(p.rating)}
//                             </div>
//                         </div>



//                     </div>

//                     {/* CONTENT SECTION */}
//                     <div className="mt-8 space-y-1">
//                         <h2 className="text-lg font-semibold">{p.title}</h2>
//                         <p className="text-sm opacity-90">{p.type}</p>

//                         <div className="bg-white/20 rounded-xl p-6 mt-3">
//                             {/* Location Row */}
//                             <div className="flex items-start justify-between w-full">
//                                 <div>
//                                     <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                     <p className="text-sm opacity-95 flex items-center gap-1">
//                                         📍 {p.location}
//                                     </p>
//                                 </div>

//                                 <div className="flex flex-col gap-2 items-end">
//                                     <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-lg">
//                                         Earn Up to {p.earning}
//                                     </span>
//                                     <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
//                                         {p.discount} Discount
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Details */}
//                             <div className="mt-3 text-sm opacity-95 space-y-1">
//                                 <p>Details</p>
//                                 <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                 <p>Number Outlet: <b>{p.outlets}</b></p>
//                                 <p>Area: <b>{p.area}</b></p>
//                             </div>
//                         </div>

//                         {/* PRICE */}
//                         {/* PRICE – floating cut shape */}
//                         <div className="relative">
//                             <div
//                                 className="
//             absolute
//             -bottom-4      /* pulls price OUT of the card */
//             -right-4       /* cuts it inside the corner */
//             bg-white
//             text-black
//             font-semibold
//             px-5
//             py-2
//             rounded-2xl
//             shadow-lg
//             z-20
//         "
//                             >
//                                 ₹{p.price}
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             ))}
//         </div>
//     );
// }







// 'use client';

// import Image from "next/image";
// import { Bookmark } from "lucide-react";

// export default function TopTrending() {
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
//         },
//     ];

//     return (


//         <div className="flex gap-6 p-6 overflow-x-auto overflow-y-hidden
//                 snap-x snap-mandatory scroll-smooth no-scrollbar">


//             {properties.map((p) => (
//                 <div
//                     key={p.id}
//                     className="snap-center flex-shrink-0 w-[85%] sm:w-[70%] md:w-[380px] 
//                        relative rounded-2xl p-3 shadow-md text-white overflow-hidden"
//                     style={{ background: p.bgColor }}
//                 >

//                     {/* IMAGE SECTION */}

//                     <div className="relative w-full h-40 rounded-xl">
//                         <Image
//                             src={p.image}
//                             alt="Property"
//                             fill
//                             className="object-cover rounded-xl"
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         />

//                         {/* Trusted Badge */}
//                         <span className="absolute top-2 left-2 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg shadow">
//                             Trusted
//                         </span>

//                         {/* Bookmark Icon */}
//                         <button className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors">
//                             <Bookmark size={18} className="text-white" />
//                         </button>

//                         {/* Rating Icon Overlay */}
//                         <div className="absolute -bottom-9 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
//                             <Image
//                                 src="/mockup/propertyicon.png"
//                                 alt="icon"
//                                 width={80}
//                                 height={80}
//                                 className="object-contain"
//                             />
//                             <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
//                                 {"⭐".repeat(p.rating)}
//                             </div>
//                         </div>
//                     </div>

//                     {/* CONTENT SECTION */}
//                     <div className="mt-12 space-y-1">
//                         <h2 className="text-lg font-semibold">{p.title}</h2>
//                         <p className="text-sm opacity-90">{p.type}</p>

//                         <div className="bg-white/20 rounded-xl p-4 mt-3">
//                             {/* Location Row */}
//                             <div className="flex items-start justify-between w-full">
//                                 <div className="flex-1">
//                                     <h3 className="text-sm font-semibold mb-1">Location</h3>
//                                     <p className="text-sm opacity-95 flex items-center gap-1">
//                                         📍 {p.location}
//                                     </p>
//                                 </div>

//                                 <div className="flex flex-col gap-2 items-end ml-4">
//                                     <span className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                         Earn Up to {p.earning}
//                                     </span>
//                                     <span className="bg-green-300 text-black text-xs px-2 py-1 rounded-lg font-semibold">
//                                         {p.discount} Discount
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Details */}
//                             <div className="mt-3 text-sm opacity-95 space-y-1">
//                                 <p className="font-medium">Details</p>
//                                 <p>Monthly Earning Potential: <b>{p.monthlyEarning}</b></p>
//                                 <p>Number Outlet: <b>{p.outlets}</b></p>
//                                 <p>Area: <b>{p.area}</b></p>
//                             </div>
//                         </div>

//                         {/* PRICE - Corner cut effect */}
//                         <div className="relative h-0">
//                             <div className="
//                                 absolute
//                                 bottom-2      /* Pulls price out of the card */
//                                 right-0       /* Cuts into the corner */
//                                 bg-white
//                                 text-black
//                                 font-bold
//                                 text-lg
//                                 px-6
//                                 py-3
//                                 rounded-2xl
//                                 shadow-lg
//                                 z-20
//                                 border-4
//                                 border-transparent
//                                 clip-path-corner
//                             ">
//                                 ₹{p.price}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }



'use client';

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function TopTrending() {
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
            monthlyEarning: "10-20 Lac",
            outlets: 10,
            area: "1500 Sq - 1000 Sq",
            price: "45L",
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
            monthlyEarning: "12-22 Lac",
            outlets: 14,
            area: "1800 Sq - 1200 Sq",
            price: "72L",
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
            monthlyEarning: "8-15 Lac",
            outlets: 7,
            area: "1300 Sq - 900 Sq",
            price: "89L",
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
            monthlyEarning: "6-12 Lac",
            outlets: 6,
            area: "900 Sq - 700 Sq",
            price: "38L",
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
            monthlyEarning: "8-18 Lac",
            outlets: 12,
            area: "1100 Sq - 850 Sq",
            price: "55L",
        },
    ];

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Calculate max scroll
    const getMaxScroll = () => {
        if (!containerRef.current) return 0;
        return containerRef.current.scrollWidth - containerRef.current.clientWidth;
    };

    // Handle mouse/touch drag with boundary checks
    const handleMouseDown = (e) => {
        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.pageX - rect.left);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            const container = containerRef.current;
            container.style.cursor = 'grab';
            container.style.removeProperty('user-select');
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const container = containerRef.current;
        container.style.cursor = 'grab';
        container.style.removeProperty('user-select');

        // Snap to nearest card
        const cardWidth = container.querySelector('.snap-center')?.offsetWidth || 300;
        const gap = 24; // gap-6 = 24px
        const scrollPos = container.scrollLeft;
        const cardCount = Math.round(scrollPos / (cardWidth + gap));

        container.scrollTo({
            left: cardCount * (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.pageX - rect.left;
        const walk = (x - startX) * 1.5; // Reduced multiplier for smoother control

        // Calculate new scroll position
        let newScrollLeft = scrollLeft - walk;
        const maxScroll = getMaxScroll();

        // Apply boundaries
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

        container.scrollLeft = newScrollLeft;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        setStartX(e.touches[0].pageX - rect.left);
        setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].pageX - rect.left;
        const walk = (x - startX) * 1.5;

        let newScrollLeft = scrollLeft - walk;
        const maxScroll = getMaxScroll();
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

        container.scrollLeft = newScrollLeft;
    };

    // Add event listeners
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleMouseUp);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div className="relative w-full overflow-hidden p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4 ml-6 md:mb-6 md:ml-8">Top Trending</h1>

            {/* SWIPEABLE CONTAINER - FIXED FOR ALL SCREEN SIZES */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-16 p-4 md:p-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab min-w-0"
            >
                {properties.map((p) => (
                    <div
                        key={p.id}
                        className="snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[338px] 
                               relative rounded-2xl p-3 shadow-md text-white overflow-hidden select-none
                               flex-grow-0 flex-shrink-0"
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

                            <span className="absolute top-2 left-2 bg-white text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg shadow">
                                Trusted
                            </span>

                            <button
                                className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors z-10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Bookmark size={18} className="text-white" />
                            </button>

                            <div className="absolute -bottom-9 right-0 bg-white p-2 rounded-2xl shadow-lg flex flex-col items-center">
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

                            <div className="card-cut p-4 mt-3 bg-white/20 relative">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold mb-1">Location</h3>
                                        <p className="text-xs opacity-95 font-inter flex items-center gap-1">
                                            📍 {p.location}
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
                                    <p>Number Outlet: <b>{p.outlets}</b></p>
                                    <p>Area: <b>{p.area}</b></p>
                                </div>
                            </div>

                            <div className="relative h-0">
                                <div
                                    className="absolute bottom-2 right-0 bg-white text-black font-bold text-lg px-6 py-3 rounded-2xl shadow-lg z-20 pointer-events-none"
                                >
                                    ₹{p.price}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Add right padding spacer for mobile */}
                <div className="md:hidden min-w-4 flex-shrink-0"></div>
            </div>
        </div>
    );
}