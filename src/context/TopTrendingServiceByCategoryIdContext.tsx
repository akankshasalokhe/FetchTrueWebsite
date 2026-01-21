



"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

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

interface Category {
  _id: string;
  name: string;
  image: string;
}

export interface Service {
  _id: string;
  serviceName: string;
  category: Category;
  thumbnailImage?: string;
  keyValues: KeyValue[];
  serviceDetails: serviceDetails; 
  franchiseDetails: FranchiseDetails;
  averageRating: number;
  totalReviews: number;
  TopTrendingServices: boolean;
}

interface Package {
  name: string;
  price: number;
  discount?: number;
  discountedPrice: number;
  whatYouGet: string[];
  _id: string;
}

interface serviceDetails {
  packages:Package[];
}

interface TopTrendingServiceByCategoryIdContextType {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchTopTrendingServicesByCategoryId: (categoryId: string) => Promise<void>;
}

const TopTrendingServicesByCategoryIdContext = createContext<TopTrendingServiceByCategoryIdContextType | undefined>(undefined);

export const useTopTrendingServiceByCategoryIdContext = () => {
  const context = useContext(TopTrendingServicesByCategoryIdContext);
  if (!context) throw new Error("useTopTrendingServiceByCategoryIdContext must be used within TopTrendingServicesProvider");
  return context;
};

interface Props {
  children: ReactNode;
}

export const TopTrendingServiceByCategoryIdProvider = ({ children }: Props) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopTrendingServicesByCategoryId = async (categoryId: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.fetchtrue.com/api/service/top-trending?categoryId=${categoryId}`);
      if (response.data.success) {
        setServices(response.data.data);
      } else {
        setError("Failed to fetch TopTrending services");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopTrendingServicesByCategoryIdContext.Provider value={{ services, loading, error, fetchTopTrendingServicesByCategoryId }}>
      {children}
    </TopTrendingServicesByCategoryIdContext.Provider>
  );
};
