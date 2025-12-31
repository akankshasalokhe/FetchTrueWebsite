"use client";

import {
  Palette,
  User,
  Folder,
  Clock,
  ShieldCheck,
} from "lucide-react";

const DATA = [
  {
    icon: Palette,
    title: "Original Designs",
    desc: "100% Custom & Original Designs",
  },
  {
    icon: User,
    title: "Designers",
    desc: "Professional & Experienced Designers",
  },
  {
    icon: Folder,
    title: "Multiple File",
    desc: "Multiple File Formats Provided",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Fast Delivery (3–5 Days)",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction",
    desc: "Satisfaction Guaranteed",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F6F6F6] py-10">
      {/* Title */}
      <h2 className="text-start md:text-center ml-6 text-[#2164F4] text-[18px] lg:text-[36px] font-semibold mb-6">
        Why Choose Us?
      </h2>

      {/* Cards Wrapper */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-4">
        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
          {/* First 3 cards */}
          {DATA.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} Icon={Icon} {...item}  className="w-[90px] md:w-[220px] lg:w-[376px]"/>
            );
          })}
        </div>

        {/* Second row (2 centered cards) */}
        <div className="mt-6 flex flex-row md:flex-row justify-center gap-6">
          {DATA.slice(3).map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                Icon={Icon}
                {...item}
                className="w-[90px] md:w-[220px] lg:w-[376px]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===== Reusable Card ===== */
function Card({
  Icon,
  title,
  desc,
  className = "",
}: {
  Icon: any;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`
        bg-white
        border-t-4 border-blue-500
        rounded-xl
        shadow-md p-1
        md:p-6
        text-center
        ${className}
      `}
    >
      <Icon className="mx-auto text-[#2164F4] w-[28px] h-[28px]  lg:w-[45px] lg:h-[45px] mb-4" />
      <h3 className="text-[12px] lg:text-[32px] font-semibold text-gray-700">
        {title}
      </h3>
      <p className="text-gray-500 text-[12px] lg:text-[24px] mt-2">
        {desc}
      </p>
    </div>
  );
}
