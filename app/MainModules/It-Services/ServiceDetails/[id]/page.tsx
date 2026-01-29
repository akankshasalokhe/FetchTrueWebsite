// "use client";

// import AboutSection from "@/src/components/ItServiceDetails/About";
// import AssuredByFetchTrue from "@/src/components/ItServiceDetails/AssuredByFetchTrue";
// import ChooseProvider from "@/src/components/ItServiceDetails/ChooseProvider";
// import ConnectWith from "@/src/components/ItServiceDetails/ConnectWith";
// import Documents from "@/src/components/ItServiceDetails/Documents";
// import FAQs from "@/src/components/ItServiceDetails/Faq";
// import HowItWorks from "@/src/components/ItServiceDetails/HowItWorks";
// import MoreInformation from "@/src/components/ItServiceDetails/MoreInformation";
// import Packages from "@/src/components/ItServiceDetails/Packages";
// import RatingsReviews from "@/src/components/ItServiceDetails/Reviews";
// import TermsAndConditions from "@/src/components/ItServiceDetails/TermsAndConditions";
// import WhyChooseUs from "@/src/components/ItServiceDetails/WhyChooseUs";
// import { useParams, useSearchParams } from "next/navigation";

// import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useServiceDetails } from "@/src/context/ServiceDetailsContext";

// const ServiceDetails = () => {

//     const benefits = [
//         "Easy & Fast Loan Approval Process",
//         "Verified Lender Partners (Banks / NBFCs)",
//         "Expert Documentation Support",
//         "Dedicated Loan Advisor",
//         "Low Interest Rate Options",
//         "Fully Digital Process",
//         "Personalized EMI & Tenure Plans",
//         "Transparent Fees — No Hidden Charges",
//     ];
//     const { service, loading, error, fetchServiceDetails } = useServiceDetails();

//     const params = useParams();
//     const serviceId = params.id as string;

//     useEffect(() => {
//         if (!serviceId) return;

//         fetchServiceDetails(serviceId);
//     }, [serviceId]);

//     const searchParams = useSearchParams();

//     const serviceName = searchParams.get("service");


//     function extractBenefits(html: string): string[] {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const results: string[] = [];

//         doc.querySelectorAll("li").forEach(li => {
//             const text = li.textContent?.trim();
//             if (text) results.push(text);
//         });

//         doc.querySelectorAll("p").forEach(p => {
//             if (!p.closest("li")) {
//                 const text = p.textContent?.trim();
//                 if (text) results.push(text);
//             }
//         });

//         if (results.length === 0) {
//             const text = doc.body.textContent || "";
//             text
//                 .split("\n")
//                 .map(t => t.trim())
//                 .filter(Boolean)
//                 .forEach(t => results.push(t));
//         }

//         return results;
//     }

//     const parsedBenefits = service?.serviceDetails?.benefits.flatMap(extractBenefits) || [];

//     // Split ONLY for desktop
//     const mid = Math.ceil(parsedBenefits.length / 2);
//     const left = parsedBenefits.slice(0, mid);
//     const right = parsedBenefits.slice(mid);




//     if (loading) return <p className="text-[12px] md:text-[24px] text-center mt-15">Loading...</p>;
//     if (error) return <p>{error}</p>;
//     return (
//         <>
//             {/* ================= HERO / DETAILS SECTION ================= */}
//             <section className="relative w-full lg:p-8 p-0">
//                 <div className="w-full">

//                     {/* ================= DESKTOP ================= */}
//                     <div className="hidden lg:block bg-white">

//                         {/* HEADER */}
//                         <div className="flex items-center justify-between px-8 pt-6 max-w-[1400px] mx-auto">
//                             <div className="flex items-center gap-3">
//                                 <Link href="/MainModules/ITService">
//                                     <ChevronLeft size={28} />
//                                 </Link>
//                                 <h1 className="text-lg font-semibold">Service Details</h1>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <Link href="/MainModules/Checkout">
//                                     <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-md">
//                                         <ShoppingCart className="w-5 h-5" />
//                                         Check out
//                                     </button>
//                                 </Link>

//                                 <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md">
//                                     <Share2 className="w-5 h-5" />
//                                     Share
//                                 </button>
//                             </div>
//                         </div>

//                         {/* MAIN CONTENT */}
//                         <div className="flex gap-6 p-8 max-w-[1400px] mx-auto">

