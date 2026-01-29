// "use client";

// import React, { useState } from "react";

// /* ================= TYPES ================= */
// type DocumentItem = {
//   title: string;
//   _id: string;
// };

// type DocumentProps = {
//    weDeliver: DocumentItem[];
//    weRequired: DocumentItem[];  
// }

// /* ================= MOCK DATA ================= */
// const REQUIRED: DocumentSection = {
//   title: "We Required",
//   items: [
//     "Brand Name & Tagline",
//     "About Business",
//     "Target Audience",
//     "Color & Style Preferences",
//     "Reference Logos",
//     "Old Logo (if any)",
//     "Usage Needs (where logo will be used)",
//   ],
// };

// const DELIVER: DocumentSection = {
//   title: "We Deliver",
//   items: [
//     "Final Logo (PNG, JPG, SVG, PDF)",
//     "Transparent Logo",
//     "Black & White Version",
//     "Color Variations",
//     "Logo Usage Guide",
//     "Social Media Logo Files",
//     "Favicon / App Icon",
//   ],
// };

// /* ================= COMPONENT ================= */
// export default function Documents ({weRequired, weDeliver}: DocumentProps) {
//   const [activeTab, setActiveTab] = useState<"required" | "deliver">("required");

//   return (
//     <section className="bg-[#F7F7F7] py-2 -mt-5 md:py-18 px-4">
     
//       <h2 className="text-start md:text-center text-[#2164F4] text-[16px] md:text-[24px] lg:text-[36px] font-semibold mb-2">
//        Documents
//       </h2>

//       {/* ================= DESKTOP ================= */}
//       <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8">
//         <DocumentCard section={REQUIRED} />
//         <DocumentCard section={DELIVER} />
//       </div>

//       {/* ================= MOBILE (TABS) ================= */}
//       <div className="md:hidden max-w-md mx-auto">
//         {/* Tabs */}
//         <div className="flex mb-4 bg-[#E1ECF8] rounded-lg overflow-hidden">
//           <button
//             onClick={() => setActiveTab("required")}
//             className={`flex-1 py-2 text-sm font-medium ${
//               activeTab === "required"
//                 ? "bg-[#2164F4] text-white"
//                 : "text-gray-600"
//             }`}
//           >
//             We Required
//           </button>
//           <button
//             onClick={() => setActiveTab("deliver")}
//             className={`flex-1 py-2 text-sm font-medium ${
//               activeTab === "deliver"
//                 ? "bg-[#2164F4] text-white"
//                 : "text-gray-600"
//             }`}
//           >
//             We Deliver
//           </button>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "required" && <DocumentCard section={REQUIRED} />}
//         {activeTab === "deliver" && <DocumentCard section={DELIVER} />}
//       </div>
//     </section>
//   );
// };

// /* ================= CARD ================= */
// const DocumentCard = ({ section }: { section: DocumentSection }) => {
//   return (
//     <div className="bg-white border-t-4 border-blue-500 rounded-xl mt-4 shadow-md p-4 md:p-0">
//       {/* Header */}
//       <div className="bg-[#2164F4] hidden md:block md:text-[24px] text-white w-full text-center py-2 rounded-md font-semibold mb-4">
//         {section.title}
//       </div>

//       {/* List */}
//       <ul className="space-y-3 md:p-6">
//         {section.items.map((item, index) => (
//           <li key={index} className="flex items-start gap-2 text-[14px] md:text-[20px] text-gray-700">
//             <span className="text-green-500 mt-0.5">✔</span>
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };







"use client";

import React, { useState } from "react";

/* ================= TYPES ================= */
type DocumentItem = {
  _id: string;
  title: string;
};

type DocumentProps = {
  weDeliver: DocumentItem[];
  weRequired: DocumentItem[];
};

type DocumentSection = {
  title: string;
  items: string[];
};

/* ================= COMPONENT ================= */
export default function Documents({ weRequired, weDeliver }: DocumentProps) {
  const [activeTab, setActiveTab] = useState<"required" | "deliver">("required");

  // 🔹 API → UI SHAPE (NO CSS CHANGE)
  const REQUIRED: DocumentSection = {
    title: "We Required",
    items: weRequired.map((item) => item.title),
  };

  const DELIVER: DocumentSection = {
    title: "We Deliver",
    items: weDeliver.map((item) => item.title),
  };

  return (
    <section className="bg-[#F7F7F7] py-2 -mt-5 md:py-18 px-4">
      <h2 className="text-start md:text-center text-[#2164F4] text-[16px] md:text-[24px] lg:text-[36px] font-semibold mb-2">
        Documents
      </h2>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8">
        <DocumentCard section={REQUIRED} />
        <DocumentCard section={DELIVER} />
      </div>

      {/* ================= MOBILE (TABS) ================= */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex mb-4 bg-[#E1ECF8] rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("required")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "required"
                ? "bg-[#2164F4] text-white"
                : "text-gray-600"
            }`}
          >
            We Required
          </button>
          <button
            onClick={() => setActiveTab("deliver")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "deliver"
                ? "bg-[#2164F4] text-white"
                : "text-gray-600"
            }`}
          >
            We Deliver
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "required" && <DocumentCard section={REQUIRED} />}
        {activeTab === "deliver" && <DocumentCard section={DELIVER} />}
      </div>
    </section>
  );
}

/* ================= CARD ================= */
const DocumentCard = ({ section }: { section: DocumentSection }) => {
  return (
    <div className="bg-white border-t-4 border-blue-500 rounded-xl mt-4 shadow-md p-4 md:p-0">
      {/* Header */}
      <div className="bg-[#2164F4] hidden md:block md:text-[24px] text-white w-full text-center py-2 rounded-md font-semibold mb-4">
        {section.title}
      </div>

      {/* List */}
      <ul className="space-y-3 md:p-6">
        {section.items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-[14px] md:text-[20px] lg:text-[24px] text-gray-700"
          >
            <img src="/image/tickicon.png" alt="correcticon" className="w-[17px] h-[16px] flex items-center justify-center shrink-0 mt-0 md:mt-2 lg:mt-2"/>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
