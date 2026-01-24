"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

/* =====================================================
   TYPES (API ke exact according)
===================================================== */

interface ImageTitleDescription {
  _id: string;
  title: string;
  description: string;
  icon?: string;
}[]

interface Counter {
  _id: string;
  number: number;
  title: string;
}

interface CourseCurriculum {
  _id: string;
  title: string;
  lists: string[];
  model: string[];
}


interface ServiceDetails {
  benefits: string[];
  aboutUs: string[];
  termsAndConditions: string[];
  whatYouWillLearn: string[];
  eligibleFor: string[];
  highlight: string[];
  whyChooseUs: ImageTitleDescription[];
  courseCurriculum: CourseCurriculum[];
  courseIncludes: string[];
  certificateImage: string[];
  packages:{
    _id: string;
    name: string;
    price: number;
    discount: number;
    discountedPrice: number;
    whatYouGet: string[];
  }[];
  weRequired: {
    _id: string;
    title: string;
  }[];
  weDeliver: {
    _id: string;
    title: string;
  }[];
  moreInfo: {
  _id: string;
  title: string;
  description: string;
  image: string;
}[];
  assuredByFetchTrue: {
    _id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  connectWith: {
    _id: string;
    name: string;
    mobileNo: string;
    email: string;
  }[];
  faq: {
    _id: string;
    question: string;
    answer: string;
  }[];
  howItWorks: {
   _id: string;
   title: string;
   description: string;
   icon?: string;
  }[];
  notInclude: string[];
  include: string[];
  safetyAndAssurance: string[];
  roi:string[];
  brochureImage: string[];
  emiavalable: string[];
  counter: Counter[];
  level: string;
  lessonCount: number;
  duration: {
    weeks: number;
    hours: number;
  };
}

export interface ServiceData {
  _id: string;
  serviceName: string;
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
  serviceDetails: ServiceDetails;
  averageRating: number;
  totalReviews: number;
  isTrending: boolean;
}

/* =====================================================
   CONTEXT
===================================================== */

interface ServiceDetailsContextType {
  service: ServiceData | null;
  loading: boolean;
  error: string | null;
  fetchServiceDetails: (serviceId: string) => Promise<void>;
}

const ServiceDetailsContext =
  createContext<ServiceDetailsContextType | undefined>(undefined);

/* =====================================================
   PROVIDER
===================================================== */

export const ServiceDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServiceDetails = async (serviceId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/service/${serviceId}`
      );

      setService(res.data.data);
    } catch (err: unknown) {
      if(err instanceof Error)
      setError(err.message || "Failed to fetch service details");
    else 
      setError("Failed to fetch service details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ServiceDetailsContext.Provider
      value={{ service, loading, error, fetchServiceDetails }}
    >
      {children}
    </ServiceDetailsContext.Provider>
  );
};

/* =====================================================
   HOOK
===================================================== */

export const useServiceDetails = () => {
  const context = useContext(ServiceDetailsContext);
  if (!context) {
    throw new Error(
      "useServiceDetails must be used within ServiceDetailsProvider"
    );
  }
  return context;
};
