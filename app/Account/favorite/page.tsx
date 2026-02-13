"use client";

import FavouriteCard from "@/src/components/ui/FavouriteCard";


export default function FavouritePage() {
  const favourites = [
    {
      image: "/images/chatbot.jpg",
      title: "AI Chatbot & Automation Service",
      category: "AI Chatbot",
      type: "AI Hub",
      earnUpto: "Earn Up to 5%",
      rating: 4.8,
      reviews: "2,400 Reviews",
      features: [
        { title: "Setup 1–3 days" },
        { title: "AI Training Included" },
        { title: "Maintenance Auto-managed" },
      ],
      oldPrice: 5999,
      price: 3999,
      discount: "12% OFF",
    },
    {
      image: "/images/loan.jpg",
      title: "Personal Loan",
      category: "Personal Loan",
      type: "Finance",
      earnUpto: "Earn Up to 5%",
      rating: 4.6,
      reviews: "2,400 Reviews",
      features: [
        { title: "Loan Amount Up to 20 Lac" },
        { title: "Approval Time 24 Hrs" },
        { title: "Duration 12–60 months" },
        { title: "Interest starting 10.99%" },
      ],
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg lg:text-xl font-semibold">
          My Favourites
        </h1>

        <button className="text-sm text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Grid Layout */}
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {favourites.map((item, index) => (
            <FavouriteCard key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-10 text-center">
          <p className="text-gray-500">No favourites yet</p>
        </div>
      )}
    </div>
  );
}
