"use client";

import Image from "next/image";
import Link from "next/link";
import LegalExpertsSection from "./LegalExpert";

const categories = [
  {
    title: "Business Registration",
    slug: "business-registration",
    image: "/image/BuisenessRegistration.png",
  },
  {
    title: "Tax & Compliance",
    slug: "tax-compliance",
    image: "/image/TaxCompilance.png",
  },
  {
    title: "Licenses & Certifications",
    slug: "licenses-certifications",
    image: "/image/LicenceCertification.png",
  },
  {
    title: "Legal Drafting & Documentation",
    slug: "legal-drafting-documentation",
    image: "/image/LegalDrafting.png",
  },
  {
    title: "Business Conversion",
    slug: "business-conversion",
    image: "/image/BusinessConversion.png",
  },
  {
    title: "Real Estate Legal",
    slug: "real-estate-legal",
    image: "/image/RealEstateLegal.png",
  },
];

export default function CategorySection() {
  return (
    <div className="w-full bg-[#F9F5EE] rounded-[15px] mx-auto">

      {/* INNER CONTAINER */}
      <section
        className="
          w-full
          max-w-[1298px]
          mx-auto
          px-4 sm:px-6
          pt-40 sm:pt-30 lg:pt-56
          mb-10
          flex flex-col gap-5
        "
      >
        {/* HEADING */}
        <h2 className="font-inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[36px] text-black">
          Category
        </h2>

        {/* CARD ROW */}
        <div
          className="
            flex gap-4 sm:gap-5
            overflow-x-auto
            scrollbar-hide
            snap-x snap-mandatory
            touch-pan-x
          "
        >
          {categories.map((item, index) => (
            <Link
              key={index}
                href={`/MainModules/LegalService/${item.slug}`}
              className="snap-start"
            >
              <div
                className="
                  relative
                  min-w-[146px] sm:w-[146px]
                  h-[166px]
                  rounded-[14.65px]
                  bg-white
                  flex-shrink-0
                  cursor-pointer
                  hover:shadow-md
                  transition
                "
              >
                {/* IMAGE BOX */}
                <div
                  className="
                    w-[100px] h-[79px]
                    mx-auto
                    mt-[-2px]
                    rounded-[8.54px]
                    bg-[#F5E8E0]
                    flex items-center justify-center ml-12
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={61}
                    height={54}
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    absolute bottom-4 left-3 right-3
                    font-inter font-semibold
                    text-[14px] sm:text-[15px]
                    leading-[20px]
                    text-black text-left
                  "
                >
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LEGAL EXPERTS */}
      <LegalExpertsSection />
    </div>
  );
}
