"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export interface PackageDescription {
  gp: string;
  sgp: string;
  pgp: string;
}

export interface Package {
  _id: string;
  price: number;
  discount: number;
  discountedPrice: number;
  deposit: number;
  grandtotal: number;
  monthlyEarnings: number;
  lockInPeriod: number;
  description: PackageDescription;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



interface PackageContextType {
  packages: Package[]; // Keep as array for consistency
  currentPackage: Package | null; // Add this for the single package
  loading: boolean;
  error: string | null;
  fetchPackages: () => Promise<void>;
  getPackageById: (id: string) => Package | undefined;
}

/* ================= CONTEXT ================= */

const PackageContext = createContext<PackageContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const PackageProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [currentPackage, setCurrentPackage] = useState<Package | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("/api/packages");
      
      console.log("API Response:", res.data);

      // Check if the response is a single object (not an array)
      if (res.data && typeof res.data === 'object' && !Array.isArray(res.data)) {
        // It's a single package object
        setPackages([res.data]); // Store as array with one item
        setCurrentPackage(res.data); // Also store as single package
        console.log("Single package loaded:", res.data);
      } 
      // Check if response is an array
      else if (Array.isArray(res.data)) {
        setPackages(res.data);
        setCurrentPackage(res.data[0] || null);
        console.log("Multiple packages loaded:", res.data.length);
      }
      // Check if response has a data property that's an array
      else if (res.data?.data && Array.isArray(res.data.data)) {
        setPackages(res.data.data);
        setCurrentPackage(res.data.data[0] || null);
        console.log("Wrapped packages loaded:", res.data.data.length);
      } 
      // Check if response has a data property that's a single object
      else if (res.data?.data && typeof res.data.data === 'object' && !Array.isArray(res.data.data)) {
        setPackages([res.data.data]);
        setCurrentPackage(res.data.data);
        console.log("Wrapped single package loaded");
      }
      else {
        console.error("Unexpected response format:", res.data);
        setError("Unexpected response format from server");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch packages");
      } else {
        setError("An unknown error occurred");
      }
      console.error("Fetch packages error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getPackageById = (id: string) => {
    return packages.find(pkg => pkg._id === id);
  };

  return (
    <PackageContext.Provider
      value={{
        packages,
        currentPackage,
        loading,
        error,
        fetchPackages,
        getPackageById,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

/* ================= HOOK ================= */

export const usePackages = () => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error("usePackages must be used within PackageProvider");
  }
  return context;
};