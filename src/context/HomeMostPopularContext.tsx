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

export interface HomeMostPopularService {
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

interface HomeMostPopularContextType {
  services: HomeMostPopularService[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/*  CONTEXT  */

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
      setError(null);
      const res = await axios.get(
        "https://api.fetchtrue.com/api/service/mostlypopular"
      );
      
      if (res.data.success && res.data.data) {
        setServices(res.data.data);
      } else {
        setServices([]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load most popular services");
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  return (
    <HomeMostPopularContext.Provider value={{ 
      services, 
      loading, 
      error,
      refetch: fetchMostPopular 
    }}>
      {children}
    </HomeMostPopularContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useHomeMostPopular = () => {
  const context = useContext(HomeMostPopularContext);
  if (!context) {
    throw new Error(
      "useHomeMostPopular must be used inside HomeMostPopularProvider"
    );
  }
  return context;
};