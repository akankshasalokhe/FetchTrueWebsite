"use client";

import { useEffect, useState } from "react";

interface ImageItem {
  image: string;
}

const images: ImageItem[] = [
  { image: "/image/slider1 (2).jpg" },
  { image: "/image/slider1 (2).jpg" },
  { image: "/image/slider1 (2).jpg" },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  /* AUTO PLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500); // slide change time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F4FBF7] py-12">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="overflow-hidden rounded-[22px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((item, i) => (
              <div
                key={i}
                className="min-w-full h-[540px] flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt="carousel"
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
