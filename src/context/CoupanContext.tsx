"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export type Coupon = {
  _id: string;
  couponType: string;
  couponCode: string;
  discountType: string;
  discountTitle: string;
  category?: { _id: string; name: string };
  service?: { _id: string; serviceName: string };
  zone?: { _id: string; name: string } | null;
  discountAmountType: string;
  amount: number;
  maxDiscount?: number;
  minPurchase: number;
  startDate: string;
  endDate: string;
  limitPerUser: number;
  discountCostBearer: string;
  couponAppliesTo: string;
  isApprove: boolean;
  isDeleted: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type CouponContextType = {
  coupons: Coupon[];
  loading: boolean;
  error: string | null;
  fetchCoupons: () => void;
};

/* ================= CONTEXT ================= */

const CouponContext = createContext<CouponContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const AllCouponProvider = ({ children }: { children: ReactNode }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCoupons = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://api.fetchtrue.com/api/coupon");
      if (response.data.success) {
        setCoupons(response.data.data);
      } else {
        setError("Failed to fetch coupons");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <CouponContext.Provider value={{ coupons, loading, error, fetchCoupons }}>
      {children}
    </CouponContext.Provider>
  );
};

/* ================= CUSTOM HOOK ================= */

export const useCoupons = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useCoupons must be used within a CouponProvider");
  }
  return context;
};
