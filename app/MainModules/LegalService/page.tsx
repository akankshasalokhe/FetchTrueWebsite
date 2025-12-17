"use client";

import CategorySection from "@/src/components/Legal/CategorySection";
import { Home, ArrowLeft, Bookmark } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";


export default function LegalPage() {
  const sliderRef = useRef(null);

  const scrollByCard = (direction) => {
    if (!sliderRef.current) return;
    const cardWidth =
      sliderRef.current.querySelector("[data-card]")?.offsetWidth || 0;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <section className="flex justify-center">
      {/* NAVBAR */}
      <div
        className="
          w-[1329px]
          h-[60px]
          bg-[#F9F5EE]
          flex
          items-center
          justify-between
          px-10
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          {/* Home Icon */}
          <img
            src="/image/Group 3.png"
            alt="Home Icon"
            className="text-#A3623A"
            style={{ width: "34.36px", height: "42.95px" }}
          />

          {/* Back Icon */}
          <img
            src="/image/Vector (1).png"
            alt="Back Icon"
            className="text-black"
            
          />

          {/* Title */}
          <h1
            className="
              font-inter
              font-semibold
              text-[24px]
              leading-[36px]
              text-black
            "
            style={{ width: "157px", height: "36px" }}
          >
            Legal Service
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <img
          src="/image/Vector (4).png"
          alt="Bookmark Icon"
          className="text-#A3623A"
          style={{
            width: "18.61px",
            height: "27.25px",
          }}
        />
      </div>
      </section>

      {/* Hero Section */}
      <section className="relative flex justify-center mt-16 lg:mt-28 px-4 overflow-hidden mb-20">
  {/* ================= MAIN HERO CONTAINER ================= */}
  <div
    className="
      relative
      lg:mt-20
      top-0
      w-full
      max-w-[1079px]
      h-[400px]
      sm:h-[480px]
      lg:h-[519px]
      rounded-[32px]
      lg:rounded-[43px]
      bg-gradient-to-b
      from-white
      to-[#F9F5EE]
    "
  />

  {/* ================= IMAGE STACK ================= */}
  <div
    className="
      absolute
      top-8
      left-1/2
      -translate-x-1/2
      w-full
      max-w-[900px]
      flex
      justify-center
      px-4
    "
  >
    <div className="relative w-full h-[300px] sm:h-[520px] lg:h-[610px]">
      
      {/* ---------- BACK IMAGE (BEHIND CENTER) ---------- */}
      <div
        className="
          absolute
          inset-0
          flex
          justify-center
          top-18
          lg:top-10
          z-0
          sm:flex
        "
      >
        <div className="relative w-[160px] lg:w-[45%] h-[50%]  ">
          <Image
            src="/image/backImage.jpg"
            alt="Back"
            fill
            className="object-cover rounded-[28px]"
          />
        </div>
      </div>

      {/* ---------- LEFT IMAGE (DESKTOP ONLY | BEHIND CENTER) ---------- */}
      <div
        className="
        w-[110px]
        h-[190px]
          lg:block
          absolute
          top-[120px]
          left-[1.2px]
          lg:w-[220px]
          lg:h-[350px]
          z-10
        "
      >
        <Image
          src="/image/leftImage.jpg"
          alt="Left"
          fill
          className="object-cover rounded-[28px]"
        />
      </div>

      {/* ---------- RIGHT IMAGE (DESKTOP ONLY | BEHIND CENTER) ---------- */}
      <div
        className="
        w-[110px]
        h-[190px]
          lg:block
          absolute
          top-[120px]
          right-[1.2px]
          lg:w-[220px]
          lg:h-[350px]
          z-10
        "
      >
        <Image
          src="/image/rightImage.jpg"
          alt="Right"
          fill
          className="object-cover rounded-[28px]"
        />
      </div>

      {/* ---------- CENTER IMAGE (FRONT) ---------- */}
      <div className="relative z-20 w-full h-full flex justify-center">
        <div className="relative w-full sm:w-[80%] lg:w-full h-full top-14 lg:top-0 ">
          <Image
            src="/image/centerImage.png"
            alt="Center"
            fill
            className="object-cover rounded-[28px]"
          />
        </div>
      </div>

    </div>
  </div>
</section>


 <section className="relative z-10 w-full flex justify-center my-30 px-4">
      <div className="w-full max-w-[1200px]">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-12">
          <h2 className="font-inter font-semibold text-[28px] sm:text-[32px] lg:text-[40px] leading-[42px] lg:leading-[60px] text-[#3A2A13]">
            Legal Service
          </h2>

          <p className="font-inter font-medium text-[16px] sm:text-[18px] lg:text-[24px] leading-[24px] lg:leading-[36px] text-[#6B6B6B] max-w-[1133px] mx-auto mt-4">
            Get instant access to verified lawyers, legal advisors, and
            documentation experts—all in one place.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scrollByCard("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollByCard("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          >
            ›
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-8
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              px-[12%]
              sm:px-[10%]
              lg:px-[8%]
              no-scrollbar
            "
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                data-card
                className="
                  relative
                  snap-center
                  min-w-[260px]
                  sm:min-w-[420px]
                  lg:min-w-[1007px]
                  h-[200px]
                  sm:h-[360px]
                  lg:h-[577px]
                  rounded-[35px]
                  bg-[#D9D9D9]
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <Image
                  src="/image/backImage.jpg"
                  alt="Legal Service"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

<div className="relative top-[-230px] z-0 ">
      <CategorySection />
</div>



    </div>
  );
}
