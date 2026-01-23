"use client";

import AboutSection from "@/src/components/ItServiceDetails/About";
import AssuredByFetchTrue from "@/src/components/ItServiceDetails/AssuredByFetchTrue";
import ChooseProvider from "@/src/components/ItServiceDetails/ChooseProvider";
import ConnectWith from "@/src/components/ItServiceDetails/ConnectWith";
import Documents from "@/src/components/ItServiceDetails/Documents";
import FAQs from "@/src/components/ItServiceDetails/Faq";
import HowItWorks from "@/src/components/ItServiceDetails/HowItWorks";
import MoreInformation from "@/src/components/ItServiceDetails/MoreInformation";
import Packages from "@/src/components/ItServiceDetails/Packages";
import RatingsReviews from "@/src/components/ItServiceDetails/Reviews";
import TermsAndConditions from "@/src/components/ItServiceDetails/TermsAndConditions";
import WhyChooseUs from "@/src/components/ItServiceDetails/WhyChooseUs";
import { useParams, useSearchParams } from "next/navigation";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";

const ServiceDetails = () => {

    const benefits = [
        "Easy & Fast Loan Approval Process",
        "Verified Lender Partners (Banks / NBFCs)",
        "Expert Documentation Support",
        "Dedicated Loan Advisor",
        "Low Interest Rate Options",
        "Fully Digital Process",
        "Personalized EMI & Tenure Plans",
        "Transparent Fees — No Hidden Charges",
    ];
    const { service, loading, error, fetchServiceDetails } = useServiceDetails();

    const params = useParams();
    const serviceId = params.id as string;

    useEffect(() => {
        if (!serviceId) return;

        fetchServiceDetails(serviceId);
    }, [serviceId]);

    const searchParams = useSearchParams();

    const serviceName = searchParams.get("service");


      function extractBenefits(html: string): string[] {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const results: string[] = [];

        doc.querySelectorAll("li").forEach(li => {
            const text = li.textContent?.trim();
            if (text) results.push(text);
        });

        doc.querySelectorAll("p").forEach(p => {
            if (!p.closest("li")) {
                const text = p.textContent?.trim();
                if (text) results.push(text);
            }
        });

        if (results.length === 0) {
            const text = doc.body.textContent || "";
            text
                .split("\n")
                .map(t => t.trim())
                .filter(Boolean)
                .forEach(t => results.push(t));
        }

        return results;
    }

    const parsedBenefits = service?.serviceDetails?.benefits.flatMap(extractBenefits) || [];

    // Split ONLY for desktop
    const mid = Math.ceil(parsedBenefits.length / 2);
    const left = parsedBenefits.slice(0, mid);
    const right = parsedBenefits.slice(mid);




    if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <>
            <section className="relative w-full lg:p-8 p-0">
                <div className="flex flex-col lg:flex-row gap-6 lg:p-4 w-full">

                    {/* ================= DESKTOP VERSION ================= */}
                    <div className="hidden lg:flex p-8  gap-6 w-full">



                        {/* LEFT IMAGE */}
                        {/* <div className="relative md:w-[652px] md:h-[503px] rounded-lg overflow-hidden">
                            
                            <img
                                src="/image/itservicenavbg.png"
                                alt="Managed IT Service"
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
                                     src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
                                    alt="Managed IT Service"
                                    className="w-full h-full object-fit"
                                />
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col flex-1">

                            {/* TOP INFO */}
                            <div className="space-y-4">
                                <h2 className="text-[40px] font-semibold text-black">
                                    {serviceName}
                                </h2>

                                <p className="text-gray-500 text-[32px]">IT Service</p>

                                <div className="flex items-center gap-2 text-[32px] text-gray-600">
                                    <span className="text-yellow-500">★</span>
                                    <span className="font-medium text-black">4.8</span>
                                    <span>(2,400+ reviews)</span>
                                </div>
                            </div>

                            {/* PRICE BOX */}
                            <div className="border rounded-lg p-4 mt-10 w-full">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-500 text-[24px]">Price</span>
                                    <span className="text-[36px] font-semibold">₹10,000</span>
                                    <span className="line-through text-[20px] text-gray-400">
                                        ₹14,000
                                    </span>
                                    <span className="bg-black text-white text-[16px] px-3 py-1 rounded">
                                        25% OFF
                                    </span>
                                </div>
                            </div>

                            {/* COMMISSION BOX */}
                            <div className="border border-[#8B5E3C] rounded-lg p-5 mt-8 flex justify-between items-center">
                                <div>
                                    <p className="text-[32px] font-medium">
                                        Franchise Commission
                                    </p>
                                    <p className="text-green-600 text-[36px] font-semibold">
                                        Earn Up to 7%
                                    </p>
                                </div>

                                <button className="text-[24px] font-medium mt-12 flex items-center gap-2">
                                    T&amp;C <span>{">"}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ================= MOBILE VERSION ================= */}
                    <div className="block lg:hidden w-full mb-5">
                        {/* FULL WIDTH IMAGE */}
                        <div className="relative w-screen h-[429px] overflow-hidden">

                            {/* HEADER OVER IMAGE */}
                            <div className="absolute top-0 left-0 z-10 w-full flex items-center gap-3 px-4 py-4 bg-white/80 backdrop-blur-sm">
                                <Link href="/MainModules/ITService">
                                    <ChevronLeft size={28} className="cursor-pointer" />
                                </Link>
                                <h1 className="text-lg font-semibold">Service Details</h1>
                            </div>

                            <img
                                // src="/image/itservicenavbg.png"
                                 src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
                                alt="Managed IT Service"
                                className="absolute -top-10 left-0 w-full h-full object-contain"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col gap-4 px-4 -mt-35 md:mt-2">
                            <h2 className="text-lg font-semibold text-black">
                                Managed IT Service & Support
                            </h2>

                            <p className="text-gray-500 text-sm">IT Service</p>

                            {/* PRICE + RATING */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="line-through text-gray-400 text-sm">₹14,000</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">₹10,000</span>
                                        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
                                            25% OFF
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-500">★</span>
                                    <span className="font-medium">4.8</span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-500">(2,400+ reviews)</p>

                            {/* COMMISSION BOX */}
                            <div className="bg-[#E9EFF6] rounded-xl p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium">Franchise Commission</p>
                                    <p className="text-green-600 text-lg font-semibold">Earn Up to 7%</p>
                                </div>

                                <div className="flex items-center gap-1 text-gray-700">
                                    <span>T&amp;C</span>
                                    <span className="text-xl">{">"}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative w-full p-8 bg-gray-100">
                <div className="rounded-xl w-full  mt-5">
                    {/* Title */}
                    <div className="flex items-start md:justify-center">
                        <h2
                            className="text-white bg-black px-6 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold mb-6 inline-block"
                            style={{
                                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"

                            }}
                        >
                            Benefits
                        </h2>
                    </div>

                    {/* Benefits List */}
                    <div className="flex flex-col mx-auto md:w-[700px] lg:w-[1320px] lg:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
                        {parsedBenefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                {/* <img src="/image/checkmark.png" alt="check" className="w-5 h-5 w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0" /> */}
                                <p className="text-black md:text-[18px] lg:text-[24px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile version section */}
            <section className="block md:hidden w-full  bottom-0 left-0 bg-white">
                <div className="flex items-center justify-between px-4 py-3">

                    {/* CHECK OUT BUTTON */}
                    <button className="flex items-center gap-2 bg-[#2563EB] text-white px-5 py-3 rounded-lg font-medium">
                        <span>🧾</span>
                        <span>Check out</span>
                    </button>

                    {/* DOTTED LINE */}
                    <div className="flex-1 mx-4 border-t border-dashed border-blue-300"></div>

                    {/* SHARE */}
                    <button className="flex items-center gap-2 text-blue-600 font-medium">
                        <span>🔗</span>
                        <span>Share</span>
                    </button>

                </div>
            </section>


            <section className="relative w-full">
                <AboutSection aboutUs={service?.serviceDetails?.aboutUs || []} highlight={service?.serviceDetails?.highlight || []} />
                <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
                <HowItWorks howItWorks={service?.serviceDetails?.howItWorks || []} />
                <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
                <Packages packages={service?.serviceDetails?.packages || []} />
                <Documents weRequired={service?.serviceDetails?.weRequired || []} weDeliver={service?.serviceDetails?.weDeliver || []} />
                <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
                <ChooseProvider />
                <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
                <FAQs faq={service?.serviceDetails?.faq || []} />
                <RatingsReviews />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>
    );
};

export default ServiceDetails;
