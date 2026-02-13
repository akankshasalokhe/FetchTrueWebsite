import axios from "axios";
import { useContext, createContext, useState, ReactNode } from "react";


/*  UTILS  */

function normalizeToArray<T>(data: T[] | T | null | undefined): T[] {
  if (Array.isArray(data)) return data;
  if (data) return [data];
  return [];
}

type SubscribedService = {
    _id: string;
    name: string
}


interface SubscribedServicesContextType {
  subscribeCategoryservices: SubscribedService[];
  loading: boolean;
  error: string | null;
  fetchSubscribedCategoryServices: (providerId: string) => Promise<void>;
}

const SubscribedCategoryServicesContext = createContext<SubscribedServicesContextType | undefined>(undefined);

export const useSubscribedCategoryServices = () => {
  const context = useContext(SubscribedCategoryServicesContext);
  if (!context) {
    throw new Error("useSubscribedCategoryServices must be used within SubscribedCategoryServicesProvider");
  }
  return context;
};

/*  PROVIDER  */

interface Props {
  children: ReactNode;
}

export const SubscribedCategoryServicesProvider = ({ children }: Props) => {
  const [subscribeCategoryservices, SetsubscribeCategoryservices] = useState<SubscribedService[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscribedCategoryServices = async (providerId: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/provider/categories?providerId=${providerId}`
      );

      if (res.data?.success) {
        const rawData = res.data?.data;

       
        const safeData = normalizeToArray<SubscribedService>(rawData);

        SetsubscribeCategoryservices(safeData);
      } else {
        SetsubscribeCategoryservices([]);
        setError("API returned unsuccessful response");
      }

    } catch (err: unknown) {
      SetsubscribeCategoryservices([]); 

      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong while fetching services");

    } finally {
      setLoading(false);
    }
  };

  return (
    <SubscribedCategoryServicesContext.Provider
      value={{ subscribeCategoryservices, loading, error, fetchSubscribedCategoryServices }}
    >
      {children}
    </SubscribedCategoryServicesContext.Provider>
  );
};
