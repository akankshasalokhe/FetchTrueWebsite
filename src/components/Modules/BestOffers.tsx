"use client";
import { useEffect, useState } from "react";

interface CardType {
  img: string;
  title: string;
  desc: string;
  gradient: string;
}

export default function BestOffers() {
  const cards: CardType[] = [
    { img: "/image/offer.jpg", title: "Refer and earn", desc: "share your reference code and earn amazing rewards ", gradient: "from-[#2164F4] to-[#9340FF]" },
    { img: "/image/offer2.jpg", title: "Get Premium Access", desc: "share your reference code and earn amazing rewards ", gradient: "from-[#FF6B6B] to-[#FF8E53]" },
    { img: "/image/offer.jpg", title: "Festival Deals", desc: "share your reference code and earn amazing rewards ", gradient: "from-[#4FACFE] to-[#00F2FE]" },
    { img: "/image/offer2.jpg", title: "Get Premium Access", desc: "share your reference code and earn amazing rewards ", gradient: "from-[#FF6B6B] to-[#FF8E53]" },
    { img: "/image/offer.jpg", title: "Festival Deals", desc: "share your reference code and earn amazing rewards ", gradient: "from-[#4FACFE] to-[#00F2FE]" },
  ];

  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [smallActive, setSmallActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevious(active);
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [active, cards.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSmallActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const rightCards = [
    cards[(active + 1) % cards.length],
    cards[(active + 2) % cards.length],
  ];

  return (
    <section className="w-full flex flex-wrap lg:flex-nowrap gap-10 mt-16 px-4 lg:px-20 relative mb-20">
      
      {/* LEFT BIG CARD - DESKTOP */}
      <div
        className={`hidden lg:block w-[450px] h-[550px] rounded-[31px] bg-gradient-to-b ${cards[active].gradient} relative overflow-hidden flex items-center justify-center`}
      >
        <div
          key={"prev-" + previous}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
          style={{ animation: "slideOutLeft 0.7s forwards" }}
        >
          <div className="scale-110">
            <BigCard data={cards[previous]} />
          </div>
        </div>

        <div
          key={"active-" + active}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all duration-700"
          style={{ animation: "slideInRight 0.7s forwards" }}
        >
          <div className="scale-110">
            <BigCard data={cards[active]} />
          </div>
        </div>
      </div>

      {/* RIGHT CARDS - DESKTOP */}
      <div className="flex flex-col justify-center w-full lg:w-auto">
        <h2 className="font-inter font-medium text-[24px] lg:text-[36px] text-black">
          Today's Best Offers
        </h2>
        <p className="font-inter text-[16px] lg:text-[24px] text-[#575757] mt-2 lg:mt-3">
          Grab the opportunity & win amazing offers
        </p>

        <div className="hidden lg:flex gap-6 lg:gap-[77px] mt-8 lg:mt-10 flex-wrap">
          {rightCards.map((card, i) => (
            <SmallCard key={`right-${active}-${i}`} data={card} isNext={i === 0} />
          ))}
        </div>
      </div>

      {/* MOBILE / TABLET SLIDER */}
      <div className="lg:hidden w-full mt-6 flex justify-center">
        <SmallCard key={"small-" + smallActive} data={cards[smallActive]} isNext />
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          0% { transform: translateX(120%); opacity: 0; }
          100% { transform: translateX(0%); opacity: 1; }
        }
        @keyframes slideOutLeft {
          0% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(-120%); opacity: 0; }
        }
        @keyframes smallSlideIn {
          0% { transform: translateX(120%); opacity: 0; }
          100% { transform: translateX(0%); opacity: 1; }
        }
        .animate-smallSlideIn {
          animation: smallSlideIn 0.7s forwards;
        }
      `}</style>
    </section>
  );
}

/* BIG CARD - DESKTOP */
function BigCard({ data }: { data: CardType }) {
  return (
    <div className="hidden lg:block w-[360px] h-[300px] bg-[#F6F0FE] rounded-[14px] p-4 shadow-lg">
      <img src={data.img} className="w-full h-[170px] rounded-[10px] object-cover" />
      <div className="mt-3 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-[18px] text-black">{data.title}</h4>
          <p className="text-[12px] text-gray-600 mt-1">{data.desc}</p>
        </div>
        <button className={`w-[120px] h-[55px] rounded-lg text-white text-[15px] bg-gradient-to-r ${data.gradient}`}>
          Check out
        </button>
      </div>
    </div>
  );
}

/* SMALL CARD - MOBILE / TABLET */
function SmallCard({ data, isNext }: { data: CardType; isNext?: boolean }) {
  return (
    <div
      className={`w-[90%] max-w-[320px] h-[255px] bg-[#F6F0FE] rounded-[14px] p-3 shadow-sm ${
        isNext ? "animate-smallSlideIn" : ""
      }`}
    >
      <img src={data.img} className="w-full h-[146px] rounded-[10px] object-cover mx-auto" />
      <div className="mt-3 flex justify-between">
        <div className="w-[60%]">
          <h4 className="font-semibold text-[15px] leading-tight">{data.title}</h4>
          <p className="text-[12px] text-[#575757] mt-1">{data.desc}</p>
        </div>
        <button className="w-[80px] h-[40px] bg-white rounded-lg text-[12px] text-black shadow">
          Check out
        </button>
      </div>
    </div>
  );
}
