"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface StoreInfo {
  storeName: string;
  storePhone: string;
  storeEmail: string;
  module: string;
  zone: string;
  logo: string;
  cover: string;
  address: string;
  city: string;
  state: string;
  country: string;
  tags: string[];
  totalProjects: number;
  totalExperience: number;
}

export interface Provider {
  _id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  isStoreOpen: boolean;
  storeInfo: StoreInfo;
  totalReviews: number;
  category_list: string[];
  providerId: string;
  averageRating: number;
}

/* ================= CONTEXT TYPE ================= */

interface PopularProviderContextType {
  providers: Provider[];
  loading: boolean;
  error: string | null;
  fetchPopularProviders: (
    moduleId: string,
    lat: number,
    lng: number
  ) => Promise<void>;
}

/* ================= CONTEXT ================= */

const PopularProviderContext =
  createContext<PopularProviderContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const PopularProvidersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPopularProviders = useCallback(
    async (moduleId: string, lat: number, lng: number) => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(
          "https://api.fetchtrue.com/api/provider/popular",
          {
            params: { moduleId, lat, lng },
          }
        );

        setProviders(res.data?.data || []);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to load providers");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <PopularProviderContext.Provider
      value={{ providers, loading, error, fetchPopularProviders }}
    >
      {children}
    </PopularProviderContext.Provider>
  );
};

/* ================= HOOK ================= */

export const usePopularProviders = () => {
  const context = useContext(PopularProviderContext);
  if (!context) {
    throw new Error(
      "usePopularProviders must be used inside PopularProviderProvider"
    );
  }
  return context;
};
