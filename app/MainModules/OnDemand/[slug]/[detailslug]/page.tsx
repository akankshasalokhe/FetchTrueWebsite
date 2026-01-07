"use client";


import AboutSection from "@/src/components/OnDemand/About";
import AssuredByFetchTrue from "@/src/components/OnDemand/AssuredByFetchTrue";
import Benefits from "@/src/components/OnDemand/Benefits";
import ConnectWith from "@/src/components/OnDemand/ConnectWith";
import Documents from "@/src/components/OnDemand/Documents";
import FAQs from "@/src/components/OnDemand/Faqs";
import HowItWorksSteps from "@/src/components/OnDemand/HowItWorks";
import Included from "@/src/components/OnDemand/Included";
import MoreInformation from "@/src/components/OnDemand/MoreInformation";
import SelectPackage from "@/src/components/OnDemand/Packages";
import RatingsReviews from "@/src/components/OnDemand/Reviews";
import SafetyandAssurance from "@/src/components/OnDemand/Safety&Assurance";
import TermsAndConditions from "@/src/components/OnDemand/TermsandConditions";
import WhyChooseUs from "@/src/components/OnDemand/WhyChooseUs";
import { ChevronLeft, ClockIcon, ZapIcon } from "lucide-react";
import Link from "next/link";


type CourseInfo = {
    title: string;
    subtitle: string;
    rating: number;
    reviews: string;
    price: string;
    originalPrice: number;
    discount: string;
    emi: number;
    level: string;
    lessons: number;
    commission: string;
};

const DATA: CourseInfo = {
    title: "Kitchen Deep Cleaning",
    subtitle: "On Demand Service",
    rating: 4.8,
    reviews: "2,400+ reviews",
    price: "3,999",
    originalPrice: 3499,
    discount: "12% Off",
    emi: 199,
    level: "Beginner",
    lessons: 72,
    commission: "Earn Up to 7%",
};

export default function ServiceDetails() {
    return (
        <>
            <section className="w-full bg-white">
                {/* ================= DESKTOP (UNCHANGED) ================= */}
                <div className="hidden mt-8 lg:flex gap-8 p-8 max-w-[1400px] mx-auto">
                    {/* <div className="w-[652px] h-[503px] rounded-xl overflow-hidden">
          
          <img
            src="/image/eduserbg.png"
            alt="course"
            className="w-full h-full object-cover"
          />
        </div> */}
                    <div className="flex flex-col gap-3">

                        {/* HEADER (ABOVE IMAGE) */}
                        <div className="flex items-center -mt-10 gap-3 ">
                            <Link href="/">
                                <ChevronLeft size={28} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-lg font-semibold">Service Details</h1>
                        </div>

                        {/* IMAGE */}
                        <div className="md:w-[652px] md:h-[503px] rounded-lg overflow-hidden">
                            <img
                                src="/image/ondemandnavbg.png"
                                alt="OnDemand"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    <div className="flex-1 space-y-4">
                        <h1 className="text-[40px] font-semibold whitespace-nowrap">{DATA.title}</h1>
                        <p className="text-gray-500 text-[24px]">{DATA.subtitle}</p>

                        <div className="flex items-center gap-2 text-[20px]">
                            <span className="text-yellow-500">★</span>
                            <span className="font-semibold">{DATA.rating}</span>
                            <span className="text-gray-500">({DATA.reviews})</span>
                        </div>
                        {/* 
                        <div className="gap-4 p-2 flex items-center">
                            <p className="md:text-[24px]">Starting -</p>
                            <span className="md:text-[36px] font-semibold">₹{DATA.price}</span>
                            <p className="text-[24px] text-[#2164F4]">View Packages</p>
                        </div> */}

                        <div className="flex items-center border border-gray-320 rounded-xl p-4 gap-2 text-sm mt-2">
                            <p className="md:text-[24px]">Starting -</p>
                            <span className="lg:text-[36px] font-semibold"> ₹{DATA.price}</span>
                            <span className="line-through text-gray-400">
                                ₹{DATA.originalPrice}
                            </span>
                            <span className="text-[#281A83]">{DATA.discount}</span>
                        </div>


                        <div className="rounded-xl p-5 border border-gray-500 flex justify-between items-center">
                            <div className="space-y-4">
                                <p className="font-semibold text-[24px]">Franchise Commission</p>
                                <p className="text-green-600 text-[32px] font-semibold">
                                    {DATA.commission}
                                </p>
                            </div>
                            <button className="text-[#281A83] text-[24px] mt-10 flex items-center gap-1">
                                T&amp;C <span className="text-[24px]">›</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= MOBILE VERSION ================= */}
                <div className="lg:hidden">
                    {/* IMAGE */}

                    <div className="relative flex flex-col mx-4 mt-12 rounded-xl overflow-hidden">
                        {/* Header ABOVE image */}
                        <div className="flex items-center gap-3 mb-3">
                            <Link href="/MainModules/Education">
                                <ChevronLeft size={28} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-lg font-semibold">Service Details</h1>
                        </div>

                        {/* Image */}
                        <img
                            src="/image/marnavbg.png"
                            alt="course"
                            className="w-full h-[220px] object-cover"
                        />
                    </div>


                    {/* CONTENT */}
                    <div className="px-4 mt-4 space-y-3">

                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-semibold">{DATA.title}</h2>
                            <div className="flex flex-col items-center gap-1 text-sm">
                                <div>
                                    <span className="text-yellow-500">★</span>
                                    <span>{DATA.rating}</span>
                                </div>
                                <p className="text-xs text-gray-400 whitespace-nowrap">({DATA.reviews})</p>
                            </div>
                        </div>


                        <p className="text-sm text-gray-500">{DATA.subtitle}</p>


                        {/* PRICE */}
                        <div className="flex items-center gap-2 text-sm mt-2">
                            <span className="font-semibold">Starting - ₹{DATA.price}</span>
                            <span className="line-through text-gray-400">
                                ₹{DATA.originalPrice}
                            </span>
                            <span className="text-[#281A83]">{DATA.discount}</span>
                        </div>


                        <div className="flex flex-row gap-2">
                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <ZapIcon size={17} className="cursor-pointer text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">Quick Recognize</span>
                            </div>

                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <ClockIcon size={17} className="cursor-pointer text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">On Time Guaranty</span>
                            </div>

                        </div>

                        {/* COMMISSION */}
                        <div className="mt-4 bg-white rounded-xl p-4 shadow flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">Franchise Commission</p>
                                <p className="text-green-600 font-semibold">
                                    {DATA.commission}
                                </p>
                            </div>
                            <button className="flex items-center gap-1 text-sm">
                                T&amp;C <span className="text-lg">›</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <Benefits />
                <AboutSection />
                <WhyChooseUs />
                <HowItWorksSteps />
                <SafetyandAssurance />
                <Documents />
                <SelectPackage />
                <Included />
                <AssuredByFetchTrue />
                <MoreInformation />
                <TermsAndConditions />
                <FAQs />
                <RatingsReviews />
                <ConnectWith />
            </section>
        </>

    );
}
