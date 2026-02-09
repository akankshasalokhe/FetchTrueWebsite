'use client';

import { useCoupons } from "@/src/context/CouponsContext";
import { X } from "lucide-react";
import { useEffect } from "react";



type Props = {
  onClose: () => void;
};

export default function CouponsDialog({ onClose }: Props) {
  const { services, fetchCoupons } = useCoupons()

  useEffect(() => {
    fetchCoupons()
  }, [])

 
  return (
    <>
      {/* BACKDROP WITH BLUR */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* DIALOG */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-[440px] bg-white rounded-2xl shadow-lg overflow-hidden  max-h-[90vh] overflow-y-auto p-6 scrollbar-hide">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="text-[14px] font-semibold">Coupons</h3>
            <button onClick={onClose}>
              <X className="w-4 h-4 text-gray-500 cursor-pointer" />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4">
            {services.map((coupon, index) => (
              <div
                key={index}
                className="border border-green-300 rounded-lg p-3 space-y-1"
              >
                <p className="text-[14px] font-semibold text-green-700">
                  {coupon?.discountTitle}
                </p>

                <p className="text-[12px] text-gray-500">
                  You save an extra ₹200 with this coupon.
                </p>

                <div className="flex items-center gap-2 text-green-700 font-semibold text-[13px]">
                  ✓
                  <span>{coupon?.couponCode}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
