"use client";
import { useState } from "react";

const categories = [
  { title: "Dairy\nFarming", icon: "/image/dairyfarming.png" },
  { title: "Dairy\nFarming", icon: "/image/dairyfarming.png" },
  { title: "Dairy\nFarming", icon: "/image/dairyfarming.png" },
  { title: "Dairy\nFarming", icon: "/image/dairyfarming.png" },
  { title: "Dairy\nFarming", icon: "/image/dairyfarming.png" },
];

export default function SubCategoryStrip() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide ">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center gap-[24px]">
              
              {/* CATEGORY CARD */}
              <button
                onClick={() => setActive(index)}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[140px] h-[120px] ml-5
                  rounded-[8px] transition rounded-[4px]
                  ${
                    active === index
                      ? "bg-[#EDEEEF]"
                      : "bg-transparent hover:bg-[#EAEBED]"
                  }
                `}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[81px] h-[60px] object-contain ml-14"
                />

                <p className="mt-2 mr-10 text-[16px] font-medium text-[#232323] leading-tight text-left whitespace-pre-line">
                  {item.title}
                </p>
              </button>

              {/* DIVIDER */}
              {index !== categories.length - 1 && (
                <div className="h-[60px] w-[1px] bg-[#D9D9D9]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
