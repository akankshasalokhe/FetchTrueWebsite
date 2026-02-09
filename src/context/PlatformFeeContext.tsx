"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */


export interface CommissionService {
    _id: string,
  assurityfee: number;
  platformFee: number;
}


/* ---------- CONTEXT TYPE ---------- */

interface CommissionContextType {
    services: CommissionService[] | [];
    loading: boolean;
    error: string | null;
    fetchCommission: () => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const CommissionContext = createContext<CommissionContextType | undefined>(
    undefined
);

/* ---------- HOOK ---------- */

export const useCommission = () => {
    const context = useContext(CommissionContext);
    if (!context) {
        throw new Error(
            "useCommission must be used within Commission Provider"
        );
    }
    return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
    children: ReactNode;
}

export const CommissionProvider = ({ children }: Props) => {
    const [services, setServices] = useState<CommissionService[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCommission = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://api.fetchtrue.com/api/commission`
            );

            if (res.data?.success) {
                setServices(res.data.data);
            } else {
                setError("Failed to fetch commission");
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
        <CommissionContext.Provider
            value={{ services, loading, error, fetchCommission }}
        >
            {children}
        </CommissionContext.Provider>
    );
};
