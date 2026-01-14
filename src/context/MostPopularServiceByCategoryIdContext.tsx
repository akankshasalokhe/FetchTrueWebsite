"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */

interface Category {
  _id: string;
  name: string;
}

interface KeyValue {
  key: string;
  value: string;
  icon?: string;
}

interface InvestmentRange {
  range: string;
  parameters: string;
  _id: string;
}

interface MonthlyEarnPotential {
  range: string;
  parameters: string;
  _id: string;
}

interface FranchiseModel {
  title: string;
  agreement: string;
  price: number;
  discount: number;
  gst: number;
  fees: number;
  _id: string;
}

interface FranchiseDetails {
  commission: string;
  investmentRange: InvestmentRange[];
  monthlyEarnPotential: MonthlyEarnPotential[];
  franchiseModel: FranchiseModel[];
}

export interface PopularService {
  serviceId: string;
  serviceName: string;
  thumbnailImage: string;
  price: number;
  category: Category;
  keyValues: KeyValue[];
  totalReviews: number;
  packages?: any[];
  franchiseDetails: FranchiseDetails;
  averageRating: number;
}

/* ---------- CONTEXT TYPE ---------- */

interface MostPopularServiceByCategoryContextType {
  services: PopularService[];
  loading: boolean;
  error: string | null;
  fetchMostPopularServiceByCategory: (categoryId: string) => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const MostPopularServiceByCategoryContext = createContext<MostPopularServiceByCategoryContextType | undefined>(
  undefined
);

/* ---------- HOOK ---------- */

export const useMostPopularServiceByCategory = () => {
  const context = useContext(MostPopularServiceByCategoryContext);
  if (!context) {
    throw new Error(
      "useMostPopularServiceByCategory must be used within MostPopularServiceByCategoryProvider"
    );
  }
  return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
  children: ReactNode;
}

export const MostPopularServiceByCategoryProvider = ({ children }: Props) => {
  const [services, setServices] = useState<PopularService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMostPopularServiceByCategory = async (categoryId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/service/popular?categoryId=${categoryId}`
      );

      if (res.data?.success) {
        setServices(res.data.data);
      } else {
        setError("Failed to fetch most popular services");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MostPopularServiceByCategoryContext.Provider
      value={{ services, loading, error, fetchMostPopularServiceByCategory }}
    >
      {children}
    </MostPopularServiceByCategoryContext.Provider>
  );
};
