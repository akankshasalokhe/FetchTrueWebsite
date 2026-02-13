"use client";

import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

/* ================= TYPES ================= */

interface OTP {
  verified: boolean;
}

interface HomeAddress {
  houseNumber: string;
  landmark: string;
  state: string;
  city: string;
  pinCode: string;
  country: string;
  fullAddress: string;
}

interface User {
  _id: string;
  userId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;

  gender?: string;
  bloodGroup?: string;
  dateOfBirth?: string;
  education?: string;
  profession?: string;
  emergencyContact?: string;
  maritalStatus?: string;
  homeAddress?: HomeAddress;
  otp?: OTP;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: (userId: string) => Promise<void>;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ===== Restore user from localStorage ===== */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ===== Persist user ===== */
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  /* ================= FETCH USER ================= */

  const fetchUser = async (user_id: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://api.fetchtrue.com/api/users/${user_id}`
      );

      const data = res.data;

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch user");
      }

      setUser(data.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLEAR USER ================= */

  const clearUser = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{ user, loading, error, fetchUser, clearUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
};
