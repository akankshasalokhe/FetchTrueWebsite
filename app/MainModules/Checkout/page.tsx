'use client'

import { CheckCircle, ChevronLeft, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

/* ================= MOCK DATA ================= */

const stepperData = [
    {
        id: 1,
        label: "Details",
        icon: "/image/checkoutdetailsicon.png",
        active: true
    },
    {
        id: 2,
        label: "Payment",
        icon: "/image/checkoutpaymenticon.png",
        active: false
    },
    {
        id: 3,
        label: "Complete",
        icon: null,
        active: false
    }
]

const serviceCardData = {
    image: "/image/checkoutcard.png",
    trusted: true,
    rating: "4.9",
    title: "Property Buying & Selling",
    category: "Agricultural",
    stats: [
        { label: "Investment", value: "₹ 10L - 25L" },
        { label: "Earnings", value: "1.5-3L/month" },
        { label: "ROI", value: "25-30%" }
    ],
    rewardText: "₹15%"
}

const userData = {
    name: "Suhani Shaha",
    phone: "789578990",
    address: "Flat no.3, Sky Building, Pune",
    note: "Customer Requested urgent Service"
}

const couponData = {
    title: "Best Coupon For You",
    placeholder: "XXXXXX"
}

/* ================= COMPONENT ================= */

export default function DetailsPage() {
    const [selected, setSelected] = useState("me")

    const paymentData = {
        listingPrice: 1000,
        serviceDiscount: 99.45,
        couponDiscount: 800,
        gst: 144,
        platformFee: 20,
        assuranceFee: 10,
        grandTotal: 974
    }

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <section className="relative w-full">
                <div className="hidden md:hidden lg:block w-screen">
                    <div className="bg-[#E2E9F1] flex items-center justify-between p-6 rounded-xl">
                        <div className="flex items-center gap-4 ml-10">
                            <Link href="/">
                                <img src="/image/Checkoutback.png" className="w-[30px] cursor-pointer" />
                            </Link>
                            <h1 className="text-lg md:text-2xl font-semibold">Details</h1>
                        </div>

                        <div className="flex items-center gap-4 mr-10 bg-[#BEBEBE] rounded-3xl px-4 py-2 text-white">
                            Package Active
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MOBILE NAVBAR ================= */}
            <section>
                <div className="block md:block lg:hidden w-full -mt-6 w-screen bg-[#E2E9F1] flex flex-col px-4 py-8 gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 p-8 min-w-0">
                            <Link href="/MainModules/OnDemand">
                                <ChevronLeft className="w-[28px] h-[28px] bg-white rounded-full p-1" />
                            </Link>
                            <h1 className="text-[16px] font-semibold truncate">Details</h1>
                        </div>

                        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                            <img src="/image/EducationServicebookmark.png" className="w-[14px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-[1400px] mx-auto">

                {/* ===== STEPPER ===== */}
                <div className="flex justify-center mb-10 p-10">
                    <div className="flex items-center gap-16">
                        {stepperData.map((step, index) => (
                            <div key={step.id} className="flex items-center gap-16">
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center 
                                        ${step.active ? "bg-blue-600" : "border border-gray-300"}`}
                                    >
                                        {step.icon ? (
                                            <img src={step.icon} className="w-[28px] object-contain p-1" />
                                        ) : (
                                            <CheckCircle className="text-gray-400" size={18} />
                                        )}
                                    </div>
                                    <p className={`text-sm ${step.active ? "text-blue-600" : "text-gray-400"}`}>
                                        {step.label}
                                    </p>
                                </div>

                                {index !== stepperData.length - 1 && (
                                    <div className="w-24 h-[1px] bg-gray-300" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== MAIN GRID ===== */}
                <div className="grid grid-cols-12 gap-12 mb-15">

                    {/* ===== LEFT CARD ===== */}
                    <div className="col-span-4">
                        <div className="border border-gray-200 rounded-xl overflow-hidden  shadow-sm w-[479px] h-[456px] p-2">

                            <div className="relative">
                                <img src={serviceCardData.image} className="w-[455px] h-[295px] object-contain" />

                                {serviceCardData.trusted && (
                                    <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">
                                        ✔ Trusted
                                    </span>
                                )}

                                <div className="absolute bottom-1 right-2 flex items-center justify-center bg-blue-600 w-[67px] h-[43px] text-white lg:text-[14px] px-2 py-1 rounded-md">
                                    ⭐ {serviceCardData.rating}
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold lg:text-[20px]">
                                            {serviceCardData.title}
                                        </h3>

                                        <p className="lg:text-[16px] text-gray-500">
                                            {serviceCardData.category}
                                        </p>
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="lg:text-[10px] text-[#4A2E82] font-medium whitespace-normal breakwords">
                                            -EARN UP TO-

                                        </p>
                                        <span className="text-[#2CB140] lg:text-[14px] text-center"> {serviceCardData.rewardText}</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-3 text-center lg:text-[16px] mt-4">
                                    {serviceCardData.stats.map((item, i) => (
                                        <div
                                            key={i}
                                            className="relative px-3"
                                        >
                                            {/* Divider */}
                                            {i !== serviceCardData.stats.length - 1 && (
                                                <span className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-[2px] bg-gray-300" />
                                            )}

                                            <p className="text-gray-500">{item.label}</p>
                                            <p className="text-[#1D4699] font-semibold">{item.value}</p>
                                        </div>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>

                    {/* ===== RIGHT PANEL ===== */}
                    <div className="col-span-6 space-y-6 ml-18">

                        <h2 className="lg:text-[20px] font-semibold">
                            Who is this service for?
                        </h2>

                        {/* ===== OPTION 1 ===== */}

                        <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                            {/* RADIO */}
                            <label className="flex items-center gap-2 lg:text-[16px] font-medium cursor-pointer">
                                <input
                                    type="radio"
                                    name="serviceFor"
                                    checked={selected === "me"}
                                    onChange={() => setSelected("me")}
                                />
                                This Service is for me
                            </label>

                            {/* REVEAL CONTENT */}
                            {selected === "me" && (
                                <div className="pl-6 text-[16px] space-y-2">


                                    <div className="flex items-center gap-2">
                                        <p><strong>Name:</strong> {userData.name}</p>
                                        <div className="ml-22 flex flex-row gap-2">
                                            <Phone size={14} />
                                            <FaWhatsapp className="text-green-500" />
                                        </div>
                                    </div>
                                    <strong>Phone:</strong> {userData.phone}


                                    <p className="flex items-center gap-1">
                                        <MapPin size={14} /> {userData.address}
                                    </p>

                                    <p className="text-gray-500 text-[14px]">
                                        Note: {userData.note}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* ===== OPTION 2 ===== */}
                        <div className="border border-gray-300  rounded-xl p-4 space-y-4">
                            <label className="flex items-center gap-2 font-medium">
                                <input type="radio" readOnly />
                                This Service is for my Customer
                            </label>

                            <div className="flex gap-4 pl-6">
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
                                    My Customer
                                </button>
                                <Link href="/MainModules/Checkout/AddNewCustomer">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                                        <span className="border border-white rounded-full px-2 py-1">+</span> Add New Customer
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* ===== COUPON ===== */}
                        <div className="w-full max-w-[520px] bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-[16px] font-semibold text-black">
                                    Best Coupon For You
                                </h3>

                                <button className="flex items-center gap-1 text-[14px] text-blue-600 font-medium">
                                    All Coupons
                                    <span className="text-[18px] leading-none">›</span>
                                </button>
                            </div>

                            {/* Coupon Input Row */}
                            <div className="flex items-center justify-between gap-4">
                                {/* Coupon Box */}
                                <div className="flex items-center justify-center h-[48px] w-[160px] border border-dashed border-gray-300 rounded-lg text-gray-500 font-semibold tracking-widest">
                                    XXXXXX
                                </div>

                                {/* Apply Button */}
                                <button
                                    disabled
                                    className="h-[48px] px-8 rounded-lg bg-gray-200 text-gray-500 font-medium cursor-not-allowed"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="w-[1400px] mx-auto bg-white rounded-xl border border-gray-200 p-6 space-y-6">

                {/* ===== PAYMENT DETAILS ===== */}
                <div className="space-y-4">
                    <h3 className="lg:text-[16px] font-semibold text-black">
                        Payment Details
                    </h3>

                    <div className="space-y-3 text-[16px]">
                        <Row label="Listing Price" value={`₹ ${paymentData.listingPrice.toFixed(2)}`} />

                        <Row
                            label="Service Discount (0%)"
                            value={`- ₹ ${paymentData.serviceDiscount.toFixed(2)}`}
                            valueClass="text-red-500"
                        />

                        <Row label="Price After Discount" value="₹ 0.00" />

                        <Row
                            label="Coupon Discount (50null)"
                            value={`- ₹ ${paymentData.couponDiscount.toFixed(2)}`}
                            valueClass="text-red-500"
                        />

                        <Row
                            label="Service GST (18%)"
                            value={`+ ₹ ${paymentData.gst.toFixed(2)}`}
                            valueClass="text-green-600"
                        />

                        <Row
                            label="Platform Fee (20)"
                            value={`+ ₹ ${paymentData.platformFee.toFixed(2)}`}
                            valueClass="text-green-600"
                        />

                        <Row
                            label="Fetch True Assurity Charges (10%)"
                            value={`+ ₹ ${paymentData.assuranceFee.toFixed(2)}`}
                            valueClass="text-green-600"
                        />
                    </div>
                </div>

                {/* ===== GRAND TOTAL ===== */}
                <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg">
                    <p className="text-blue-600 font-semibold text-[20px]">
                        Grand Total
                    </p>
                    <p className="text-blue-600 font-semibold text-[20px]">
                        ₹ {paymentData.grandTotal}
                    </p>
                </div>

                {/* ===== TERMS & PAY ===== */}
                <div className="flex items-center justify-between pt-4">
                    <label className="flex items-center gap-3 text-[20px] text-gray-700">
                        <input
                            type="checkbox"
                            className="w-5 h-5 border-gray-400 rounded"
                        />
                        I Agree with the terms & Condition.
                    </label>

                    <button className="bg-blue-600 text-white px-10 py-3 rounded-lg text-[20px] font-medium">
                        Proceed To Pay
                    </button>
                </div>
            </section>


        </>
    )
}



function Row({
    label,
    value,
    valueClass = "text-black"
}: {
    label: string
    value: string
    valueClass?: string
}) {
    return (
        <>
            <div className="relative w-full">
                <div className="flex items-center justify-between text-gray-500">
                    <p>{label}</p>
                    <p className={`font-medium ${valueClass}`}>
                        {value}
                    </p>
                </div>
            </div>
        </>
    )
}