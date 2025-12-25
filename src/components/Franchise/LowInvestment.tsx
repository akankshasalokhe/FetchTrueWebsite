"use client";
import { CiBookmark } from "react-icons/ci";

export default function LowInvestmentFranchises() {
  const cards = [
    {
      title: "Pizza Hut",
      category: "Food & Beverage",
      revenue: "4cr",
      discount: "20%",
      earn: "Up to 30%",
      profit: "30%",
      investment: "10L - 20L",
      outlets: "10",
      logo: "/image/pizzahut.png",
    },
    {
      title: "Pizza Hut",
      category: "Food & Beverage",
      revenue: "4cr",
      discount: "20%",
      earn: "Up to 30%",
      profit: "30%",
      investment: "10L - 20L",
      outlets: "10",
      logo: "/image/pizzahut.png",
    },
    {
      title: "Pizza Hut",
      category: "Food & Beverage",
      revenue: "4cr",
      discount: "20%",
      earn: "Up to 30%",
      profit: "30%",
      investment: "10L - 20L",
      outlets: "10",
      logo: "/image/pizzahut.png",
    },
     {
      title: "Pizza Hut",
      category: "Food & Beverage",
      revenue: "4cr",
      discount: "20%",
      earn: "Up to 30%",
      profit: "30%",
      investment: "10L - 20L",
      outlets: "10",
      logo: "/image/pizzahut.png",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[22px] sm:text-[26px] font-bold">
          Here are 3 Best Franchises that are Low in Investment
        </h2>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Start with low investment franchises
        </p>
      </div>

      {/* Card Row */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6 
        justify-items-center
      ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              w-full 
              max-w-[330px] 
              bg-white 
              p-5 
              rounded-2xl 
              border 
              shadow-sm
              hover:shadow-md 
              transition
            "
          >
            {/* Title + Logo */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-[18px]">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.category}</p>

                {/* Revenue Badge */}
                <p className="
                  bg-black 
                  text-white 
                  text-xs 
                  px-3 
                  py-1 
                  rounded-full 
                  inline-block 
                  mt-2
                ">
                  Revenue {card.revenue}
                </p>
              </div>

              {/* Logo box */}
              <div className="
                w-[75px] 
                h-[70px] 
                rounded-[15px] 
                bg-[#FFE8E8] 
                flex 
                items-center 
                justify-center
              ">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-[60px] h-[55px] object-contain"
                />
              </div>
            </div>

            {/* Discount + Earn + Bookmark */}
            <div className="flex justify-between items-center mb-4 text-[13px]">
              <p className="text-[#39B64C] bg-[#F5F5F5] px-2 py-1 rounded-md">
                Discount {card.discount}
              </p>

              <p className="text-[#2164F4] bg-[#F5F5F5] px-2 py-1 rounded-md">Earn {card.earn}</p>

              <CiBookmark className="text-[22px] text-gray-600 cursor-pointer" />
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 text-center mt-4 text-gray-600">
              <div>
                <p className="font-semibold">{card.profit}</p>
                <p className="text-[11px]">Profit Margin</p>
              </div>

              <div>
                <p className="font-semibold">{card.investment}</p>
                <p className="text-[11px]">Investment Range</p>
              </div>

              <div>
                <p className="font-semibold">{card.outlets}</p>
                <p className="text-[11px] whitespace-nowrap">
                  Number Outlet
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
