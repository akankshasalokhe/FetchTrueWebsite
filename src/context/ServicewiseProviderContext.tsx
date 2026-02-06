"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* =========================
   TYPES (API response based)
========================= */

interface Service {
  _id: string;
  serviceName: string;
}

interface Zone {
  _id: string;
  name: string;
}

interface StoreInfo {
  storeName: string;
  storePhone: string;
  storeEmail: string;
  module: string;
  zone: Zone;
  logo: string;
  cover: string;
  address: string;
  city: string;
  state: string;
  country: string;
  tags: string[];
  totalProjects: number;
  totalExperience: string;
}

export interface Provider {
  _id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  providerId: string;
  averageRating: number;
  totalReviews: number;
  isStoreOpen: boolean;
  isPromoted: boolean | null;
  topRated: boolean;
  galleryImages: string[];
  subscribedServices: Service[];
  storeInfo: StoreInfo;
  createdAt: string;
  updatedAt: string;
}

/* =========================
   CONTEXT TYPE
========================= */

interface ServicewiseProviderContextType {
  providers: Provider[];
  loading: boolean;
  error: string | null;
  fetchProvidersByService: (serviceId: string) => Promise<void>;
}

/* =========================
   CONTEXT
========================= */

const ServicewiseProviderContext =
  createContext<ServicewiseProviderContextType | null>(null);

/* =========================
   PROVIDER
========================= */

export const ServicewiseProviderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProvidersByService = async (serviceId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/provider/all/service-wise/${serviceId}`
      );

      setProviders(res.data?.data || []);
    } catch (err: any) {
      setError(err?.message || "Failed to fetch providers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ServicewiseProviderContext.Provider
      value={{
        providers,
        loading,
        error,
        fetchProvidersByService,
      }}
    >
      {children}
    </ServicewiseProviderContext.Provider>
  );
};

/* =========================
   CUSTOM HOOK
========================= */

export const useServiceProviders = () => {
  const context = useContext(ServicewiseProviderContext);
  if (!context) {
    throw new Error(
      "useServiceProviders must be used within ServicewiseProviderProvider"
    );
  }
  return context;
};
