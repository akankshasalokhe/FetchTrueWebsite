"use client";

import { useState, useEffect } from "react";
import {
    User, Heart, Wallet, ShieldCheck, Ticket, Briefcase,
    Users, Info, Bell, HelpCircle, FileText, LogOut, Menu, X,
} from "lucide-react";
import ServiceCard from "./ServiceCards";
import { useParams, useSearchParams } from "next/navigation";
import { useSubscribedServices } from "@/src/context/OnDemandSubscriberContext";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useSubscribedCategoryServices } from "@/src/context/OnDemandSubscriberCategoryContext";
import type { SubscribedService } from "@/src/context/OnDemandSubscriberContext";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import ReviewSection from "./ReviewSection";

/*  TYPES  */
type SidebarItemProps = {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
};


type Module = {
    _id: string;
    name: string;
};

type StoreInfo = {
    storeName: string;
    storePhone: string;
    storeEmail: string;
    module: Module;
    zone: string;
    logo: string;
    cover: string;
    address: string;
    city: string;
    state: string;
    country: string;
    aboutUs: string;
    tags: string[];
    totalProjects: number;
    totalExperience: string;
};

type Provider = {
    _id: string;
    fullName: string;
    phoneNo: string;
    email: string;
    averageRating: number;
    totalReviews: number;
    isStoreOpen: boolean;
    category_list: string[];
    storeInfo: StoreInfo;
};


/*  MAIN LAYOUT  */
export default function ProviderDashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const searchParams = useSearchParams();

    const providerName = searchParams.get("providerName")

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50
          h-screen w-[260px] bg-white
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
            >
                {/* HEADER */}
                <div className="p-4 font-semibold text-lg bg-gray-200 flex items-center justify-between shrink-0">
                    <span>{providerName}</span>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                        <X size={20} />
                    </button>
                </div>

                {/* BODY */}
                <div className="flex-1 overflow-y-auto bg-gray-100">
                    <nav className="p-3 space-y-4 text-[13px] lg:text-[15px]">
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
                        <SidebarItem icon={<LogOut size={16} />} label="Delete Account" />
                    </nav>
                </div>
            </aside>

            {/* Main Layout Area */}
            <div className="flex-1 flex flex-col min-h-screen lg:ml-[260px]">

                <div className="flex items-center justify-between p-4 lg:p-7.5 bg-gray-200 sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                        <Menu size={22} />
                    </button>

                    <div className="w-[22px]" />
                </div>


                <main className="flex-1">
                    <HomePageContent />
                </main>


                <footer className="bg-white border-t">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

