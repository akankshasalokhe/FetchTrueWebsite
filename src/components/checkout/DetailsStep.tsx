'use client';

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import CustomerList from "./CustomerList";
import CouponsDialog from "./CouponsDialog";
import { useCheckout } from "@/src/context/CheckoutContext";

/* ================= MOCK DATA ================= */

const serviceCardData = {
    image: "/image/checkoutcard.png",
    trusted: true,
    rating: "4.9",
    title: "Property Buying & Selling",
    category: "Agricultural",
    stats: [
        { label: "Investment", value: "₹ 10L-5L" },
        { label: "Earnings", value: "1.5-3L/M" },
        { label: "ROI", value: "25-30%" }
    ],
    rewardText: "₹15%"
};

const userData = {
    name: "Suhani Shaha",
    phone: "789578990",
    address: "Flat no.3, Sky Building, Pune",
    note: "Customer Requested urgent Service"
};

type PaymentData = {
  listingPrice: number;
  serviceDiscount: number;
  couponDiscount: number;
  gst: number;
  platformFee: number;
  assuranceFee: number;
  grandTotal: number;
};

type CheckoutData = {
  selectedUser: string;
  paymentData: PaymentData;
};


type DetailsStepProps = {
    data: CheckoutData | null;
   onNext: (data: CheckoutData) => void;
};

