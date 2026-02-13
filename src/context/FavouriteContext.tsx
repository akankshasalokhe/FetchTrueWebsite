"use client";

import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ================= TYPES ================= */

interface KeyValue {
  key: string;
  value: string;
  icon?: string;
  _id: string;
}

interface FranchiseModel {
  title: string;
  agreement: string;
  price: number;
  discount?: number;
  discountedPrice:number;
  gst: number;
  fees: number;
  _id: string;
}

interface InvestmentRange {
  range: string;
  parameters: string;
  _id: string;
}

interface MonthlyEarnPotential {
  range: string;
  parameters: string;
  _id: string;
}

interface FranchiseDetails {
  commission: string;
  investmentRange: InvestmentRange[];
  monthlyEarnPotential: MonthlyEarnPotential[];
  franchiseModel: FranchiseModel[];
}



interface serviceDetails {
  packages:Package[];
}

interface Category {
  _id: string;
  name: string;
  image: string;
}

interface Package {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
}




interface FavouriteService {
  _id: string;
  serviceName: string;
  category: Category;
  thumbnailImage?: string;
  keyValues: KeyValue[];
  serviceDetails: serviceDetails; 
  franchiseDetails: FranchiseDetails;
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
}

interface FavouriteContextType {
  favourites: FavouriteService[];
  loading: boolean;
  error: string | null;
  fetchFavourites: (userId: string) => Promise<void>;
  clearFavourites: () => void;
}

/* ================= CONTEXT ================= */

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export const FavouriteProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favourites, setFavourites] = useState<FavouriteService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH ================= */

  const fetchFavourites = async (userId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/users/favourite-services/${userId}`
      );

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to fetch favourites");
      }

      setFavourites(res.data.data || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLEAR ================= */

  const clearFavourites = () => {
    setFavourites([]);
    setError(null);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        loading,
        error,
        fetchFavourites,
        clearFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useFavourites = () => {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error("useFavourites must be used within FavouriteProvider");
  }

  return context;
};