/*  HOME PAGE CONTENT  */
function HomePageContent() {
    const params = useParams();
    const searchParams = useSearchParams();
    const { subscribeCategoryservices, fetchSubscribedCategoryServices } = useSubscribedCategoryServices()


    const providerId = params.providerId as string;
    const { subscribedServices, fetchSubscribedServices } = useSubscribedServices();
    const [matchedProvider, setMatchedProvider] = useState<Provider | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [activeTab, setActiveTab] = useState("Service");
    const [filteredServices, setFilteredServices] = useState<SubscribedService[]>([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const providerName = searchParams.get("providerName")
    useEffect(() => {
        if (providerId)
            fetchSubscribedServices(providerId);
        fetchSubscribedCategoryServices(providerId)
    }, [providerId]);

    useEffect(() => {
        if (subscribedServices && subscribedServices.length > 0) {
            if (activeCategory === "all") {
                setFilteredServices(subscribedServices);
            } else {
                const filtered = subscribedServices.filter(
                    (service) => service.category?._id === activeCategory
                );
                setFilteredServices(filtered);
            }
        }
    }, [activeCategory, subscribedServices]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    "https://api.fetchtrue.com/api/provider/recommended?${moduleId}&lat=20.175618471885596&lng=72.73285952405311"
                );
                const providersData = response.data;
                console.log("providers data:", providersData)
                setData(providersData);

                const provider = providersData.find(
                    (p: Provider) => p._id === providerId
                );
                setMatchedProvider(provider);

            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const matchedata = matchedProvider?.storeInfo;

    const allCategories = [
        { _id: "all", name: "All" },
        ...(subscribeCategoryservices || [])
    ];

    if (error) return <p>{error}</p>

    // Render content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case "Service":
                return (
                    <div className="space-y-6">
                        {/* Category Filter */}
                        <div className="rounded-lg p-4">
                            <h3 className="font-medium mb-2">Category</h3>
                            <div className="flex gap-3 flex-wrap">
                                {allCategories.map((category) => (
                                    <button
                                        key={category._id}
                                        onClick={() => setActiveCategory(category._id)}
                                        className={`px-3 py-1 text-xs rounded-full border cursor-pointer transition-colors ${activeCategory === category._id
                                                ? "bg-blue-500 text-white border-blue-500"
                                                : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            <ServiceCard
                                providerId={providerId}
                                services={filteredServices}
                                earnUpto="Earn Upto 6%"
                            />
                        </div>

                        {/* Show message if no services in selected category */}
                        {filteredServices.length === 0 && activeCategory !== "all" && (
                            <div className="text-center py-8 text-gray-500">
                                No services available in this category
                            </div>
                        )}
                    </div>
                );

            case "About":
            return <AboutSection providerId={providerId} />;

            case "Gallery":
            return <GallerySection providerId={providerId} />;

            case "Reviews":
            return <ReviewSection providerId={providerId} />;

            default:
                return null;
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Banner */}
            <div className="w-full md:h-[150px] lg:h-[290px] bg-gray-300 overflow-hidden">
                <img
                    src={subscribedServices?.[0]?.bannerImages?.[0] || "/default-banner.jpg"}
                    alt="banner"
                    className="w-full h-full object-fit"
                />
            </div>

            {/* Tabs */}


            {/* <div className="bg-white shadow-sm w-full">
                <div className="flex overflow-x-auto scrollbar-hide">
                    {["Service", "About", "Portfolio", "Gallery", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            className={`
                    flex-1 md:flex-none
                    px-2 sm:px-3 md:px-5 lg:px-6 
                    py-3 lg:ml-30 md:ml-10 ml-2
                   text-[12px] lg:text-[20px] sm:text-sm md:text-base
                    font-medium 
                    whitespace-nowrap
                    transition-all
                    ${tab === "Service"
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                                }
                `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div> */}

             <div className="bg-white shadow-sm w-full sticky top-0 z-20">
                <div className="flex overflow-x-auto scrollbar-hide">
                    {["Service", "About", "Gallery", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                flex-1 md:flex-none
                                px-2 sm:px-3 md:px-5 lg:px-6 
                                py-3 lg:ml-30 md:ml-10 ml-2
                                text-[12px] lg:text-[20px] sm:text-sm md:text-base
                                font-medium cursor-pointer
                                whitespace-nowrap
                                transition-all
                                ${activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Provider Info */}
                <div className="p-4 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img
                            src={matchedata?.logo}
                            className="w-12 h-12 rounded-full object-cover"
                            alt="Provider"
                        />
                        <div>
                            <h2 className="font-semibold">{providerName}</h2>
                            <p className="text-sm text-gray-500">Best kitchen services provider</p>
                        </div>
                    </div>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                        Available
                    </span>
                </div>


                {renderTabContent()}

                {/* <div className="rounded-lg p-4">
                    <h3 className="font-medium mb-2">Category</h3>
                    <div className="flex gap-3 flex-wrap">
                        {allCategories.map((category) => (
                            <button
                                key={category._id}
                                onClick={() => setActiveCategory(category._id)}
                                className={`px-3 py-1 text-xs rounded-full border cursor-pointer transition-colors ${activeCategory === category._id
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Cards */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <ServiceCard
                        providerId={providerId}
                        services={filteredServices}
                    />
                </div> */}
            </div>
        </div>
    );
}

/*  REUSABLE  */
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