//                             {/* IMAGE */}
//                             <div className="w-[652px] h-[503px] rounded-lg overflow-hidden">
//                                 <img
//                                     src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
//                                     className="w-full h-full object-cover"
//                                     alt="service"
//                                 />
//                             </div>

//                             {/* DETAILS */}
//                             <div className="flex flex-col flex-1 gap-6">
//                                 <h2 className="text-[40px] font-semibold">{serviceName}</h2>
//                                 <p className="text-gray-500 text-[32px]">IT Service</p>

//                                 <div className="flex items-center gap-2 text-[28px]">
//                                     ★ <span className="font-semibold">4.8</span>
//                                     <span className="text-gray-500">(2,400+ reviews)</span>
//                                 </div>

//                                 {/* PRICE */}
//                                 <div className="border rounded-lg p-4">
//                                     <span className="text-[36px] font-semibold">₹10,000</span>
//                                     <span className="line-through ml-3 text-gray-400">₹14,000</span>
//                                 </div>

//                                 {/* COMMISSION */}
//                                 <div className="border border-[#8B5E3C] rounded-lg p-5 flex justify-between">
//                                     <div>
//                                         <p className="text-[32px]">Franchise Commission</p>
//                                         <p className="text-green-600 text-[36px] font-semibold">
//                                             Earn Up to 7%
//                                         </p>
//                                     </div>
//                                     <button className="text-[24px]">T&amp;C &gt;</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ================= MOBILE ================= */}
//                     <div className="lg:hidden">
//                         <img
//                             src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
//                             className="w-full h-[350px] object-cover"
//                             alt="service"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* ================= BENEFITS ================= */}
//             <section className="relative w-full p-8 bg-gray-100">
//                 <div className="rounded-xl w-full  mt-5">
//                     {/* Title */}
//                     <div className="flex items-start md:justify-center">
//                         <h2
//                             className="text-white bg-black px-6 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold mb-6 inline-block"
//                             style={{
//                                 clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)"

//                             }}
//                         >
//                             Benefits
//                         </h2>
//                     </div>

//                     {/* Benefits List */}
//                     <div className="flex flex-col mx-auto md:w-[700px] lg:w-[1320px] lg:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
//                         {parsedBenefits.map((item, index) => (
//                             <div key={index} className="flex items-start gap-2">
//                                 {/* <img src="/image/checkmark.png" alt="check" className="w-5 h-5 w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0" /> */}
//                                 <p className="text-black md:text-[18px] lg:text-[24px]">{item}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ================= OTHER SECTIONS ================= */}
//             <section className="w-full">
//                 <AboutSection
//                     aboutUs={service?.serviceDetails?.aboutUs || []}
//                     highlight={service?.serviceDetails?.highlight || []}
//                 />
//                 <WhyChooseUs whyChooseUs={service?.serviceDetails?.whyChooseUs || []} />
//                 <HowItWorks howItWorks={service?.serviceDetails?.howItWorks || []} />
//                 <AssuredByFetchTrue assuredByFetchTrue={service?.serviceDetails?.assuredByFetchTrue || []} />
//                 <Packages packages={service?.serviceDetails?.packages || []} />
//                 <Documents
//                     weRequired={service?.serviceDetails?.weRequired || []}
//                     weDeliver={service?.serviceDetails?.weDeliver || []}
//                 />
//                 <MoreInformation moreInfo={service?.serviceDetails?.moreInfo || []} />
//                 <ChooseProvider />
//                 <TermsAndConditions termsAndConditions={service?.serviceDetails?.termsAndConditions || []} />
//                 <FAQs faq={service?.serviceDetails?.faq || []} />
//                 <RatingsReviews />
//                 <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
//             </section>
//         </>
//     );

// };

// export default ServiceDetails;



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
import { ChevronLeft, Share2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useServiceDetails } from "@/src/context/ServiceDetailsContext";
import { useReview } from "@/src/context/ReviewContext";

