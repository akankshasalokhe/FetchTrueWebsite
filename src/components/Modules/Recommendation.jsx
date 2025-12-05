"use client";

import { useState } from "react";
import { FaBookmark, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";


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

export default function Recommendation() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,

    centerMode: true,
    centerPadding: "120px",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
<section className="w-full mt-20 mb-30 px-4 overflow-hidden">
      <h3 className="text-2xl font-medium mb-8 ml-10">Recommendation for you</h3>

      <Slider {...settings}>
        {services.map((service, idx) => (
          <div key={idx} className="px-3">
<div className="bg-white rounded-[12px] w-full max-w-[380px] h-auto 
     border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.15)]
     relative mx-auto py-2 pb-5">

              {/* Image */}
              <div className="relative w-[95%] h-[180px] md:h-[200px] mx-auto rounded-[12px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Bookmark */}
                <div className="absolute top-[12px] right-[12px] w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center shadow-md">
                  <CiBookmark size={20} color="white" />
                </div>

                {/* Trusted */}
                <div className="absolute top-[15.8px] left-[19.19px] px-2 py-1 text-[10px] font-semibold text-[#2164F4] bg-[#FFFFFF] rounded-[7px]">
                  <VscWorkspaceTrusted className="inline-block mr-1" />{service.trusted}
                </div>

                {/* Rating */}
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

              {/* Info */}
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
    </section>
  );
}
