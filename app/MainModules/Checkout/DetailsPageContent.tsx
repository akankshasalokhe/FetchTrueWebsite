// 'use client'

// import CompleteStep from "@/src/components/checkout/CompleteStep";
// import DetailsStep from "@/src/components/checkout/DetailsStep";
// import PaymentStep from "@/src/components/checkout/PaymentStep";
// import Stepper from "@/src/components/checkout/Stepper";
// import { ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export type PaymentData = {
//   listingPrice: number;
//   serviceDiscount: number;
//   couponDiscount: number;
//   gst: number;
//   platformFee: number;
//   assuranceFee: number;
//   grandTotal: number;
// };

// export type CheckoutData = {
//   selectedUser: string;
//   paymentData: PaymentData;
// };

// export default function DetailsPageContent() {
//   const [step, setStep] = useState(1);
//   const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

//   return (
//     <>
//       {/* DESKTOP NAVBAR */}
//       <section className="relative w-full">
//         <div className="hidden lg:block w-screen">
//           <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
//             <div className="flex items-center gap-4 ml-10">
//              <button onClick={() => window.history.back()}>
//                 <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
//               </button>
//               <h1 className="text-2xl font-semibold">Details</h1>
//             </div>
//             <div className="flex items-center gap-4 mr-10 bg-[#BEBEBE] rounded-3xl px-4 py-2 text-white">
//               Package Active
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MOBILE NAVBAR */}
//       <section>
//         <div className="lg:hidden w-full -mt-6 bg-[#E2E9F1] flex flex-col px-4 py-8 gap-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 p-8 min-w-0">
//               <button onClick={() => window.history.back()}>
//                 <ChevronLeft className="w-[28px] h-[28px] bg-white rounded-full p-1" />
//               </button>
//               <h1 className="text-[16px] font-semibold truncate">Details</h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Stepper currentStep={step} />

//       {step === 1 && (
//         <DetailsStep
//           data={checkoutData}
//           onNext={(data: CheckoutData) => {
//             setCheckoutData(data);
//             setStep(2);
//           }}
//         />
//       )}

//       {step === 2 && checkoutData && (
//         <PaymentStep
//           data={checkoutData}
//           onNext={() => setStep(3)}
//           onBack={() => setStep(1)}
//         />
//       )}

//       {step === 3 && <CompleteStep />}
//     </>
//   );
// }








'use client'

import CompleteStep from "@/src/components/checkout/CompleteStep";
import DetailsStep from "@/src/components/checkout/DetailsStep";
import PaymentStep from "@/src/components/checkout/PaymentStep";
import Stepper from "@/src/components/checkout/Stepper";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export type PaymentData = {
    listingPrice: number;
    serviceDiscount: number;
    couponDiscount: number;
    gst: number;
    platformFee: number;
    assuranceFee: number;
    grandTotal: number;
};

export type CheckoutData = {
    selectedUser: string;
    serviceCustomer: string | null;
    paymentData: PaymentData;
};

// ✅ Add booking data type
export type BookingData = {
    bookingId: string;
    createdAt: string;
};

export default function DetailsPageContent() {
    const [step, setStep] = useState(1);
    const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
    const [bookingData, setBookingData] = useState<BookingData | null>(null); 
     const searchParams = useSearchParams();
    const serviceId = searchParams.get("id") ?? "";
    const packageId = searchParams.get("packageId") ?? "";


    return (
        <>
            {/* DESKTOP NAVBAR */}
            <section className="relative w-full">
                <div className="hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-10">
                            <button onClick={() => window.history.back()}>
                                <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
                            </button>
                            <h1 className="text-2xl font-semibold">Details</h1>
                        </div>
                        <div className="flex items-center gap-4 mr-10 bg-[#BEBEBE] rounded-3xl px-4 py-2 text-white">
                            Package Active
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE NAVBAR */}
            <section>
                <div className="lg:hidden w-full -mt-6 bg-[#E2E9F1] flex flex-col px-4 py-8 gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <button onClick={() => window.history.back()}>
                                <ChevronLeft className="w-[28px] h-[28px] bg-white rounded-full p-1" />
                            </button>
                            <h1 className="text-[16px] font-semibold truncate">Details</h1>
                        </div>
                    </div>
                </div>
            </section>

            <Stepper currentStep={step} />

            {step === 1 && (
                <DetailsStep
                 serviceId={serviceId}   
                    packageId={packageId}
                    data={checkoutData}
                    onNext={(data: CheckoutData) => {
                        setCheckoutData(data);
                        setStep(2);
                    }}
                />
            )}

            {step === 2 && checkoutData && (
                <PaymentStep
                    data={checkoutData}
                    onNext={(data: BookingData) => {  // ← now accepts booking data
                        setBookingData(data);
                        setStep(3);
                    }}
                    onBack={() => setStep(1)}
                />
            )}

            {/* ✅ Pass bookingData to CompleteStep */}
            {step === 3 && (
                <CompleteStep
                    bookingId={bookingData?.bookingId}
                    createdAt={bookingData?.createdAt}
                />
            )}
        </>
    );
}
