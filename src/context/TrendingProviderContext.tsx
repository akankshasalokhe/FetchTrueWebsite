"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface StoreInfo {
    storeName: string;
    storePhone: string;
    storeEmail: string;
    module: string;
    zone: string;
    aboutUs: string;
    logo: string;
    cover: string;
    address: string;
    city: string;
    state: string;
    country: string;
    tags: string[];
    totalProjects: number;
    totalExperience: number;
}

export interface Provider {
    _id: string;
    fullName: string;
    phoneNo: string;
    email: string;
    isStoreOpen: boolean;
    storeInfo: StoreInfo;
    totalReviews: number;
    category_list: string[];
    providerId: string;
    averageRating: number;
}

/* ================= CONTEXT TYPE ================= */

interface TrendingProviderContextType {
    providers: Provider[];
    loading: boolean;
    error: string | null;
    fetchTrendingProviders: (
        moduleId: string,
        lat: number,
        lng: number
    ) => Promise<void>;
}

/* ================= CONTEXT ================= */

const TrendingProviderContext =
    createContext<TrendingProviderContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const TrendingProvidersProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTrendingProviders = useCallback(
        async (moduleId: string, lat: number, lng: number) => {
            try {
                setLoading(true);
                setError(null);

                const res = await axios.get(
                    "https://api.fetchtrue.com/api/provider/trending",
                    {
                        params: { moduleId, lat, lng },
                    }
                );

                setProviders(res.data || []);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                }
                else {
                    setError("Failed to load providers");
                }

            } finally {
                setLoading(false);
            }
        },
        []
    );

    return (
        <TrendingProviderContext.Provider
            value={{ providers, loading, error, fetchTrendingProviders }}
        >
            {children}
        </TrendingProviderContext.Provider>
    );
};

/* ================= HOOK ================= */

export const useTrendingProviders = () => {
    const context = useContext(TrendingProviderContext);
    if (!context) {
        throw new Error(
            "useTrendingProviders must be used inside TrendingProviderProvider"
        );
    }
    return context;
};