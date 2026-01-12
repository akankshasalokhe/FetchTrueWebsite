"use client";

import Image from "next/image";

export default function HowAppWorks() {

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* Heading */}
        <h2 className="text-[32px] font-semibold mb-10">
          How the App works
        </h2>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center border rounded-xl p-6 h-[563px] border-[#B7B7B7]">

          {/* LEFT IMAGE */}
          <div className="lg:w-[500px] w-full">
            <div className="relative w-full h-[521px] rounded-[12px] overflow-hidden bg-[#F5F8FF]">
              <Image
                src="/image/how-app-works.jpg" 
                alt="How App Works"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="lg:w-[575px] h-[465px] w-full flex flex-col gap-6 me-10 ">

            {/* STEP 01 */}
            <div
            //   onClick={() => router.push("/services")}
              className=" border rounded-[12px] p-6 flex items-center gap-6 hover:shadow-md transition h-[141px] bg-[#FCFCFC] border-[#E0E0E0]"
            >
              <div className="text-[#2164F4] text-[40px] font-semibold bg-[#F5F8FF]">
                01
              </div>
              <div>
                <h3 className="text-[20px] font-medium ">
                  Choose a Service
                </h3>
                <p className="text-[16px] text-[#595959] leading-relaxed">
                we are having multiple modules just select one of them as per your requirements and then choose the service type that  you want to purchase 
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div
            //   onClick={() => router.push("/services")}
              className=" border rounded-[12px] p-6 flex items-center gap-6 hover:shadow-md transition h-[141px] bg-[#FCFCFC] border-[#E0E0E0]"
            >
              <div className="text-[#2164F4] text-[40px] font-semibold bg-[#F5F8FF]">
                02
              </div>
              <div>
                <h3 className="text-[20px] font-medium ">
                Select Your Provider
                </h3>
                <p className="text-[16px] text-[#595959] leading-relaxed">
                after selecting the services you then it shows the option fo provider choose best provider as you want and you are ready to go
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div
            //   onClick={() => router.push("/services")}
              className=" border rounded-[12px] p-6 flex items-center gap-6 hover:shadow-md transition h-[141px] bg-[#FCFCFC] border-[#E0E0E0]"
            >
              <div className="text-[#2164F4] text-[40px] font-semibold bg-[#F5F8FF]">
                03
              </div>
              <div>
                <h3 className="text-[20px] font-medium ">
                Check Out
                </h3>
                <p className="text-[16px] text-[#595959] leading-relaxed">
                after processing now its time to check out select the payment method what you want and proceeds and you are done
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
