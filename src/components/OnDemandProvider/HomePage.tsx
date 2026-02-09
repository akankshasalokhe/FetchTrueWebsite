"use client";

import { useState } from "react";
import {
    User,
    Heart,
    Wallet,
    ShieldCheck,
    Ticket,
    Briefcase,
    Users,
    Info,
    Bell,
    HelpCircle,
    FileText,
    LogOut,
    Menu,
    X,
} from "lucide-react";

/* ================= TYPES ================= */

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
};

type TagProps = {
    label: string;
    active?: boolean;
};

/* ================= COMPONENT ================= */

export default function ProviderDashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100 relative overflow-hidden">
            {/* ===== OVERLAY (MOBILE/TABLET) ===== */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ================= LEFT SIDEBAR ================= */}
            <aside
                className={`
          fixed z-50 top-0 left-0 h-screen
          w-[260px] bg-white border-r
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
            >
                {/* ===== HEADER ===== */}
                <div className="p-4 font-semibold text-lg border-b flex items-center justify-between shrink-0">
                    <span>G-Kitchen Coster</span>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* ===== BODY (SCROLLABLE) ===== */}
                <div className="flex-1 overflow-y-auto">
                    <nav className="p-3 space-y-1 text-sm">
                        <SidebarItem icon={<User size={16} />} label="Profile" />
                        <SidebarItem icon={<Heart size={16} />} label="Favorite" />
                        <SidebarItem icon={<Wallet size={16} />} label="Wallet" />
                        <SidebarItem icon={<ShieldCheck size={16} />} label="5X Guarantee" />
                        <SidebarItem icon={<Ticket size={16} />} label="Coupon" />

                        <div className="mt-3 text-xs text-gray-400 uppercase">Provider</div>
                        <SidebarItem active icon={<Briefcase size={16} />} label="Service" />
                        <SidebarItem icon={<Users size={16} />} label="Customer" />

                        <div className="mt-3 text-xs text-gray-400 uppercase">App Info</div>
                        <SidebarItem icon={<Info size={16} />} label="About Us" />
                        <SidebarItem icon={<Bell size={16} />} label="Notification" />
                        <SidebarItem icon={<HelpCircle size={16} />} label="Help & Support" />
                        <SidebarItem icon={<FileText size={16} />} label="Privacy & Policy" />
                        <SidebarItem icon={<FileText size={16} />} label="Terms & Conditions" />
                        <SidebarItem icon={<FileText size={16} />} label="Refund Policy" />
                    </nav>
                </div>

                {/* ===== FOOTER ===== */}
                <div className="border-t p-3 shrink-0 sticky bottom-0 bg-white">
                    <SidebarItem icon={<LogOut size={16} />} label="Delete Account" />
                </div>

            </aside>

            {/*  RIGHT CONTENT  */}
            <main
                className={`
          flex-1 w-full transition-all duration-300
          lg:ml-[260px]
          ${sidebarOpen ? "ml-[260px]" : "ml-0"}
        `}
            >
                {/* ===== TOP BAR ===== */}
                <div className="flex items-center justify-between p-4 bg-white border-b sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                        <Menu size={22} />
                    </button>
                    <span className="font-semibold">G-Kitchen Coster</span>
                    <div className="w-[22px]" />
                </div>

                {/* ===== BANNER ===== */}
                <div className="w-full h-[260px] bg-gray-300">
                    <img
                        src="https://images.unsplash.com/featured/?kitchen"
                        alt="banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* ===== TABS ===== */}
                <div className="bg-white px-6">
                    <div className="flex gap-8 border-b overflow-x-auto">
                        {["Service", "About", "Portfolio", "Gallery", "Reviews"].map((tab) => (
                            <button
                                key={tab}
                                className={`py-3 text-sm font-medium whitespace-nowrap ${tab === "Service"
                                        ? "border-b-2 border-blue-500 text-blue-600"
                                        : "text-gray-500"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-6 bg-gray-100 min-h-screen">
                    {/* Provider Info */}
                    <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex gap-3 items-center">
                            <img
                                src="https://images.unsplash.com/featured/?chef"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="font-semibold">G-Kitchen Costar</h2>
                                <p className="text-sm text-gray-500">
                                    we provide the best kitchen service in the kitchen sector
                                </p>
                            </div>
                        </div>
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                            Available
                        </span>
                    </div>

                    {/* Category */}
                    <div className="mt-4 bg-white rounded-lg p-4">
                        <h3 className="font-medium mb-2">Category</h3>
                        <div className="flex gap-3 flex-wrap">
                            <Tag active label="All" />
                            <Tag label="Cooking" />
                            <Tag label="Kitchen Cleaning" />
                            <Tag label="Food Delivery" />
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-[220px] bg-white rounded-lg flex items-center justify-center text-gray-400"
                            >
                                Service Card Placeholder
                            </div>
                        ))}
                    </div>

                    {/* ===== PAGE FOOTER ===== */}
                    <div className="mt-10 text-center text-sm text-gray-400">
                        © 2026 G-Kitchen Coster. All rights reserved.
                    </div>
                </div>
            </main>
        </div>
    );
}

/* ================= REUSABLE COMPONENTS ================= */

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition ${active
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
}

function Tag({ label, active = false }: TagProps) {
    return (
        <span
            className={`px-3 py-1 text-xs rounded-full border cursor-pointer transition ${active
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                }`}
        >
            {label}
        </span>
    );
}
