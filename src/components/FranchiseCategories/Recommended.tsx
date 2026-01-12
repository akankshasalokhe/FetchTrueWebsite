"use client";

import Link from "next/link";
import FranchiseCard from "../ui/FranchiseCard"
const data = [
  {
    id: 1,
    title: "Property Buying & Selling",
    category: "Real Estate",
    investment: "10L – 25L",
    subtitle: "Real Estate",
    location: "Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "1–3 Lak",
    outlets: 10,
    area: "500–1000sq",
    price: "45L",
    image: "/image/thumbnailMain.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Property Buying & Selling",
    category: "Real Estate",
    investment: "10L – 25L",
    subtitle: "Real Estate",
    location: "Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "1–3 Lak",
    outlets: 10,
    area: "500–1000 Sq",
    price: "45L",
    image: "/image/thumbnailMain.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Property Buying & Selling",
    category: "Real Estate",
    investment: "10L – 25L",
    subtitle: "Real Estate",
    location: "Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "1–3 Lak",
    outlets: 10,
    area: "500–1000 Sq",
    price: "45L",
    image: "/image/thumbnailMain.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Property Buying & Selling",
    category: "Real Estate",
    investment: "10L – 25L",
    subtitle: "Real Estate",
    location: "Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "1–3 Lak",
    outlets: 10,
    area: "500–1000 Sq",
    price: "45L",
    image: "/image/thumbnailMain.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    title: "Property Buying & Selling",
    category: "Real Estate",
    investment: "10L – 25L",
    subtitle: "Real Estate",
    location: "Mumbai",
    earning: "5%",
    discount: "30%",
    monthly: "1–3 Lak",
    outlets: 10,
    area: "500–1000 Sq",
    price: "45L",
    image: "/image/thumbnailMain.jpg",
    rating: 4.5,
  },
];

export default function RecommendedSection() {
  return (
    <section className="w-full mt-8 lg:mt-18">
      
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center mb-6">
        <h2 className="text-[24px] font-semibold">
          Recommended For You
        </h2>
      </div>

      {/* SCROLL */}
      <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-4">
          {data.map((item) => (
            <Link key={item.id} href={`/MainModules/Franchise/details/${item.id}`}>
              <FranchiseCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
