"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
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
  franchiseDetails: FranchiseDetails;
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
}

interface RecommendedServicesContextType {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchRecommendedServices: (moduleId: string) => Promise<void>;
}

const RecommendedServicesContext = createContext<RecommendedServicesContextType | undefined>(undefined);

export const useRecommendedServices = () => {
  const context = useContext(RecommendedServicesContext);
  if (!context) throw new Error("useRecommendedServices must be used within RecommendedServicesProvider");
  return context;
};

interface Props {
  children: ReactNode;
}

export const RecommendedServicesProvider = ({ children }: Props) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendedServices = async (moduleId: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.fetchtrue.com/api/service/recommended?moduleId=${moduleId}`);
      if (response.data.success) {
        setServices(response.data.data);
      } else {
        setError("Failed to fetch recommended services");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecommendedServicesContext.Provider value={{ services, loading, error, fetchRecommendedServices }}>
      {children}
    </RecommendedServicesContext.Provider>
  );
};
