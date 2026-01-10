import { useState } from "react";

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


type PaymentStepProps = {
  data: CheckoutData;
  onNext: () => void;
  onBack: () => void;
};

const cashfreeOptions = [
  { id: "full", label: "Full Payment", amount: 974 },
  { id: "partial", label: "Partial Payment", amount: 487 },
];

export default function PaymentStep({ data, onNext, onBack }: PaymentStepProps) {
  const [useWallet, setUseWallet] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cashfree");
  const [cashfreeOption, setCashfreeOption] = useState("full");

  const totalPrice = 974;
  const walletBalance = 1200;

  return (
    <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-6 md:py-10 px-4 md:px-0">
      {/* ===== TOP CARDS ===== */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* LEFT: WALLET CARD */}
        <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
          <div className="lg:text-[20px] text-gray-500">Total Price</div>

          <div className="text-lg md:text-xl font-semibold">
            ₹ {totalPrice}
          </div>

          <div className="flex items-center justify-between border rounded-lg px-4 py-3">
            <div>
              <div className="text-blue-600 font-semibold">
                ₹ {walletBalance}.00
              </div>
              <div className="text-xs text-gray-400">Wallet Balance</div>
            </div>

            <input
              type="checkbox"
              checked={useWallet}
              onChange={() => setUseWallet(!useWallet)}
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* RIGHT: PAYMENT METHOD */}
        <div className="w-full md:w-[320px] border rounded-xl p-5 md:p-6 space-y-4">
          <div className="lg:text-[20px] font-semibold">
            Choose Payment Method
          </div>

          <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer">
            <span>Cash Free Pay</span>
            <input
              type="radio"
              name="payment"
              value="cashfree"
              checked={paymentMethod === "cashfree"}
              onChange={() => setPaymentMethod("cashfree")}
            />
          </label>

          {paymentMethod === "cashfree" && (
            <div className="mt-3 space-y-3">
              {cashfreeOptions.map((option) => (
                <label
                  key={option.id}
                  className={`
                    flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer
                    ${
                      cashfreeOption === option.id
                        ? "border-blue-600 bg-blue-50"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="cashfreeOption"
                      checked={cashfreeOption === option.id}
                      onChange={() => setCashfreeOption(option.id)}
                    />

                    <div>
                      <div className="text-sm font-semibold">
                        ₹ {option.amount}
                      </div>
                      <div className="text-xs text-gray-500">
                        {option.label}
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}

          <label className="flex items-center justify-between text-[12px] md:text-[16px] cursor-pointer">
            <span>Payment after Consultation</span>
            <input
              type="radio"
              name="payment"
              value="after"
              checked={paymentMethod === "after"}
              onChange={() => setPaymentMethod("after")}
            />
          </label>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 md:w-auto">
        <div className="md:text-[24px] text-gray-500">
          Total Price
          <span className="ml-2 text-black font-semibold">
            ₹ 00
          </span>
        </div>

        <button
          className="w-full md:w-auto bg-blue-600 text-white px-8 md:px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          onClick={onNext}
        >
          Proceed To Pay
        </button>
      </div>
    </section>
  );
}
