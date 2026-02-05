"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

/* =====================================================
   TYPES (API ke exact according)
===================================================== */

export interface FranchiseModelItem {
  _id: string;
  franchiseSize: string;
  areaRequired: string;
  marketing: string;
  returnOfInvestment: string;
  manPower: number;
  staffManagement: string;
  royaltyPercent: string;
  grossMargin: string;
  radiusArea: string;
}

interface FranchiseModelApiResponse {
  success: boolean;
  data: {
    _id: string;
    serviceId: string;
    model: FranchiseModelItem[];
    createdAt: string;
    updatedAt: string;
  };
}

/* =====================================================
   CONTEXT TYPE
===================================================== */

interface FranchiseModelContextType {
  models: FranchiseModelItem[];
  franchiseloading: boolean;
  error: string | null;
  fetchFranchiseModels: (serviceId: string) => Promise<void>;
}

/* =====================================================
   CONTEXT
===================================================== */

const FranchiseModelContext =
  createContext<FranchiseModelContextType | null>(null);

/* =====================================================
   PROVIDER
===================================================== */

export const FranchiseModelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [models, setModels] = useState<FranchiseModelItem[]>([]);
  const [franchiseloading, setFranchiseLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFranchiseModels = async (serviceId: string) => {
    try {
      setFranchiseLoading(true);
      setError(null);

      const res = await axios.get<FranchiseModelApiResponse>(
        "https://api.fetchtrue.com/api/service/franchise/model",
        {
          params: { serviceId },
        }
      );

      if (res.data.success) {
        setModels(res.data.data.model);
      } else {
        setError("Failed to fetch franchise models");
      }
    } catch (err) {
      setError("Something went wrong while fetching franchise models");
    } finally {
      setFranchiseLoading(false);
    }
  };

  return (
    <FranchiseModelContext.Provider
      value={{ models, franchiseloading, error, fetchFranchiseModels }}
    >
      {children}
    </FranchiseModelContext.Provider>
  );
};

/* =====================================================
   CUSTOM HOOK
===================================================== */

export const useFranchiseModel = () => {
  const context = useContext(FranchiseModelContext);
  if (!context) {
    throw new Error(
      "useFranchiseModel must be used inside FranchiseModelProvider"
    );
  }
  return context;
};
