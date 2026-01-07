"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Design Studio",
    slug: "design-studio",
    icon: "/image/DesignStudio.png",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: "/image/DigitalMarketing.png",
  },
  {
    title: "Brand Marketing",
    slug: "brand-marketing",
    icon: "/image/BrandMarketing.png",
  },
  {
    title: "Creative Design",
    slug: "creative-design",
    icon: "/image/Design Studio (5).png",
  },
  {
    title: "Event Marketing",
    slug: "event-marketing",
    icon: "/image/EventMarketing.png",
  },
  {
    title: "Presentation",
    slug: "presentation",
    icon: "/image/Presentation.png",
  },
];

export default function CategoryModule() {
  return (
    <div className="">
      {/* Background Layer */}
      <div className="w-full py-15 lg:py-25 rounded-[11px]" />

      <section className="w-full  relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* TITLE */}
          <h2 className="relative font-inter font-semibold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] mb-6">
            Category
          </h2>

          {/* CARD ROW */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/MainModules/Marketing/${item.slug}`}
                className="shrink-0"
              >
                <div
                  className="
                    relative
                    min-w-[160px] sm:min-w-[180px] lg:min-w-[187.12px]
                    h-[200px] sm:h-[220px] lg:h-[231.3px]
                    rounded-[19.49px]
                    overflow-hidden
                    cursor-pointer
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  {/* BACKGROUND IMAGE */}
                  <Image
                    src="/image/bg-card.jpeg"
                    alt="Card Background"
                    fill
                    className="object-cover"
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 w-full h-full">

                    {/* TITLE */}
                    <p className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-black mt-9 ml-4">
                      {item.title}
                    </p>

                    {/* ICON */}
                    <div className="relative w-[120px] sm:w-[140px] lg:w-[130px] h-[90px] sm:h-[105px] lg:h-[111.95px] mt-12 ml-6">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
