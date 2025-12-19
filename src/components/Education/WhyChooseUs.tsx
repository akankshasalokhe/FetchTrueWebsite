'use client';

import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Best and Trusted Learning Courses",
      desc: "we are providing the best ever courses in the educational sector",
    },
    {
      title: "AI based recommendation in your search",
      desc: "providing recommended services for you",
    },
    {
      title: "Quick and professional learning resources",
      desc: "providing the learning resources for the users",
    },
  ];

  return (
    // <section className="max-w-xs md:max-w-8xl mx-auto  px-4 md:px-30 py-10">
     <section className="w-[xs] md:w-[8xl] px-4 md:px-30 py-10">
      {/* HEADER */}
      <div className="mb-8 text-center">
        <h2 className="text-[16px] md:text-[24px] font-semibold text-black">
          What you will get from us
        </h2>
      </div>

      {/* CARDS */}
      <div className="space-y-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 md:gap-10 bg-[#F5F5F5] rounded-2xl px-10 py-10"
          >
            {/* ICON */}
            <div className="flex -ml-5 md:ml-1 items-center justify-center w-35 h-15 md:w-20 md:h-20 rounded-xl bg-[#EEEEEE]">
             
              <img src="/image/eduwcu.png" alt="checkicon" className="object-cover w-[29.17px] h-[29.7x] md:w-[44.9px] md:h-[44.9px]"/>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[16px] md:text-[24px] font-semibold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-[12px] md:text-[18.58px] text-gray-600 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
