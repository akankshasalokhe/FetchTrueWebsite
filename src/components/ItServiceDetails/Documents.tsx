"use client";

import { useState } from "react";

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

  if (!weRequired.length && !weDeliver.length) return null;

  return (
    <section className="bg-[#F7F7F7] py-2 -mt-5 md:py-18 px-4">
      {/* TITLE */}
      <div className="flex items-start md:justify-center mb-4">
        <h2
          className="text-white bg-black px-6 md:px-12 py-2 text-[12px] md:text-[32px] font-semibold"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
          Documents
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8">
        <DocumentCard title="We Required" items={weRequired} />
        <DocumentCard title="We Deliver" items={weDeliver} />
      </div>

      {/* ================= MOBILE (TABS) ================= */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex mb-4 bg-[#E1ECF8] rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("required")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "required"
                ? "bg-[#A7C2E3] text-white"
                : "text-gray-600"
            }`}
          >
            We Required
          </button>
          <button
            onClick={() => setActiveTab("deliver")}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "deliver"
                ? "bg-[#A7C2E3] text-white"
                : "text-gray-600"
            }`}
          >
            We Deliver
          </button>
        </div>

        {activeTab === "required" && (
          <DocumentCard title="We Required" items={weRequired} />
        )}
        {activeTab === "deliver" && (
          <DocumentCard title="We Deliver" items={weDeliver} />
        )}
      </div>
    </section>
  );
}

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
    <div className="bg-white rounded-xl mt-4 shadow-md p-4 md:p-0">
      {/* Header */}
      <div className="bg-[#A7C2E3] hidden md:block md:text-[24px] text-white w-full text-center py-2 rounded-md font-semibold mb-4">
        {title}
      </div>

      {/* List */}
      <ul className="space-y-3 md:p-6">
        {items.map((item) => (
          <li
            key={item._id}
            className="flex items-start gap-2 text-[14px] md:text-[20px] text-gray-700"
          >
            <span className="text-green-500 mt-0.5">✔</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
