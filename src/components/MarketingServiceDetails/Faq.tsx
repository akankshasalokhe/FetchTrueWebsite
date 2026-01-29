"use client";

import  { useState } from "react";


type faqProps = {
    faq: {
        _id: string;
        question: string;
        answer: string;
    }[];
}

export default function FAQs ({ faq }:  faqProps ) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-gray-100 p-4">
            {/* TITLE */}
            <div className="flex items-start lg:items-center lg:justify-center ml-4 mb-4">
                <h2 className="text-[#2164F4] font-semibold text-[16px] lg:text-[36px]">
                    FAQs
                </h2>
            </div>

            <div className="lg:w-[1300px] md:max-w-[700px] lg:max-w-none mx-auto border-t-4 border-blue-500 rounded-xl px-2 py-2 md:px-4 md:py-4 lg:px-12 lg:py-12">

                {/* FAQ LIST */}
                <div className="space-y-4">
                    {faq.map((faq) => {
                        const isOpen = activeId === faq._id;

                        return (
                            <div
                                key={faq._id}
                                className="bg-white rounded-lg border-l-4 border-blue-500 shadow-sm overflow-hidden"
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFAQ(faq._id)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                                >
                                    <span className="text-[14px] md:text-[24px] font-medium text-gray-800">
                                         {faq.question}
                                    </span>

                                    {/* ARROW */}
                                    <span
                                        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`px-5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-[12px] md:text-[20px] text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

