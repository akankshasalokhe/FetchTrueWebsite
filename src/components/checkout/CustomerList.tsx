import { useAuth } from "@/src/context/AuthContext";
import { useServiceCustomers } from "@/src/context/ServiceCustomerContext";
import { ChevronLeft, Phone, Mail, MapPin, Copy } from "lucide-react";
import { useState, useMemo } from "react";

type Props = {
    onClose: () => void;
};

export default function CustomerList({ onClose }: Props) {
    const { user } = useAuth();
    const { customers } = useServiceCustomers();
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (id: string, text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1000);
    };

    // Function to handle email click
    const handleEmailClick = (e: React.MouseEvent, email: string) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    // Function to handle phone click
    const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
        e.preventDefault();
        window.location.href = `tel:${phone}`;
    };

    // Filter customers based on search query (only by fullName)
    const filteredCustomers = useMemo(() => {
        if (!customers) return [];
        
        if (!searchQuery.trim()) {
            return customers; // Return all customers if search is empty
        }

        const query = searchQuery.toLowerCase().trim();
        
        return customers.filter((customer) => {
            // Search only in fullName field
            return customer.fullName?.toLowerCase().includes(query);
        });
    }, [customers, searchQuery]);

    return (
        <section className="h-full bg-[#E2E9F1] flex flex-col">
            {/* HEADER */}
            <div className="px-4 py-6 bg-[#E2E9F1]">
                <div className="flex items-center gap-3">
                    <button onClick={onClose}>
                        <ChevronLeft className="w-7 h-7 bg-white rounded-full p-1" />
                    </button>
                    <h1 className="text-[16px] font-semibold">Customers List</h1>
                    <span className="ml-auto text-sm">
                        Customers - {filteredCustomers.length}
                    </span>
                </div>

                {/* SEARCH */}
                <div className="relative mt-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full bg-white border px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <img
                        src="/image/itsearch.png"
                        alt="search"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px]"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Search results count */}
                {searchQuery && (
                    <div className="mt-2 text-xs text-gray-500">
                        Found {filteredCustomers.length} customer{filteredCustomers.length !== 1 ? 's' : ''} matching "{searchQuery}"
                    </div>
                )}
            </div>

            {/* LIST */}
            <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4 scrollbar-hide">
                {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer) => (
                        <div
                            key={customer._id}
                            className="bg-white rounded-xl p-4 shadow-sm"
                        >
                            {/* TOP ROW */}
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <img
                                        src="/image/reviewcontact.jpg"
                                        alt={customer.fullName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="text-sm font-semibold">{customer.fullName}</h2>
                                        <p className="text-xs text-gray-500">{customer.customerId}</p>
                                        <p className="text-xs text-gray-400">
                                            {customer.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {/* Phone button with onClick handler */}
                                    <button
                                        onClick={(e) => handlePhoneClick(e, customer.phone)}
                                        className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-white" />
                                    </button>

                                    {/* Email button with onClick handler */}
                                    <button
                                        onClick={(e) => handleEmailClick(e, customer.email)}
                                        className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <Mail className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div className="mt-3 space-y-2 text-xs text-gray-600">
                                <div className="flex flex-row gap-4">
                                    {/* Phone link with onClick */}
                                    <button
                                        onClick={(e) => handlePhoneClick(e, customer.phone)}
                                        className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-blue-500" />
                                        <span>{customer.phone}</span>
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span>{customer.address}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between bg-[#F2F2F2] rounded-xl p-2">
                                    {/* Email link with onClick */}
                                    <button
                                        onClick={(e) => handleEmailClick(e, customer.email)}
                                        className="flex items-center gap-2 hover:text-blue-600 transition-colors flex-1"
                                    >
                                        <Mail className="w-4 h-4 text-blue-500" />
                                        <span className="text-left">{customer.email}</span>
                                    </button>

                                    <button
                                        onClick={() => handleCopy(customer._id, customer.email)}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                                    >
                                        <Copy
                                            className={`w-4 h-4 ${copiedId === customer._id ? "text-black" : "text-blue-600"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500">
                            {searchQuery 
                                ? `No customers found with name "${searchQuery}"` 
                                : "No customers available"}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}