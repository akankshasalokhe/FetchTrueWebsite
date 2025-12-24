"use client";

import React from "react";
import { Phone, Mail, Share2, ShoppingCart } from "lucide-react";

const ConnectWith = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="md:w-[1320px] mx-auto bg-white rounded-xl px-4 py-5 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* LEFT */}
        <div>
          <p className="text-teal-600 text-[10px] md:text-[24px] mb-1">Connect With</p>
          <h2 className="text-[14px] md:text-[36px] font-semibold text-[#5A3A2E]">
            IT Service Manager
          </h2>
        </div>

        {/* CENTER ICONS */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Phone className="text-green-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <Mail className="text-blue-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
          </button>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center w-[298px] gap-2 bg-green-500 hover:bg-green-600 text-white text-[14px] md:text-[32px] px-5 py-3 rounded-md text-sm font-medium  justify-center">
            <ShoppingCart className="w-5 h-5 md:w-[48px] md:h-[48px]" />
            Check out
          </button>

          <button className="flex items-center w-[298px] gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[14px] md:text-[32px] px-5 py-3 rounded-md text-sm font-medium  justify-center">
            <Share2 className="w-5 h-5  md:w-[48px] md:h-[48px]" />
            Share
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWith;
