

// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// type SelectedPackage = {
//   _id: string;
//   name: string;
//   price: number;
//   discount: number;
//   discountedPrice: number;
// };

// type CheckoutContextType = {
//   selectedPackage: SelectedPackage | null;
//   setSelectedPackage: (pkg: SelectedPackage | null) => void;
// };

// const CheckoutContext = createContext<CheckoutContextType | null>(null);

// export function CheckoutProvider({ children }: { children: React.ReactNode }) {
 
//   const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);


//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedPackage = localStorage.getItem('selectedPackage');
//       if (savedPackage) {
//         try {
//           setTimeout(() => {
//             setSelectedPackageState(JSON.parse(savedPackage));
//           }, 0);
//         } catch (error) {
//           console.error('Error parsing saved package:', error);
//           localStorage.removeItem('selectedPackage');
//         }
//       }
//     }
//   }, []);

//   // Custom setter that also saves to localStorage
//   const setSelectedPackage = (pkg: SelectedPackage | null) => {
//     setSelectedPackageState(pkg);
    
//     if (typeof window !== 'undefined') {
//       if (pkg) {
//         localStorage.setItem('selectedPackage', JSON.stringify(pkg));
//       } else {
//         localStorage.removeItem('selectedPackage');
//       }
//     }
//   };

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
import { useParams } from "next/navigation";

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
  const params = useParams();
  const serviceId = params.id as string; // Get current service ID
  
  const [selectedPackage, setSelectedPackageState] = useState<SelectedPackage | null>(null);

  // Load from localStorage only for current service
  useEffect(() => {
    if (typeof window !== 'undefined' && serviceId) {
      const storageKey = `selectedPackage_${serviceId}`;
      const savedPackage = localStorage.getItem(storageKey);
      
      if (savedPackage) {
        try {
          setSelectedPackageState(JSON.parse(savedPackage));
        } catch (error) {
          console.error('Error parsing saved package:', error);
          localStorage.removeItem(storageKey);
        }
      } else {
        // No saved package for this service, ensure it's null
        setSelectedPackageState(null);
      }
    }
  }, [serviceId]); // Re-run when serviceId changes

  // Custom setter that saves to localStorage with service-specific key
  const setSelectedPackage = (pkg: SelectedPackage | null) => {
    setSelectedPackageState(pkg);
    
    if (typeof window !== 'undefined' && serviceId) {
      const storageKey = `selectedPackage_${serviceId}`;
      if (pkg) {
        localStorage.setItem(storageKey, JSON.stringify(pkg));
      } else {
        localStorage.removeItem(storageKey);
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