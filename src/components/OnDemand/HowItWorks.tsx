
const steps = [
    {
        step: "01.",
        title: "Select Package",
        desc: "Choose the Package you need for your service",
    },
    {
        step: "02.",
        title: "Choose preferred expert",
        desc: "Fill in simple information required for your case or document.",
    },
    {
        step: "03.",
        title: "Professional visits at selected time",
        desc: "We connect you with the right lawyer or law firm.",
    },
    {
        step: "04.",
        title: "Service done + pay securely",
        desc: "Check pricing, process, and timeline before you confirm.",
    },
];

type HowItWorksProps = {
    howItWorks: {
        title: string;
        description: string;
        icon?: string;
    }[];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
    return (
        <section className="bg-[#F7F7F7] p-6 md:p-8">
            <h2 className="text-[#D56839] text-[18px] md:text-[24px] lg:text-[32px] lg:ml-18 font-semibold mb-6">
                How It Works?
            </h2>

            {/* ================= DESKTOP  ================= */}
            <div className="hidden md:grid relative lg:w-[1320px] bg-white rounded-2xl p-8 mx-auto grid-cols-4">
                {howItWorks.map((item, index) => {
                    const isOdd = index % 2 === 0;
                    const isEven = !isOdd;

                    return (
                        <div key={index} className="relative flex flex-col items-center">
                            <div
                                className={`
                  w-full px-6 py-8 text-center h-full
                  border border-dashed border-gray-400
                  ${isOdd ? "border-b-0" : ""}
                  ${isEven ? "border-t-0" : ""}
                `}
                            >
                                <div className="text-[#D56839] font-semibold md:text-[24px] lg:text-[32px] mb-2">
                                    0{index + 1}
                                </div>
                                <h3 className="font-medium md:text-[18px] lg:text-[24px] mb-3">{item.title}</h3>
                                <p className="text-gray-500 md:text-[16px] lg:text-[24px]">{item.description}</p>
                            </div>

                            {index !== steps.length - 1 && (
                                <span
                                    className={`
                    absolute right-[-6px]
                    ${isOdd ? "bottom-[77px]" : "top-[77px]"}
                    w-0 h-0
                    ${isOdd
                                            ? `
                          border-l-[8px] border-l-transparent
                          border-r-[8px] border-r-transparent
                          border-t-[8px] border-t-orange-500
                        `
                                            : `
                          border-l-[8px] border-l-transparent
                          border-r-[8px] border-r-transparent
                          border-b-[8px] border-b-orange-500
                        `
                                        }
                  `}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Mobile Version */}
            {/* <div className="block md:hidden bg-white p-4  rounded-2xl overflow-visible">
                {howItWorks.map((item, index) => {
                    const isOdd = index % 2 === 0;
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={index} className="relative overflow-visible">
                            
                            <div
                                className={`
                            px-5 py-6
                            border border-dashed border-orange-400
                            ${isOdd ? "border-r-0" : "border-l-0"}
                        `}
                            >
                                <div className="flex gap-2">
                                    <span className="text-[#D56839] text-xl font-semibold">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {index < 2 && (
                                <span
                                    className={`
                                    absolute
                                    z-10
                                    w-0 h-0
                                    ${index === 0
                                                                            ? `
                                            right-[100px] top-[115px]
                                            border-t-[8px] border-t-transparent
                                            border-b-[8px] border-b-transparent
                                            border-l-[10px] border-l-orange-500
                                        `
                                                                            : `
                                            left-[100px] top-[155px]
                                            border-t-[8px] border-t-transparent
                                            border-b-[8px] border-b-transparent
                                            border-r-[10px] border-r-orange-500
                                        `
                                                                        }
                                    `}
                                />
                            )}

                        </div>
                    );
                })}
            </div> */}


            {/* Mobile Version */}
            <div className="block md:hidden bg-white p-4 rounded-2xl">
                {howItWorks.map((item, index) => {
                    const isOdd = index % 2 === 0;
                    const isLast = index === howItWorks.length - 1;

                    return (
                        <div key={index} className="relative">

                            {/* BOX */}
                            <div
                                className={`
            relative px-5 py-6
            border border-dashed border-orange-400
            ${isOdd ? "border-r-0" : "border-l-0"}
          `}
                            >
                                <div className="flex gap-3">
                                    <span className="text-[#D56839] text-xl font-semibold">
                                        0{index + 1}
                                    </span>

                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* CONNECTOR */}
                                {!isLast && (
                                    <span
                                        className={`
                absolute top-1/2 -translate-y-1/2
                w-0 h-0
                ${isOdd
                                                ? `
                   top-[140px] right-[100px]
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-l-[10px] border-l-orange-500
                  `
                                                : `
                   top-[165px] right-[100px]
                    border-t-[8px] border-t-transparent
                    border-b-[8px] border-b-transparent
                    border-r-[10px] border-r-orange-500
                  `
                                            }
              `}
                                    />
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>



        </section>
    );
}

