// "use client";

// import { createContext, useContext, useState } from "react";

// type SelectedPackage = {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
// };


// type CheckoutContextType = {
//   selectedPackage: SelectedPackage | null;
//   setSelectedPackage: (pkg: SelectedPackage) => void;
// };

// const CheckoutContext = createContext<CheckoutContextType | null>(null);

// export function CheckoutProvider({ children }: { children: React.ReactNode }) {
//   const [selectedPackage, setSelectedPackage] =
//     useState<SelectedPackage | null>(null);

//   return (
//     <CheckoutContext.Provider value={{ selectedPackage, setSelectedPackage }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// }

// export const useCheckout = () => {
//   const ctx = useContext(CheckoutContext);
//   if (!ctx) throw new Error("useCheckout must be inside CheckoutProvider");
//   return ctx;
// };




"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SelectedPackage = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
};

type CheckoutContextType = {
  selectedPackage: SelectedPackage | null;
  setSelectedPackage: (pkg: SelectedPackage | null) => void;
};

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
 
  const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPackage = localStorage.getItem('selectedPackage');
      if (savedPackage) {
        try {
          setTimeout(() => {
            setSelectedPackageState(JSON.parse(savedPackage));
          }, 0);
        } catch (error) {
          console.error('Error parsing saved package:', error);
          localStorage.removeItem('selectedPackage');
        }
      }
    }
  }, []);

  // Custom setter that also saves to localStorage
  const setSelectedPackage = (pkg: SelectedPackage | null) => {
    setSelectedPackageState(pkg);
    
    if (typeof window !== 'undefined') {
      if (pkg) {
        localStorage.setItem('selectedPackage', JSON.stringify(pkg));
      } else {
        localStorage.removeItem('selectedPackage');
      }
    }
  };

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