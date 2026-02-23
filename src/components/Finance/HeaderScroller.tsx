"use client";

import { Banner, useBanner } from "@/src/context/CarouselBannerContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const { getBannersByPage,loading} = useBanner();
  const router = useRouter();
  const { moduleId } = useParams<{ moduleId: string }>();
  
  
const heroBanners = getBannersByPage("category").filter(
  (banner) =>
    banner.module &&
    banner.module._id === moduleId &&
    !banner.isDeleted
);

 const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const slider = scrollRef.current;
  if (!slider || !heroBanners.length) return;

  const interval = setInterval(() => {
    slider.scrollLeft += 1;

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
  }, 20);

  return () => clearInterval(interval);
}, [heroBanners.length]);

  const handleBannerClick = (banner:Banner) => {
    
  
    if (banner.selectionType === "subcategory" && banner.subcategory?._id) {
      router.push(`/MainModules/Finance/${moduleId}/${banner.subcategory?._id}`);
      return;
    }
  };

  if (loading) return null;

if (!heroBanners.length) {
  return (
    <div className="text-center py-10 text-gray-500">
      No banners available
    </div>
  );
}

  return (
    <section className="w-full bg-[#F4FBF7] py-12">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="overflow-hidden rounded-[22px]">
          <div
          ref={scrollRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {heroBanners.map((item) => (
              <div
                key={item._id}
                onClick={()=>handleBannerClick(item)}
                className="min-w-full h-[540px] flex items-center justify-center"
              >
                <img
                  src={item.file}
                  alt={item.page}
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
