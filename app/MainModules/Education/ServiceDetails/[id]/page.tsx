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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useEffect } from "react";
import { useParams } from "next/navigation";


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

    const params = useParams();
    const serviceId = params.id as string;
    console.log("Service ID from Params:", serviceId);
    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
    }, [serviceId]);

    console.log("Service Details Data:", service);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
                            <Link href="/MainModules/ITService">
                                <ChevronLeft size={28} className="cursor-pointer" />
                            </Link>
                            <h1 className="text-lg font-semibold">Service Details</h1>
                        </div>

                        {/* IMAGE */}
                        <div className="relative md:w-[652px] md:h-[503px] rounded-lg overflow-hidden">
                            <img
                                src="/image/eduserbg.png"
                                alt="Course"
                                className="w-full h-full object-cover"
                            />


                            {/* Duration Badge */}
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

                    <div className="flex-1 space-y-3">
                        <h1 className="text-[40px] font-semibold whitespace-nowrap">{DATA.title}</h1>
                        <p className="text-gray-500 text-[24px]">Education Service</p>

                        <div className="flex items-center gap-2 text-[20px]">
                            <span className="text-yellow-500">★</span>
                            <span className="font-semibold">{DATA.rating}</span>
                            <span className="text-gray-500">({DATA.reviews})</span>
                        </div>



                        <div className="border rounded-xl gap-4 p-2 flex justify-between items-center">
                            <p className="md:text-[24px]">Price</p>
                            <span className="md:text-[36px] font-semibold">₹{DATA.price}</span>
                            <div className="flex-1">
                                <span className="line-through md:text-[20px] text-gray-400">
                                    ₹{DATA.originalPrice}
                                </span>
                                <span className="bg-[#281A83] text-white text-sm px-2 py-1 rounded ml-2">
                                    {DATA.discount}
                                </span>
                            </div>

                        </div>
                        <p className="md:text-[20px]">EMI Option Available</p>


                        <div className="flex gap-4">
                            <div className="border rounded-full px-4 py-2">
                                🎓 Level: {DATA.level}
                            </div>
                            <div className="border rounded-full px-4 py-2">
                                📘 Lessons: {DATA.lessons}
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <Eye size={24} className="cursor-pointer text-gray-600" />
                                <span className="text-[20px]">Design with empathy</span>
                            </div>

                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <Pencil size={24} className="cursor-pointer text-gray-600" />
                                <span className="text-[20px]">Create and practice</span>
                            </div>

                        </div>


                        <div className="border rounded-xl p-5 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Franchise Commission</p>
                                <p className="text-green-600 text-xl font-semibold">
                                    {DATA.commission}
                                </p>
                            </div>
                            <button className="text-[#281A83] flex items-center gap-1">
                                T&amp;C <span className="text-xl">›</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= MOBILE ================= */}
                <div className="lg:hidden">
                    {/* IMAGE */}


                    {/* <div className="relative flex flex-col mx-4 mt-12 rounded-xl overflow-hidden">
            <div className="flex items-center -mt-10 gap-3 ">
              <Link href="/MainModules/ITService">
                <ChevronLeft size={28} className="cursor-pointer" />
              </Link>
              <h1 className="text-lg font-semibold">Service Details</h1>
            </div>

            <img
              src="/image/eduserbg.png"
              alt="course"
              className="w-full h-[220px] object-cover"
            />

            
            <div className="absolute -bottom-2 right-3 bg-white px-4 py-1 rounded-full text-xs shadow">
              Duration 2 Weeks • 12 Hours
            </div>
          </div> */}

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
                            src="/image/eduserbg.png"
                            alt="course"
                            className="w-full h-[220px] object-cover"
                        />

                        {/* Duration Badge */}
                        <div className="absolute -bottom-2 left-3 right-3 flex justify-between">
                            <div className="bg-white px-4 py-1 rounded-full text-xs shadow">
                                • Online Mode
                            </div>

                            <div className="bg-white px-4 py-1 rounded-full text-xs shadow">
                                Duration 16 Weeks
                            </div>
                        </div>

                    </div>


                    {/* CONTENT */}
                    <div className="px-4 mt-4 space-y-3">

                        <div className="flex justify-between items-start">
                            <h2 className="text-[16px] font-semibold">{DATA.title}</h2>
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
                            <span className="font-semibold">Price - ₹{DATA.price}</span>
                            <span className="line-through text-gray-400">
                                ₹{DATA.originalPrice}
                            </span>
                            <span className="text-[#281A83]">{DATA.discount}</span>
                        </div>

                        <p className="text-[12px]">EMI Option available</p>
                        <div className="flex flex-row gap-2">
                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-1">
                                <Eye size={16} className="cursor-pointer text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">Design with empathy</span>
                            </div>

                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-1">
                                <Pencil size={16} className="cursor-pointer text-gray-600" />
                                <span className="text-[12px] whitespace-nowrap">Create and practice</span>
                            </div>

                        </div>

                        {/* TAGS */}
                        <div className="flex gap-3 mt-3">
                            <div className="border rounded-full px-3 py-1 text-xs flex items-center gap-1">
                                🎓 Level: {DATA.level}
                            </div>
                            <div className="border rounded-full px-3 py-1 text-xs flex items-center gap-1">
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
                {/* <Benefits /> */}
                <Benefits benefits={service?.serviceDetails?.benefits || []} />
                <AboutUs aboutUs={service?.serviceDetails?.aboutUs || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <LearnAndEligible whatYouWillLearn={service?.serviceDetails?.whatYouWillLearn || []}  eligibleFor={service?.serviceDetails?.eligibleFor || []} />
                <CourseCurriculum courseCurriculum={service?.serviceDetails?.courseCurriculum || []} />
                <CourseIncludes />
                <Certification />
                <InstructorSection />
                <CourseOffers />
                <MoreInformation />
                <TermsAndConditions />
                <FAQs />
                <RatingsReviews />
                <ConnectWith />
            </section>
        </>

    );
}
