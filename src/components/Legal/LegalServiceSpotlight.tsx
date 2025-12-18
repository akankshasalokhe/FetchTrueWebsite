"use client";

import { Home, Scale, FileText, Clock, ShieldCheck } from "lucide-react";

export default function LegalServiceSpotlight() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-black">
          Legal Service Spotlight
        </h2>
        <p className="text-gray-600 mt-2">
          we are providing you the best and useful legal services
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <Home size={40} />
            <h3 className="mt-4 text-[20px] font-semibold">Company Setup</h3>
            <p className="text-[13px] text-white/80 mt-1">
              Start your business the right way.
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium">
              ₹ 499/- Onwards
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <Scale size={40} />
            <h3 className="mt-4 text-[20px] font-semibold">Find Lawyer</h3>
            <p className="text-[13px] text-white/80 mt-1">
              Get professional legal advice.
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
              <Clock size={16} />
              10 - 15min
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <FileText size={40} />
            <h3 className="mt-4 text-[18px] font-semibold">
              Legal Document
            </h3>
            <p className="text-[13px] text-white/80 mt-1">
              Draft and review important document
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
              <ShieldCheck size={16} />
              Trusted
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
