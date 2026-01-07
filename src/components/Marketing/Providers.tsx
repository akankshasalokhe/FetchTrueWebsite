"use client";

import { BsBookmark, BsGraphUpArrow } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const providers = [
  {
    id: 1,
    category: "Marketing",
    name: "Digital Boost Agency",
    description: "Data-driven marketing to increase your conversions.",
    phone: "+91 98456 26880",
    email: "company@gmail.com",
    location: "Plot 3, High Sky Building, Pune 415005",
    services: ["SEO Specialist", "Logo Designing", "Brand Designing"],
    experience: "6+ Years",
    rating: 4,
    reviews: 300,
    status: "Available",
  },
  {
    id: 2,
    category: "IT Services",
    name: "Tech Wave Solutions",
    description: "Custom software and scalable IT solutions.",
    phone: "+91 99887 44556",
    email: "techwave@gmail.com",
    location: "Baner Road, Pune 411045",
    services: ["Web Development", "App Development", "UI/UX Design"],
    experience: "8+ Years",
    rating: 5,
    reviews: 520,
    status: "Available",
  },
];

export default function SuggestedProviders() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-10 bg-white">
      <h2 className="text-[18px] sm:text-[20px] font-semibold mb-6">
        Suggested Providers
      </h2>

      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {providers.map((item) => (
          <div
            key={item.id}
            className="min-w-[350px] sm:min-w-[340px] lg:min-w-[383px] bg-white border-[1px] border-[#BEBEBE] rounded-[12px] p-4 relative "
          >
            {/* TOP TAG */}
            <div className="absolute -top-1  left-1/2 -translate-x-1/2 bg-[#2164F4] text-white text-xs px-6 py-1 rounded ">
              {item.category}
            </div>

            {/* BOOKMARK */}
            <div className="absolute top-4 right-4">
              <BsBookmark />
            </div>

            {/* HEADER */}
            <div className="flex gap-3 mt-5">
              <img
                src="/image/profile.jpg"
                alt="provider"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[14px] sm:text-[16px]">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-[12px] text-[#868686]">
                  {item.description}
                </p>

                {/* CONTACT */}
                <div className="mt-3 text-[10px] sm:text-[11px] text-[#606060] space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="flex items-center gap-2">
                      <FiPhone size={13} color="#2164F4" />
                      {item.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiMail size={13} color="#2164F4" />
                      {item.email}
                    </p>
                  </div>
                  <p className="flex items-center gap-2">
                    <MdLocationOn size={13} color="#2164F4" />
                    {item.location}
                  </p>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-[12px] text-[#606060]">Services Category</p>
              <span className="text-[12px] text-white bg-[#56B264] px-3 py-1 rounded-full">
                {item.status}
              </span>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.services.map((service, index) => (
                <span
                  key={index}
                  className="text-[12px] bg-[#F0F5FF] px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* ABOUT */}
            <div className="mt-4 text-[12px] text-[#606060]">
              <p>About Service</p>
              <div className="flex flex-wrap items-center gap-2">
                <CiClock2 size={12} color="#2164F4" />
                {item.experience}
                <span className="text-[10px]">- Working Experience</span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-[#D56839]" /> {item.rating} Rating
                </span>
                <span className="text-[10px]">
                  - by {item.reviews} review
                </span>
              </div>
            </div>

            {/* SERVICE DETAILS */}
            <div className="mt-3">
              <p className="text-[12px] text-[#606060]">
                Services Details -
              </p>

              <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <CiClock2 size={12} color="#2164F4" /> On Time
                </span>
                <span className="flex items-center gap-1">
                  <BsGraphUpArrow size={12} color="#2164F4" /> Consistent Work
                </span>
                <span className="flex items-center gap-1">
                  <VscWorkspaceTrusted size={12} color="#2164F4" /> Trusted
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
