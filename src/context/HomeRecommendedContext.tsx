"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export type Service = {
  _id: string;
  serviceName: string;
  thumbnailImage: string;
  category: {
    _id: string;
    name: string;
    image: string;
  };
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
  franchiseDetails:{
    commission:number;
  }
};

interface HomeRecommendedContextType {
  services: Service[];
  loading: boolean;
  error: string | null;
  refetchServices: () => Promise<void>;
}

/* ================= CONTEXT ================= */

const HomeRecommendedContext = createContext<HomeRecommendedContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const HomeRecommendedProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://api.fetchtrue.com/api/service/recommended"
      );

      // ONLY recommended services
      const filtered = (res.data?.data || []).filter(
        (item: Service) => item.recommendedServices === true
      );

      setServices(filtered);
    } catch (err) {
      console.error(err);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <HomeRecommendedContext.Provider
      value={{
        services,
        loading,
        error,
        refetchServices: fetchServices,
      }}
    >
      {children}
    </HomeRecommendedContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useRecommended = () => {
  const context = useContext(HomeRecommendedContext);

  if (!context) {
    throw new Error(
      "useRecommended must be used inside RecommendedProvider"
    );
  }

  return context;
};
