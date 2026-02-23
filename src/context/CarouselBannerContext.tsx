"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface Banner {
  _id: string;
  page: string;
  selectionType: "service" | "subcategory" | "referralUrl";
  referralUrl?: string;
  file: string;

  module?: {
    _id: string;
    name: string;
    image: string;
    sortOrder?: number;
  };

  service?: string;

  subcategory?: {
    _id: string;
    name: string;
    image: string;
    category?: {
      _id: string;
      name: string;
    };
  };

  screenCategory?: string;
  isDeleted?: boolean;
}

interface BannerContextType {
  sliderBanners: Banner[];
  loading: boolean;
  error: string | null;
  getBannersByPage: (page: string) => Banner[];
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: React.ReactNode }) {
  const [sliderBanners, setSliderBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSliderBanners();
  }, []);

  const fetchSliderBanners = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://api.fetchtrue.com/api/banner");
      const data = await res.json();

      if (!res.ok) throw new Error("Failed to fetch banners");

      // Filter non-deleted banners
      const activeBanners = data.filter(
        (banner: Banner) => !banner.isDeleted
      );

      setSliderBanners(activeBanners);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getBannersByPage = (page: string) => {
    return sliderBanners.filter((banner) => banner.page === page);
  };

  return (
    <BannerContext.Provider
      value={{ sliderBanners, loading, error, getBannersByPage }}
    >
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within BannerProvider");
  }
  return context;
}