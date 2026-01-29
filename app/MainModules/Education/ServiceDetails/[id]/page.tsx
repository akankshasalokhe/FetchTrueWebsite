"use client";

import AboutUs from "@/src/components/EducationServiceDetails/About";
import Benefits from "@/src/components/EducationServiceDetails/Benefits";
import Certification from "@/src/components/EducationServiceDetails/Certification";
import ConnectWith from "@/src/components/EducationServiceDetails/ConnectWith";
import CourseCurriculum from "@/src/components/EducationServiceDetails/CourseCurriculum";
import CourseIncludes from "@/src/components/EducationServiceDetails/CourseIncludes";
import CourseOffers from "@/src/components/EducationServiceDetails/CourseOffers";
import FAQs from "@/src/components/EducationServiceDetails/Faq";
import InstructorSection from "@/src/components/EducationServiceDetails/InstructorSection";
import LearnAndEligible from "@/src/components/EducationServiceDetails/LearnandEligible";
import MoreInformation from "@/src/components/EducationServiceDetails/MoreInformation";
import RatingsReviews from "@/src/components/EducationServiceDetails/Reviews";
import TermsAndConditions from "@/src/components/EducationServiceDetails/TermsandConditions";
import WhyChooseUs from "@/src/components/EducationServiceDetails/WhyChooseUs";
import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useReview } from "@/src/context/ReviewContext";


type CourseInfo = {
    title: string;
    subtitle: string;
    rating: number;
    reviews: string;
    price: number;
    originalPrice: number;
    discount: string;
    emi: number;
    level: string;
    lessons: number;
    commission: string;
};

const DATA: CourseInfo = {
    title: "Figma UI UX Design Essential",
    subtitle: "IT & Software",
    rating: 4.8,
    reviews: "2,400+ reviews",
    price: 499,
    originalPrice: 3499,
    discount: "12% Off",
    emi: 199,
    level: "Beginner",
    lessons: 72,
    commission: "Earn Up to 7%",
};

