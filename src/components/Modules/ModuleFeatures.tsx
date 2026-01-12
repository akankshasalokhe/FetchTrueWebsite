"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ModuleFeatures() {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1300px] mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-[22px] font-semibold text-gray-900">
          Our Modules
        </h2>
        <p className="text-[14px] text-gray-500 mb-10">
          Explore Our Modules features
        </p>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT MODULE CARDS */}
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">

            {/* Franchise Module */}
            <div
              onClick={() => router.push("/modules/franchise")}
              className="w-[300px] bg-[#F5F0FF] rounded-xl p-6 cursor-pointer hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[16px] mb-2">
                Franchise Module
              </h4>
              <p className="text-[13px] text-gray-600 mb-4">
                This provides you ready-to-launch business model
                with partners and entrepreneurs.
              </p>

              <div className="relative w-full h-[180px]">
                <Image
                  src="/image/Nothing Phone 1 (3).png"
                  alt="Franchise Module"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Second Module */}
            <div
              onClick={() => router.push("/modules/connect")}
              className="w-[180px] bg-[#F4F7FB] rounded-xl p-4 cursor-pointer hover:shadow-md transition"
            >
              <div className="relative w-full h-[260px]">
                <Image
                  src="/image/Nothing Phone 2.png"
                  alt="Connect Module"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Third Module */}
            <div
              onClick={() => router.push("/modules/services")}
              className="w-[180px] bg-[#F4F7FB] rounded-xl p-4 cursor-pointer hover:shadow-md transition"
            >
              <div className="relative w-full h-[260px]">
                <Image
                  src="/image/Nothing Phone 3.png"
                  alt="Service Module"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT BIG IMAGE */}
          <div
            onClick={() => router.push("/modules")}
            className="relative w-full lg:w-[420px] h-[420px] bg-[#F4F7FB] rounded-xl cursor-pointer hover:shadow-md transition"
          >
            <Image
              src="/image/mockup.png"
              alt="Modules Preview"
              fill
              className="object-contain animate-bounce duration-3000ms ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
