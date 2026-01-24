"use client";

import AboutUs from "@/src/components/MarketingServiceDetails/About";
import Benefits from "@/src/components/MarketingServiceDetails/Benefits";
import MoreInformation from "@/src/components/MarketingServiceDetails/MoreInformation";
import TermsAndConditions from "@/src/components/MarketingServiceDetails/TermsandConditions";
import WhyChooseUs from "@/src/components/MarketingServiceDetails/WhyChooseUs";
import { ChevronLeft, ClockIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import HowItWorks from "@/src/components/MarketingServiceDetails/HowItWorks";
import ChooseProvider from "@/src/components/MarketingServiceDetails/ChooseProvider";
import FAQs from "@/src/components/MarketingServiceDetails/Faq";
import RatingsReviews from "@/src/components/MarketingServiceDetails/Reviews";
import ConnectWith from "@/src/components/MarketingServiceDetails/ConnectWith";
import Documents from "@/src/components/MarketingServiceDetails/Documents";
import Packages from "@/src/components/MarketingServiceDetails/Packages";
import AssuredByFetchTrue from "@/src/components/MarketingServiceDetails/AssuredFetchTrue";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";

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
    title: "Professional Logo Design Service",
    subtitle: "Digital Marketing",
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


    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
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
                        <div className="md:w-[652px] md:h-[503px] rounded-lg overflow-hidden">
                            <img
                                // src="/image/marnavbg.png"
                                 src={service?.bannerImages?.[0] || "/image/marnavbg.png"}
                                alt="Marketing"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    <div className="flex-1 space-y-4">
                        <h1 className="text-[40px] font-semibold whitespace-nowrap">{DATA.title}</h1>
                        <p className="text-gray-500 text-[24px]">Digital Marketing</p>

                        <div className="flex items-center gap-2 text-[20px]">
                            <span className="text-yellow-500">★</span>
                            <span className="font-semibold">{DATA.rating}</span>
                            <span className="text-gray-500">({DATA.reviews})</span>
                        </div>

                        <div className="gap-4 p-2 flex items-center">
                            <p className="md:text-[24px]">Starting -</p>
                            <span className="md:text-[36px] font-semibold">₹{DATA.price}</span>
                            <p className="text-[24px] text-[#2164F4]">View Packages</p>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <ZapIcon size={24} className="cursor-pointer text-gray-600" />
                                <span className="text-[20px]">Quick Recognize</span>
                            </div>

                            <div className="flex items-center border bg-gray-200 p-2 border-gray-200 rounded-3xl gap-2">
                                <ClockIcon size={24} className="cursor-pointer text-gray-600" />
                                <span className="text-[20px]">On Time Guaranty</span>
                            </div>

                        </div>

                        <div className="rounded-xl p-5 border-t-4 border-blue-500 bg-gray-200 flex justify-between items-center">
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

                {/* ================= MOBILE ================= */}
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
                            // src="/image/marnavbg.png"
                             src={service?.bannerImages?.[0] || "/image/marnavbg.png"}
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
                            <p className="text-[12px]">Starting</p>
                            <span className="font-semibold text-[16px]">₹{DATA.price}</span>
                            {/* <span className="line-through text-gray-400">
                                ₹{DATA.originalPrice}
                            </span> */}
                            {/* <span className="text-orange-500">{DATA.discount}</span> */}
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
                        <div className="mt-4 bg-white rounded-xl p-4 shadow border-t-4 border-blue-500 flex justify-between items-center">
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
                <Benefits benefits={service?.serviceDetails?.benefits || []}/>
                <AboutUs />
                <WhyChooseUs />
                <HowItWorks />
                <AssuredByFetchTrue />
                <Packages />
                <Documents />
                <MoreInformation />
                <ChooseProvider />
                <TermsAndConditions />
                <FAQs />
                <RatingsReviews />
                <ConnectWith />
            </section>
        </>

    );
}
