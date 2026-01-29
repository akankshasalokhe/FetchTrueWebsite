"use client";

import { createContext, useContext, useState } from "react";

type SelectedPackage = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
};


type CheckoutContextType = {
  selectedPackage: SelectedPackage | null;
  setSelectedPackage: (pkg: SelectedPackage) => void;
};

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [selectedPackage, setSelectedPackage] =
    useState<SelectedPackage | null>(null);

  return (
    <CheckoutContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be inside CheckoutProvider");
  return ctx;
};
