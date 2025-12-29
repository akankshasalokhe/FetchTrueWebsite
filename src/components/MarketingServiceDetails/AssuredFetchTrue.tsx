"use client";

const DATA = [
    {
        title: "Customer Satisfaction:",
        desc: "We provide up to 100% return if customer is not satisfied",
        path:"/image/fetchtrueicon1.png"
    },
    {
        title: "Best Quality Assurance:",
        desc: "We personally check all the project quality before final delivery",
        path:"/image/fetchtrueicon2.png"
    },
    {
        title: "End-to-End Execution:",
        desc: "From connecting customer to professional expert to completion, we handle everything under one platform.",
        path:"/image/fetchtrueicon3.png"
    },
    {
        title: "Reschedule Anytime:",
        desc: "If the customer is not satisfied with the service, we reschedule the providers for better results.",
        path:"/image/fetchtrueicon4.png"
    },
    {
        title: "Transparent Workflow:",
        desc: "Complete process visibility, transparent communication, and real-time tracking.",
        path:"/image/fetchtrueicon5.png"
    },
    {
        title: "On-Time Delivery Result:",
        desc: "We provide guaranteed on-time completion of every project.",
        path:"/image/fetchtrueicon6.png"
    },
    {
        title: "Trusted Platform:",
        desc: "Fetch True ensures secure connections between clients and genuine professionals.",
        path:"/image/fetchtrueicon7.png"
    }
];

export default function AssuredByFetchTrue() {
    return (
        <section className="bg-[#F5F6F8] py-16">
            <h2 className="text-start lg:text-center text-blue-500 ml-4 md:ml-0 lg:text-[36px] font-medium mb-8">
                Assured By Fetch True
            </h2>

            {/* <div className="max-w-[1200px] mx-auto">
        {DATA.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              
              <div
                className={`relative w-[550px] bg-[#FFFDFC] border-t-4 border-blue-500
                rounded-xl shadow-md py-6
                ${isLeft ? "pl-6 pr-28" : "pl-28 pr-6"}`}
              >
                
                <div
                  className={`absolute top-1/2 -translate-y-1/2
                  ${isLeft ? "right-[-58px]" : "left-[-50px]"}
                  w-[120px] h-[120px]
                  bg-gradient-to-br from-[#EAF0FF] to-[#DDE6FF]
                  rotate-45 rounded-lg shadow-md
                  flex items-center justify-center`}
                >
                  <div className="-rotate-45 text-xs text-gray-400">
                    ICON
                  </div>
                </div>

                <h3 className="font-semibold text-gray-700 text-[18px] lg:text-[28px] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[14px] lg:text-[18px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:block max-w-[1200px] mx-auto">
                {DATA.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-14`}
                        >
                            <div
                                className={`relative w-[550px] bg-[#FFFDFC] border-t-4 border-blue-500
          rounded-xl shadow-md py-6
          ${isLeft ? "pl-6 pr-28" : "pl-28 pr-6"}`}
                            >
                                {/* Diamond */}
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2
            ${isLeft ? "right-[-58px]" : "left-[-58px]"}
            w-[120px] h-[120px]
            bg-gradient-to-br from-[#EAF0FF] to-[#DDE6FF]
            rotate-45 rounded-lg shadow-md
            flex items-center justify-center`}
                                >
                                    {/* <div className="-rotate-45 text-xs text-gray-400">ICON</div> */}
                                    <img src={item.path} alt="icon" className="w-[88px] h-[88px] object-contain -rotate-45"/>
                                </div>

                                <h3 className="font-semibold text-gray-700 text-[28px] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-[18px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* ================= TABLET ================= */}
            <div className="hidden md:block lg:hidden max-w-3xl mx-auto space-y-10">
                {DATA.map((item, index) => {
                    const isLeft = index % 2 === 0; // odd/even logic

                    return (
                        <div
                            key={index}
                            className={`relative bg-[#FFFDFC] border-t-4 border-blue-500 rounded-xl shadow-md pt-6 pb-6
        ${isLeft ? "pl-6 pr-24" : "pl-24 pr-6"}`}
                        >
                            {/* Diamond */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2
          ${isLeft ? "right-[-40px]" : "left-[-40px]"}
          w-[80px] h-[80px]
          bg-gradient-to-br from-[#EAF0FF] to-[#DDE6FF]
          rotate-45 rounded-lg shadow-md
          flex items-center justify-center`}
                            >
                                 <img src={item.path} alt="icon" className="w-[46px] h-[46px] object-contain -rotate-45"/>
                            </div>

                            <h3 className="font-semibold text-gray-700 text-[22px] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-[16px] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>


            {/* ================= MOBILE ================= */}
            <div className="md:hidden p-8 space-y-6 overflow-visible"
                style={{
                    backgroundImage: "url('/image/marbuilding.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: "brightness(1)",
                }}>
                {DATA.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`relative overflow-visible bg-[#FFFDFC]
        border-t-4 border-blue-500 rounded-xl shadow-md
        pt-4 pb-4 mx-auto max-w-[260px]
        ${isLeft ? "pl-3 pr-14" : "pl-14 pr-3"}`}
                        >
                            {/* Diamond */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2
          ${isLeft ? "right-[-16px]" : "left-[-16px]"}
          w-[48px] h-[48px]
          bg-gradient-to-br from-[#EAF0FF] to-[#DDE6FF]
          rotate-45 rounded-md shadow-md
          flex items-center justify-center`}
                            >
                                <img src={item.path} alt="icon" className="w-[46px] h-[46px] object-contain -rotate-45"/>
                            </div>

                            <h3 className="font-semibold text-gray-700 text-[12px] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-[12px] leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>




        </section>
    );
}
