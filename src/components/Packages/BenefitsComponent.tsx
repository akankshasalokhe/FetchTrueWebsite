// "use client";

// import { ChevronLeft, Info, Clock } from "lucide-react";
// import { FaWallet } from "react-icons/fa";

// type Props = {
//     activeTab: "GP" | "SGP" | "PGP";
//     description: {
//         gp: string;
//         sgp: string;
//         pgp: string;
//     };
// };

// export default function Benefits({ activeTab, description }: Props) {

    
//     const getContent = () => {
//         switch (activeTab) {
//             case "GP":  return description.gp;
//             case "SGP": return description.sgp;
//             case "PGP": return description.pgp;
//             default:    return description.gp;
//         }
//     };

//     return (
//         <div className="min-h-screen bg-white p-4">

//             {/* Header */}
//             <div className="flex items-center gap-3 mb-6 lg:ml-10">
//                 <button onClick={() => window.history.back()}>
//                     <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
//                 </button>
//                 <h1 className="text-[20px] font-semibold text-blue-600">
//                     Benefits — {activeTab}
//                 </h1>
//             </div>

//             {/* Top Icons */}
//             <div className="flex justify-between lg:w-[1200px] mx-auto text-center mb-6">
//                 <div className="flex flex-col items-center gap-2">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                         <FaWallet className="text-blue-600 w-5 h-5" />
//                     </div>
//                     <p className="text-sm text-gray-600">Up to 15% <br /> Revenue Share</p>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                         <Info className="text-blue-600 w-5 h-5" />
//                     </div>
//                     <p className="text-sm text-gray-600">Standard <br /> Template</p>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                         <Clock className="text-blue-600 w-5 h-5" />
//                     </div>
//                     <p className="text-sm text-gray-600">Support <br /> Within 3-6 hrs</p>
//                 </div>
//             </div>

//             {/* ✅ Dynamic HTML content from API */}
//             <div className="border rounded-xl p-5 lg:w-[1200px] mx-auto">
//                 <div
//                     className="prose prose-sm max-w-none space-y-2 text-[15px] text-gray-700
//                         [&_strong]:font-semibold [&_strong]:text-gray-900
//                         [&_p]:mb-2"
//                     dangerouslySetInnerHTML={{ __html: getContent() }}
//                 />
//             </div>
//         </div>
//     );
// }




"use client";

import { ChevronLeft, Info, Clock } from "lucide-react";
import { FaWallet } from "react-icons/fa";

type Props = {
    activeTab: "GP" | "SGP" | "PGP";
    description: {
        gp: string;
        sgp: string;
        pgp: string;
    };
};

export default function Benefits({ activeTab, description }: Props) {

    const getContent = () => {
        switch (activeTab) {
            case "GP":  return description.gp;
            case "SGP": return description.sgp;
            case "PGP": return description.pgp;
            default:    return description.gp;
        }
    };

    return (
        <div className="min-h-screen bg-white p-4">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 max-w-[1200px] mx-auto">
                <button onClick={() => window.history.back()}>
                    <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
                </button>
                <h1 className="text-[20px] font-semibold text-blue-600">
                    Benefits — {activeTab}
                </h1>
            </div>

            {/* Top Icons */}
            <div className="flex justify-between max-w-[1200px] mx-auto text-center mb-6 px-4">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <FaWallet className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">Up to 15% <br /> Revenue Share</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Info className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">Standard <br /> Template</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Clock className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-600">Support <br /> Within 3-6 hrs</p>
                </div>
            </div>

            {/* Dynamic HTML content */}
            <div className="border rounded-xl p-5 max-w-[1200px] mx-auto">  {/* ← max-w instead of w */}
                <div
                    className="prose prose-sm max-w-none space-y-2 text-[15px] text-gray-700
                        [&_strong]:font-semibold [&_strong]:text-gray-900
                        [&_p]:mb-2"
                    dangerouslySetInnerHTML={{ __html: getContent() }}
                />
            </div>
        </div>
    );
}