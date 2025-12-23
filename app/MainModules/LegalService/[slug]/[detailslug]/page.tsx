"use client";

import Image from "next/image";
import {
  FiTarget,
  FiEye,
  FiZap,
  FiStar,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";
import { Scale, Timer, Wallet, MapPin } from "lucide-react";
import FAQs from "@/src/components/Section/FAQ";
import TermsConditions from "@/src/components/Section/TermsandCondition";
import MoreInformation from "@/src/components/Section/MoreInformationSection";


const benefits = [
  { icon: <FiTarget />, label: "Strong Brand Identity" },
  { icon: <FiEye />, label: "Professional & Trustworthy Look" },
  { icon: <FiZap />, label: "Quick Recognition" },
  { icon: <FiStar />, label: "Stand Out from Competitors" },
  { icon: <FiSmartphone />, label: "Works on All Platforms" },
  { icon: <FiLayers />, label: "Consistent Branding" },
];

export default function LegalDetailsPage() {
  return (
    <div className="bg-[#F4F4F4] w-full ">
        <section className="py-6 sm:py-8 lg:py-12 px-10">
      <div className=" w-full  mx-auto bg-white rounded-[4px] p-4  sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[652px] h-[220px] sm:h-[360px] lg:h-[503px] rounded-[6px] overflow-hidden ">
          <Image
            src="/image/legalMainImage.png"
            alt="Legal Service"
            width={652}
            height={503}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full lg:w-[614px]">
          
          {/* Title */}
          
          <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1E1E1E] mb-1">
            Limited Liability Partnership(LLP)
          </h1>

          <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-[#868686] mb-3">
            Legal Service
          </p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-[#868686]">
            <span className="text-[#FDC700] text-[20px] lg:text-[24px]">★</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">4.8</span>
            <span className="text-[18px] lg:text-[24px] font-semibold">
              (2,400+ reviews)
            </span>
          </div>

          {/* Cost + Time */}
          <div className="flex  sm:flex-row gap-4 lg:gap-6 mb-6">
            
            {/* Cost */}
            <div className="border border-[#BEBEBE] rounded-[8px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Total Cost
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                ₹14,000
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="line-through text-[#9E9E9E] text-[16px] lg:text-[18px]">
                  ₹10,000
                </span>
                <span className="text-[12px] lg:text-[14px] text-white bg-[#BC9958] px-2 py-[2px] rounded">
                  25% OFF
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="border border-[#D9D9D9] rounded-[6px] p-4 w-full sm:w-1/2 lg:w-[299px]">
              <p className="text-[18px] lg:text-[20px] text-[#7A7A7A] mb-1">
                Time Required
              </p>

              <p className="text-[22px] lg:text-[26px] font-semibold text-[#1E1E1E]">
                7-10
              </p>

              <p className="text-[14px] lg:text-[16px] text-[#7A7A7A]">
                Working days
              </p>
            </div>
          </div>

          {/* Franchise Commission */}
          <div className="w-full lg:w-[614px] border-2 border-[#5B3527] rounded-[12px] px-4 py-4 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
                Franchise Commission
              </p>
              <p className="text-[26px] lg:text-[32px] font-medium text-[#2CB140] mt-1">
                Earn Up to 7%
              </p>
            </div>

            <button className="text-[#BC9958] text-[16px] lg:text-[20px] font-medium self-end">
              T&C →
            </button>
          </div>

        </div>
      </div>
        </section>

         {/* BENEFITS */}
                  <section className="w-full flex justify-center mt-8 ps-4">
                    <div className="w-full max-w-[1400px] flex flex-col gap-5">
                      <h2 className="text-[36px] text-[#5B3527] text-center font-medium">
                        Benefits
                      </h2>
        
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
                        {benefits.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="text-[#BC9958] text-[22px]">
                              {item.icon}
                            </div>
                            <p className="text-[22px] text-[#606060] font-medium">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
        
                  {/* ABOUT */}
                  <section className="max-w-[1400px] mx-auto px-2 mt-12">
                    <h2 className="text-[#5B3527] text-[32px] font-medium mb-3 text-center">
                      About Us
                    </h2>
                    <p className="text-[#868686] text-[22px]">
                     A logo is the face of your brand. Our custom logo design service creates unique, memorable, and versatile logos tailored to your business identity. Whether you’re a startup, small business, or large brand, we deliver high-quality, professional designs that help you stand out.A logo is the face of your brand. Our custom logo design service creates unique, memorable, and versatile logos tailored to your business identity. Whether you’re a startup, small business, or large brand, we deliver high-quality, professional designs that help you stand out.
                    </p>
                    
                    <div className="w-[902px] h-[511px] mx-auto my-20">
                      <img
                        src="/image/legalAbout.jpg"
                        alt="legalAboutImage"
                        className="w-full rounded-[12px]"
                      />
                    </div>
        
                  </section>

                   <section className="w-full  pb-10">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-[28px] md:text-[32px] font-medium text-[#5B3527] mb-12">
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="border border-[#5B3527] rounded-[6px] p-6 text-center ">
            <h3 className="text-[20px] font-medium mb-4">
              Expert Lawyers
            </h3>
            <Scale className="mx-auto text-[#BC9958] mb-4" size={36} />
            <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
              Qualified legal professionals with 10+ years experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#5B3527] rounded-[6px] p-6 text-center">
            <h3 className="text-[20px] font-medium mb-4">
              Quick Turnaround
            </h3>
            <Timer className="mx-auto text-[#BC9958] mb-4" size={36} />
            <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
              Fast processing with 7-day company registration
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#5B3527] rounded-[6px] p-6 text-center">
            <h3 className="text-[20px] font-medium mb-4">
              Affordable Fees
            </h3>
            <Wallet className="mx-auto text-[#BC9958] mb-4" size={36} />
            <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
              Transparent pricing with no hidden charges
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-[#5B3527] rounded-[6px] p-8 text-center">
            <h3 className="text-[20px] font-medium mb-4">
              PAN-India Services
            </h3>
            <MapPin className="mx-auto text-[#BC9958] mb-4" size={36} />
            <p className="text-[#8A8A8A] text-[18px] leading-[24px]">
              Legal services available across all Indian states
            </p>
          </div>

        </div>
      </div>
                   </section>

                   <section className="w-full lg:w-[1440px] py-12 ms-0  lg:ms-12 mb-10 md:py-16 bg-[#5B3527] relative">
  {/* INNER SHADOW */}
  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_6px_12px_rgba(0,0,0,0.25)]" />

  <div className="relative max-w-[1347px] mx-auto px-4 text-white">
    
    {/* Title */}
    <h2 className="text-center text-[22px] sm:text-[24px] md:text-[28px] font-semibold mb-10 md:mb-12">
      Assured By Fetch True
    </h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">

      {/* Left Column */}
      <div className="space-y-8 md:space-y-10">
        {[
          {
            title: "Customer Satisfaction:",
            desc: "We provide up to 100% return if customer is not satisfied",
          },
          {
            title: "Best Quality Assurance:",
            desc: "We personally check all the project quality before final delivery",
          },
          {
            title: "End-to-End Execution:",
            desc: "From connecting customer to professional expert to completion, we handle everything under one platform.",
          },
          {
            title: "Reschedule Anytime:",
            desc: "If the customer is not satisfied with the service, we reschedule the providers for better results.",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src="/image/Group.png"
              className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
                {item.title}
              </h4>
              <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-8 md:space-y-10">
        {[
          {
            title: "Transparent Workflow:",
            desc: "Complete process visibility, transparent communication, and real-time tracking.",
          },
          {
            title: "On-Time Delivery Result:",
            desc: "We provide guaranteed on-time completion of every project, ensuring your campaigns and services are delivered exactly as scheduled.",
          },
          {
            title: "Trusted Platform:",
            desc: "Fetch True ensures secure connections between clients and genuine professionals.",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src="/image/Group.png"
              className="w-[36px] h-[38px] sm:w-[42px] sm:h-[45px] md:w-[47px] md:h-[50px]"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">
                {item.title}
              </h4>
              <p className="text-[15px] sm:text-[16px] md:text-[20px] text-[#BEBEBE]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

                   <MoreInformation
                     title="More Information"
                     cards={[
                       {
                         title: "Brand Understanding",
                         description:
                           "We first understand your brand’s purpose, audience, and personality. This helps us design a logo that truly fits your identity and communicates your message clearly.",
                         image: "/image/moreinfo1.jpg",
                       },
                       {
                         title: "Concept & Ideation",
                         description:
                           "Creative brainstorming to generate impactful design concepts.",
                         image: "/image/moreinfo2.jpg",
                       },
                       {
                         title: "Digital Execution",
                         description:
                           "Transform ideas into polished digital experiences.",
                         image: "/image/moreinfo3.jpg",
                       },
                       {
                         title: "Creative Innovation",
                         description:
                           "Blending creativity with strategy for standout branding.",
                         image: "/image/moreinfo4.jpg",
                       },
                     ]}
                   />

                  <TermsConditions
                    terms={[
                      {
                        title: "Platform Compliance",
                        description:
                          "All customer communication must be completed only through Fetch True Platform to maintain service authenticity, tracking and eligibility for customer benefits.",
                      },
                      {
                        title: "Booking Services",
                        description:
                          "All service bookings must be made through the Fetch True App.",
                      },
                      {
                        title: "Direct Contract Restriction",
                        description:
                          "If a customer chooses to engage directly with a service provider outside the Fetch True platform, such off-platform transactions/contract will not be considered under Fetch True’s responsibility.",
                      },
                      {
                        title: "Termination/Cancellation of Benefits",
                        points: [
                          "Up to 100% Guarantee Return policy",
                          "Customer support and dispute resolution assistance",
                          "Transaction protection and service quality verification",
                          "Refund Policy will be terminated if direct contract has been made.",
                        ],
                      },
                      {
                        title: "Liability",
                        description:
                          "Fetch True is not liable for any loss, dispute, or claim arising from off-platform engagements or private transactions made outside its official system.",
                      },
                      {
                        title: "Refund Policy",
                        description:
                          "Refunds will only be initiated when service conditions meet refund eligibility. All refunds will be processed within the specified time frame.",
                      },
                    ]}
                  />


                  <FAQs
                    items={[
                      {
                        question: "What include in Managed IT Services?",
                        answer:
                          "Managed IT services include system monitoring, security, backups, helpdesk support, and infrastructure management.",
                      },
                      {
                        question:
                          "Can I customize the service according to my business size?",
                        answer:
                          "Yes, services can be tailored based on your organization size, industry, and technical requirements.",
                      },
                      {
                        question:
                          "What if a major issue occurs during business hours?",
                        answer:
                          "Our support team responds immediately during business hours to minimize downtime and resolve critical issues.",
                      },
                    ]}
                  />

                   
    </div>
  );
}
