"use client";

import { useState } from "react";
import { FaBookmark, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Residential Property Franchise",
    category: "Real Estate",
    discount: "Get discount upto 30%",
    earn: "Earn Up to 5%",
    investment: "10L - 20L",
    area: "1000 SF - 1500 SF",
    outlets: "10",
    image: "/image/recentservice.jpg",
    rating: 4,
    trusted: "Trusted",
  },
  {
    title: "Commercial Property Franchise",
    category: "Real Estate",
    discount: "Get discount upto 25%",
    earn: "Earn Up to 3%",
    investment: "20L - 50L",
    area: "2000 SF - 3000 SF",
    outlets: "5",
    image: "/image/recentservice.jpg",
    rating: 5,
    trusted: "Trusted",
  },
  {
    title: "Luxury Villa Franchise",
    category: "Real Estate",
    discount: "Get discount upto 35%",
    earn: "Earn Up to 6%",
    investment: "50L - 1Cr",
    area: "3500 SF - 5000 SF",
    outlets: "3",
    image: "/image/recentservice.jpg",
    rating: 5,
    trusted: "Trusted",
  },
  {
    title: "Affordable Housing Franchise",
    category: "Real Estate",
    discount: "Get discount upto 20%",
    earn: "Earn Up to 2%",
    investment: "5L - 10L",
    area: "800 SF - 1200 SF",
    outlets: "8",
    image: "/image/recentservice.jpg",
    rating: 3,
    trusted: "Trusted",
  },
];

export default function RecentServices() {
  const settings = {
    dots: false,               // indicators removed
    infinite: true,
    autoplay: true,            // auto slide enabled
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
     centerMode: true,              // ⭐ RIGHT-SIDE HALF CARD VISIBLE
    centerPadding: "120px", 
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full mt-20 mb-20 px-4 overflow-hidden ">
      <h3 className="text-2xl font-semibold mb-8 ml-10">Recent Services</h3>

      <div className="w-full px-2 overflow-hidden ">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div key={idx} className="px-3 ">
              <div className="bg-white rounded-[12px] w-[378px] h-[363.96px] shadow-md relative mx-auto py-2">

                {/* Image */}
                <div className="relative w-[357.95px] h-[194.51px] mx-auto   rounded-[12px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Bookmark */}
                  <div className="absolute top-[12px] right-[12px] w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center shadow-md">
                    <FaBookmark size={20} color="white"/>
                  </div>

                  {/* Trusted */}
                  <div className="absolute top-[14px] left-[14px] px-2 py-[1px] text-[10px] font-semibold text-white bg-blue-600 rounded">
                    {service.trusted}
                  </div>

                  {/* Star Rating */}
                  <div className="absolute bottom-[10px] right-[12px] flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={14}
                        color={i < service.rating ? "#FFD700" : "#E0E0E0"}
                      />
                    ))}
                  </div>
                </div>

                {/* Info section */}
                <div className="px-[15px] mt-2">
                  <h4 className="text-[18px] font-semibold">{service.title}</h4>
                  <p className="text-[12px] mt-[4px]">{service.category}</p>

                  <div className="flex justify-between mt-[10px]">
                    <span className="text-[15px]">{service.discount}</span>
                    <span className="text-[12px] bg-[#EAF2FF] px-2 py-[3px] rounded-[10px]">
                      {service.earn}
                    </span>
                  </div>

                  <div className="flex justify-between mt-[12px] text-[11px] font-semibold">
                    <div className="flex flex-col">
                      <span>{service.investment}</span>
                      <span className="font-normal">Investment</span>
                    </div>
                    <div className="flex flex-col">
                      <span>{service.area}</span>
                      <span className="font-normal">Area</span>
                    </div>
                    <div className="flex flex-col">
                      <span>{service.outlets}</span>
                      <span className="font-normal">Outlets</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
