

export default function SafetyandAssurance() {
    const data = [
        "Background-verified cleaners",
        "No damage guarantee",
        "Eco-friendly materials",
        "100% service satisfaction"
    ]
    return (
        <section className="w-full bg-gray-100 py-8 px-4">
            {/* Title */}
            <div className="flex items-start -ml-4 lg:ml-14 md:justify-start lg:items-start mb-2">
                <h2
                    className="text-[#D56839] px-8 py-2 text-[16px] md:text-[32px] font-semibold inline-block"
                >
                    Safety and Assurance
                </h2>
            </div>


            {/* <div className="md:w-[1320px] mx-auto">
                <div className="bg-white rounded-2xl shadow-md text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {data.map((item, index) => (
                            <p
                                key={index}
                                className="text-[12px] lg:text-[24px] p-8 leading-relaxed"
                            >
                             <span className="mt-2 lg:mt-4 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></span>

                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="md:max-w-6xl lg:max-w-none lg:w-[1320px] mx-auto">
                <div className="bg-white rounded-2xl shadow-md text-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4"
                            >
                                <span className="mt-2 lg:mt-4 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                                <p className="text-[12px] md:text-[18px] lg:text-[24px] leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </section>
    );
}
