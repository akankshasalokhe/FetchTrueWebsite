"use client";
import BusinessCard from "@/src/components/ui/BusinessCard";
import { useState } from "react";
import SubCategoryStrip from "@/src/components/Business/Subcategory";



const recommendedData = [
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 2.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
 {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 5.1,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 3.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 5.1,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
    {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
 {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 5.1,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 3.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
  {
    image: "/image/image 111.png",
    title: "Property Buying & Selling",
    category: "Agricultural",
    earnPercent: 15,
    investment: "₹10L – 25L",
    earnings: "1.5–3L/month",
    rating: 4.5,
    roi: "25–30%",
    slug:"agricultural-business",
    detailslug:"property-buying-selling"
  },
];

const tabs = ["All", "Low to High", "High to Low", "Top Rated"];

export default function BusinessCategoryDetailPage() {

     const [active, setActive] = useState("All");
     const filteredData = (() => {
  switch (active) {
    case "Low to High":
      return [...recommendedData].sort(
        (a, b) => a.rating - b.rating
      );

    case "High to Low":
      return [...recommendedData].sort(
        (a, b) => b.rating - a.rating
      );

    case "Top Rated":
      return recommendedData.filter(
        (item) => item.rating >= 4.5
      );

    case "All":
    default:
      return recommendedData;
  }
})();


    return (
        <>
        
<div className="max-w-[1440px] mx-auto px-4 pt-3">
  <div className="flex items-center justify-between h-[72px]">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3 relative">
      
      {/* HOME ICON */}
      <img
        src="/image/Group 2.png"
        alt="home"
        className="w-[25px] h-[25px]"
      />

      {/* TITLE */}
      <h2 className="text-[18px] font-medium text-[#6A6A6A]">
        Agricultural Business
      </h2>

    </div>

    {/* RIGHT ICON */}
    <img
      src="/image/Vector (2).png"
      alt="bookmark"
      className="w-[20px] h-[20px] cursor-pointer"
    />
  </div>
</div>



<SubCategoryStrip />

<section className="w-full bg-white py-8 lg:py-12">
  <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 mb-6 lg:mb-12">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                px-6
                py-2.5
                rounded-[10px]
                text-[14px]
                font-medium
                transition
                ${
                  active === tab
                    ? "bg-[#1D4699] text-white shadow"
                    : "bg-[#ECEDEF] text-[#232323] hover:bg-[#E0E3E9]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  <div className="max-w-[1440px] mx-auto bg-[#F7F7F7] rounded-[24px] p-6 lg:p-12">

    {/* SCROLL CONTAINER */}
    <div
      className="
        grid
        grid-rows-3
        grid-flow-col-dense
        gap-3

        overflow-x-auto
        overflow-y-hidden

        lg:grid-rows-none
        lg:grid-cols-3
        lg:grid-flow-row
        lg:gap-12

        lg:overflow-x-hidden
        lg:overflow-y-auto

        max-h-none
        lg:max-h-[1256px]

        scrollbar-hide
      "
    >
    
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="min-w-[330px] lg:min-w-full"
        >
          <BusinessCard {...item} />
        </div>
      ))}
    </div>

  </div>
</section>


        </>
    )
}