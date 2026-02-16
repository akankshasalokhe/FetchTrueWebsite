"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

/* ================= TYPES ================= */

export type ServiceCustomer = {
  _id: string;
  customerId: string;
  user: string;

  fullName: string;
  phone: string;
  email: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;

  otp: {
    verified: boolean;
  };

  createdAt: string;
};

/* ================= ADD CUSTOMER PAYLOAD ================= */

export type AddCustomerPayload = {
  fullName: string;
  phone: string;
  email: string;
  description?: string;
  address: string;
  city: string;
  state: string;
  country: string;
};

/* ================= CONTEXT TYPE ================= */

type ServiceCustomerContextType = {
  customers: ServiceCustomer[];
  loading: boolean;
  error: string | null;

  fetchCustomers: () => Promise<void>;
  addCustomer: (data: AddCustomerPayload) => Promise<boolean>;
};

/* ================= CONTEXT ================= */

const ServiceCustomerContext =
  createContext<ServiceCustomerContextType | null>(null);

/* ================= PROVIDER ================= */

export const ServiceCustomerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customers, setCustomers] = useState<ServiceCustomer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH ================= */

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://api.fetchtrue.com/api/service-customer"
      );

      if (res.data.success) {
        const allCustomers: ServiceCustomer[] = res.data.data;

        const storedUser = localStorage.getItem("user");
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

        if (!loggedInUser?._id) {
          setError("User not logged in");
          setCustomers([]);
          return;
        }

        const filtered = allCustomers.filter(
          (c) => c.user === loggedInUser._id
        );

        setCustomers(filtered);
      } else {
        setError("Failed to fetch customers");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD CUSTOMER ================= */

  const addCustomer = async (
    data: AddCustomerPayload
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      const storedUser = localStorage.getItem("user");
      const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

      if (!loggedInUser?._id) {
        setError("User not logged in");
        return false;
      }

      const payload = {
        ...data,
        user: loggedInUser._id, // ✅ attach userId
      };

      const res = await axios.post(
        "https://api.fetchtrue.com/api/service-customer",
        payload
      );

      if (res.data.success) {
        await fetchCustomers(); // ✅ refresh list
        return true;
      } else {
        setError(res.data.message || "Failed to add customer");
        return false;
      }
    } catch (err: any) {
      setError(err.message || "Add customer failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <ServiceCustomerContext.Provider
      value={{
        customers,
        loading,
        error,
        fetchCustomers,
        addCustomer,
      }}
    >
      {children}
    </ServiceCustomerContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useServiceCustomers = () => {
  const context = useContext(ServiceCustomerContext);

  if (!context) {
    throw new Error(
      "useServiceCustomers must be used within ServiceCustomerProvider"
    );
  }

  return context;
};