export default function ServiceDetails() {

  const { service, loading, error, fetchServiceDetails } = useServiceDetails();
     const { services, fetchReviews } = useReview();
     const params = useParams();
     const serviceId = params.id as string;
 
     useEffect(() => {
         if (!serviceId) return;
 
         fetchServiceDetails(serviceId);
         fetchReviews(serviceId)
     }, [serviceId]);
 
     const searchParams = useSearchParams();
 
     const serviceName = searchParams.get("service");
 


    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="w-full bg-white">
                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block w-full bg-white pt-8">

                    {/* ===== HEADER BAR ===== */}
                    <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">
                        {/* LEFT */}
                        <div className="flex items-center gap-3">
                            <Link href="/MainModules/ITService">
                                <ChevronLeft size={24} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-[24px] font-semibold">Service Details</h1>
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

                    {/* ===== CONTENT BELOW HEADER ===== */}
                    <div className="flex gap-8 p-8 max-w-[1400px] mx-auto">

                        {/* ===== LEFT IMAGE ===== */}
                        <div className="flex flex-col gap-3">
                            <div className="relative w-[652px] h-[503px] rounded-lg overflow-hidden">
                                <img
                                    src={service?.bannerImages?.[0] || "/image/eduserbg.png"}
                                    alt="Education Service"
                                    className="w-full h-full object-cover"
                                />

                                {/* BADGES */}
                                <div className="absolute bottom-4 left-3 right-3 flex justify-between">
                                    <div className="bg-white px-4 py-1 rounded-full text-[20px] shadow">
                                        • Online Mode
                                    </div>

                                    <div className="bg-white px-4 py-1 rounded-full text-[20px] shadow">
                                        Duration 16 Weeks
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===== RIGHT CONTENT ===== */}
                        <div className="flex-1 space-y-4">

                            <h1 className="text-[40px] font-semibold whitespace-nowrap">
                                {serviceName}
                            </h1>

                            <p className="text-gray-500 text-[24px]">Education Service</p>

                            {/* RATING */}
                            <div className="flex items-center gap-2 text-[20px]">
                                <span className="text-yellow-500">★</span>
                                <span className="font-semibold">{DATA.rating}</span>
                                <span className="text-gray-500">({DATA.reviews})</span>
                            </div>

                            {/* PRICE */}
                            <div className="border rounded-xl gap-4 p-3 inline-flex items-center">
                                <p className="text-[24px]">Price</p>

                                <span className="text-[36px] font-semibold">
                                    ₹{DATA.price}
                                </span>

                                <div>
                                    <span className="line-through text-[20px] text-gray-400">
                                        ₹{DATA.originalPrice}
                                    </span>
                                    <span className="bg-[#281A83] text-white text-sm px-2 py-1 rounded ml-2">
                                        {DATA.discount}
                                    </span>
                                </div>
                            </div>

                            <p className="text-[20px]">EMI Option Available</p>

                            {/* META INFO */}
                            <div className="flex gap-4">
                                <div className="border rounded-full px-4 py-2">
                                    🎓 Level: {DATA.level}
                                </div>
                                <div className="border rounded-full px-4 py-2">
                                    📘 Lessons: {DATA.lessons}
                                </div>
                            </div>

                            {/* TAGS */}
                            <div className="flex gap-4">
                                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-3xl gap-2">
                                    <Eye size={24} className="text-gray-600" />
                                    <span className="text-[20px]">Design with empathy</span>
                                </div>

                                <div className="flex items-center bg-gray-200 px-4 py-2 rounded-3xl gap-2">
                                    <Pencil size={24} className="text-gray-600" />
                                    <span className="text-[20px]">Create and practice</span>
                                </div>
                            </div>

                            {/* COMMISSION */}
                            <div className="border rounded-xl p-5 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-[20px]">
                                        Franchise Commission
                                    </p>
                                    <p className="text-green-600 text-[28px] font-semibold">
                                        {DATA.commission}
                                    </p>
                                </div>

                                <button className="text-[#281A83] text-[20px] flex items-center gap-1">
                                    T&amp;C <span className="text-[24px]">›</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ================= MOBILE ================= */}
                <div className="lg:hidden">
                    <div className="relative flex flex-col mx-4 mt-12 rounded-xl overflow-hidden">

                        {/* ===== HEADER ABOVE IMAGE ===== */}
                        <div className="flex items-center justify-between gap-3 mb-3">

                            {/* LEFT */}
                            <div className="flex items-center gap-1">
                                <Link href="/MainModules/Education">
                                    <ChevronLeft size={24} className="cursor-pointer" />
                                </Link>
                                <h1 className="text-lg font-semibold">Service Details</h1>
                            </div>

                            {/* RIGHT (Checkout + Share) */}
                            <div className="flex items-center gap-2 mr-2">
                                <Link href="/MainModules/Checkout">
                                    <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-xs font-medium">
                                        <ShoppingCart className="w-4 h-4" />
                                        Checkout
                                    </button>
                                </Link>

                                <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-xs font-medium">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* ===== IMAGE ===== */}
                        <img
                            src={service?.bannerImages?.[0] || "/image/eduserbg.png"}
                            alt="course"
                            className="w-full h-[220px] object-cover"
                        />

                        {/* ===== DURATION BADGES ===== */}
                        <div className="absolute -bottom-2 left-3 right-3 flex justify-between">
                            <div className="bg-white px-4 py-1 rounded-full text-xs shadow">
                                • Online Mode
                            </div>

                            <div className="bg-white px-4 py-1 rounded-full text-xs shadow">
                                Duration 16 Weeks
                            </div>
                        </div>
                    </div>

                    {/* ===== CONTENT ===== */}
                    <div className="px-4 mt-4 space-y-3">

                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold">{DATA.title}</h2>

                            <div className="flex flex-col items-center gap-1 text-sm">
                                <div>
                                    <span className="text-yellow-500">★</span>
                                    <span>{DATA.rating}</span>
                                </div>
                                <p className="text-xs text-gray-400 whitespace-nowrap">
                                    ({DATA.reviews})
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">{DATA.subtitle}</p>

                        {/* PRICE */}
                        <div className="flex items-center gap-2 text-sm mt-2">
                            <span className="font-semibold">₹{DATA.price}</span>
                            <span className="line-through text-gray-400">
                                ₹{DATA.originalPrice}
                            </span>
                            <span className="text-[#281A83]">{DATA.discount}</span>
                        </div>

                        <p className="text-[12px]">EMI Option available</p>

                        {/* FEATURES */}
                        <div className="flex gap-2">
                            <div className="flex items-center bg-gray-200 p-2 rounded-3xl gap-1">
                                <Eye size={16} className="text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">
                                    Design with empathy
                                </span>
                            </div>

                            <div className="flex items-center bg-gray-200 p-2 rounded-3xl gap-1">
                                <Pencil size={16} className="text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">
                                    Create and practice
                                </span>
                            </div>
                        </div>

                        {/* TAGS */}
                        <div className="flex gap-3 mt-3">
                            <div className="border rounded-full px-3 py-1 text-xs">
                                🎓 Level: {DATA.level}
                            </div>
                            <div className="border rounded-full px-3 py-1 text-xs">
                                📘 Lessons: {DATA.lessons}
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
                <Benefits benefits={service?.serviceDetails?.benefits || []} />
                <AboutUs aboutUs={service?.serviceDetails?.aboutUs || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <LearnAndEligible whatYouWillLearn={service?.serviceDetails?.whatYouWillLearn || []} eligibleFor={service?.serviceDetails?.eligibleFor || []} />
                <CourseCurriculum courseCurriculum={service?.serviceDetails?.courseCurriculum || []} />
                <CourseIncludes courseIncludes={service?.serviceDetails?.courseIncludes || []} />
                <Certification certificateImage={service?.serviceDetails?.certificateImage} />
                <InstructorSection />
                <CourseOffers assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews reviews={services} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>

    );
}
