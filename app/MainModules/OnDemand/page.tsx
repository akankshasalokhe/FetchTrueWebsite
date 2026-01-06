// 'use client';


// import { useState, useRef, useEffect } from 'react';

// import { useRouter } from 'next/navigation';
// import RecommendedProvider from '@/src/components/OnDemandHomeComponents/RecommendedProvider';
// import MostPopularProvider from '@/src/components/OnDemandHomeComponents/MostPopularProvider';
// import TopTrending from '@/src/components/OnDemandHomeComponents/TopTrending';
// import WhyChooseUs from '@/src/components/OnDemandHomeComponents/WhyChooseUs';

// export default function OnDemandModulePage() {

//     const categories = [
//         { label: "Personal Development", path: "/image/personaldevelopment.png" },
//         { label: "Development", path: "/image/Development.png" },
//         { label: "IT & Software", path: "/image/it.png" },
//         { label: "Finance Development", path: "/image/Finance.png" },
//         { label: "Teaching & Software", path: "/image/Teaching&Software.png" },
//         { label: "Business", path: "/image/Business.png" },
//         { label: "Marketing", path: "/image/Marketing.png" },
//         { label: "Music", path: "/image/Music.png" },
//         { label: "Business", path: "/image/Business.png" },
//         { label: "Marketing", path: "/image/Marketing.png" },
//         { label: "Music", path: "/image/Music.png" },
//         { label: "Design", path: "/image/Design.png" },
//         { label: "Health & Fitness", path: "/image/Health.png" },
//         { label: "Photography & Video", path: "/image/Photography.png" },
//         { label: "Lifestyle", path: "/image/Lifestyle.png" },
//         { label: "Personal Development", path: "/image/personaldevelopment.png" },
//         { label: "Development", path: "/image/Development.png" },
//         { label: "IT & Software", path: "/image/it.png" },
//         { label: "Finance Development", path: "/image/Finance.png" },
//         { label: "Teaching & Software", path: "/image/Teaching&Software.png" },
//         { label: "Business", path: "/image/Business.png" },
//         { label: "Marketing", path: "/image/Marketing.png" },
//         { label: "Music", path: "/image/Music.png" },
//         { label: "Design", path: "/image/Design.png" },
//         { label: "Health & Fitness", path: "/image/Health.png" },
//         { label: "Photography & Video", path: "/image/Photography.png" },
//         { label: "Lifestyle", path: "/image/Lifestyle.png" },
//     ]

//     const sliderRef = useRef<HTMLDivElement>(null);

//     const chunkArray = <T,>(arr: T[], size: number): T[][] => {
//         const chunks: T[][] = [];
//         for (let i = 0; i < arr.length; i += size) {
//             chunks.push(arr.slice(i, i + size));
//         }
//         return chunks;
//     };

//     const baseSlides = chunkArray(categories, 9);

//     const slides = [
//         baseSlides[baseSlides.length - 1], // clone last
//         ...baseSlides,
//         baseSlides[0], // clone first
//     ];


//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (sliderRef.current) {
//             sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
//         }
//     }, []);



//     useEffect(() => {
//         const el = sliderRef.current;
//         if (!el) return;

//         const slideWidth = el.offsetWidth;
//         let intervalId: NodeJS.Timeout;

//         const startAutoSwipe = () => {
//             intervalId = setInterval(() => {
//                 el.scrollTo({
//                     left: el.scrollLeft + slideWidth,
//                     behavior: "smooth",
//                 });
//             }, 2500); // pause duration between swipes
//         };

//         startAutoSwipe();

//         return () => clearInterval(intervalId);
//     }, []);


//     const router = useRouter()
//     const [searchQuery, setSearchQuery] = useState("");


//     const toSlug = (text: string) =>
//         text.toLowerCase().trim().replace(/\s+/g, "-");




