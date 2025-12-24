"use client";

import React, { useState } from "react";

const FAQ_DATA = [
    {
        id: 1,
        question: "What include in Managed IT Services?",
        answer:
            "Managed IT Services include proactive monitoring, maintenance, security management, backups, and technical support to ensure smooth business operations.",
    },
    {
        id: 2,
        question: "Can I customize the service according to my business size?",
        answer:
            "Yes, our services are fully customizable based on your business size, requirements, and growth plans.",
    },
    {
        id: 3,
        question: "What if a major issue occurs during business hours?",
        answer:
            "Our support team provides priority assistance during business hours to resolve critical issues quickly.",
    },
    {
        id: 4,
        question: "Is my business data secure?",
        answer:
            "Yes, we follow strict security protocols including encryption, access controls, and regular audits to keep your data safe.",
    },
];


const FAQs = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-gray-100 py-4">
            {/* TITLE */}
            <div className="flex items-start ml-6 px-1 md:px-12 mb-12">
                <h2 className="more-info-title">
                    FAQs
                </h2>
            </div>

            <div className="md:w-[1249px] mx-auto px-4">

                {/* FAQ LIST */}
                <div className="space-y-4">
                    {FAQ_DATA.map((faq) => {
                        const isOpen = activeId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                                >
                                    <span className="text-[14px] md:text-[24px] font-medium text-gray-800">
                                        {faq.id}. {faq.question}
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

export default FAQs;