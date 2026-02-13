"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

/* ================= TYPES ================= */

interface ForgotPasswordPayload {
  email?: string;
  mobileNumber?: string;
  newPassword: string;
}

interface AuthContextType {
  forgotPassword: (data: ForgotPasswordPayload) => Promise<string>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

/* ================= CONTEXT ================= */

const ResetPassContext = createContext<AuthContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const ResetPassProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const forgotPassword = async (
    data: ForgotPasswordPayload
  ): Promise<string> => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(
        "https://api.fetchtrue.com/api/auth/forgot-password",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = res.data;

      if (!result.success) {
        throw new Error(result.message || "Failed to reset password");
      }

      return result.message || "Password reset successful";
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message || err.message || "Request failed";
        setError(message);
        throw new Error(message);
      }

      if (err instanceof Error) {
        setError(err.message);
        throw err;
      }

      const genericError = new Error("Something went wrong");
      setError(genericError.message);
      throw genericError;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <ResetPassContext.Provider
      value={{ forgotPassword, loading, error, clearError }}
    >
      {children}
    </ResetPassContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useResetPass = () => {
  const context = useContext(ResetPassContext);

  if (!context) {
    throw new Error("useResetPass must be used within ResetPassProvider");
  }

  return context;
};