//     return (
//         <>
//             <section className="relative w-screen lg:h-[662px]"
//                 style={{ backgroundImage: 'url("/image/OnDemandnavbg1.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                 {/* ===== NAVBAR ===== */}
//                  <div className="absolute inset-0 p-12  w-screen lg:h-[590px]"
//                     style={{ backgroundImage: 'url("/image/OnDemandnavbg2.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>



//                     <div className="flex items-center justify-between p-4 rounded-xl w-full">
//                         {/* LEFT */}
//                         <div className="flex items-center gap-3 lg:gap-5">
//                             <img
//                                 src="/image/OnDemandnavhome.png"
//                                 className="w-[26px] h-[30px] lg:w-[34px] lg:h-[42px] object-cover
//                   bg-white rounded-full "
//                                 alt="Home"
//                             />


//                             <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
//                                 Finance Service
//                             </h1>
//                         </div>

//                         {/* RIGHT */}
//                         {/* Search Box */}
//                         <div className='gap-8 flex'>
//                             <div className="relative w-full md:w-[330px] lg:w-[520px]">
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}

//                                     className="
//                                 w-full
//                                 rounded-full bg-white
//                                 border border-gray-300
//                                 px-10 py-2
//                                 text-sm mr-[150px]
//                                 outline-none
//                                 focus:border-blue-500
//                                 "
//                                 />
//                                 {/* search icon */}
//                                 <span className="absolute left-3 top-1/2 -translate-y-3.5 text-gray-400">
//                                     <img src="/image/itsearch.png" alt="searchicon" className='w-[20.66px] h-[18.66px] text-[#009ABF]' />
//                                 </span>
//                             </div>

//                             <div className='bg-white rounded-full justify-center md:p-2 flex'>
//                                 <img
//                                     src="/image/educationbookmark.png"
//                                     className="w-[18px] h-[22px] object-fit md:w-[20px] lg:p-1 md:h-[20px] lg:w-[22px] lg:h-[26px] object-cover"
//                                     alt="Bookmark"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>





//             <section className="relative w-full mt-10 px-4 md:px-8 mb-8">
//                 <h1 className="text-[16px] font-semibold md:text-[24px] mb-5 ">Category</h1>

//                 {/* ================= DESKTOP (UNCHANGED) ================= */}


//                 <div className="hidden md:block overflow-x-auto scrollbar-hide">
//                     <div
//                         className="
//                         grid
//                         grid-rows-2
//                         grid-flow-col
//                         gap-8
//                         px-2
//                         min-w-[1800px]
//                         "
//                     >
//                         {categories.map((item, index) => (
//                             <div
//                                 key={index}
//                                 // onClick={() =>
//                                 //     router.push(`/MainModules/Education/${toSlug(item.label)}`)
//                                 // }
//                                 className="flex flex-col items-center w-[120px] cursor-pointer"
//                             >
//                                 <img
//                                     src={item.path}
//                                     alt={item.label}
//                                     className="w-[73.16px] h-[73.16px] object-contain bg-[#FFF6EF] rounded-lg p-2"
//                                 />

//                                 <span className="mt-2 text-[12px] font-medium text-center leading-tight break-words">
//                                     {item.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>




//                 {/*  ================= MOBILE CATEGORY SWIPE =================  */}
//                 <section className="md:hidden w-full mt-6">
//                     <div
//                         ref={sliderRef}
//                         className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth"
//                         onScroll={() => {
//                             const el = sliderRef.current;
//                             if (!el) return;

//                             const slideWidth = el.offsetWidth;
//                             const index = Math.round(el.scrollLeft / slideWidth);

//                             // LEFT CLONE
//                             if (index === 0) {
//                                 el.scrollLeft = slideWidth * baseSlides.length;
//                                 setActiveIndex(baseSlides.length - 1);
//                                 return;
//                             }

//                             // RIGHT CLONE
//                             if (index === slides.length - 1) {
//                                 el.scrollLeft = slideWidth;
//                                 setActiveIndex(0);
//                                 return;
//                             }

