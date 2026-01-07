"use client";

import Image from "next/image";
import { CheckCircle, Eye, Zap, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const initialFeatures = [
  {
    title: "Strong Brand Identity",
    desc: "providing strong identity design for logo",
    icon: CheckCircle,
  },
  {
    title: "Professional & Trustworthy",
    desc: "not just professional but trusted service providers",
    icon: Eye,
  },
  {
    title: "Quick Responses",
    desc: "fast and clear work flow for the users",
    icon: Zap,
  },
  {
    title: "Works for All",
    desc: "working for all types of category",
    icon: Smartphone,
  },
];

export default function WhyJustOurServices() {
  const [features, setFeatures] = useState(initialFeatures);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 Auto rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatures((prev) => {
        const updated = [...prev];
        const activeItem = updated.splice(0, 1)[0]; // remove first
        updated.push(activeItem); // move to last
        return updated;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-15 bg-[#2A67F4] mt-24 mb-10 overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/image/marketingbgdesign.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 flex flex-col items-center gap-12">
        {/* TITLE */}
        <h2 className="text-white text-center font-inter font-medium text-[28px] sm:text-[32px] lg:text-[36px]">
          Why Just Our Services
        </h2>

        {/* CARDS */}
        <div className="flex flex-col gap-6 w-full">
          <AnimatePresence>
            {features.map((item, i) => {
              const Icon = item.icon;
              const isActive = i === 0;

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: isActive ? 1.08 : 1,
                  }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className={`flex items-center gap-6 px-6 sm:px-8 py-6 rounded-[22px]
                    ${
                      isActive
                        ? "bg-white shadow-2xl z-20"
                        : "bg-white/35 backdrop-blur-sm"
                    }`}
                >
                  {/* ICON */}
                  <div
                    className={`flex items-center justify-center shrink-0
                    w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[70px] lg:h-[70px]
                    rounded-full
                    ${
                      isActive
                        ? "bg-[#2164F4] text-white"
                        : "bg-white/60 text-[#2164F4]"
                    }`}
                  >
                    <Icon size={32} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="font-inter font-semibold text-[18px] sm:text-[26px] lg:text-[32px] text-[#2164F4]">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[14px] sm:text-[18px] lg:text-[22px] text-[#1E3A8A]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
