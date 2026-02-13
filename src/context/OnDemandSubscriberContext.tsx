"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

/*  UTILS  */


function normalizeToArray<T>(data: T[] | T | null | undefined): T[] {
  if (Array.isArray(data)) return data;
  if (data) return [data];
  return [];
}

/*  TYPES  */

export interface Category {
  _id: string;
  name: string;
  module: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
}

export interface KeyValue {
  _id: string;
  value: string;
  icon: string;
}

export interface PackagePlan {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export interface ConnectWith {
  _id: string;
  name: string;
  mobileNo: string;
  email: string;
}

export interface ServiceDetails {
  benefits: string[];
  aboutUs: string[];
  termsAndConditions: string[];
  highlight: string[];
  include: string[];
  notInclude: string[];
  safetyAndAssurance: string[];
  faq: FAQ[];
  packages: PackagePlan[];
  connectWith: ConnectWith[];
}

export interface FranchiseDetails {
  commission: string;
  termsAndConditions: string;
}

export interface SubscribedService {
  srNo: number;
  _id: string;
  serviceName: string;
  category: Category;
  subcategory: string[];
  price: number;
  discount: number;
  gst: number;
  includeGst: boolean;
  gstInRupees: number;
  totalWithGst: number;
  discountedPrice: number;
  thumbnailImage: string;
  bannerImages: string[];
  tags: string[];
  keyValues: KeyValue[];
  serviceDetails: ServiceDetails;
  franchiseDetails: FranchiseDetails;
  averageRating: number;
  totalReviews: number;
  recommendedServices: boolean;
  isTrending: boolean;
  isDeleted: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  categoryName: string;
  status: "Subscribed" | "Unsubscribed";
}

/*  CONTEXT TYPE  */

interface SubscribedServicesContextType {
  subscribedServices: SubscribedService[];
  loading: boolean;
  error: string | null;
  fetchSubscribedServices: (providerId: string) => Promise<void>;
}

const SubscribedServicesContext = createContext<
  SubscribedServicesContextType | undefined
>(undefined);

export const useSubscribedServices = () => {
  const context = useContext(SubscribedServicesContext);
  if (!context) {
    throw new Error("useSubscribedServices must be used within SubscribedServicesProvider");
  }
  return context;
};

/*  PROVIDER  */

interface Props {
  children: ReactNode;
}

export const SubscribedServicesProvider = ({ children }: Props) => {
  const [subscribedServices, SetSubscribedServices] = useState<SubscribedService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscribedServices = async (providerId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/provider/subscribe/${providerId}`
      );

      if (res.data?.success) {
        const rawData = res.data?.data;

       
        const safeData = normalizeToArray<SubscribedService>(rawData);

        SetSubscribedServices(safeData);
      } else {
        SetSubscribedServices([]);
        setError("API returned unsuccessful response");
      }

    } catch (err: unknown) {
      SetSubscribedServices([]); 

      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong while fetching services");

    } finally {
      setLoading(false);
    }
  };

  return (
    <SubscribedServicesContext.Provider
      value={{ subscribedServices, loading, error, fetchSubscribedServices }}
    >
      {children}
    </SubscribedServicesContext.Provider>
  );
};
