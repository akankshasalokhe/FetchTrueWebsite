// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import axios from "axios";

// /* ================= TYPES ================= */

// export type Service = {
//   _id: string;
//   serviceName: string;
//   thumbnailImage: string;
//   category: {
//     _id: string;
//     name: string;
//     image: string;
//   };
//   averageRating: number;
//   totalReviews: number;
//   recommendedServices: boolean;
//   franchiseDetails:{
//     commission:number;
//   }
// };

// interface HomeRecommendedContextType {
//   services: Service[];
//   loading: boolean;
//   error: string | null;
//   refetchServices: () => Promise<void>;
// }

// /* ================= CONTEXT ================= */

// const HomeRecommendedContext = createContext<HomeRecommendedContextType | undefined>(
//   undefined
// );

// /* ================= PROVIDER ================= */

// export const HomeRecommendedProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [services, setServices] = useState<Service[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchServices = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await axios.get(
//         "https://api.fetchtrue.com/api/service/recommended"
//       );

//       // ONLY recommended services
//       const filtered = (res.data?.data || []).filter(
//         (item: Service) => item.recommendedServices === true
//       );

//       setServices(filtered);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load services");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   return (
//     <HomeRecommendedContext.Provider
//       value={{
//         services,
//         loading,
//         error,
//         refetchServices: fetchServices,
//       }}
//     >
//       {children}
//     </HomeRecommendedContext.Provider>
//   );
// };

// /* ================= HOOK ================= */

// export const useRecommended = () => {
//   const context = useContext(HomeRecommendedContext);

//   if (!context) {
//     throw new Error(
//       "useRecommended must be used inside RecommendedProvider"
//     );
//   }

//   return context;
// };





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

export type Category = {
  _id: string;
  name: string;
  image: string;
  sortOrder?: number;
};

export type SubCategory = {
  _id: string;
  name: string;
  image: string;
  sortOrder?: number;
};

export type KeyValue = {
  _id: string;
  key: string;
  value: string;
  icon: string;
};

export type Service = {
  _id: string;
  serviceName: string;
  thumbnailImage: string;
  category: Category;
  subcategory: SubCategory | null;
  keyValues: KeyValue[];
  averageRating: number;
  totalReviews: number;
};

export type FranchiseModel = {
  _id: string;
  title: string;
  agreement: string;
  price: number;
  discount: number;
  gst: number;
  fees: number;
};

export type RangeValue = {
  _id: string;
  range: string;
  parameters: string;
};

export type FranchiseDetails = {
  commission: string;
  investmentRange: RangeValue | null;
  monthlyEarnPotential: RangeValue | null;
  franchiseModel: FranchiseModel | null;
};

export type HomeRecommendedService = {
  _id: string;
  service: Service;
  mostlyTrending: boolean;
  mostlyRecommended: boolean;
  mostlyPopular: boolean;
  sortOrder: number;
  franchiseDetails: FranchiseDetails;
};

/* ================= CONTEXT TYPE ================= */

type HomeRecommendedContextType = {
  recommended: HomeRecommendedService[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

/* ================= CONTEXT ================= */

const HomeRecommendedContext = createContext<HomeRecommendedContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */

export function HomeRecommendedProvider({ children }: { children: ReactNode }) {
  const [recommended, setRecommended] = useState<HomeRecommendedService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHomeRecommended = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.fetchtrue.com/api/service/mostlyrecommended"
      );
      setRecommended(res.data.data || []);
    } catch (err) {
      setError("Failed to fetch recommended services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeRecommended();
  }, []);

  return (
    <HomeRecommendedContext.Provider
      value={{
        recommended,
        loading,
        error,
        refetch: fetchHomeRecommended,
      }}
    >
      {children}
    </HomeRecommendedContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useRecommended() {
  const context = useContext(HomeRecommendedContext);
  if (!context) {
    throw new Error(
      "useRecommended must be used inside RecommendedProvider"
    );
  }
  return context;
}