export default function DetailsStep({ data, onNext }: DetailsStepProps) {

    const [selected, setSelected] = useState("me");
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openCoupons, setOpenCoupons] = useState(false);
    const { selectedPackage } = useCheckout();


    if (!selectedPackage) {
  return <p className="text-center">No package selected</p>;
}


    const paymentData = {
        listingPrice: 1000,
        serviceDiscount: 99.45,
        couponDiscount: 800,
        gst: 144,
        platformFee: 20,
        assuranceFee: 10,
        grandTotal: 974
    };

    const coupons = [
        {
            id: 1,
            title: "Extra ₹100 off",
            description: "You save an extra ₹100 with this coupon.",
            code: "ABCDE",
        },
        {
            id: 2,
            title: "Extra ₹200 off",
            description: "You save an extra ₹200 with this coupon.",
            code: "Asfdcsd",
        },
    ];

    const handleProceed = () => {
        onNext({
            selectedUser: selected,
            paymentData,
        });
    };

    return (
        <>
            {/* ======================================================
                DESKTOP VIEW 
            ====================================================== */}
            <section className="max-w-[1400px] hidden md:block lg:block mx-auto">
                {/* ===== MAIN GRID ===== */}
                <div className="grid grid-cols-12 gap-12 mb-15">

                    {/* ===== LEFT CARD ===== */}
                    <div className="col-span-4">
                        <div className="border border-gray-200 rounded-xl overflow-hidden  shadow-sm md:w-[300px] md:h-[320px] lg:w-[479px] lg:h-[456px] p-2 lg:ml-0 md:ml-10">

                            <div className="relative">
                                <img src={serviceCardData.image} className="md:w-[300px] md:h-[200px] lg:w-[455px] lg:h-[295px] object-contain" />

                                {serviceCardData.trusted && (
                                    <span className="absolute -top-0 left-0 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">
                                        ✔ Trusted
                                    </span>
                                )}

                                <div className="absolute md:-right-1 md:bottom-2 lg:bottom-1 lg:right-2 flex md:flex-row  md:items-center lg:items-center lg:justify-center bg-blue-600 md:w-[47px] md:h-[31px] lg:w-[67px] lg:h-[43px] text-white md:text-[10px] lg:text-[14px] px-2 py-1 rounded-md">
                                    ⭐ {serviceCardData.rating}
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold md:text-[15px] lg:text-[20px]">
                                            {serviceCardData.title}
                                        </h3>

                                        <p className="lg:text-[16px] md:text-[12px] text-gray-500">
                                            {serviceCardData.category}
                                        </p>
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="lg:text-[10px] md:text-[8px] text-[#4A2E82] font-medium whitespace-normal breakwords">
                                            -EARN UP TO-

                                        </p>
                                        <span className="text-[#2CB140] lg:text-[14px] md:text-[10px] text-center"> {serviceCardData.rewardText}</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-3 text-center md:text-[12px] lg:text-[16px] mt-4">
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
                    <div className="col-span-6 space-y-6 md:ml-25 lg:ml-18">

                        <h2 className="lg:text-[20px] font-semibold">
                            Who is this service for?
                        </h2>

                        {/* ===== OPTION 1 ===== */}

                        <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                            {/* RADIO */}
                            <label className="flex items-center gap-2 md:text-[12px] lg:text-[16px] font-medium cursor-pointer">
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
                                <div className="pl-6 md:text-[12px] lg:text-[16px] space-y-2">


                                    <div className="flex items-center whitespace-nowrap gap-2">
                                        <p><strong>Name:</strong> {userData.name}</p>
                                        <div className="md:ml-12 lg:ml-22 flex flex-row gap-2">
                                            <Phone size={14} />
                                            <FaWhatsapp className="text-green-500" />
                                        </div>
                                    </div>
                                    <strong>Phone:</strong> {userData.phone}


                                    <p className="flex items-center gap-1">
                                        <MapPin size={14} /> {userData.address}
                                    </p>

                                    <p className="text-gray-500 md:text-[10px] lg:text-[14px]">
                                        Note: {userData.note}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* ===== OPTION 2 ===== */}
                        <div className="border border-gray-300  rounded-xl p-4 space-y-4">
                            <label className="flex items-center gap-2 md:text-[12px] lg:text-[16px] font-medium">
                                <input type="radio" readOnly />
                                This Service is for my Customer
                            </label>

                            {/* <div className="flex gap-4 lg:pl-6">
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg"
                                    onClick={() => setOpenSidebar(true)}>
                                    My Customer
                                </button>
                                <Link href="/MainModules/Checkout/AddNewCustomer">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                                        <span className="border border-white rounded-full px-2 py-1">+</span> Add New Customer
                                    </button>
                                </Link>
                            </div> */}
                            <div className="flex gap-4 lg:pl-6">
                                <button
                                    className="
      border border-blue-600 text-blue-600
      px-4 py-2 rounded-lg
      md:text-[12px] whitespace-nowrap
      lg:text-[14px]
    "
                                    onClick={() => setOpenSidebar(true)}
                                >
                                    My Customer
                                </button>

                                <Link href="/MainModules/Checkout/AddNewCustomer">
                                    <button
                                        className="
        bg-blue-600 text-white
        px-4 py-2 rounded-lg cursor-pointer
        md:text-[12px]
        lg:text-[14px]
      "
                                    >
                                        <span
                                            className="
          border border-white rounded-full
          lg:px-2 lg:py-1 md:px-1 md:py-1
          md:text-[10px] text-start 
          lg:text-[12px]"
                                        >
                                            +
                                        </span>
                                        Add New Customer
                                    </button>
                                </Link>
                            </div>

                        </div>

                        {/* ===== COUPON ===== */}
                        <div className="w-full max-w-[520px] bg-white rounded-xl border border-gray-200 p-4 space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
                                    Best Coupon For You
                                </h3>

                                <button
                                    onClick={() => setOpenCoupons(true)}
                                    className="flex items-center gap-1 text-[14px] text-blue-600 font-medium cursor-pointer"
                                >
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

            {openCoupons && (
                <CouponsDialog
                    coupons={coupons}
                    onClose={() => setOpenCoupons(false)}
                />
            )}


            {openSidebar && (
                <div
                    onClick={() => setOpenSidebar(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            {/* SIDEBAR */}
            <div
                className={`
          fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${openSidebar ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <CustomerList onClose={() => setOpenSidebar(false)} />
            </div>

            <section className="hidden md:hidden lg:block md:w-[650px] lg:w-[1400px] mx-auto bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6">

                {/* ===== PAYMENT DETAILS ===== */}
                <div className="space-y-4">
                    <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
                        Payment Details
                    </h3>

                    <div className="space-y-3 md:text-[12px] lg:text-[16px]">
                        <Row label="Listing Price" value={`₹ ${paymentData.listingPrice.toFixed(2)}`} />

                        <Row
                            label="Service Discount (0%)"
                            value={`- ₹ ${paymentData.serviceDiscount.toFixed(2)}`}
                            valueClass="text-red-500"
                        />

                        <Row label="Price After Discount" value="₹ 0.00" />

                        <Row
                            label="Coupon Discount (50%)"
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
                    <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
                        Grand Total
                    </p>
                    <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
                        ₹ {paymentData.grandTotal}
                    </p>
                </div>

                {/* ===== TERMS & PAY ===== */}
                <div className="flex items-center justify-between pt-4">
                    <label className="flex items-center gap-3 md:text-[15px] lg:text-[20px] text-gray-700">
                        <input
                            type="checkbox"
                            className="w-5 h-5 border-gray-400 rounded"
                        />
                        I Agree with the terms & Condition.
                    </label>

                    <button className="bg-blue-600 text-white px-10 py-3 rounded-lg md:text-[15px] lg:text-[20px] font-medium cursor-pointer"
                        onClick={() => handleProceed()}>
                        Proceed To Pay
                    </button>
                </div>
            </section>

            {/* ======================================================
                MOBILE VIEW (NEW)
            ====================================================== */}
            <section className="block md:hidden lg:hidden px-4 pb-28 space-y-6">

                {/* SERVICE CARD */}
                <div className="border rounded-xl p-3 shadow-sm">
                    <img
                        src={serviceCardData.image}
                        className="w-full h-[200px] object-contain"
                    />
                    {serviceCardData.trusted && (
                        <span className="absolute top-63 left-6 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">
                            ✔ Trusted
                        </span>
                    )}

                    <div className="absolute bottom-55 right-6 flex md:flex-row items-center lg:justify-center bg-blue-600 w-[47px] h-[28px] text-white text-[10px]  px-2 py-1 rounded-md">
                        ⭐ {serviceCardData.rating}
                    </div>

                    <div className="mt-3 flex justify-between">
                        <div>
                            <h3 className="font-semibold text-[16px]">
                                {serviceCardData.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {serviceCardData.category}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[10px] text-[#4A2E82]">-EARN UP TO-</p>
                            <p className="text-[#2CB140] text-sm font-semibold">
                                {serviceCardData.rewardText}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 text-center text-sm mt-4">
                        {serviceCardData.stats.map((item, i) => (
                            <div key={i}>
                                <p className="text-gray-500">{item.label}</p>
                                <p className="font-semibold text-[#1D4699]">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHO IS SERVICE FOR */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-[16px]">
                        Who is this service for?
                    </h2>

                    {/* FOR ME */}
                    <div className="border rounded-xl p-4">
                        <label className="flex gap-2 font-medium">
                            <input
                                type="radio"
                                checked={selected === "me"}
                                onChange={() => setSelected("me")}
                            />
                            This Service is for me
                        </label>

                        {selected === "me" && (
                            <div className="mt-3 space-y-2 text-sm">
                                <p><strong>Name:</strong> {userData.name}</p>
                                <p className="flex items-center gap-2">
                                    <Phone size={14} />
                                    {userData.phone}
                                    <FaWhatsapp className="text-green-500" />
                                </p>
                                <p className="flex items-center gap-1">
                                    <MapPin size={14} /> {userData.address}
                                </p>
                                <p className="text-gray-500">
                                    Note: {userData.note}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* FOR CUSTOMER */}
                    <div className="border rounded-xl p-4 space-y-3">
                        <label className="flex gap-2 font-medium">
                            <input type="radio" readOnly />
                            This Service is for my Customer
                        </label>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => setOpenSidebar(true)}
                                className="border border-blue-600 text-blue-600 py-2 rounded-lg"
                            >
                                My Customer
                            </button>

                            <Link href="/MainModules/Checkout/AddNewCustomer">
                                <button className="bg-blue-600 text-white py-2 rounded-lg w-full">
                                    + Add New Customer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COUPON */}
                <div className="border rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm">
                            Best Coupon For You
                        </h3>
                        <button
                            onClick={() => setOpenCoupons(true)}
                            className="text-blue-600 text-sm"
                        >
                            All Coupons →
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1 h-[44px] border border-dashed rounded-lg flex items-center justify-center">
                            XXXXXX
                        </div>
                        <button
                            disabled
                            className="px-6 bg-gray-200 rounded-lg text-gray-500"
                        >
                            Apply
                        </button>
                    </div>
                </div>

                {/* PAYMENT SUMMARY */}
                <div className="border rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span>Total</span>
                        <span className="font-semibold">
                            ₹ {paymentData.grandTotal}
                        </span>
                    </div>
                </div>
            </section>


            <section className="md:block lg:hidden md:w-[650px] lg:w-[1400px] mx-auto bg-white rounded-xl border border-gray-200 mb-10 p-6 space-y-6">

                {/* ===== PAYMENT DETAILS ===== */}
                <div className="space-y-4">
                    <h3 className="md:text-[12px] lg:text-[16px] font-semibold text-black">
                        Payment Details
                    </h3>

                    <div className="space-y-3 md:text-[12px] lg:text-[16px]">
                        <Row label="Listing Price" value={`₹ ${paymentData.listingPrice.toFixed(2)}`} />

                        <Row
                            label="Service Discount (0%)"
                            value={`- ₹ ${paymentData.serviceDiscount.toFixed(2)}`}
                            valueClass="text-red-500"
                        />

                        <Row label="Price After Discount" value="₹ 0.00" />

                        <Row
                            label="Coupon Discount (50%)"
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
                    <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
                        Grand Total
                    </p>
                    <p className="text-blue-600 font-semibold md;text-[15px] lg:text-[20px]">
                        ₹ {paymentData.grandTotal}
                    </p>
                </div>

                {/* ===== TERMS & PAY ===== */}
                <div className="flex flex-col pt-4 gap-6">
                    <label className="flex items-center gap-3 md:text-[15px] text-[15px] text-gray-700">
                        <input
                            type="checkbox"
                            className="w-5 h-5 border-gray-400 rounded"
                        />
                        I Agree with the terms & Condition.
                    </label>

                    <button className="bg-blue-600 text-white md:px-10 px-6 py-3 rounded-lg md:text-[15px] text-[12px] font-medium cursor-pointer whitespace-nowrap"
                        onClick={() => handleProceed()}>
                        Proceed To Pay
                    </button>
                </div>
            </section>

            {/* ======================================================
                COUPONS DIALOG
            ====================================================== */}
            {openCoupons && (
                <CouponsDialog
                    coupons={coupons}
                    onClose={() => setOpenCoupons(false)}
                />
            )}

            {/* ======================================================
                CUSTOMER SIDEBAR
            ====================================================== */}
            {openSidebar && (
                <div
                    onClick={() => setOpenSidebar(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 transition-transform
                ${openSidebar ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <CustomerList onClose={() => setOpenSidebar(false)} />
            </div>


        </>
    );
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
