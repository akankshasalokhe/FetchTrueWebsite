"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/*  TYPES  */

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  list?: string;
}

interface Module {
  _id: string;
  name: string;
}

interface WhyChooseService {
  _id: string;
  items: ServiceItem[];
  module: Module;
  createdAt: string;
  updatedAt: string;
}

/*  CONTEXT TYPE  */

interface WhyChooseServiceContextType {
  services: WhyChooseService[];
  loading: boolean;
  error: string | null;
  fetchWhyServices: (moduleId: string) => Promise<void>;
  clearServices: () => void;
}

/*  CONTEXT  */

const WhyChooseServiceContext =
  createContext<WhyChooseServiceContextType | undefined>(undefined);

/*  PROVIDER  */

export const WhyChooseServiceProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<WhyChooseService[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* ---------- FETCH BY MODULE ID ---------- */
  const fetchWhyServices = async (moduleid: string) => {
    if (!moduleid) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/category/whyjustourservice`,
        {
          params: { moduleid },
        }
      );

      setServices(res.data?.data || []);
    } catch (err) {
      setError("Failed to fetch why-choose services");
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  /*  CLEAR  */
  const clearServices = () => {
    setServices([]);
    setError(null);
  };

  return (
    <WhyChooseServiceContext.Provider
      value={{
        services,
        loading,
        error,
        fetchWhyServices,
        clearServices,
      }}
    >
      {children}
    </WhyChooseServiceContext.Provider>
  );
};

/*  HOOK  */

export const useWhyChooseService = () => {
  const context = useContext(WhyChooseServiceContext);
  if (!context) {
    throw new Error(
      "useWhyChooseService must be used within WhyChooseServiceProvider"
    );
  }
  return context;
};
