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

export interface MostPopularService {
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

interface MostPopularContextType {
  services: MostPopularService[];
  loading: boolean;
  error: string | null;
}

/* ================= CONTEXT ================= */

const MostPopularContext = createContext<MostPopularContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const MostPopularProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<MostPopularService[]>([]);
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
    <MostPopularContext.Provider value={{ services, loading, error }}>
      {children}
    </MostPopularContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useMostPopular = () => {
  const context = useContext(MostPopularContext);
  if (!context) {
    throw new Error(
      "useMostPopular must be used inside MostPopularProvider"
    );
  }
  return context;
};
