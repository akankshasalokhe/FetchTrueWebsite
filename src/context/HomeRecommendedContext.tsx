"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

/*  TYPES  */

type InvestmentRangeItem = {
  _id: string;
  range: string;
  parameters: string;
};

type MonthlyEarnPotentialItem = {
  _id: string;
  range: string;
  parameters: string;
};

type FranchiseModel = {
  _id: string;
  title: string;
  agreement: string;
  price: number;
  discount: number;
  gst: number;
  fees: number;
};

type FranchiseDetails = {
  commission?: string;  
  areaRequired?: string;
  investmentRange?: InvestmentRangeItem;
  monthlyEarnPotential?: MonthlyEarnPotentialItem;
  franchiseModel?: FranchiseModel;
};

type KeyValue = {
  _id: string;
  key: string;
  value: string;
  icon?: string;
};

type Package = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet?: string[];
};

type Category = {
  _id: string;
  name: string;
  module: {
    _id: string;
    name: string;
  };
  image?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  sortOrder?: number;
};

type Subcategory = {
  _id: string;
  name: string;
  image?: string;
  isDeleted?: boolean;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  sortOrder?: number;
};

type Service = {
  _id: string;
  serviceName: string;
  moduleName: string;
  category: Category;
  subcategory: Subcategory | null;
  packages: Package[];
  keyValues: KeyValue[];
  averageRating: number;
  totalReviews: number;
  thumbnailImage: string;
};

export interface HomeRecommendedService {
  _id: string;
  service: Service; 
  mostlyTrending: boolean;
  mostlyRecommended: boolean;
  mostlyPopular: boolean;
  sortOrder?: number;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  franchiseDetails: FranchiseDetails;
}

/*  CONTEXT TYPE  */

interface HomeRecommendedContextType {
  services: HomeRecommendedService[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/*  CONTEXT  */

const HomeRecommendedContext = createContext<HomeRecommendedContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const HomeRecommendedProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [services, setServices] = useState<HomeRecommendedService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommended = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        "https://api.fetchtrue.com/api/service/mostlyrecommended"
      );
      
      if (res.data.success && res.data.data) {
        setServices(res.data.data);
      } else {
        setServices([]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load rcommended services");
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  return (
    <HomeRecommendedContext.Provider value={{ 
      services, 
      loading, 
      error,
      refetch: fetchRecommended
    }}>
      {children}
    </HomeRecommendedContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useHomeRecommended = () => {
  const context = useContext(HomeRecommendedContext);
  if (!context) {
    throw new Error(
      "useHomeRecommended must be used inside HomeRecommendedProvider"
    );
  }
  return context;
};