"use client";

export default function BenefitsSection() {
  const items = [
    {
      title: "Proven Business Models",
      desc: "Access to successful franchise",
    },
    {
      title: "Brand Recognition",
      desc: "established trusted brand",
    },
    {
      title: "Best Prices",
      desc: "get your franchises with best prices",
    },
    {
      title: "Top Growing Brands",
      desc: "get access with the big brands",
    },
    {
      title: "Proven Business Models",
      desc: "Access to successful franchise",
    },
    {
      title: "Brand Recognition",
      desc: "established trusted brand",
    },
    {
      title: "Best Prices",
      desc: "get your franchises with best prices",
    },
    {
      title: "Top Growing Brands",
      desc: "get access with the big brands",
    },
  ];

  return (
    <section className="w-full py-8 lg:py-10 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-[26px] font-bold mb-2">Benefits of Franchises</h2>
        <p className="text-gray-600">What you get from us</p>
      </div>

      {/* Cards */}
    <div className="flex flex-wrap justify-center items-center gap-8 px-5">
  {items.map((item, i) => (
    <div
      key={i}
      className="w-[240px] h-[230px] bg-[#F5F5FD] rounded-[40px] flex flex-col justify-center items-center text-center shadow-sm 
          [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]
"
    >
     <div
  className="
    w-[55px] 
    h-[55px] 
    bg-[#FFFFFF] 
    rounded-full
    flex items-center justify-center 
    shadow-md mb-4
  "
>
  <span className="text-blue-500 text-[22px]"><img src="/image/ringicon.png" alt="icon" /></span>
</div>


      {/* Title */}
      <h3 className="font-semibold text-[18px] leading-tight px-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-[14px] mt-2 px-4">{item.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
}