const ServiceDetails = () => {

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
                    <div className="hidden lg:block w-full bg-white"> 
                            <div className="flex items-center justify-between w-screen  px-8 pt-6 fixed top-0 z-50 bg-white -ml-14">

                                {/* SERVICE DETAILS */}
                                <div className="flex items-center gap-3 ml-30">
                                    <Link href="/MainModules/ITService">
                                        <ChevronLeft size={28} className="cursor-pointer" />
                                    </Link>
                                    <h1 className="text-lg font-semibold">Service Details</h1>
                                </div>

                                {/* RIGHT: ACTION BUTTONS */}
                                <div className="flex items-center gap-3 mr-30 mb-2">
                                    <Link href="/MainModules/Checkout">
                                        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium">
                                            <ShoppingCart className="w-5 h-5" />
                                            Check out
                                        </button>
                                    </Link>

                                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium">
                                        <Share2 className="w-5 h-5" />
                                        Share
                                    </button>
                                </div>
                            </div>
                        

                        {/* ===== MAIN CONTENT ===== */}
                        <div className="flex gap-6 p-8 max-w-[1400px] mx-auto">

                            {/* ===== LEFT: IMAGE ===== */}
                            <div className="w-[652px]">
                                <div className="w-full h-[503px] rounded-lg overflow-hidden">
                                    <img
                                        src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
                                        alt="Managed IT Service"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* ===== RIGHT: DETAILS ===== */}
                            <div className="flex flex-col flex-1">

                                {/* TITLE */}
                                <div className="space-y-4">
                                    <h2 className="text-[40px] font-semibold text-black">
                                        {serviceName}
                                    </h2>

                                    <p className="text-gray-500 text-[32px]">IT Service</p>

                                    <div className="flex items-center gap-2 text-[32px] text-gray-600">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-medium text-black">{services?.averageRating}</span>
                                        <span>({services?.totalReviews} reviews)</span>
                                    </div>
                                </div>

                                {/* PRICE BOX */}
                                <div className="border rounded-lg p-4 mt-10 w-full">
                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-500 text-[24px]">Price</span>
                                        <span className="text-[36px] font-semibold">{service?.price}</span>
                                        <span className="line-through text-[20px] text-gray-400">
                                            {service?.discountedPrice}
                                        </span>
                                        <span className="bg-black text-white text-[16px] px-3 py-1 rounded">
                                            {service?.discount} OFF
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

                                    <button className="text-[24px] font-medium flex items-center gap-2">
                                        T&amp;C <span>{">"}</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ================= MOBILE VERSION ================= */}
                    <div className="block lg:hidden w-full mb-6">

                        {/* ===== IMAGE + HEADER ===== */}
                        <div className="relative w-full h-[380px] overflow-hidden">

                            {/* HEADER OVER IMAGE */}
                            <div className="absolute fixed top-0 left-0 z-10 w-full flex items-center justify-between px-4 py-4 bg-white/80 backdrop-blur-md">

                                {/* LEFT */}
                                <div className="flex items-center gap-3">
                                    <Link href="/MainModules/ITService">
                                        <ChevronLeft size={26} />
                                    </Link>
                                    <h1 className="text-base font-semibold">Service Details</h1>
                                </div>

                                {/* RIGHT – ACTION BUTTONS */}
                                <div className="flex items-center gap-2">
                                    <Link href="/MainModules/Checkout">
                                        <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-md text-xs font-medium">
                                            <ShoppingCart className="w-4 h-4" />
                                            Checkout
                                        </button>
                                    </Link>

                                    <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md text-xs font-medium">
                                        <Share2 className="w-4 h-4" />
                                        Share
                                    </button>
                                </div>
                            </div>

                            {/* IMAGE */}
                            <img
                                src={service?.bannerImages?.[0] || "/image/itservicenavbg.png"}
                                alt="Service banner"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* ===== CONTENT ===== */}
                        <div className="flex flex-col gap-4 px-4 pt-4">

                            <h2 className="text-lg font-semibold text-black">
                                {serviceName || "Managed IT Service & Support"}
                            </h2>

                            <p className="text-gray-500 text-sm">IT Service</p>

                            {/* PRICE + RATING */}
                            <div className="flex justify-between items-start">

                                <div>
                                    <p className="line-through text-gray-400 text-sm">₹14,000</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">₹10,000</span>
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
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
                                    <p className="text-green-600 text-lg font-semibold">
                                        Earn Up to 7%
                                    </p>
                                </div>

                                <button className="flex items-center gap-1 text-gray-700 text-sm font-medium">
                                    T&amp;C <span className="text-lg">&gt;</span>
                                </button>
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
                <RatingsReviews reviews={services} />
                <ConnectWith connectWith={service?.serviceDetails?.connectWith || []} />
            </section>
        </>
    );
};

export default ServiceDetails;