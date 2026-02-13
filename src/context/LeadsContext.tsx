"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

/* ================= TYPES ================= */

type Service = {
  _id: string;
  serviceName: string;
  price: number;
  discount: number;
  discountedPrice: number;
};

type Lead = {
  _id: string;
  bookingId: string;
  service: Service;
  subtotal: number;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  paymentStatus: string;
  orderStatus: string;
  isCompleted: boolean;
  createdAt: string;
};

type LeadsContextType = {
  leads: Lead[];
  loading: boolean;
  error: string | null;
  fetchLeads: (userId: string) => Promise<void>;
};

/* ================= CONTEXT ================= */

const LeadsContext = createContext<LeadsContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const LeadsProvider = ({ children }: { children: React.ReactNode }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = async (userId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/checkout/lead-by-user/${userId}`
      );

      if (res.data.success) {
        setLeads(res.data.data);
      } else {
        setError(res.data.message || "Failed to load leads");
      }
    } catch (err) {
      console.error(err);
      setError("Leads fetch failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= AUTO FETCH ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      if (parsed?._id) {
        fetchLeads(parsed._id);
      }
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <LeadsContext.Provider value={{ leads, loading, error, fetchLeads }}>
      {children}
    </LeadsContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useLeads = () => {
  const context = useContext(LeadsContext);

  if (!context) {
    throw new Error("useLeads must be used within LeadsProvider");
  }

  return context;
};
