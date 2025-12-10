import Link from "next/link";
import path from "path";
import React from "react";

function Modules() {
  const modules = [
    { title: "Franchise", path: "/MainModules/Franchise/", bg: "/image/Franchise card.png", icon: "/image/franchise icon.png" },
    { title: "Finance", path: "/MainModules/Finance/", bg: "/image/finance card.png", icon: "/image/finance.png" },
    { title: "Business", path: "/MainModules/Business/", bg: "/image/Business card.png", icon: "/image/Business.png" },
    { title: "AI Hub", path: "/MainModules/AIHub/", bg: "/image/Ai Hub card.png", icon: "/image/AI.png" },
    { title: "On Demand", path: "/MainModules/OnDemand/", bg: "/image/On Demand card.png", icon: "/image/onDemand.png" },
    { title: "Marketing", path: "/MainModules/Marketing/", bg: "/image/Marketing card.png", icon: "/image/marketing.png" },
    { title: "IT Service", path: "/MainModules/ITService/", bg: "/image/It Service.png", icon: "/image/It .png" },
    { title: "Legal Service", path: "/MainModules/LegalService/", bg: "/image/Legal service.png", icon: "/image/legal.png" },
    { title: "Education", path: "/MainModules/Education/", bg: "/image/Education card.png", icon: "/image/education.png" },
  ];

  const row1 = modules.slice(0, 5);
  const row2 = modules.slice(5);

  return (
    <section className="w-full flex flex-col gap-[51px] mt-[70px] mb-20 overflow-x-hidden px-4">

      {/* HEADING */}
      <h3 className="font-inter font-medium text-[30px] leading-[100%] text-black ml-20">
        Our Modules
      </h3>

      {/* FIRST ROW */}
      <div className="flex flex-wrap gap-[57.13px] justify-center">
        {row1.map((m, i) => (
          <Card key={i} data={m} />
        ))}
      </div>

      {/* SECOND ROW */}
      <div className="flex flex-wrap gap-[57.13px] justify-center">
        {row2.map((m, i) => (
          <Card key={i} data={m} />
        ))}
      </div>
    </section>
  );
}

function Card({ data }) {
  
  return (
        <Link href={data.path}>

    <div
      className="
        relative overflow-hidden border border-black/10 rounded-[21.3px]

        /* MOBILE 2 CARDS */
       xs:w-[150px] xs:h-[78px]

        /* TABLET & DESKTOP FIXED SIZE */
        sm:w-[217.87px] sm:h-[113.29px]

        h-[113.29px]
      "
    >
      {/* CARD BG IMAGE */}
      <img
        src={data.bg}
        alt=""
        className="w-full h-full rounded-[21.3px] object-cover"
      />

      {/* TITLE */}
      <p className="absolute top-[20.79px] left-[13.38px] text-[15px] font-semibold text-black">
        {data.title}
      </p>

      {/* ICON */}
      <img
        src={data.icon}
        alt=""
        className="absolute top-[44.54px] left-[112.32px] w-[89.47px] h-[55.68px] object-contain"
      />
    </div>
        </Link>
  );
}

export default Modules;
