


export default function GPComponent() {
  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
            GP
          </div>

          <div className="flex-1">
            <h2 className="text-blue-600 font-semibold text-[15px] md:text-[18px] lg:text-[20px]">Growth Partner (GP)</h2>
            <p className="text-green-600 text-sm font-medium">Assumed Earning</p>
            <p className="text-green-600 font-bold">30,000 to 50,000/Monthly</p>

            <span className="inline-block mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Fix Earning - 30,000/ Month
            </span>
          </div>
        </div>
      </div>

      {/* Includes */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h3 className="flex items-center gap-2 text-[15px] md:text-[18px] lg:text-[20px] text-blue-600 font-semibold mb-3">
          ⭐ What’s Includes
        </h3>

        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">👑 How to promoted GP to SGP?</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Recruit 10 growth partner to became a Super Growth Partner (SGP)</p>
          </div>

          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">💰 Revenue</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Earn 5% to 15% revenue share</p>
          </div>

          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">🤝 Team Building Income</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Earn Rs 5,000 for every GP you onboard</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Get rs 3,000 when your onboarded GP bring another</p>
          </div>

          <div>
            <p className="font-semibold text-[15px] md:text-[18px] lg:text-[20px] text-gray-800">📢 Marketing Support</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Support within 3-6 hours.</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Full support system.</p>
            <p className="ml-6 md:ml-6 lg:ml-6 text-[12px] md:text-[15px] lg:text-[15px]">• Expert help, anytime you need it.</p>
          </div>
        </div>

        <button className="mt-5 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold">
          Explore Benefits
        </button>

              {/* Welcome Gifts */}
      <div className="p-4 mt-4">
        <h3 className="flex items-center gap-2 text-[15px] md:text-[18px] lg:text-[20px] text-blue-600 font-semibold mb-4">
          🎁 Welcome Gifts
        </h3>

        <div className="grid grid-cols-4 gap-4 text-center text-[11px] md:text-[13px] text-gray-600">
          {[
            "Notebook",
            "Water Bottle",
            "Id Holder",
            "Branded Tshirt",
            "Laptop Bag",
            "Pen",
            "Booklet",
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                📦
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
</div>
      {/* Premium Growth Partner Packages */}
      <div className="bg-white rounded-2xl p-4 shadow-md mt-4">
        <h3 className="text-blue-600 font-semibold text-[15px] md:text-[18px] lg:text-[20px] mb-3">
          Premium Growth Partner Packages
        </h3>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="italic text-gray-700 text-[13px] md:text-[14px] mb-2">
            “Unlock lite Benefits & Maximum earnings”
          </p>

          <p className="text-blue-700 font-bold text-[14px] md:text-[16px]">
            Up to 5X Returns Guarantee!!!
          </p>

          <p className="text-gray-600 text-[12px] md:text-[14px] mb-3">
            Refund up to 5X if earning are less than 5L in 3 years
          </p>

          <div className="space-y-1 text-[12px] md:text-[14px] text-gray-700 mb-3">
            <p>🔒 Secure</p>
            <p>🛡 Safe Investment</p>
            <p>✅ Guaranteed Refund</p>
          </div>

          <div className="mt-3">
            <p className="text-blue-600 font-semibold text-[14px] md:text-[16px]">
              Your Extra Benefits
            </p>
            <p className="text-gray-600 text-[12px] md:text-[14px]">
              You’ve received rs 3,000 as your fixed monthly earning bonus for purchasing the package.
            </p>
          </div>

          {/* Pricing */}
          <div className="mt-4 text-[13px] md:text-[14px] text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Franchise Fees</span>
              <span>
                <span className="text-green-600">(90%off)</span> Rs 50000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Franchise Deposite (Refundable)</span>
              <span>Rs 100000</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Growth Total</span>
              <span>Rs 150000</span>
            </div>
          </div>

          <button className="mt-5 bg-blue-600 text-white w-full py-3 rounded-xl font-semibold">
            Upgrade to SGP Now
          </button>
        </div>
      </div>

      
    </>
  );
}

