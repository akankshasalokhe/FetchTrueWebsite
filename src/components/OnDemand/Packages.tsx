"use client";

import { useCheckout } from "@/src/context/CheckoutContext";

type PackageItem = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
};

type PackagesProps = {
  packages: PackageItem[];
};

export default function SelectPackage({ packages = [] }: PackagesProps) {
  return (
    <section className="bg-[#f6f6f6] py-10 px-4">
      <h2 className="text-[#e56b2f] text-[16px] md:text-[20px] lg:text-[36px] font-semibold mb-6 ml-4 lg:ml-22">
        Select Package
      </h2>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="hidden md:block bg-white lg:w-[1320px] mx-auto rounded-2xl shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}
        </div>
      </div>

      {/* ================= MOBILE SWIPE ================= */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
          {packages.map((pkg) => (
            <div key={pkg._id} className="min-w-[85%] snap-center">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

type CardProps = {
  pkg: PackageItem;
};

function PackageCard({ pkg }: CardProps) {

//  const { selectedPackage, setSelectedPackage } = useCheckout();

//   const isSelected = selectedPackage?._id === pkg._id;



//   const handleSelect = () => {
//     setSelectedPackage({
//       _id: pkg._id,
//       name: pkg.name,
//       price: pkg.price,
//       discount: pkg.discount,
//       discountedPrice: pkg.discountedPrice,
//     });
//   };

  const { selectedPackage, setSelectedPackage } = useCheckout();
  const isSelected = selectedPackage?._id === pkg._id;

  const handleSelect = () => {
    if (isSelected) {
      setSelectedPackage(null);
    } else {
      // Select this package
      setSelectedPackage({
        _id: pkg._id,
        name: pkg.name,
        price: pkg.price,
        discount: pkg.discount,
        discountedPrice: pkg.discountedPrice,
      });
    }
  };

  return (
    <div className="bg-white border border-lb-xl border-gray-200 rounded-xl overflow-hidden flex flex-col h-full">
      {/* CONTENT */}
      <div className="p-6 flex-1">
        <h3 className="text-[12px] md:text-[18px] lg:text-[24px] font-semibold mb-3">
          {pkg.name}
        </h3>

        <div className="h-px bg-gray-200 mb-4" />

        <p className="text-[10px] md:text-[16px] lg:text-[16px] font-medium mb-2">
          Includes
        </p>

        <ul className="space-y-2 text-gray-600">
          {pkg.whatYouGet.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
              <span className="text-[10px] md:text-[16px] lg:text-[16px]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* PRICE */}
        <div className="mt-6 flex flex-row items-center">
          <p className="text-[#e56b2f] text-[14px] md:text-[16px] lg:text-[24px] font-semibold">
            ₹{pkg.discountedPrice.toLocaleString()}
          </p>

          <p className="text-[10px] md:text-[14px] lg:text-[18px] font-medium mt-1">
            <span className="line-through text-gray-400 ml-2 mr-2">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-green-600">
              ({pkg.discount}% Off)
            </span>
          </p>
        </div>
      </div>

      {/* BUTTON */}
        <button
        onClick={handleSelect}
        className={`w-full text-white text-[12px] md:text-[15px] lg:text-[18px] cursor-pointer font-medium py-5 rounded-b-[40px] transition
          ${isSelected ? "bg-green-600" : "bg-[#d86b38]"}`}
      >
        {isSelected ? "Selected" : "Select Package"}
      </button>

    </div>
  );
}
