"use client";

import Image from "next/image";
import { CheckCircle, Eye, Zap, Smartphone } from "lucide-react";

const features = [
  {
    title: "Strong Brand Identity",
    desc: "providing strong identity design for logo",
    icon: CheckCircle,
    active: true,
  },
  {
    title: "Professional & Trustworthy",
    desc: "not just professional but trusted service providers",
    icon: Eye,
  },
  {
    title: "Quick Responses",
    desc: "fast and clear work flow for the users",
    icon: Zap,
  },
  {
    title: "Works for All",
    desc: "working for all types of category",
    icon: Smartphone,
  },
];

export default function WhyJustOurServices() {
  return (
    <section className="relative w-full py-20 bg-[#2A67F4] mt-24 mb-10 overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/image/marketingbgdesign.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-12">

        {/* TITLE */}
        <h2 className="text-white text-center font-inter font-medium
                       text-[28px] sm:text-[32px] lg:text-[36px]
                       leading-[40px] sm:leading-[48px] lg:leading-[54px]">
          Why Just Our Services
        </h2>

        {/* CARDS */}
        <div className="flex flex-col gap-6 w-full">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
  key={i}
  className={`flex flex-row items-center
  gap-4 sm:gap-6
  px-5 sm:px-8 py-6
  rounded-[22px] transition-all
  ${
    item.active
      ? "bg-white shadow-xl"
      : "bg-white/35 backdrop-blur-sm"
  }`}
>
  {/* ICON */}
  <div
    className={`flex items-center justify-center shrink-0
    w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] lg:w-[70px] lg:h-[70px]
    rounded-full
    ${
      item.active
        ? "bg-[#2164F4] text-white"
        : "bg-white/60 text-[#2164F4]"
    }`}
  >
    <Icon size={24} className="sm:hidden" />
    <Icon size={30} className="hidden sm:block lg:hidden" />
    <Icon size={36} className="hidden lg:block" />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col gap-1 sm:gap-2">
    <h3
      className="font-inter font-semibold
      text-[16px] sm:text-[26px] lg:text-[35px]
      leading-tight text-[#2164F4]"
    >
      {item.title}
    </h3>

    <p
      className="font-inter font-normal
      text-[13px] sm:text-[18px] lg:text-[26px]
      leading-[18px] sm:leading-[26px] lg:leading-[30px]
      text-[#1E3A8A]"
    >
      {item.desc}
    </p>
  </div>
</div>

            );
          })}
        </div>
      </div>
    </section>
  );
}
