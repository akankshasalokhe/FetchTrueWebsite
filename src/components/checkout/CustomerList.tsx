
import { ChevronLeft, Phone, Mail, MapPin, Copy } from "lucide-react";
import { useState } from "react";

type Props = {
    onClose: () => void;
};

const customers = [
    {
        id: 1,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    },
    {
        id: 2,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    },
    {
        id: 3,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    }, {
        id: 4,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    },
    {
        id: 5,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    },
    {
        id: 6,
        name: "Rakesh Yadav",
        ftId: "FT ID: FTC00003",
        description: "Customer description",
        phone: "7897578909",
        address: "Flat no.3, Sky Building, Pune",
        email: "customermew1243@gmail.com",
        avatar: "/image/user.png",
    },
];

export default function CustomerList({ onClose }: Props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };


    return (
        <section className="h-full bg-[#E2E9F1] flex flex-col">

            {/* ===== HEADER ===== */}
            <div className="px-4 py-6 bg-[#E2E9F1]">
                <div className="flex items-center gap-3">
                    <button onClick={onClose}>
                        <ChevronLeft className="w-7 h-7 bg-white rounded-full p-1" />
                    </button>

                    <h1 className="text-[16px] font-semibold">Customers List</h1>

                    <span className="ml-auto text-sm">
                        Customers - {customers.length}
                    </span>
                </div>

                {/* SEARCH */}
                <div className="relative mt-4">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full bg-white border px-10 py-2 text-sm outline-none"
                    />
                    <img
                        src="/image/itsearch.png"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px]"
                    />
                </div>
            </div>

            {/* ===== LIST ===== */}
            <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4 scrollbar-hide">

                {customers.map((customer) => (
                    <div
                        key={customer.id}
                        className="bg-white rounded-xl p-4 shadow-sm"
                    >
                        {/* TOP ROW */}
                        <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                                <img
                                    src={customer.avatar}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <h2 className="text-sm font-semibold">{customer.name}</h2>
                                    <p className="text-xs text-gray-500">{customer.ftId}</p>
                                    <p className="text-xs text-gray-400">
                                        {customer.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="mt-3 space-y-2 text-xs text-gray-600">
                            <div className="flex flex-row gap-4">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-blue-500" />
                                    {customer.phone}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    {customer.address}
                                </div>

                            </div>

                            <div className="flex items-center justify-between bg-[#F2F2F2] rounded-xl p-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    {customer.email}
                                </div>

                                <button onClick={() => handleCopy(customer.email)}>
                                    <Copy className={`w-4 h-4 ${copied ? "text-green-600" : "text-blue-600"}`} />
                                </button>



                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
