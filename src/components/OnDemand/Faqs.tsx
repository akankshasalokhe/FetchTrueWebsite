"use client";

import { useState } from "react";

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

type FAQprops =  {
    faq: {
    question: string,
    answer: string,
    _id: string
    }[];
}

export default function FAQs ({faq} : FAQprops) {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-gray-100 py-4">
            {/* TITLE */}
            <div className="flex items-start md:justify-start lg:items-start mb-4">
                <h2
                    className="text-[#D56839] lg:ml-18 px-6 md:px-12 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold"
                >
                    FAQs
                </h2>
            </div>

            <div className="lg:w-[1300px] md:w-[700px] lg:max-w-none mx-auto rounded-xl px-2 py-2 md:px-4 md:py-4 lg:px-12 lg:py-12">

                {/* FAQ LIST */}
                <div className="space-y-4">
                    {faq.map((faq,index) => {
                        const isOpen = activeId === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                                >
                                    <span className="text-[14px] md:text-[18px] lg:text-[24px] font-medium text-gray-800">
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
                                    <p className="text-[12px] md:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed">
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

