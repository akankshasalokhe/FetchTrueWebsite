"use client";

export default function RatingsReviews({
  title,
  subtitle,
  averageRating,
  totalRatings,
  breakdown,
  features,
  primaryColor = "#BC9958",
}: any) {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Header */}
        <h2 className="text-center text-[28px] font-semibold text-[#5A3A1B] mb-2">
          {title}
        </h2>
        <p className="text-center text-[16px] text-[#777] mb-12">
          {subtitle}
        </p>

        {/* ===== MAIN ROW ===== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-20">

          {/* LEFT */}
          <div className="w-full md:w-[260px] text-center lg:ms-[-30]">
            <p
              className="text-[42px] font-semibold flex justify-center items-center gap-2"
              style={{ color: primaryColor }}
            >
              ★ {averageRating}
            </p>
            <p className="text-[16px] text-[#777] mt-2">
              {totalRatings} Ratings
            </p>
          </div>

          {/* CENTER */}
          <div className="w-full md:w-[420px] space-y-4">
            {breakdown.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-[90px] text-[14px] text-[#777]">
                  {item.label}
                </span>

                <div className="flex-1 bg-[#EDEDED] rounded h-[4px]">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>

                <span className="w-[36px] text-[13px] text-[#999] text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

  {/* RIGHT */}
          <div className="w-full md:w-[360px] flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {features.map((feature: any, index: number) => (
                <div key={index} className="text-center">

                  <div
                    className="w-[70px] h-[70px] rounded-full  mx-auto relative flex items-center justify-center"
                    style={{ borderColor: primaryColor }}
                  >
                    {/* Fill ring */}
                    <div
                      className="absolute inset-[4px] rounded-full"
                      style={{
                        background: `conic-gradient(
                          ${primaryColor} ${feature.score * 20}%,
                          #E5E5E5 0
                        )`,
                      }}
                    />

                    {/* Inner circle */}
                    <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center relative z-10 text-[16px] font-semibold">
                      {feature.score}/5
                    </div>
                  </div>

                  <p className="text-[14px] text-[#555] mt-2">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
