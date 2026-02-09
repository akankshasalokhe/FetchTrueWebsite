"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
    useEffect,
} from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface StoreInfo {
    storeName: string;
    storePhone: string;
    storeEmail: string;
    module: {
        _id: string;
        name: string;
    };
    zone: string;
    logo: string;
    cover: string;
    aboutUs?: string;
    address: string;
    city: string;
    state: string;
    country: string;
    tags: string[];
    totalProjects: number;
    totalExperience: string;  // Changed from number to string based on your data
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
    providerId?: string;  
    averageRating: number;
}

/*  CONTEXT TYPE  */

interface TopRatedProviderContextType {
    providers: Provider[];
    loading: boolean;
    error: string | null;
    fetchTopRatedProviders: () => Promise<void>;
}

/*  CONTEXT  */

const TopRatedProviderContext =
    createContext<TopRatedProviderContextType | undefined>(undefined);

/*  PROVIDER  */

export const TopRatedProviders = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTopRatedProviders = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log("Fetching top rated providers...");

            const res = await axios.get(
                "https://api.fetchtrue.com/api/provider/top-rated"
            );


           
            if (Array.isArray(res.data)) {
                setProviders(res.data);
            } else if (res.data && Array.isArray(res.data.data)) {
                setProviders(res.data.data);
            } else {
                setProviders([]);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
            else{
                setError("Failed to load provider services");
            }
            console.error("Error fetching top rated providers:", err);

            setProviders([]);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchTopRatedProviders();
    }, []);

    return (
        <TopRatedProviderContext.Provider
            value={{ providers, loading, error, fetchTopRatedProviders }}
        >
            {children}
        </TopRatedProviderContext.Provider>
    );
};

/* ================= HOOK ================= */

export const useTopRatedProviders = () => {
    const context = useContext(TopRatedProviderContext);
    if (!context) {
        throw new Error(
            "useTopRatedProviders must be used inside TopRatedProvider"
        );
    }
    return context;
};