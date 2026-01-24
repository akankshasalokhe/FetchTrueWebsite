"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export type Module = {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
};

// export type Category = {
//   _id: string;
//   name: string;
//   image: string;
//   module: {
//     _id: string;
//     name?: string;
//   };
// };

interface ModuleContextType {
  modules: Module[];
  // categories: Category[];
  loading: boolean;
  // categoriesLoading: boolean;
  error: string | null;
  refetchModules: () => Promise<void>;
  // fetchCategoriesByModule: (moduleId: string) => Promise<void>;
}

/* ================= CONTEXT ================= */

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const ModuleProvider = ({ children }: { children: ReactNode }) => {
  const [modules, setModules] = useState<Module[]>([]);
  // const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [categoriesLoading, setCategoriesLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  /* ---------- Fetch Modules ---------- */
  const fetchModules = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://api.fetchtrue.com/api/modules"
      );

      setModules(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching modules:", err);
      setError("Failed to load modules");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Fetch Categories by Module ---------- */
  // const fetchCategoriesByModule = async (moduleId: string) => {
  //   try {
  //     setCategoriesLoading(true);
  //     setError(null);

  //     const res = await axios.get(
  //       `https://api.fetchtrue.com/api/category?moduleId=${moduleId}`
  //     );


  //     setCategories(res.data?.categories || res.data?.data || []);


  //   } catch (err) {
  //     console.error("Error fetching categories:", err);
  //     setError("Failed to load categories");
  //   } finally {
  //     setCategoriesLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchModules();
    
  }, []);
//   useEffect(() => {
//   console.log("categoriesLoading:", categoriesLoading);
// }, [categoriesLoading]);


  return (
    <ModuleContext.Provider
      value={{
        modules,
        // categories,
        loading,
        // categoriesLoading,
        error,
        
        refetchModules: fetchModules,
        // fetchCategoriesByModule,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useModule = () => {
  const context = useContext(ModuleContext);

  if (!context) {
    throw new Error("useModule must be used inside ModuleProvider");
  }

  return context;
};
