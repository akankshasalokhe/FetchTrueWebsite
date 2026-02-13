"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

/* ================= TYPES ================= */

type Transaction = {
  type: "credit" | "debit";
  leadId: string;
  commissionFrom: string;
  amount: number;
  description: string;
  referenceId: string;
  method: string;
  source: string;
  status: string;
  balanceAfterTransaction: number;
  createdAt: string;
};

type WalletUser = {
  packageActive: boolean;
  packageType: string;
  packageStatus: string;
  packageActivateDate: string;
};

type Wallet = {
  balance: number;
  selfEarnings: number;
  referralEarnings: number;
  totalCredits: number;
  totalDebits: number;
  pendingWithdraw: number;
  alreadyWithdrawn: number;
  transactions: Transaction[];
  userId: WalletUser;
};

type WalletContextType = {
  wallet: Wallet | null;
  loading: boolean;
  error: string | null;
  fetchWallet: (userId: string) => Promise<void>;
};

/* ================= CONTEXT ================= */

const WalletContext = createContext<WalletContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWallet = async (userId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/wallet/fetch-by-user/${userId}`
      );

      if (res.data?.success) {
        const apiData = res.data.data;

        /* ✅ NORMALIZE RESPONSE */
        const normalizedWallet: Wallet = {
          balance: apiData.balance ?? 0,
          selfEarnings: apiData.selfEarnings ?? 0,
          referralEarnings: apiData.referralEarnings ?? 0,
          totalCredits: apiData.totalCredits ?? 0,
          totalDebits: apiData.totalDebits ?? 0,
          pendingWithdraw: apiData.pendingWithdraw ?? 0,
          alreadyWithdrawn: apiData.alreadyWithdrawn ?? 0,
          transactions: apiData.transactions ?? [],
          userId: {
            packageActive: Boolean(apiData.userId?.packageActive),
            packageType: apiData.userId?.packageType ?? "",
            packageStatus: apiData.userId?.packageStatus ?? "",
            packageActivateDate: apiData.userId?.packageActivateDate ?? "",
          },
        };

        setWallet(normalizedWallet);
      } else {
        setError(res.data?.message || "Failed to load wallet");
      }
    } catch (err) {
      console.error("Wallet Fetch Error:", err);
      setError("Wallet fetch failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= AUTO FETCH ================= */

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);

        if (parsed?._id) {
          fetchWallet(parsed._id);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error("User parse error:", err);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, loading, error, fetchWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }

  return context;
};
