"use client";

import Link from "next/link";

interface CategoryItem {
  title: string;
  icon: string;
  slug: string;
}

const categories: CategoryItem[] = [
  { title: "Banking", slug: "banking", icon: "/image/Banking.png" },
  { title: "Investment", slug: "investment", icon: "/image/investment.png" },
  { title: "Insurance", slug: "insurance", icon: "/image/insurans.png" },
  { title: "Loans", slug: "loans", icon: "/image/Loans.png" },
  { title: "Cooperative Finance", slug: "cooperative-finance", icon: "/image/cooperative finance.png" },
  { title: "Credit Card", slug: "credit-card", icon: "/image/creditcard.png" },
];

const CategorySection = () => {
  return (
    <section className="w-full pt-10 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-8">
          Category
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            pb-4
            scrollbar-hide
          "
        >
          {categories.map((item, index) => (
             <Link
              key={index}
                href={`/MainModules/Finance/${item.slug}`}
              className="snap-start"
            >
            <div
              key={index}
              className="
                flex-shrink-0
                flex
                flex-col
                items-center
                cursor-pointer
                transition
                hover:scale-105
              "
            >
              <div className="w-[165px] h-[155px] flex items-center justify-center bg-[#FFFDF9] rounded-[8px] border border-[#EDEDED] mb-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[117px] h-[112px] object-contain"
                />
              </div>

              <p className="text-[24px] font-normal text-[#000000] text-center whitespace-nowrap">
                {item.title}
              </p>
            </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