//                             setActiveIndex(index - 1);
//                         }}
//                     >
//                         {slides.map((slide, slideIndex) => (
//                             <div key={slideIndex} className="min-w-full snap-center px-4">
//                                 <div className="grid grid-cols-3 grid-rows-3 gap-4">
//                                     {slide.map((item, i) => (
//                                         <div
//                                             key={i}
//                                             onClick={() =>
//                                                 router.push(`/MainModules/Education/${toSlug(item.label)}`)
//                                             }
//                                             className="flex flex-col items-center  rounded-lg p-2"
//                                         >
//                                             <img
//                                                 src={item.path}
//                                                 alt={item.label}
//                                                 className="w-[73px] h-[73px] object-contain bg-[#FFF6EF] rounded-lg p-2"
//                                             />
//                                             <span className="mt-2 text-[12px] text-center  font-medium leading-tight break-words">
//                                                 {item.label}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* INDICATORS (REAL SLIDES ONLY) */}
//                     {/* <div className="flex justify-center gap-2 mt-4">
//                         {baseSlides.map((_, i) => (
//                             <div
//                                 key={i}
//                                 className={`h-[3px] rounded-full transition-all duration-300 ${activeIndex === i
//                                     ? "w-8 bg-[#FA9131]"
//                                     : "w-4 bg-gray-300"
//                                     }`}
//                             />
//                         ))}
//                     </div> */}
//                 </section>


//             </section>

//             <section className='relative w-full'>
//                 <RecommendedProvider />
//                 <MostPopularProvider />
//                 <TopTrending />
//                 <WhyChooseUs />
//             </section>

//         </>
//     )
// }







'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import RecommendedProvider from '@/src/components/OnDemandHomeComponents/RecommendedProvider';
import MostPopularProvider from '@/src/components/OnDemandHomeComponents/MostPopularProvider';
import TopTrending from '@/src/components/OnDemandHomeComponents/TopTrending';
import WhyChooseUs from '@/src/components/OnDemandHomeComponents/WhyChooseUs';

