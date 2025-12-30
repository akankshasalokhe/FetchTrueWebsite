"use client";

import {
    CheckCircle,
    Sparkles,
    Eye,
    Smartphone,
    Zap,
    Palette,
} from "lucide-react";

 const benefits = [
        "Easy & Fast Loan Approval Process",
        "Verified Lender Partners (Banks / NBFCs)",
        "Expert Documentation Support",
        "Dedicated Loan Advisor",
        "Low Interest Rate Options",
        "Fully Digital Process",
        "Personalized EMI & Tenure Plans",
        "Transparent Fees — No Hidden Charges",
    ];

export default function Benefits() {
    return (
        <section className="relative w-full p-8 bg-gray-100">
                <div className="rounded-xl w-full  mt-5">
                    {/* Title */}
                    <div className="flex items-start md:justify-start lg:items-start">
                        <h2
                            className="text-[#D56839] px-6 py-2 -ml-6 lg:ml-10 text-[16px] md:text-[32px] font-semibold mb-6 inline-block"
                            
                        >
                            Benefits
                        </h2>
                    </div>

                    {/* Benefits List */}
                    <div className="flex flex-col mx-auto md:w-[1320px] md:h-[354px] md:grid md:grid-cols-2 bg-white rounded-xl md:p-12 p-2 gap-y-4 gap-x-2">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <img src="/image/checkmark.png" alt="check" className="w-5 h-5  md:w-10 md:h-10 flex-shrink-0" />
                                <p className="text-black md:text-[24px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
