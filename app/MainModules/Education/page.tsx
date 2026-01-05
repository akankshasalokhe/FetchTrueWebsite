'use client';


import Recommendation from '@/src/components/Education/Recommended';
import TopPicks from '@/src/components/Education/TopPick';
import TopPopular from '@/src/components/Education/TopPopular';
import BestSeller from '@/src/components/Education/BestSeller'
import { useState, useRef, useEffect } from 'react';
import WhyChooseUs from '@/src/components/Education/WhyChooseUs';
import {useRouter} from 'next/navigation';

export default function EducationModulePage() {

    const categories = [
        { label: "Personal Development", path: "/image/personaldevelopment.png" },
        { label: "Development", path: "/image/Development.png" },
        { label: "IT&Software", path: "/image/it.png" },
        { label: "Finance Development", path: "/image/Finance.png" },
        { label: "Teaching&Software", path: "/image/Teaching&Software.png" },
        { label: "Business", path: "/image/Business.png" },
        { label: "Marketing", path: "/image/Marketing.png" },
        { label: "Music", path: "/image/Music.png" },
        { label: "Design", path: "/image/Design.png" },
        { label: "Health&Fitness", path: "/image/Health.png" },
        { label: "Photography & Video", path: "/image/Photography.png" },
        { label: "Lifestyle", path: "/image/Lifestyle.png" },
    ]

    const sliderRef = useRef<HTMLDivElement>(null);

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const baseSlides = chunkArray(categories, 6);

    const slides = [
        baseSlides[baseSlides.length - 1], // clone last
        ...baseSlides,
        baseSlides[0], // clone first
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
        }
    }, []);



    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const slideWidth = el.offsetWidth;
        let intervalId: NodeJS.Timeout;

        const startAutoSwipe = () => {
            intervalId = setInterval(() => {
                el.scrollTo({
                    left: el.scrollLeft + slideWidth,
                    behavior: "smooth",
                });
            }, 2500); // pause duration between swipes
        };

        startAutoSwipe();

        return () => clearInterval(intervalId);
    }, []);


    const router = useRouter()
    
    const toSlug = (text: string) =>
        text.toLowerCase().trim().replace(/\s+/g, "-");




    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="w-full px-4 md:px-8 mt-4 md:mt-10">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-4 rounded-xl w-full">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 lg:gap-5">
                            <img
                                src="/image/Group 2.png"
                                className="w-[26px] h-[30px] lg:w-[34.36px] lg:h-[42.95px]
                 filter hue-rotate-[140deg] saturate-200 brightness-105"
                                alt="Home"
                            />

                            <img
                                src="/image/educationback.png"
                                className="hidden md:block w-[16px] h-[14px] lg:w-[38.6px] lg:h-[35.02px]"
                                alt="Back"
                            />
                            <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#000000] ">
                                Education Service
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <img
                            src="/image/educationbookmark.png"
                            className="w-[13px] h-[19.03px] md:w-[18.61px] md:h-[27.25px]"
                            alt="Bookmark"
                        />
                    </div>
                </div>
            </section>


            <section className="relative w-full mt-10 md:mt-20 px-5 md:px-8">

                {/* ================= MOBILE LAYOUT ================= */}
                {/* ===== HERO SECTION ===== */}
                <section className="relative w-full mt-5 px-1 md:hidden">
                    <div className="flex items-start gap-4">

                        {/* TEXT CARD */}
                        <div className="bg-white rounded-2xl p-4 w-[62%]">
                            <p className="font-semibold text-[16px] leading-snug">
                                Empowering <span className="text-[#FA9131]">Learners.</span><br />
                                Connecting You to Trusted<br />
                                Education Services.
                            </p>

                            <p className="text-[12px] mt-5 leading-relaxed">
                                Find the right courses, tutors, institutes, skills programs, and
                                educational support —
                            </p>

                            <p className="text-[10px] mt-20 font-semibold">
                                @ all in one easy platform.
                            </p>
                        </div>

                        {/* IMAGES */}
                        <div className="flex flex-col gap-3 w-[38%]">
                            <img
                                src="/image/edufirstimage.png"
                                alt="first"
                                className="w-full h-[120px] rounded-2xl object-cover"
                            />
                            <img
                                src="/image/edusecondimage.png"
                                alt="second"
                                className="w-full h-[200px] rounded-2xl object-cover"
                            />
                        </div>

                    </div>

                    <div className='w-full mt-5'>
                        <img src="/image/eduthirdimage.png" alt="thirdimage" className='object-cover w-[358opx] h-[200px] rounded-lg' />
                    </div>
                </section>


                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:flex items-start justify-between">

                    {/* LEFT TEXT */}
                    <div className="max-w-[60%]">
                        <p className="font-semibold text-[46px] leading-tight">
                            Empowering <span className="text-[#FA9131]">Learners.</span><br />
                            Connecting You to Trusted<br />
                            Education Services.
                        </p>

                        <p className="text-[36px] mt-15 leading-snug">
                            Find the right courses, tutors,<br />
                            institutes, skills programs, and<br />
                            educational support —
                        </p>

                        <p className="text-[24px] mt-30 font-semibold">
                            @ all in one easy platform.
                        </p>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="flex gap-6">
                        <div className='mt-45'>


                            <img
                                src="/image/edufirstimage.png"
                                className="w-[300px] h-[352px] rounded-2xl object-cover"
                                alt="first"
                            />
                        </div>
                        <img
                            src="/image/edusecondimage.png"
                            className="w-[300px] h-[530px] rounded-2xl object-cover"
                            alt="second"
                        />
                    </div>



                </div>
            </section>


            <section className="relative w-full mt-10 px-4 md:px-8 bg-gray-100">
                <h1 className="text-[16px] font-semibold md:text-[24px] mb-5 ">Category</h1>

                {/* ================= DESKTOP (UNCHANGED) ================= */}

                <div className="hidden md:flex flex-wrap gap-15 rounded-lg">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                             onClick={() =>
                                router.push(`/MainModules/Education/${toSlug(item.label)}`)
                            }
                            className="flex flex-col mb-5 items-center p-3 bg-white/100 rounded-lg w-[120px]"
                        >
                            <img
                                src={item.path}
                                alt={item.label}
                                className="w-[73.16px] h-[73.16px] object-contain"
                            />

                            <span className="mt-2 text-[12px] font-medium text-center leading-tight break-words">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>




                {/*  ================= MOBILE CATEGORY SWIPE =================  */}
                <section className="md:hidden w-full mt-6">
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth"
                        onScroll={() => {
                            const el = sliderRef.current;
                            if (!el) return;

                            const slideWidth = el.offsetWidth;
                            const index = Math.round(el.scrollLeft / slideWidth);

                            // LEFT CLONE
                            if (index === 0) {
                                el.scrollLeft = slideWidth * baseSlides.length;
                                setActiveIndex(baseSlides.length - 1);
                                return;
                            }

                            // RIGHT CLONE
                            if (index === slides.length - 1) {
                                el.scrollLeft = slideWidth;
                                setActiveIndex(0);
                                return;
                            }

                            setActiveIndex(index - 1);
                        }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="min-w-full snap-center px-4">
                                <div className="grid grid-cols-3 gap-4">
                                    {slide.map((item, i) => (
                                        <div
                                            key={i}
                                             onClick={() =>
                                router.push(`/MainModules/Education/${toSlug(item.label)}`)
                             }
                                            className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
                                        >
                                            <img
                                                src={item.path}
                                                alt={item.label}
                                                className="w-[73px] h-[73px] object-contain"
                                            />
                                            <span className="mt-2 text-[12px] text-center">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* INDICATORS (REAL SLIDES ONLY) */}
                    <div className="flex justify-center gap-2 mt-4">
                        {baseSlides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-[3px] rounded-full transition-all duration-300 ${activeIndex === i
                                    ? "w-8 bg-[#FA9131]"
                                    : "w-4 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </section>


            </section>

            <section className='relative w-full'>
                <TopPopular />
                <Recommendation />
                <TopPicks />
                <BestSeller />
                <WhyChooseUs />
            </section>

        </>
    )
}