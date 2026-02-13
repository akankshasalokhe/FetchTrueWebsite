"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

// Types

interface ModuleInfo {
  _id: string;
  name: string;
}

interface StoreInfo {
  storeName: string;
  storePhone: string;
  storeEmail: string;
  module: ModuleInfo;
  zone: string;
  aboutUs: string;
  logo?: string;
  cover?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  tags: string[];
  totalExperience?: number;
}

export interface Provider {
  _id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  averageRating: number;
  totalReviews: number;
  isStoreOpen: boolean;
  category_list: string[];
  storeInfo: StoreInfo;
}

interface RecommendedProvidersContextType {
  providers: Provider[];
  loading: boolean;
  error: string | null;
  fetchRecommendedProviders: (moduleId: string) => Promise<void>;
}

// Context

const RecommendedProvidersContext =
  createContext<RecommendedProvidersContextType | undefined>(undefined);

export const useRecommendedProviders = () => {
  const context = useContext(RecommendedProvidersContext);
  if (!context) {
    throw new Error(
      "useRecommendedProviders must be used within RecommendedProvidersProvider"
    );
  }
  return context;
};

/* 
   PROVIDER
 */

interface Props {
  children: ReactNode;
}

export const RecommendedProvidersProvider = ({ children }: Props) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendedProviders = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/provider/recommended?moduleId=${moduleId}`
      );

      console.log("RAW API RESPONSE:", res.data);

      //  API returns array directly
      if (Array.isArray(res.data)) {
        setProviders(res.data);
      } else {
        setError("Unexpected API response format");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      }
      else {
        setError("Something went wrong");
      }
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecommendedProvidersContext.Provider
      value={{
        providers,
        loading,
        error,
        fetchRecommendedProviders,
      }}
    >
      {children}
    </RecommendedProvidersContext.Provider>
  );
};
