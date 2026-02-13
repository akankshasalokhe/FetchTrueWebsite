"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export type FiveXConfig = {
  _id: string;
  leadcount: number;
  fixearning: number;
  months: number;
  createdAt?: string;
  updatedAt?: string;
};

type FiveXContextType = {
  config: FiveXConfig | null;
  loading: boolean;
  error: string | null;
  refreshConfig: () => Promise<void>;
};

/* ================= CONTEXT ================= */

const FiveXContext = createContext<FiveXContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const FiveXProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [config, setConfig] = useState<FiveXConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConfig = async () => {
    try {
      setLoading(true);
      setError(null);

      // ✅ Call Next.js proxy instead of external API
      const res = await axios.get("https://api.fetchtrue.com/api/fivex");

      if (res.data?.length > 0) {
        setConfig(res.data[0]);
      } else {
        setError("FiveX config not found");
      }
    } catch (err: any) {
      console.error("FiveX config fetch failed:", {
        message: err.message,
        code: err.code,
      });

      setError("Failed to load FiveX config");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <FiveXContext.Provider
      value={{
        config,
        loading,
        error,
        refreshConfig: fetchConfig,
      }}
    >
      {children}
    </FiveXContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useFiveX = () => {
  const context = useContext(FiveXContext);

  if (!context) {
    throw new Error("useFiveX must be used within FiveXProvider");
  }

  return context;
};
