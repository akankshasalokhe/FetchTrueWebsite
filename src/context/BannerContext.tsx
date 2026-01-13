"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* =======================
   TYPES (FROM API)
======================= */

export interface Module {
  _id: string;
  name: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
}

export interface Category {
  _id: string;
  name: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  image: string;
  isDeleted: boolean;
  category: Category;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
}

export interface CategorySelection {
  _id: string;
  page: string;
  screenCategory: string;
  selectionType: string;
  module: Module;
  subcategory: SubCategory;
  file: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

/* =======================
   CONTEXT TYPE
======================= */

interface CategorySelectionContextType {
  data: CategorySelection[];
  loading: boolean;
  error: string | null;
  fetchBannerCategorySelections: (moduleId: string) => Promise<void>;
}

/* =======================
   CONTEXT
======================= */

const CategorySelectionContext =
  createContext<CategorySelectionContextType | undefined>(undefined);

/* =======================
   HOOK
======================= */

export const useBannerCategorySelection = () => {
  const context = useContext(CategorySelectionContext);
  if (!context) {
    throw new Error(
      "useCategorySelection must be used within CategorySelectionProvider"
    );
  }
  return context;
};

/* =======================
   PROVIDER
======================= */

interface Props {
  children: ReactNode;
}

export const BannerCategorySelectionProvider = ({ children }: Props) => {
  const [data, setData] = useState<CategorySelection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBannerCategorySelections = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/banner?module=${moduleId}`
      );

      console.log("RAW API RESPONSE:", res.data);

      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        setError("Unexpected API response format");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategorySelectionContext.Provider
      value={{
        data,
        loading,
        error,
        fetchBannerCategorySelections,
      }}
    >
      {children}
    </CategorySelectionContext.Provider>
  );
};
