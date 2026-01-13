'use client';


import { useParams } from 'next/navigation';
import Recommendation from '@/src/components/Education/Recommended';
import TopPicks from '@/src/components/Education/TopTrending';
import MostPopular from '@/src/components/Education/MostPopular';
import { useState, useRef, useEffect } from 'react';
import WhyChooseUs from '@/src/components/Education/WhyChooseUs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';


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

    const BannerData = [
        { label: "Image 1", path: "/image/Educationbanner.png" },
        { label: "Image 2", path: "/image/Educationbanner.png" },
        { label: "Image 3", path: "/image/Educationbanner.png" },
        { label: "Image 4", path: "/image/Educationbanner.png" },
    ]

    const sliderRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");

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
    const params = useParams();
    const moduleId = params.moduleId as string;
    console.log("module id:", moduleId)

    const toSlug = (text: string) =>
        text.toLowerCase().trim().replace(/\s+/g, "-");

    const bannerRef = useRef<HTMLDivElement>(null);
    const [bannerIndex, setBannerIndex] = useState(0);

    const banners = [...BannerData, ...BannerData];

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!bannerRef.current) return;

        bannerRef.current.style.transition = "transform 0.7s ease-in-out";
        bannerRef.current.style.transform = `translateX(-${bannerIndex * 50}%)`;

        // RESET WITHOUT WHITE GAP
        if (bannerIndex === BannerData.length) {
            setTimeout(() => {
                if (!bannerRef.current) return;

                bannerRef.current.style.transition = "none";
                bannerRef.current.style.transform = "translateX(0%)";
                setBannerIndex(0);
            }, 700);
        }
    }, [bannerIndex]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const CARD_WIDTH = isMobile
        ? window.innerWidth
        : 665;

    return (
        <>
            <section className="relative w-full">
                {/* ===== NAVBAR ===== */}
                <div className="hidden md:hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-10">
                            <Link href="/">
                                <img src="/image/ITServiceSubCategorieshome.png" className="w-[30px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">Education Service</h1>
                        </div>

                        {/* SEARCH */}
                        <div className="flex items-center gap-4 mr-10">
                            {/* SEARCH */}
                            <div className="hidden md:block relative w-[260px] lg:w-[307px]">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                                      w-full
                                                      rounded-lg bg-white
                                                      border border-gray-300
                                                      px-10 py-2
                                                      text-sm
                                                      outline-none
                                                      focus:border-blue-500
                                                  "
                                />

                                {/* search icon */}
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <img
                                        src="/image/itsearch.png"
                                        alt="searchicon"
                                        className="w-[18px] h-[18px]"
                                    />
                                </span>
                            </div>

                            {/* BOOKMARK / LOCATION ICON */}
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[20px] cursor-pointer"
                            />
                        </div>


                    </div>

                </div>
            </section>

            {/* ================= NAVBAR MOBILE ================= */}
            <section>
                <div
                    className="
                                block md:block lg:hidden
                                w-full -mt-6 w-screen md:-mx-0 md:-mt-12
                                bg-[#E2E9F1]
                                flex flex-col
                                px-4 py-8 md:px-10 md:py-10
                                rounded-t
                                gap-3
                            "
                >
                    {/* ===== ROW 1: HEADER ===== */}
                    <div className="flex items-center justify-between">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <Link href="/MainModules/OnDemand">
                                <ChevronLeft className="w-[28px] h-[28px] text-black cursor-pointer bg-white rounded-full p-1 shrink-0" />
                            </Link>

                            <h1 className="text-[16px] font-semibold truncate">
                                {/* {formatSlugToTitle(slug)} */} Education Service
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shrink-0">
                            <img
                                src="/image/EducationServicebookmark.png"
                                className="w-[14px] h-[14px]"
                                alt="Bookmark"
                            />
                        </div>
                    </div>

                    {/* ===== ROW 2: SEARCH ===== */}
                    <div className="relative w-[90%] md:w-[95%] mx-auto ml-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full bg-white border border-gray-300 px-10 py-2 text-sm outline-none"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                            <img
                                src="/image/itsearch.png"
                                className="w-[18px] h-[16px]"
                                alt="Search"
                            />
                        </span>
                    </div>
                </div>
            </section>


            <section className="relative w-full mt-10 md:mt-20 px-5 md:px-8">



                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:flex w-full justify-center mb-10">
                    <div className="w-full max-w-6xl text-center">
                        <p className="font-semibold text-[32px] text-[#1C3D85] leading-tight">
                            Empowering Learners. Connecting You to <br /> Trusted Education Services.
                        </p>

                        <p className="lg:text-[24px] mt-6 leading-snug">
                            Find the right courses, tutors,
                            institutes, skills programs, and
                            educational support —
                        </p>
                    </div>
                </div>


                <div className="w-full overflow-hidden">
                    <div
                        ref={bannerRef}
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${bannerIndex * CARD_WIDTH}px)`
                        }}
                    >
                        {banners.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-2"
                                style={{
                                    width: isMobile ? "100vw" : "649px"
                                }}
                            >
                                <img
                                    src={item.path}
                                    alt={item.label}
                                    className={`
            object-cover rounded-2xl
            w-full
            h-[180px] md:h-[265px]
          `}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            <section className="relative w-full mt-2 p-22 bg-[#F8F9FA]">
                <h1 className="text-[16px] font-semibold md:text-[24px] mb-5">Category</h1>

                {/* ================= DESKTOP (UNCHANGED) ================= */}

                <div className="hidden md:flex flex-wrap gap-10 rounded-lg">
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
                <section className="md:hidden w-[300px] -ml-15 mt-6">
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
                            <div key={slideIndex} className="min-w-[400px] snap-center px-4">
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

            <section className='relative w-full bg-[#F8F9FA]'>
                <Recommendation moduleId={moduleId} />
                <MostPopular  moduleId={moduleId}/>
                <TopPicks moduleId={moduleId}/>
                <WhyChooseUs />
            </section>

        </>
    )
}