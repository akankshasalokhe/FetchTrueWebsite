// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
// } from "react";
// import axios from "axios";

// /* ================= TYPES ================= */

// interface Category {
//   _id: string;
//   name: string;
//   image: string;
// }

// interface RangeItem {
//   _id: string;
//   range: string;
//   parameters: string;
// }

// interface FranchiseModel {
//   _id: string;
//   title: string;
//   agreement: string;
//   price: number;
//   discount: number;
//   gst: number;
//   fees: number;
// }

// interface FranchiseDetails {
//   commission: string;
//   investmentRange: RangeItem[];
//   monthlyEarnPotential: RangeItem[];
//   franchiseModel: FranchiseModel[];
// }

// export interface RecommendedService {
//   _id: string;
//   serviceName: string;
//   category: Category;
//   thumbnailImage: string;
//   franchiseDetails: FranchiseDetails;
//   averageRating: number;
//   totalReviews: number;
//   recommendedServices: boolean;
// }

// interface ApiResponse {
//   success: boolean;
//   page: number;
//   limit: number;
//   total: number;
//   totalPages: number;
//   data: RecommendedService[];
// }

// interface ContextType {
//   services: RecommendedService[];
//   loading: boolean;
//   error: string | null;
//   fetchRecommendedServicesByCategoryId: (categoryId: string) => Promise<void>;
// }

// /* ================= CONTEXT ================= */

// const RecommendedServiceByCategoryIdContext =
//   createContext<ContextType | undefined>(undefined);

// /* ================= PROVIDER ================= */

// export const RecommendedServiceByCategoryIdProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [services, setServices] = useState<RecommendedService[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchRecommendedServicesByCategoryId = async (
//     categoryId: string
//   ) => {
//     if (!categoryId) return;

//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axios.get<ApiResponse>(
//         `https://api.fetchtrue.com/api/service/recommended`,
//         {
//           params: { categoryId },
//         }
//       );

//       setServices(res.data.data || []);
//     } catch (err: any) {
//       setError(
//         err?.response?.data?.message ||
//           "Failed to fetch recommended services"
//       );
//       setServices([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <RecommendedServiceByCategoryIdContext.Provider
//       value={{
//         services,
//         loading,
//         error,
//         fetchRecommendedServicesByCategoryId,
//       }}
//     >
//       {children}
//     </RecommendedServiceByCategoryIdContext.Provider>
//   );
// };

// /* ================= HOOK ================= */

// export const useRecommendedServiceByCategoryId = () => {
//   const context = useContext(RecommendedServiceByCategoryIdContext);
//   if (!context) {
//     throw new Error(
//       "useRecommendedServiceByCategoryId must be used within RecommendedServiceByCategoryIdProvider"
//     );
//   }
//   return context;
// };



// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";
// import axios from "axios";

// /* ================= TYPES ================= */

// interface FranchiseModel {
//   title: string;
//   agreement: string;
//   price: number;
//   discount?: number;
//   gst: number;
//   fees: number;
//   _id: string;
// }

// interface InvestmentRange {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface MonthlyEarnPotential {
//   range: string;
//   parameters: string;
//   _id: string;
// }

// interface FranchiseDetails {
//   commission: string;
//   investmentRange: InvestmentRange[];
//   monthlyEarnPotential: MonthlyEarnPotential[];
//   franchiseModel: FranchiseModel[];
// }

// interface Category {
//   _id: string;
//   name: string;
//   image: string;
// }

// export interface Service {
//   _id: string;
//   serviceName: string;
//   category: Category;
//   thumbnailImage?: string;
//   franchiseDetails: FranchiseDetails;
//   averageRating: number;
//   totalReviews: number;
//   recommendedServices: boolean;
// }

// interface ApiResponse {
//   success: boolean;
//   page: number;
//   limit: number;
//   total: number;
//   totalPages: number;
//   data: Service[];
// }

// interface ContextType {
//   services: Service[];
//   loading: boolean;
//   error: string | null;
//   fetchRecommendedServicesByCategoryId: (categoryId: string) => Promise<void>;
// }

// /* ================= CONTEXT ================= */

// const RecommendedServiceByCategoryIdContext =
//   createContext<ContextType | undefined>(undefined);

// export const useRecommendedServiceByCategoryIdContext = () => {
//   const context = useContext(RecommendedServiceByCategoryIdContext);
//   if (!context) {
//     throw new Error(
//       "useRecommendedServiceByCategoryIdContext must be used within Provider"
//     );
//   }
//   return context;
// };

// /* ================= PROVIDER ================= */

// export const RecommendedServiceByCategoryIdContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [services, setServices] = useState<Service[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchRecommendedServicesByCategoryId = async (
//     categoryId: string
//   ) => {
//     if (!categoryId) return;

//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axios.get<ApiResponse>(
//         "https://api.fetchtrue.com/api/service/recommended",
//         { params: { categoryId } }
//       );

//       setServices(res.data.data || []);
//     } catch (err: any) {
//       setError(
//         err?.response?.data?.message ||
//           "Failed to fetch recommended services"
//       );
//       setServices([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <RecommendedServiceByCategoryIdContext.Provider
//       value={{
//         services,
//         loading,
//         error,
//         fetchRecommendedServicesByCategoryId,
//       }}
//     >
//       {children}
//     </RecommendedServiceByCategoryIdContext.Provider>
//   );
// };



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

interface Package {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  whatYouGet: string[];
}


interface ServiceDetails {
  packages: Package[];
}


export interface Service {
    _id: string;
    serviceName: string;
    category: Category;
    thumbnailImage?: string;
    keyValues: KeyValue[];
    franchiseDetails: FranchiseDetails;
    averageRating: number;
    serviceDetails: ServiceDetails;
    totalReviews: number;
    price?: number;
    recommendedServices: boolean;
}

interface TopTrendingServiceByCategoryIdContextType {
    services: Service[];
    loading: boolean;
    error: string | null;
    fetchTopTrendingServicesByCategoryId: (categoryId: string) => Promise<void>;
}

const TopTrendingServiceByCategoryIdContext = createContext<TopTrendingServiceByCategoryIdContextType | undefined>(undefined);

export const useTopTrendingServiceByCategoryIdContext = () => {
    const context = useContext(TopTrendingServiceByCategoryIdContext);
    if (!context) throw new Error("useTopTrendingServiceByCategoryIdContext must be used within TopTrendingServiceByCategoryIdProvider");
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
                setError("Failed to fetch recommended services");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
            else {
                setError("Failed to fetch Top Trending Services");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <TopTrendingServiceByCategoryIdContext.Provider value={{ services, loading, error, fetchTopTrendingServicesByCategoryId }}>
            {children}
        </TopTrendingServiceByCategoryIdContext.Provider>
    );
};
