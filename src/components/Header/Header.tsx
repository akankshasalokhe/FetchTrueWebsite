"use client";
import { CiSearch, CiLocationOn  } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { GiSevenPointedStar } from "react-icons/gi";



export default function HeaderSection() {
   const images = [
    "/image/slider1.jpg",
    "/image/slider2.jpg",
    "/image/slider3.jpg",
    "/image/slider2.jpg",
    "/image/slider1.jpg",
    "/image/slider3.jpg"
   
  ];

  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => nextSlide(), 3000);
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Slide handlers
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };
    const getVisibleSlides = () => {
    if (windowWidth < 768) {
      // small screens: show 1 slide
      return [active];
    } else if (windowWidth < 1024) {
      // medium screens: show 2 slides
      return [active, (active + 1) % images.length];
    } else {
      // large screens: show 3 slides
      return [active, (active + 1) % images.length, (active + 2) % images.length];
    }
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="relative w-full h-auto overflow-hidden ">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0  bg-cover bg-no-repeat "
        style={{
          backgroundImage: "url('/image/header-bg.jpg')",
        }}
      />

      {/* CONTENT */}
<div className="relative z-20 mb-10 mt-25 lg:mt-0">

  {/* Heading */}
  <h5
    className="text-[32px] lg:text-[40px] font-semibold text-black absolute lg:w-[662px] lg:h-[57px] mt-[10%] lg:mt-[173px] lg:ml-[41.53px] w-[99%] ml-[5%] "
    // style={{
    //   width: "662px",
    //   height: "57px",
    //   top: "173px",
    //   left: "41.53px",
    // }}
  >
    One Platform Seamless Services
  </h5>

  {/* SEARCH SECTION */}
  <div
    className="absolute flex flex-col lg:flex-row gap-4 lg:mt-[254px] lg:ml-[42px] mt-[35%] ml-[5%]"
    // style={{
    //   top: "254px",
    //   left: "42px",
    // }}
  >
    {/* Search by Location */}
    <div
      className="
        flex items-center gap-3
        bg-white
        pl-3 pr-4
        text-[16px]
        text-[#606060]
        border border-[#EDEDED]
      "
      style={{
        width:"100%",
        maxWidth: "476px",
        height: "50px",
        borderRadius: "26.5px",
      }}
    >
      {/* Search Icon Box */}
      <div
        className="
          flex items-center justify-center
        "
        style={{
          width: "41px",
          height: "41px",
          backgroundColor: "#F7F7F7",
          borderRadius: "50%",
        }}
      >
        <CiLocationOn className="w-6 h-6 text-[#606060]" />
      </div>

      <input
        type="text"
        placeholder="Search by Location"
        className="w-full outline-none bg-transparent"
      />
    </div>

    {/* Search by Category */}
    <div
      className="
        flex items-center gap-3
        bg-white
        pl-3 pr-4
        text-[16px]
        text-[#606060]
        border border-[#EDEDED]
      "
      style={{
        width:"100%",
        maxWidth: "476px",
        height: "50px",
        borderRadius: "26.5px",
      }}
    >
      {/* Category Icon */}
      <div
        className="
          flex items-center justify-center
        "
        style={{
          width: "41px",
          height: "41px",
          backgroundColor: "#F7F7F7",
          borderRadius: "50%",
        }}
      >
        <CiSearch className="w-6 h-6 text-[#606060]" />
      </div>

      <input
        type="text"
        placeholder="Search by Category"
        className="w-full outline-none bg-transparent"
      />
    </div>
  </div>
</div>


    <div className="mt-100">
      {/* ==== CAROUSEL ==== */}
      <div className="relative w-full flex justify-center mt-24 overflow-hidden px-4 sm:px-0">
        <div className="flex gap-6">
          {images.map((img, i) => {
            if (!visibleSlides.includes(i)) return null;
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  width: isActive ? (windowWidth < 640 ? 300 : 682) : (windowWidth < 640 ? 250 : 271),
                  height: 469,
                  opacity: isActive ? 1 : 0.8,
                  scale: isActive ? 1 : 0.95,
                  borderRadius: 25,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden cursor-pointer"
                onClick={() => setActive(i)}
              >
                <img src={img} className="w-full h-full object-cover" alt={`slide-${i}`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ==== BOTTOM SLIDER BAR ==== */}
      <div className="w-full flex justify-center mt-6 px-4 sm:px-0">
        <div className="flex gap-2 w-full max-w-[1200px]">
          {images.map((_, i) => {
            const isActive = i === active;

            const barWidth =
              windowWidth < 640
                ? `calc((100% - ${(images.length - 1) * 8}px) / ${images.length})`
                : isActive
                ? "346px"
                : "185px";

            return (
              <motion.div
                key={i}
                animate={{
                  width: barWidth,
                  height: 11,
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.95,
                  borderRadius: 6,
                  backgroundColor: isActive ? "#2164F4" : "#C4C4C4",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="cursor-pointer"
                onClick={() => setActive(i)}
              />
            );
          })}
        </div>
      </div>
    </div>



    <div
  className=" hidden
    relative z-20 
    lg:flex 
    flex-wrap 
    justify-center 
    lg:flex-nowrap lg:justify-between 
    gap-[27px] 
    mt-[70px]
    w-full max-w-[1441px] mx-auto
    mb-10
  "
>
  {[
    "Franchise",
    "Business",
    "Marketing",
    "Legal",
    "Finance",
    "IT Services",
    "Education",
    "On-Demand",
    "AI Hub"
  ].map((item, i) => (
    <div
      key={i}
      className="
        flex items-center 
        gap-[2px]
        w-[128px] h-[28px]
      "
    >
      {/* ICON BOX */}
      <div
        className="
          flex items-center justify-center
          bg-[#F7F7F7]
          rounded-full
        "
        style={{
          width: "28px",
          height: "28px",
        }}
      >
        <GiSevenPointedStar
          style={{
            width: "21.58px",
            height: "21.58px",
            color: "black",
          }}
        />
      </div>

      {/* TEXT */}
      <p
        className="text-black"
        style={{
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        {item}
      </p>
    </div>
  ))}
</div>





    </section>
  );
}
