"use client";

import Image from "next/image";

const categories = [
  { title: "Business Registration", image: "/image/BuisenessRegistration.png" },
  { title: "Tax & Compliance", image: "/image/TaxCompilance.png" },
  { title: "Licenses & Certifications", image: "/image/LicenceCertification.png" },
  { title: "Legal Drafting & Documentation", image: "/image/LegalDrafting.png" },
  { title: "Business Conversion", image: "/image/BusinessConversion.png" },
  { title: "Real Estate Legal", image: "/image/RealEstateLegal.png" },
];

export default function CategorySection() {
  return (
    <div className="w-full bg-[#F9F5EE] rounded-[15px] mx-auto">
      
      {/* INNER CONTAINER */}
      <section className="max-w-[1298px] mx-auto px-4 pt-24 sm:pt-32 lg:pt-56 mb-10 flex flex-col gap-5">
        
        {/* HEADING */}
        <h2 className="font-inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[36px] text-black">
          Category
        </h2>

        {/* CARD ROW */}
        <div className="
          flex
          gap-5
          flex-wrap
          sm:flex-nowrap
          sm:overflow-x-auto
          sm:overflow-y-hidden
        ">
          {categories.map((item, index) => (
            <div
              key={index}
              className="
                relative
                w-[146px]
                h-[166px]
                rounded-[14.65px]
                bg-white
                flex-shrink-0
              "
            >
              {/* IMAGE BOX */}
              <div className="w-[100px] h-[79px] ml-[47px] mt-[-1.1px] mx-auto  rounded-[8.54px] bg-[#F5E8E0] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={61}
                  height={54}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="
                absolute
                bottom-4
                left-3
                right-3
                font-inter
                font-semibold
                text-[15px]
                leading-[20px]
                text-black
              ">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
