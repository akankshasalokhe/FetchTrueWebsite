"use client";

import Image from "next/image";
import RecommendedForYou from "./Recommend";

const categories = [
  {
    title: "Design Studio",
    icon: "/image/DesignStudio.png",
  },
  {
    title: "Digital Marketing",
    icon: "/image/DigitalMarketing.png",
  },
  {
    title: "Brand Marketing",
    icon: "/image/BrandMarketing.png",
  },
  {
    title: "Brand Marketing",
    icon: "/image/Design Studio (5).png",
  },
  {
    title: "Event Marketing",
    icon: "/image/EventMarketing.png",
  },
  {
    title: "Presentation",
    icon: "/image/Presentation.png",
  },
];

export default function CategoryModule() {
  return (
    <div className=" bg-white  ">
 <div className="absolute w-full h-[600px] bg-white py-10 top-[603px] rounded-[10px 11px] "></div>
     
 <section className="w-full bg-white">
  <div className="max-w-[1352px] mx-auto px-4 sm:px-6">

    {/* TITLE */}
    <h2 className="relative font-inter font-semibold
                   text-[20px] sm:text-[24px]
                   leading-[30px] sm:leading-[36px]
                   mb-6">
      Category
    </h2>

    {/* CARD ROW */}
    <div className="flex gap-4 sm:gap-6
                    overflow-x-auto no-scrollbar pb-2">
      {categories.map((item, index) => (
        <div
          key={index}
          className="relative
                     min-w-[160px] sm:min-w-[180px] lg:min-w-[187.12px]
                     h-[200px] sm:h-[220px] lg:h-[231.3px]
                     rounded-[19.49px] overflow-hidden shrink-0"
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
            <p className="font-inter font-semibold
                          text-[14px] sm:text-[16px]
                          leading-[20px] sm:leading-[22px]
                          text-black mt-6 ml-4">
              {item.title}
            </p>

            {/* ICON */}
            <div className="relative
                            w-[120px] sm:w-[140px] lg:w-[149.18px]
                            h-[90px] sm:h-[105px] lg:h-[111.95px]
                            mt-6 ml-4">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  <RecommendedForYou />
  </div>
  );
}
