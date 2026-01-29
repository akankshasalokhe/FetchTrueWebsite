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
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { ChevronLeft, ClockIcon, Share2, ShoppingCart, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

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


    const { service, loading, error, fetchServiceDetails } = useServiceDetails();

    const params = useParams();
    const serviceId = params.id as string;

    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
    }, [serviceId]);

    const searchParams = useSearchParams();

    const serviceName = searchParams.get("service");


    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="w-full bg-white">
                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block w-full bg-white">

                    {/* ===== HEADER BAR ===== */}
                    <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">

                        {/* LEFT */}
                        <div className="flex items-center gap-3">
                            <Link href="/MainModules/ITService">
                                <ChevronLeft size={24} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-[24px] font-semibold">
                                Service Details
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-3">
                            <Link href="/MainModules/Checkout">
                                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-[20px] font-medium">
                                    <ShoppingCart className="w-[29px] h-[29px]" />
                                    Check out
                                </button>
                            </Link>

                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-[20px] font-medium">
                                <Share2 className="w-[29px] h-[29px]" />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* ===== MAIN CONTENT ===== */}
                    <div className="max-w-[1400px] mx-auto flex gap-8 p-8">

                        {/* LEFT IMAGE */}
                        <div className="w-[652px] h-[503px] rounded-xl overflow-hidden">
                            <img
                                src={service?.bannerImages?.[0] || "/image/marnavbg.png"}
                                alt="Marketing"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex-1 space-y-4">
                            <h1 className="text-[40px] font-semibold whitespace-nowrap">
                                {DATA.title}
                            </h1>

                            <p className="text-gray-500 text-[24px]">
                                Digital Marketing
                            </p>

                            <div className="flex items-center gap-2 text-[20px]">
                                <span className="text-yellow-500">★</span>
                                <span className="font-semibold">{DATA.rating}</span>
                                <span className="text-gray-500">({DATA.reviews})</span>
                            </div>

                          <div className="p-4 -mt-6 w-full">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-500 text-[24px]">Starting</span>
                                <span className="text-[36px] font-semibold">₹10,000</span>
                                <span className="line-through text-[20px] text-gray-400">
                                    ₹14,000
                                </span>
                                <span className="text-[16px] text-white bg-black font-semibold px-3 py-1 rounded whitespace-nowrap">
                                    25% OFF
                                </span>
                            </div>
                        </div>

                            {/* COMMISSION */}
                            <div className="rounded-xl p-5 border flex justify-between items-center">
                                <div className="space-y-2">
                                    <p className="font-semibold text-[24px]">
                                        Franchise Commission
                                    </p>
                                    <p className="text-green-600 text-[32px] font-semibold">
                                        {DATA.commission}
                                    </p>
                                </div>

                                <button className="text-[#281A83] text-[24px] flex items-center gap-1">
                                    T&amp;C <span>›</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ================= MOBILE VERSION ================= */}
                <div className="lg:hidden">

                    {/* ===== MOBILE HEADER BAR ===== */}
                    <div className="mt-4 px-4 py-3 flex items-center justify-between">

                        {/* LEFT */}
                        <div className="flex items-center gap-2">
                            <Link href="/MainModules/Education">
                                <ChevronLeft size={22} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-[16px] font-semibold">Service Details</h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-2">
                            <Link href="/MainModules/Checkout">
                                <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-xs font-medium">
                                    <ShoppingCart className="w-4 h-4" />
                                    Checkout
                                </button>
                            </Link>

                            <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* ===== IMAGE ===== */}
                    <div className="mx-4 mt-4 rounded-xl overflow-hidden">
                        <img
                            src="/image/marnavbg.png"
                            alt="service"
                            className="w-full h-[220px] object-cover"
                        />
                    </div>

                    {/* ===== CONTENT ===== */}
                    <div className="px-4 mt-4 space-y-3">

                        {/* TITLE + RATING */}
                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold leading-tight">
                                {DATA.title}
                            </h2>

                            <div className="flex flex-col items-end text-xs">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span>{DATA.rating}</span>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">
                                    ({DATA.reviews})
                                </span>
                            </div>
                        </div>

                        {/* SUBTITLE */}
                        <p className="text-[13px] text-gray-500">
                            {DATA.subtitle}
                        </p>

                        {/* PRICE */}
                        <div className="flex items-center gap-2">
                            <span className="text-[12px] text-gray-500">Starting</span>
                            <span className="font-semibold text-[16px]">
                                ₹{DATA.price}
                            </span>
                            <span className="line-through text-gray-400 text-[12px]">
                                ₹{DATA.originalPrice}
                            </span>
                            <span className="text-[#D56839] text-[12px] font-medium">
                                {DATA.discount}
                            </span>
                        </div>

                        {/* TAGS */}
                        <div className="flex gap-2 flex-wrap">
                            <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-[11px]">
                                <ZapIcon size={14} className="text-gray-600" />
                                Quick Recognize
                            </div>

                            <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-[11px]">
                                <ClockIcon size={14} className="text-gray-600" />
                                On Time Guaranty
                            </div>
                        </div>

                        {/* COMMISSION CARD */}
                        <div className="mt-4 bg-white rounded-xl p-4 shadow border-t-4 border-blue-500 flex justify-between items-center">
                            <div>
                                <p className="text-[13px] font-medium">
                                    Franchise Commission
                                </p>
                                <p className="text-green-600 font-semibold">
                                    {DATA.commission}
                                </p>
                            </div>

                            <button className="flex items-center gap-1 text-[13px] text-[#281A83]">
                                T&amp;C <span className="text-lg">›</span>
                            </button>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <Benefits benefits={service?.serviceDetails?.benefits || []} />
                <AboutSection aboutUs={service?.serviceDetails?.aboutUs || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <HowItWorksSteps howItWorks={service?.serviceDetails?.howItWorks || []} />
                <SafetyandAssurance safetyAndAssurance={service?.serviceDetails?.safetyAndAssurance || []} />
                <Documents weRequired={service?.serviceDetails?.weRequired || []} weDeliver={service?.serviceDetails?.weDeliver || []} />
                <SelectPackage />
                <Included notInclude={service?.serviceDetails?.notInclude || []} include={service?.serviceDetails?.include || []} highlight={service?.serviceDetails?.highlight || []} />
                <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>

    );
}
