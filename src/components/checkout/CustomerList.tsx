import { useAuth } from "@/src/context/AuthContext";
import { useServiceCustomers } from "@/src/context/ServiceCustomerContext";
import { ChevronLeft, Phone, Mail, MapPin, Copy } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

type Props = {
    onClose: () => void;
    onSelect?: (customer: any, note: string) => void; // ← add this
};

export default function CustomerList({ onClose, onSelect }: Props) {
    const [notes, setNotes] = useState<Record<string, string>>({});
    const { user } = useAuth();
    const { customers } = useServiceCustomers();
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [contactUrl, setContactUrl] = useState<string | null>(null);
    const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

    const toggleSelectCustomer = (id: string) => {
        setSelectedCustomers((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const handleWhatsAppClick = (e: React.MouseEvent, phone: string) => {
        e.stopPropagation();
        window.open(`https://wa.me/${phone}`, "_blank");
    };

    useEffect(() => {
        if (contactUrl) {
            window.location.href = contactUrl;
        }
    }, [contactUrl]);

    const handleCopy = (id: string, text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1000);
    };

    // Function to handle email click
    const handleEmailClick = (e: React.MouseEvent, email: string) => {
        e.preventDefault();
        setContactUrl(`mailto:${email}`);
    };

    // Function to handle phone click
    const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
        e.preventDefault();
        setContactUrl(`tel:${phone}`);
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
                        Found {filteredCustomers.length} customer{filteredCustomers.length !== 1 ? 's' : ''} matching &quot;{searchQuery}&quot;
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
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3 items-center">
                                    <img
                                        src="/image/reviewcontact.jpg"
                                        alt={customer.fullName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="text-sm font-semibold">{customer.fullName}</h2>
                                        <p className="text-xs text-gray-500">FT ID: {customer.customerId}</p>
                                    </div>
                                </div>

                                {/* ✅ Checkbox top right */}
                                <input
                                    type="checkbox"
                                    checked={selectedCustomers?.includes(customer._id) ?? false}
                                    onChange={() => toggleSelectCustomer(customer._id)}
                                    className="w-5 h-5 rounded border-gray-400 cursor-pointer accent-blue-600"
                                />
                            </div>

                            {/* DIVIDER */}
                            <hr className="my-3 border-gray-200" />

                            {/* DETAILS + ACTION BUTTONS */}
                            <div className="flex items-start justify-between">
                                <div className="space-y-1 text-sm text-gray-700">
                                    <p>
                                        <span className="font-medium">Phone:</span> {customer.phone}
                                    </p>
                                    <p>
                                        <span className="font-medium">Email:</span> {customer.email}
                                    </p>
                                    <p>
                                        <span className="font-medium">Address:</span> {customer.address}
                                    </p>
                                </div>

                                {/* Phone + WhatsApp buttons */}
                                <div className="flex gap-3 items-center">
                                    <button
                                        onClick={(e) => handlePhoneClick(e, customer.phone)}
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity"
                                    >
                                        <Phone className="w-7 h-7 text-blue-500" />
                                    </button>

                                    <button
                                        onClick={(e) => handleWhatsAppClick(e, customer.phone)}
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity"
                                    >
                                        {/* WhatsApp icon */}
                                        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#25D366" />
                                            <path
                                                d="M22.6 9.4A9.1 9.1 0 0 0 7.3 20.7L6 26l5.4-1.4a9.1 9.1 0 0 0 4.4 1.1 9.1 9.1 0 0 0 6.8-15.3zm-6.8 14a7.6 7.6 0 0 1-3.8-1l-.3-.2-3.2.8.9-3.1-.2-.3a7.6 7.6 0 1 1 6.6 3.8zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.7-1.8c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.7 11.4 11.4 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.3a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* REQUIREMENT SECTION */}
                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-800 mb-2">
                                    Tell us your requirement (Optional)
                                </p>
                                <div className="flex gap-2">
                                    {/* ✅ Input disabled until checkbox is selected */}
                                    {/* <input
                                        type="text"
                                        placeholder="Notes for your query"
                                        disabled={!(selectedCustomers?.includes(customer._id) ?? false)}
                                        className={`flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-colors
                                ${selectedCustomers?.includes(customer._id)
                                                ? "bg-white text-gray-800 cursor-text"
                                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            }`}
                                    /> */}
                                     <input
                    type="text"
                    placeholder="Notes for your query"
                    disabled={!selectedCustomers?.includes(customer._id)}
                    value={notes[customer._id] || ""}
                    onChange={(e) =>
                        setNotes((prev) => ({ ...prev, [customer._id]: e.target.value }))
                    }
                    className={`flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-colors
                        ${selectedCustomers?.includes(customer._id)
                            ? "bg-white text-gray-800 cursor-text"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                />
                                    {/* <button
                                        disabled={!(selectedCustomers?.includes(customer._id) ?? false)}
                                        className={`px-5 py-3 rounded-xl text-sm font-semibold transition-colors
                                ${selectedCustomers?.includes(customer._id)
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            }`}
                                    >
                                        Add Now
                                    </button> */}
                                    <button
                                        disabled={!selectedCustomers?.includes(customer._id)}
                                        onClick={() => {
                                            onSelect?.(customer, notes[customer._id] || "");
                                            onClose();
                                        }}
                                        className={`px-5 py-3 rounded-xl text-sm font-semibold transition-colors
                        ${selectedCustomers?.includes(customer._id)
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            }`}
                                    >
                                        Add Now
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