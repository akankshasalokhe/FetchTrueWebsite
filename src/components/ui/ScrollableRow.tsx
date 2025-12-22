"use client";

import { useRef, useState } from "react";
import Card from "./Card";

interface ScrollableRowProps {
  title: string;
  services: any[];
}

export default function ScrollableRow({ title, services }: ScrollableRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full mt-20 mb-20 lg:px-15">
      <h3 className="text-2xl font-medium mb-8 ml-4 md:ml-10">{title}</h3>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => handleMouseDown({ ...e, pageX: e.touches[0].pageX } as any)}
        onTouchEnd={handleMouseUp}
        onTouchMove={(e) => handleMouseMove({ ...e, pageX: e.touches[0].pageX } as any)}
      >
        {services.map((service, idx) => (
          <Card key={idx} service={service} />
        ))}
      </div>
    </section>
  );
}
