"use client";

import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";

const experts = [
  {
    name: "Adv. Aditi Sharma",
    role: "Corporate & business lawyer",
    image: "/image/legalExpert.jpg",
    rating: 5,
    location: "Pune",
    experience: "10 Year",
  },
  {
    name: "Adv. Rahul Mehta",
    role: "Tax & Compliance Expert",
    image: "/image/legalExpert2.jpg",
    rating: 4,
    location: "Mumbai",
    experience: "8 Year",
  },
  {
    name: "Adv. Sneha Kulkarni",
    role: "IPR & Trademark Lawyer",
    image: "/image/legalExpert3.jpg",
    rating: 5,
    location: "Bangalore",
    experience: "6 Year",
  },
  {
    name: "Adv. Kunal Verma",
    role: "Startup Legal Advisor",
    image: "/image/legalExpert4.jpg",
    rating: 4,
    location: "Delhi",
    experience: "9 Year",
  },
  {
    name: "Adv. Pooja Deshpande",
    role: "Labour Law Specialist",
    image: "/image/legalExpert5.jpg",
    rating: 3,
    location: "Pune",
    experience: "7 Year",
  },
];

export default function LegalExpertsSection() {
  return (
    <section className="w-full bg-[#FDF7EF] py-12">
      {/* MAIN CONTAINER */}
      <div className=" mx-auto lg:mx-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6">

        {/* HEADING */}
        <h2 className="font-inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px]">
          Get our Legal Experts
        </h2>

        {/* SCROLL WRAPPER */}
        <div className="rounded-[20px] bg-gradient-to-r from-[#4D2D21] to-[#B3694D] px-4 sm:px-6 py-8 sm:py-12">
          <div
            className="
              flex gap-6 sm:gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {experts.map((expert, index) => (
              <div
                key={index}
                className="
                  w-[60vw] sm:w-[200px] lg:w-[270px]
                  min-h-[310px]
                  bg-white rounded-[20px]
                  px-4 sm:px-5 py-6
                  flex-shrink-0 snap-start
                  flex flex-col items-center
                "
              >
                {/* PROFILE IMAGE */}
                <div className="w-[68px] h-[68px] rounded-full overflow-hidden bg-[#D9D9D9]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={68}
                    height={68}
                    className="object-cover"
                  />
                </div>

                {/* NAME */}
                <h3 className="mt-4 text-center font-inter font-semibold text-[16px] leading-[22px]">
                  {expert.name}
                </h3>

                {/* ROLE */}
                <p className="text-center font-inter font-medium text-[14px] text-gray-600">
                  {expert.role}
                </p>

                {/* RATING */}
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-[18px] ${
                        i < expert.rating ? "text-[#FAC338]" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* LOCATION & EXPERIENCE */}
                <div className="w-full bg-[#F8F4EF] rounded-[12px] mt-3 mb-3 px-4 py-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <div>
                      <p className="font-medium text-[13px]">{expert.location}</p>
                      <p className="text-[11px] text-gray-500">Location</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <div className="text-right">
                      <p className="font-medium text-[13px]">{expert.experience}</p>
                      <p className="text-[11px] text-gray-500">Experience</p>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  className="
                    mt-auto w-full h-[36px]
                    bg-[#AA6941] text-white
                    rounded-[14px]
                    font-inter font-semibold
                    text-[14px]
                    hover:opacity-90 transition
                  "
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
