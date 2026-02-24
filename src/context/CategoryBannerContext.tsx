"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface Module {
  _id: string;
  name: string;
  image: string;
}

export interface CategoryBanner {
  _id: string;
  module: Module;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryBannerContextType {
  banners: CategoryBanner[];
  loading: boolean;
  error: string | null;
  fetchBanners: (moduleId: string) => Promise<void>;
}

/* ================= CONTEXT ================= */

const CategoryBannerContext = createContext<
  CategoryBannerContextType | undefined
>(undefined);

/* ================= PROVIDER ================= */

export const CategoryBannerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [banners, setBanners] = useState<CategoryBanner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBanners = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/categorybanner?moduleId=${moduleId}`
      );

      if (res.data?.success) {
        setBanners(res.data.data);
      } else {
        setError("Failed to fetch banners");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryBannerContext.Provider
      value={{ banners, loading, error, fetchBanners }}
    >
      {children}
    </CategoryBannerContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useCategoryBanner = () => {
  const context = useContext(CategoryBannerContext);
  if (!context) {
    throw new Error(
      "useCategoryBanner must be used within CategoryBannerProvider"
    );
  }
  return context;
};