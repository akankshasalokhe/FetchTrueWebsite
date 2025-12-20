"use client";

import RecommendedSection from "@/src/components/Section/RecommendedSection";

const legalRecommendedServices = [
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "LLP Registration",
    category: "Legal Service",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
  {
    title: "GST Registration",
    category: "Business Registration",
    price: 4550,
    rating: 4,
    image: "/image/LLPRegistration.jpg",
  },
];

export default function LegalServiceDetailPage() {
  return (
    <>
      <RecommendedSection
        title="Recommended Legal Services"
        services={legalRecommendedServices}
      />
    </>
  );
};

