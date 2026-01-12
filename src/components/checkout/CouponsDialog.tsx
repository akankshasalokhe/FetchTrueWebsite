'use client';

import { X } from "lucide-react";

type Coupon = {
  id: number;
  title: string;
  description: string;
  code: string;
};

type Props = {
  coupons: Coupon[];
  onClose: () => void;
};

export default function CouponsDialog({ coupons, onClose }: Props) {
  return (
    <>
      {/* BACKDROP WITH BLUR */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* DIALOG */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-[440px] bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="text-[14px] font-semibold">Coupons</h3>
            <button onClick={onClose}>
              <X className="w-4 h-4 text-gray-500 cursor-pointer" />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="border border-green-300 rounded-lg p-3 space-y-1"
              >
                <p className="text-[14px] font-semibold text-green-700">
                  {coupon.title}
                </p>

                <p className="text-[12px] text-gray-500">
                  {coupon.description}
                </p>

                <div className="flex items-center gap-2 text-green-700 font-semibold text-[13px]">
                  ✓
                  <span>{coupon.code}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
