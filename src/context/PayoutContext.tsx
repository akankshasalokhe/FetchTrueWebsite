"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface Wallet {
  _id: string;
  balance: number;
  selfEarnings: number;
  referralEarnings: number;
  totalCredits: number;
  totalDebits: number;
  pendingWithdraw: number;
  alreadyWithdrawn: number;
  lastTransactionAt: string | null;
  isActive: boolean;
}

export interface BankDetails {
  _id: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  ifsc: string;
  isActive: boolean;
}

export interface WeeklyPayout {
  _id: string;
  weekStart: string;
  weekEnd: string;
  pendingWithdraw: number;
  withdrawnAmount: number;
  status: string;
  processedAt?: string;
}

export interface PayoutUser {
  userId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  wallet: Wallet;
  bankDetails: BankDetails | null;
  weeklyPayouts: WeeklyPayout[];
}

interface PayoutResponse {
  success: boolean;
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  count: number;
  data: PayoutUser[];
}

interface PayoutContextType {
  payouts: PayoutUser[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  fetchPayouts: (page?: number, limit?: number) => Promise<void>;
}

/* ================= CONTEXT ================= */

const PayoutContext = createContext<PayoutContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const PayoutProvider = ({ children }: { children: ReactNode }) => {
  const [payouts, setPayouts] = useState<PayoutUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPayouts = async (page = 1, limit = 5) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get<PayoutResponse>(
        `http://api.fetchtrue.com/api/provider/payout/details`,
        {
          params: {
            type: "user",
            page,
            limit,
          },
        }
      );

      if (res.data.success) {
        setPayouts(res.data.data);
        setCurrentPage(res.data.currentPage);
        setTotalPages(res.data.totalPages);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch payouts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PayoutContext.Provider
      value={{
        payouts,
        loading,
        error,
        currentPage,
        totalPages,
        fetchPayouts,
      }}
    >
      {children}
    </PayoutContext.Provider>
  );
};

/* ================= HOOK ================= */

export const usePayouts = () => {
  const context = useContext(PayoutContext);
  if (!context) {
    throw new Error("usePayouts must be used within PayoutProvider");
  }
  return context;
};
