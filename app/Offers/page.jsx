"use client";

import { useOffers } from "@/src/context/OfferContext";

export default function TodaysBestOffer() {
  const { offers, loading } = useOffers();


  if (loading || !offers.length) return null;

 



  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[26px] font-semibold text-gray-900">
            Todays Best Offer for you
          </h2>
          <p className="text-[14px] text-gray-500 mt-2">
            Grab the opportunity & win amazing offer
          </p>
        </div>

        {/* Cards */}
        <div
       
          className="grid grid-cols-1 gap-6  lg:w-[1440px]"
        >
          {offers.map((offer) => (
            <div
              key={offer._id}
              className=" w-full bg-[#F6F0FF] rounded-[18px]"
            >
              <img
                src={offer.thumbnailImage}
                alt="Offer Thumbnail"
                className="w-full h-[224px] rounded-[18px] object-cover"
              />
            </div>
          ))}
        </div>

    

      </div>
    </section>
  );
}