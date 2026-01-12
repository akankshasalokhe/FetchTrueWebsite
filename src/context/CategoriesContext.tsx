"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";

interface Category {
  _id: string;
  name: string;
  image: string;
  subcategoryCount: number;
}

interface CategoriesContextType {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategoriesByModule: (moduleId: string) => Promise<void>;
}

const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategoriesByModule = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/category?moduleId=${moduleId}`
      );

      setCategories(res.data.data || []);
    } catch (err) {
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, loading, error, fetchCategoriesByModule }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useModule = () => {
  const context = useContext(CategoriesContext);
  if (!context) throw new Error("useModule must be used inside ModuleProvider");
  return context;
};
