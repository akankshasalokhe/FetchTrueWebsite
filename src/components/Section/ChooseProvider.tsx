"use client";

import Image from "next/image";

export default function ChooseProvider({
  title,
  buttonColor = "bg-[#5B3527]",
  providers,
}: any) {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-[26px] md:text-[28px] font-semibold text-[#5A3A1B] mb-3">
          {title}
        </h2>

        <p className="text-center text-[14px] md:text-[16px] text-[#777] mb-10">
          Pick the right expert for your service
        </p>

        {/* Providers */}
        <div className="space-y-6">
          {providers.map((provider: any, index: number) => (
            <div
              key={index}
              className="bg-white border border-[#E2E2E2] rounded-[10px] p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  {provider.promoted && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] bg-green-500 text-white px-2 py-[1px] rounded">
                      Promoted
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[16px] md:text-[18px] font-semibold">
                      {provider.name}
                    </h3>

                    {provider.available && (
                      <span className="text-[11px] bg-[#F1F1F1] px-2 py-[2px] rounded">
                        Available
                      </span>
                    )}
                  </div>

                  <p className="text-[13px] md:text-[14px] text-[#777] mt-1">
                    ⭐ {provider.rating} ({provider.reviews} reviews)
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full lg:w-auto">

                {/* Price */}
                <div className="text-left sm:text-right">
                  <p className="text-[16px] md:text-[18px] font-semibold">
                    ₹ {provider.price}
                    {provider.originalPrice && (
                      <>
                        <span className="line-through text-[#999] ml-2 text-[13px]">
                          ₹ {provider.originalPrice}
                        </span>
                        {provider.discountText && (
                          <span className="text-[#999] text-[13px] ml-2">
                            ({provider.discountText})
                          </span>
                        )}
                      </>
                    )}
                  </p>
                </div>

                {/* Commission */}
                <div className="text-left sm:text-right">
                  <p className="text-[13px] text-[#777]">Earn up to</p>
                  <p className="text-[16px] font-semibold text-green-600">
                    {provider.commissionText}
                  </p>
                </div>

                {/* Select */}
                <div className="border border-green-500 text-green-500 rounded w-6 h-6 flex items-center justify-center shrink-0">
                  ✓
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            className={`${buttonColor} text-white px-6 py-3 rounded-[8px] text-[15px] md:text-[16px] font-medium w-full sm:w-auto`}
          >
            See all Providers
          </button>
        </div>

      </div>
    </section>
  );
}
