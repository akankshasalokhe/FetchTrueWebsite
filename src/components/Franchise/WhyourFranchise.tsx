"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaBullhorn,
  FaLaptop,
} from "react-icons/fa";

export default function WhyOurFranchise() {
  return (
    <section className="w-full py-8 lg:py-15 bg-white">
      {/* ---------- HEADING ---------- */}
      <h2 className="text-center text-[28px] font-semibold mb-14">
        Why Just Our Franchise Services
      </h2>

      {/* ---------- GRID ---------- */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-4">
        
        {/* CARD 1 */}
        <div className="flex items-start gap-4">
          <div className="w-[48px] h-[48px] bg-[#8B5CF6] rounded-full flex items-center justify-center text-white">
            <FaBriefcase size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">
              Proven Business Model
            </h3>
            <p className="text-[14px] text-gray-500 max-w-[420px]">
              10+ years of market tested strategies with guaranteed results
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-start gap-4">
          <div className="w-[48px] h-[48px] bg-[#8B5CF6] rounded-full flex items-center justify-center text-white">
            <FaGraduationCap size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">
              Complete Training Program
            </h3>
            <p className="text-[14px] text-gray-500 max-w-[420px]">
              3-week comprehensive training for you and your team
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex items-start gap-4">
          <div className="w-[48px] h-[48px] bg-[#8B5CF6] rounded-full flex items-center justify-center text-white">
            <FaBullhorn size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">
              Marketing Support
            </h3>
            <p className="text-[14px] text-gray-500 max-w-[420px]">
              Digital campaigns, brochures, and lead generation included
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="flex items-start gap-4">
          <div className="w-[48px] h-[48px] bg-[#8B5CF6] rounded-full flex items-center justify-center text-white">
            <FaLaptop size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">
              Technology Platform
            </h3>
            <p className="text-[14px] text-gray-500 max-w-[420px]">
              CRM, mobile app, and management software provided
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
