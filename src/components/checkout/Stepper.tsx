// import { CheckCircle } from "lucide-react";

// type StepperProps = {
//   currentStep: number;
// };

// export default function Stepper({ currentStep }: StepperProps) {
//   const steps = [
//     { id: 1, label: "Details", icon: "/image/checkoutdetailsicon.png" },
//     { id: 2, label: "Payment", icon: "/image/checkoutpaymenticon.png" },
//     { id: 3, label: "Complete", icon: "/image/checkoutcompleteicon.png" }
//   ];

//   return (
//     <div className="flex justify-center mb-10 p-10">
//       <div className="flex items-center gap-16">
//         {steps.map((step, index) => {
//           const isActive = step.id === currentStep;
//           const isCompleted = step.id < currentStep;

//           return (
//             <div key={step.id} className="flex items-center gap-16">
//               <div className="flex flex-col items-center gap-2">
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center
//                     ${
//                       isActive || isCompleted
//                         ? "bg-blue-600"
//                         : "border border-gray-300"
//                     }
//                   `}
//                 >
//                   {step.icon ? (
//                     <img src={step.icon} className="w-[28px] p-1" />
//                   ) : (
//                     <CheckCircle className="text-white" size={18} />
//                   )}
//                 </div>

//                 <p
//                   className={`text-sm ${
//                     isActive || isCompleted
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {step.label}
//                 </p>
//               </div>

//               {index !== steps.length - 1 && (
//                 <div
//                   className={`w-24 h-[1px] ${
//                     isCompleted ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }





import { CheckCircle } from "lucide-react";

type StepperProps = {
  currentStep: number;
};

export default function Stepper({ currentStep }: StepperProps) {
  const steps = [
    { id: 1, label: "Details", icon: "/image/checkoutdetailsicon.png" },
    { id: 2, label: "Payment", icon: "/image/checkoutpaymenticon.png" },
    { id: 3, label: "Complete", icon: "/image/checkoutcompleteicon.png" },
  ];

  return (
    <div className="flex justify-center mt-4 mb-6 md:mb-8 lg:mb-10 px-4 md:px-8 lg:p-10">
      <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id} className="flex items-center gap-6 md:gap-10 lg:gap-16">
              {/* STEP */}
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <div
                  className={`
                    flex items-center justify-center rounded-full
                    w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10
                    ${
                      isActive || isCompleted
                        ? "bg-blue-600"
                        : "border border-gray-300"
                    }
                  `}
                >
                  {step.icon ? (
                    <img
                      src={step.icon}
                      className="w-4 md:w-5 lg:w-[28px] p-0.5"
                    />
                  ) : (
                    <CheckCircle className="text-white w-4 h-4" />
                  )}
                </div>

                <p
                  className={`
                    text-[11px] md:text-[12px] lg:text-sm
                    ${
                      isActive || isCompleted
                        ? "text-blue-600"
                        : "text-gray-400"
                    }
                  `}
                >
                  {step.label}
                </p>
              </div>

              {/* CONNECTOR */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                    h-[1px]
                    w-10 md:w-16 lg:w-24
                    ${
                      isCompleted ? "bg-blue-600" : "bg-gray-300"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
