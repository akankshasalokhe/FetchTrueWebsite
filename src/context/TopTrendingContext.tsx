"use client";

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */

interface Category {
    _id: string;
    name: string;
    image:string;
}

interface KeyValue {
    key: string;
    value: string;
    icon?: string;
    _id:string;
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

interface FranchiseDetails {
    commission: string;
    investmentRange: InvestmentRange[];
    monthlyEarnPotential: MonthlyEarnPotential[];
    franchiseModel: FranchiseModel[];
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


export interface PopularService {
    _id: string;
    serviceName: string;
    thumbnailImage?: string;
    category: Category;
    keyValues: KeyValue[];
    serviceDetails: ServiceDetails;
    franchiseDetails: FranchiseDetails;
    averageRating: number;
    totalReviews: number;
    isTrending: boolean;
}


/* ---------- CONTEXT TYPE ---------- */

interface TopTrendingContextType {
    services: PopularService[];
    loading: boolean;
    error: string | null;
    fetchTopTrending: (moduleId: string) => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const TopTrendingContext = createContext<TopTrendingContextType | undefined>(
    undefined
);

/* ---------- HOOK ---------- */

export const useTopTrending = () => {
    const context = useContext(TopTrendingContext);
    if (!context) {
        throw new Error(
            "useTopTrending must be used within TopTrendingProvider"
        );
    }
    return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
    children: ReactNode;
}

export const TopTrendingProvider = ({ children }: Props) => {
    const [services, setServices] = useState<PopularService[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTopTrending = async (moduleId: string) => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://api.fetchtrue.com/api/service/top-trending?moduleId=${moduleId}`
            );

            if (res.data?.success) {
                setServices(res.data.data);
            } else {
                setError("Failed to fetch most popular services");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <TopTrendingContext.Provider
            value={{ services, loading, error, fetchTopTrending }}
        >
            {children}
        </TopTrendingContext.Provider>
    );
};
