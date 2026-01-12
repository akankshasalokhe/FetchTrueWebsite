"use client";

import Image from "next/image";

export default function WhyFetchTrue() {

  return (
    <section className="w-full  py-20">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TOP TEXT */}
        <p className="text-[32px] text-[#232323] mb-2">
          What we are doing ’’
        </p>

        <p className="text-[24px] font-medium text-[#595959] max-w-[900px] ">
          The first app that gives you all services at just one platform. 
          With 9 modules you can get whatever service you want with just one click.
          India’s first app that acquires a large market in a single handset frame.
        </p>

        {/* BIG HEADING */}
        <h2 className="text-[134.85px] font-bold text-[#2164F426]  text-center">
          WHY FETCH TRUE
        </h2>

        {/* IMAGE */}
        <div className="relative w-full h-[360px] rounded-[16px] overflow-hidden border-[#B7B7B7]">
          <Image
            src="/image/why-fetch-true.jpg" 
            alt="Why Fetch True"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* FEATURE CARDS */}
        <div className="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-10  -mt-15 z-10">

          <div
            className="bg-[#FFFFFF] rounded-[15px] border border-[#C8C8C8] px-5 py-6   w-[232px] h-[180px]"
          >
            <div className="flex items-center gap-3 ">
            <img src="image/price-tag.png" className="bg-[#2164F4] mb-3 rounded-full p-2" />
            <h4 className="font-semibold text-[16px] mb-2">
              Transparent Pricing
            </h4>
             </div>
            <p className="text-[14px] font-medium text-[#555555] mt-3">
              No hidden prices or middle involvement in services.
            </p>
          </div>

          <div
            className="bg-[#FFFFFF] rounded-[15px] border border-[#C8C8C8] px-5 py-6  hover:shadow-md transition w-[232px] h-[180px]"
          >
            <div className="flex items-center gap-3">
            <img src="image/price-tag.png" className="bg-[#2164F4] mb-3 rounded-full p-2" />
            <h4 className="font-semibold text-[16px] mb-2">
              Verified & Trained Professionals 
            </h4>
             </div>
            <p className="text-[14px] font-medium  text-[#555555] mt-3">
              we are providing you the best services with trusted professional at works 
            </p>
          </div>

          <div
            className="bg-[#FFFFFF] rounded-[15px] border border-[#C8C8C8] px-5 py-6  hover:shadow-md transition w-[232px] h-[180px]"
          >
            <div className="flex items-center gap-3">
            <img src="image/price-tag.png" className="bg-[#2164F4] mb-3 rounded-full p-2" />
            <h4 className="font-semibold text-[16px] mb-2">
              Fast Booking & On-Demand Availability
            </h4>
             </div>
            <p className="text-[14px] font-medium text-[#555555] mt-3">
              Quick and easy flow for your fast services also on demand 
            </p>
          </div>

        <div
            className="bg-[#FFFFFF] rounded-[15px] border border-[#C8C8C8] px-5 py-6  hover:shadow-md transition w-[232px] h-[180px]"
          >
            <div className="flex items-center gap-3">
            <img src="image/price-tag.png" className="bg-[#2164F4] mb-3 rounded-full p-2" />
            <h4 className="font-semibold text-[16px] mb-2">
              Real-Time Support
            </h4>
             </div>
            <p className="text-[14px] font-medium text-[#555555] mt-3">
              providing each service their real time support for customer 
            </p>
          </div>

         <div
            className="bg-[#FFFFFF] rounded-[15px] border border-[#C8C8C8] px-5 py-6  hover:shadow-md transition w-[232px] h-[180px]"
          >
            <div className="flex items-center gap-3">
            <img src="image/price-tag.png" className="bg-[#2164F4] mb-3 rounded-full p-2" />
            <h4 className="font-semibold text-[16px] mb-2">
              Secure Payments
            </h4>
             </div>
            <p className="text-[14px] font-medium text-[#555555] mt-3">
              secure and trusted payment pay with trust 
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">

          <div className="bg-[#F0F5FE] text-[#2164F4] rounded-xl py-8 text-center">
            <h3 className="text-[48px] font-semibold ">
              25+
            </h3>
            <p className="text-[31px] font-medium">
              Active Users
            </p>
          </div>

         <div className="bg-[#F0F5FE] text-[#2164F4] rounded-xl py-8 text-center">
            <h3 className="text-[48px] font-semibold ">
              50+
            </h3>
            <p className="text-[31px] font-medium">
              App Downloads
            </p>
          </div>

          <div className="bg-[#F0F5FE] text-[#2164F4] rounded-xl py-8 text-center">
            <h3 className="text-[48px] font-semibold ">
              20+
            </h3>
            <p className="text-[31px] font-medium">
              Business Partners
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
