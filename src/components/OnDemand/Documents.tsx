"use client";

import React, { useState } from "react";

/* ================= TYPES ================= */
type DocumentSection = {
  title: string;
  items: string[];
};

/* ================= MOCK DATA ================= */
const REQUIRED: DocumentSection = {
  title: "We Required",
  items: [
    "Brand Name & Tagline",
    "About Business",
    "Target Audience",
    "Color & Style Preferences",
    "Reference Logos",
    "Old Logo (if any)",
    "Usage Needs (where logo will be used)",
  ],
};

const DELIVER: DocumentSection = {
  title: "We Deliver",
  items: [
    "Final Logo (PNG, JPG, SVG, PDF)",
    "Transparent Logo",
    "Black & White Version",
    "Color Variations",
    "Logo Usage Guide",
    "Social Media Logo Files",
    "Favicon / App Icon",
  ],
};

/* ================= COMPONENT ================= */

/* ================= TYPES ================= */
type DocumentItem = {
  _id: string;
  title: string;
};

type DocumentsProps = {
  weRequired: DocumentItem[];
  weDeliver: DocumentItem[];
};

/* ================= COMPONENT ================= */
export default function Documents({
  weRequired = [],
  weDeliver = [],
}: DocumentsProps) {
  const [activeTab, setActiveTab] = useState<"required" | "deliver">("required");

  return (
    <section className="bg-[#F7F7F7] py-2 -mt-5 md:py-18 px-4">
      {/* TITLE */}
      <div className="flex items-start md:justify-start lg:items-start mb-4">
        <h2
          className="text-[#D56839] md:-ml-8 lg:ml-10 px-6 md:px-12 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold"
        >
          Documents
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid md:w-[700px] lg:w-[1320px] mx-auto grid-cols-2 gap-25">
         <DocumentCard title="We Required" items={weRequired} />
        <DocumentCard title="We Deliver" items={weDeliver} />
      </div>

      {/* ================= MOBILE (TABS) ================= */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex mb-4 bg-[#E1ECF8] rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("required")}
            className={`flex-1 py-2 text-sm font-medium ${activeTab === "required"
                ? "bg-[#D56839] text-white"
                : "text-gray-600"
              }`}
          >
            We Required
          </button>
          <button
            onClick={() => setActiveTab("deliver")}
            className={`flex-1 py-2 text-sm font-medium ${activeTab === "deliver"
                ? "bg-[#D56839] text-white"
                : "text-gray-600"
              }`}
          >
            We Deliver
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "required" && (
          <DocumentCard title="We Required" items={weRequired} />
        )}
        {activeTab === "deliver" && (
          <DocumentCard title="We Deliver" items={weDeliver} />
        )}
      </div>
    </section>
  );
};

/* ================= CARD ================= */
function DocumentCard({
  title,
  items,
}: {
  title: string;
  items: DocumentItem[];
}) {
  if (!items.length) return null;
  return (
    <div className="bg-white rounded-xl mt-4 space-x-8 gap-8 shadow-md p-4 md:p-0">
      {/* Header */}
      <div className="bg-[#D56839] hidden md:block md:text-[20px] lg:text-[40px] text-white w-full text-center py-2 rounded-md font-semibold mb-4"
        style={{
          fontFamily: "'Abhaya Libre', serif",
          fontWeight: 800,
        }}>
        {title}
      </div>

      {/* List */}
      <ul className="space-y-3 md:p-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-8 text-[14px] md:text-[18px] lg:text-[24px] text-gray-700">
            <span className="text-green-500 mt-0.5">✔</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
// font-family: Abhaya Libre ExtraBold;
// font-weight: 800;

