'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface Category {
  _id: string;
  name: string;
  image: string;
  module: string;
  sortOrder: number;
}

export interface SubCategory {
  _id: string;
  name: string;
  image: string;
  sortOrder: number;
  category: Category;
  createdAt: string;
  updatedAt: string;
}

/* ================= CONTEXT TYPE ================= */

interface SubCategoriesContextType {
  subCategories: SubCategory[];
  loading: boolean;
  error: string | null;
  fetchSubCategories: (categoryId: string) => Promise<void>;
}

/* ================= CONTEXT ================= */

const SubCategoriesContext = createContext<SubCategoriesContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const SubCategoryProvider = ({
  children,
  initialCategoryId,
}: {
  children: ReactNode;
  initialCategoryId?: string;
}) => {
  const [subCategoriesMap, setSubCategoriesMap] = useState<Record<string, SubCategory[]>>({});
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubCategories = async (categoryId: string) => {
    // Return cached data if available
    if (subCategoriesMap[categoryId]) {
      setSubCategories(subCategoriesMap[categoryId]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`https://api.fetchtrue.com/api/subcategory`, {
        params: { categoryId },
      });

      const data = res.data?.data || [];
      setSubCategoriesMap(prev => ({ ...prev, [categoryId]: data }));
      setSubCategories(data);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch when initialCategoryId changes
  useEffect(() => {
    if (initialCategoryId) {
      fetchSubCategories(initialCategoryId);
          console.log("Fetching subcategories for:", initialCategoryId);

    }
  }, [initialCategoryId]);

  return (
    <SubCategoriesContext.Provider
      value={{ subCategories, loading, error, fetchSubCategories }}
    >
      {children}
    </SubCategoriesContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useSubCategory = () => {
  const context = useContext(SubCategoriesContext);
  if (!context) {
    throw new Error("useSubCategory must be used within SubCategoryProvider");
  }
  return context;
};
