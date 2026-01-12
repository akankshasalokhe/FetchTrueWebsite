"use client";

import Image from "next/image";




export default function WhyChooseUs() {
  return (
    <section className="w-full mt-8 lg:mt-18">
      
     

      {/* SCROLL */}
      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 md:mt-15 ml-0 md:ml-10 gap-6 md:gap-8 lg:gap-10">
                            {/* LEFT TEXT SECTION */}
                            <div className="md:w-1/2 pl-2 md:pl-0">
                                <p
                                    className="font-semibold hidden lg:block mt-30 leading-tight text-[22px] sm:text-[26px] md:text-3xl lg:text-4xl"
                                    style={{ fontWeight: 500 }}
                                >
                                    We are Building <br /> Path for you
                                </p>
                                {/* Mobile */}
                                <p
                                    className="font-bold text-black block lg:hidden leading-tight text-[14px] sm:text-[26px]"
                                >
                                    We are Building Path for you
                                </p>
        
                                {/* Desktop */}
                                <p
                                    className="text-black mt-2 md:mt-3 hidden lg:block leading-snug text-[16px] sm:text-lg md:text-xl lg:text-2xl"
                                    style={{ fontWeight: 400 }}
                                >
                                    an easy way of selling <br /> and purchase
                                </p>
                                {/* Mobile */}
                                <p
                                    className="text-black mt-2 md:mt-3 block lg:hidden leading-snug text-[14px] sm:text-lg md:text-xl lg:text-2xl"
                                    style={{ fontWeight: 400 }}
                                >
                                    an easy way of selling and purchase
                                </p>
                            </div>
        
                            {/* RIGHT GRID SECTION */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 rounded-xl p-2 sm:p-3 md:p-4 w-full max-w-[517px] overflow-hidden">
                                {/* CARD — REUSABLE STYLE */}
                                {[
                                    {
                                        num: "01",
                                        text: "Trusted and authorized Propertys",
                                        img: "/image/footerrect1.png",
                                    },
                                    {
                                        num: "02",
                                        text: "User Recommendation for better feed",
                                        img: "/image/footerrect2.png",
                                    },
                                    {
                                        num: "03",
                                        text: "In Your budget with category Selection",
                                        img: "/image/footerrect3.png",
                                    },
                                    {
                                        num: "04",
                                        text: "Clear detail about the property Retail Service",
                                        img: "/image/footerrect4.png",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl p-2 sm:p-3 md:p-4 text-purple-700 font-semibold bg-white/50 backdrop-blur-lg relative 
                                             h-[110px] sm:h-[130px] md:h-[150px] lg:h-[180px] overflow-hidden"
                                    >
                                        <Image
                                            src={item.img}
                                            alt="rectangular background"
                                            fill
                                            className="absolute object-cover rounded-2xl"
                                        />
        
                                        <div className="relative z-10">
                                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">
                                                {item.num}
                                            </p>
        
                                            <p className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-[18px] ml-10 font-medium text-purple-800 leading-snug break-words">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
      </div>
    </section>
  );
}