export default function OnDemandModulePage() {
    const categories = [
        { label: "Lifestyle", path: "/image/Lifestyle.png" },
        { label: "Personal Development", path: "/image/personaldevelopment.png" },
        { label: "Development", path: "/image/Development.png" },
        { label: "IT & Software", path: "/image/it.png" },
        { label: "Finance Development", path: "/image/Finance.png" },
        { label: "Teaching & Software", path: "/image/Teaching&Software.png" },
        { label: "Music", path: "/image/Music.png" },
        { label: "Design", path: "/image/Design.png" },
        { label: "Health & Fitness", path: "/image/Health.png" },
        { label: "Photography & Video", path: "/image/Photography.png" },
        { label: "Lifestyle", path: "/image/Lifestyle.png" },
        { label: "Personal Development", path: "/image/personaldevelopment.png" },
        { label: "Development", path: "/image/Development.png" },
        { label: "IT & Software", path: "/image/it.png" },
        { label: "Finance Development", path: "/image/Finance.png" },
        { label: "Teaching & Software", path: "/image/Teaching&Software.png" },
        { label: "Business", path: "/image/Business.png" },
        { label: "Marketing", path: "/image/Marketing.png" },
        { label: "Music", path: "/image/Music.png" },
        { label: "Design", path: "/image/Design.png" },
        { label: "Health & Fitness", path: "/image/Health.png" },
        { label: "Photography & Video", path: "/image/Photography.png" },
        { label: "Lifestyle", path: "/image/Lifestyle.png" },
    ];

    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const baseSlides = chunkArray(categories, 9);
    const slides = [
        baseSlides[baseSlides.length - 1],
        ...baseSlides,
        baseSlides[0],
    ];

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);

    const toSlug = (text: string) =>
        text.toLowerCase().trim().replace(/\s+/g, "-");


    const scrollRef = useRef<HTMLDivElement>(null);

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft = scrollRef.current?.scrollLeft || 0;
    };

    const onMouseLeave = () => {
        isDown = false;
    };

    const onMouseUp = () => {
        isDown = false;
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section
                className="relative w-screen lg:h-[662px]"
                style={{
                    backgroundImage: 'url("/image/OnDemandnavbg1.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* SECOND IMAGE AS IMG (FIXED) */}
                <div className="absolute inset-0 ">
                    <div className="relative h-[700px] max-w-8xl">
                        <img
                            src="/image/OnDemandnavbg4.png"
                            alt="Navbar Background"
                            className="w-full h-full object-fit"
                        />

                        <div className="absolute inset-0 mt-65 ml-18 text-[32px]">
                            On-Demand Services, <br />
                            When You Need Them

                            <div className="text-[16px] w-[350px]">
                                Book trusted professionals instantly. Fast response, transparent pricing, stress-free service.
                            </div>
                        </div>

                        <div className='absolute inset-0 flex -ml-30'>
                            <img src='/image/OnDemandgroupimage.png' alt="group image" className='object-contain ml-auto w-[580px] h-[500px] p-6 mt-40 mr-30' />
                        </div>



                        {/* NAV CONTENT */}
                        <div className="absolute inset-0 flex items-start p-12">
                            <div className="flex items-center justify-between p-4 w-full">
                                {/* LEFT */}
                                <div className="flex items-center gap-3 lg:gap-5">
                                    <img
                                        src="/image/OnDemandnavhome.png"
                                        className="w-[26px] h-[30px] lg:w-[34px] lg:h-[42px] bg-white rounded-full"
                                        alt="Home"
                                    />
                                    <h1 className="text-[18px] lg:text-[24px] font-semibold">
                                        Finance Service
                                    </h1>
                                </div>

                                {/* RIGHT */}
                                <div className="flex gap-6">
                                    <div className="relative w-[220px] md:w-[330px] lg:w-[520px]">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                                        />
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                            <img
                                                src="/image/itsearch.png"
                                                className="w-[20px] h-[18px]"
                                                alt="Search"
                                            />
                                        </span>
                                    </div>

                                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                                        <img
                                            src="/image/educationbookmark.png"
                                            className="w-[18px] h-[22px] lg:w-[22px] lg:h-[26px]"
                                            alt="Bookmark"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* ================= CATEGORY ================= */}
            <section className="relative w-full mt-10 px-4 md:px-8 mb-8">
                <h1 className="text-[16px] md:text-[24px] font-semibold mb-5">
                    Category
                </h1>

                {/* DESKTOP */}
                <div className="hidden md:block overflow-x-auto scrollbar-hide">
                    <div className="grid grid-rows-2 grid-flow-col gap-2 max-w-8xl">
                        {categories.map((item, index) => (
                            <div key={index} className="flex flex-col items-center w-[120px]">
                                <img
                                    src={item.path}
                                    alt={item.label}
                                    className="w-[73px] h-[73px] object-contain bg-[#FFF6EF] rounded-lg p-2"
                                />
                                <span className="mt-2 text-[12px] font-medium text-center">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE */}
                <div
                    ref={sliderRef}
                    className="md:hidden flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
                >
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="min-w-full snap-center px-4">
                            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                {slide.map((item, i) => (
                                    <div
                                        key={i}
                                        onClick={() =>
                                            router.push(`/MainModules/Education/${toSlug(item.label)}`)
                                        }
                                        className="flex flex-col items-center"
                                    >
                                        <img
                                            src={item.path}
                                            alt={item.label}
                                            className="w-[73px] h-[73px] object-contain bg-[#FFF6EF] rounded-lg p-2"
                                        />
                                        <span className="mt-2 text-[12px] font-medium text-center">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= OTHER SECTIONS ================= */}
            <section className="relative w-full">
                <RecommendedProvider />
                <MostPopularProvider />
                <TopTrending />
                <WhyChooseUs />
            </section>
        </>
    );
}
