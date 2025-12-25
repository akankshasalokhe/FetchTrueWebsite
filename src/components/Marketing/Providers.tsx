"use client";

import Image from "next/image";
import { Bookmark, ShieldCheck, Clock } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function SuggestedProviders() {
  return (
    <>
    <section className="max-w-[1470px] mx-auto px-4 sm:px-6 mt-16 mb-20">
      <h2 className="text-[18px] font-semibold mb-6">
        Suggested Providers
      </h2>

      {/* CARD ROW */}
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {[1, 2, 3, 4].map((_, index) => (
          /* OUTER CARD */
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[320px] lg:min-w-[359px]
                       h-[420px] rounded-[13px] border border-[#D2D2D2]
                       flex items-center justify-center bg-white"
          >
            {/* INNER CARD */}
            <div className="relative w-full max-w-[300px] h-full rounded-[10px]">

              {/* BANNER IMAGE */}
              <div className="absolute top-[13px] w-full h-[70px] rounded-[10px] overflow-hidden">
                <Image
                  src="/image/provider(1).jpg"
                  alt="banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                  <Bookmark size={14} />
                </div>
              </div>

              {/* PROFILE IMAGE */}
<div
  className="absolute top-[40px] left-6
             w-[60px] h-[60px]
             rounded-full overflow-hidden
             bg-white shadow flex items-center justify-center"
>
  <Image
    src="/image/profile.jpg"
    alt="profile"
    fill
    className="object-cover rounded-full "
  />
</div>


              {/* CONTENT */}
              <div className="absolute top-[107px] w-full flex flex-col gap-6 px-1">

                {/* TITLE + DESC */}
                <div>
                  <h3 className="text-[16px] font-semibold leading-[22px]">
                    Digital Boost Agency
                  </h3>
                  <p className="text-[12px] leading-[20px] text-gray-500">
                    Data-driven marketing to increase your conversions.
                  </p>
                </div>

                {/* TAGS */}
                <div className="flex gap-2 whitespace-nowrap overflow-hidden">
  {["SEO Specialist", "Logo Design", "Brand Design"].map((tag, i) => (
    <span
      key={i}
      className="px-3 h-[27px] border rounded-full
                 flex items-center justify-center
                 text-[11px] text-[#2164F4]
                 shrink-0"
    >
      {tag}
    </span>
  ))}
                </div>


                {/* TRUST ROW */}
                <div className="w-full h-[43px] bg-[#F0F5FF]
                                rounded-[10px] flex items-center
                                justify-between px-3
                                text-[12px] text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> On Time
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} /> Trusted
                  </span>
                  <span>✔ Consistent</span>
                </div>

                {/* STATS */}
                <div className="flex justify-between text-center">
                  <div>
                    <p className="font-semibold">150+</p>
                    <p className="text-[11px] text-gray-500">Projects</p>
                  </div>
                  <div>
                    <p className="font-semibold">6+</p>
                    <p className="text-[11px] text-gray-500">Years</p>
                  </div>
                  <div>
                    <p className="font-semibold flex items-center justify-center gap-1">
                      4 <FaStar className="text-yellow-400" />
                    </p>
                    <p className="text-[11px] text-gray-500">Rating</p>
                  </div>
                </div>

                {/* PRICE */}
                <div className="border-t pt-3 text-center text-[13px]">
                  Starting from just{" "}
                  <span className="font-semibold text-[16px]">
                    ₹ 1,999/-
                  </span>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <div className="w-full h-[50px] bg-[#2164F4] border-[#000000] "></div>
    </>
  );
}
