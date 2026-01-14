"use client";

const WhyChooseUs = () => {
    const WHY_CHOOSE_US = [
        {
            id: 1,
            title: "Expert Lawyers",
            description: "Qualified legal professionals with 10+ years experience",
        },
        {
            id: 2,
            title: "Quick Turnaround",
            description: "Fast processing with 7-day company registration",
        },
        {
            id: 3,
            title: "Affordable Fees",
            description: "Transparent pricing with no hidden charges",
        },
        {
            id: 4,
            title: "PAN-India Services",
            description: "Legal services available across all Indian states",
        },
    ];

    return (
        <section className="bg-[#F7F7F7] py-8 px-4">

            {/* Title */}
      <div className="flex items-start ml-1 md:ml-0 md:justify-center mb-6">
        <h2
          className="text-white bg-black px-8 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold inline-block"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
          Why Choose Us?
        </h2>
      </div>

            {/* CARDS */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 md:gap-8 gap-2">
                {WHY_CHOOSE_US.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white md:w-[330px] lg:w-[542px] md:h-[200px] lg:h-[277px] rounded-2xl md:p-8 p-2 shadow-md flex flex-col items-center text-center"
                    >
                        {/* ICON */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <img src="/image/ChartLineUp.png" alt="ChartLineUp" className="md:w-[43.8px] md:h-[43.8px] w-[40px] h-[40px] p-2"/>
                        </div>

                        {/* TITLE */}
                        <h3 className="lg:text-[24px] md:text-[20px] text-[12px] font-semibold text-black mb-2">
                            {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 lg:text-[24px] md:text-[20px] text-[12px] leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default WhyChooseUs;
