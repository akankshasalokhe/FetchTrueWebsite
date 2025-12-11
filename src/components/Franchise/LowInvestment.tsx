"use client";

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
  ];

  return (
    <section className="w-full px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[26px] font-bold">
          Here are 3 Best Franchises that are Low in Investment
        </h2>
        <p className="text-gray-500 mt-1">
          start with low investment franchises
        </p>
      </div>

      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[320px] bg-white p-5 rounded-2xl border shadow-sm"
          >
            {/* Title + Logo */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-[18px]">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.category}</p>
              </div>

              <img
                src={card.logo}
                alt={card.title}
                className="w-[45px] h-[45px] rounded-full"
              />
            </div>

            {/* Revenue Badge */}
            <p className="bg-black text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
              Revenue {card.revenue}
            </p>

            {/* Discount + Earn */}
            <div className="flex justify-between mb-3 text-[13px]">
              <p className="text-green-600 font-medium">
                Discount {card.discount}
              </p>
              <p className="text-blue-600 font-medium">Earn {card.earn}</p>
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
