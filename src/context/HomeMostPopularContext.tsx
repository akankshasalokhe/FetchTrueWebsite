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

export interface HomeMostPopularService {
  serviceId: string;
  serviceName: string;
  thumbnailImage: string;
  price: number;
  averageRating: number;
  totalReviews: number;
  category: {
    _id: string;
    name: string;
  };
  keyValues: {
    key: string;
    value: string;
    icon?: string;
  };
  franchiseDetails:{
    commission:number;
  };
}

/* ================= CONTEXT TYPE ================= */

interface HomeMostPopularContextType {
  services: MostPopularService[];
  loading: boolean;
  error: string | null;
}

/* ================= CONTEXT ================= */

const HomeMostPopularContext = createContext<HomeMostPopularContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const HomeMostPopularProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<HomeMostPopularService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMostPopular = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.fetchtrue.com/api/service/popular "
      );
      setServices(res.data?.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load popular services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  return (
    <HomeMostPopularContext.Provider value={{ services, loading, error }}>
      {children}
    </HomeMostPopularContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useMostPopular = () => {
  const context = useContext(HomeMostPopularContext);
  if (!context) {
    throw new Error(
      "useMostPopular must be used inside MostPopularProvider"
    );
  }
  return context;
};
