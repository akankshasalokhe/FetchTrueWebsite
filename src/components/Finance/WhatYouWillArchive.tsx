"use client";

import {
  BarChart3,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const achievements = [
  {
    icon: BarChart3,
    title: "Understand Business Financial Statements",
    desc: "Read balance sheet, P&L & cash flow with clarity",
  },
  {
    icon: ShieldCheck,
    title: "Control Expenses & Reduce Financial Risk",
    desc: "Track expenses, avoid losses & stay financially safe",
  },
  {
    icon: Wallet,
    title: "Improve Cash Flow & Profitability",
    desc: "Manage money better and increase business profits",
  },
  {
    icon: Rocket,
    title: "Plan Growth, Funding & Scaling Confidently",
    desc: "Plan expansion, funding & future growth confidently",
  },
  {
    icon: TrendingUp,
    title: "Make Data-Driven Financial Decisions",
    desc: "Take smart decisions using real financial data",
  },
];

const WhatYouWillArchive = () => {
  return (
    <section className="w-full pb-16 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-medium text-[#1A1A1A] mb-6">
          What you’ll Archive
        </h2>

        {/* CARD */}
        <div
          className="
            bg-white
            rounded-[16px]
            border
            border-[#BEBEBE]
            shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]
            p-6 lg:p-12 
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 lg:ml-10">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[27px] h-[23px] text-[#2F965C] mt-1"
                  />

                  <div>
                    <h3 className="text-[20px] font-medium text-[#606060]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#868686] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatYouWillArchive;
