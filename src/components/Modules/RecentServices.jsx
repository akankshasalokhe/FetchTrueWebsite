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
    image: "/image/service1.jpg",
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
    image: "/image/service2.jpg",
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
    image: "/image/service3.jpg",
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
    image: "/image/service4.jpg",
    rating: 3,
    trusted: "Trusted",
  },
];

export default function RecentServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center mt-20 mb-20 px-4">
      <h3 className="text-2xl font-semibold mb-8">Recent Services</h3>
      <div className="w-full">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[12px] w-[378px] h-[364px] mx-2 relative shadow-md"
            >
              {/* Image */}
              <div className="relative w-[358px] h-[194.5px] mx-[10px] mt-[10px] rounded-[12px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Bookmark */}
                <div className="absolute top-[17px] left-[312px] w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shadow-md">
                  <FaBookmark size={24} />
                </div>
                {/* Trusted */}
                <div className="absolute top-[19.8px] left-[27px] w-[68px] h-[16.66px] text-[10px] font-semibold text-white bg-blue-600 flex items-center justify-center rounded">
                  {service.trusted}
                </div>
                {/* Star rating */}
                <div className="absolute top-[170px] left-[265.7px] flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      color={i < service.rating ? "#FFD700" : "#E0E0E0"}
                    />
                  ))}
                </div>
              </div>

              {/* Info below image */}
              <div className="px-[10px] mt-2">
                <h4 className="text-[20px] font-semibold">{service.title}</h4>
                <p className="text-[12px] font-normal mt-[4px]">{service.category}</p>
                <div className="flex justify-between mt-[10px]">
                  <span className="text-[16px]">{service.discount}</span>
                  <span className="text-[14px] bg-[#EAF2FF] px-2 py-1 rounded-[10px]">
                    {service.earn}
                  </span>
                </div>

                <div className="flex justify-between mt-[10px] text-[12px] font-semibold">
                  <div className="flex flex-col">
                    <span>{service.investment}</span>
                    <span className="font-normal">Investment Range</span>
                  </div>
                  <div className="flex flex-col">
                    <span>{service.area}</span>
                    <span className="font-normal">Area Requested</span>
                  </div>
                  <div className="flex flex-col">
                    <span>{service.outlets}</span>
                    <span className="font-normal">Franchise Outlet</span>
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
