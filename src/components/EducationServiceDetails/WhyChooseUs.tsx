"use client";



type WhyChooseUsProps = {
    whyChooseUs?: {
        _id: string;
        title: string;
        description: string;
        icon?: string;
    }[];
};

export default function WhyChooseUs({ whyChooseUs }: WhyChooseUsProps) {
    return (
        <section className="bg-[#F7F7F7] py-10">
            {/* HEADING */}
             <div className="flex items-start ml-2 md:ml-6 lg:ml-32 mb-8">
                <h2 className="more-info-title">
                    Why Choose Us
                </h2>
            </div>

            {/* CONTAINER */}
            <div className="bg-white mx-4 md:w-[700px] lg:w-[1320px] md:mx-auto rounded-lg shadow-sm  relative">
                {/* DOTTED TOP LINE */}
                <div className="absolute -top-2 left-4 right-4 py-6 flex justify-between">
                    {/* MOBILE → 14 dots */}
                    <div className="flex justify-between w-full md:hidden">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <span
                                key={`m-${i}`}
                                className="w-[8px] h-[8px] rounded-full bg-gray-300"
                            />
                        ))}
                    </div>

                    {/* DESKTOP → 18 dots */}
                    <div className="hidden md:flex justify-between w-full">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <span
                                key={`d-${i}`}
                                className="w-[18px] h-[18px]  rounded-full bg-gray-300"
                            />
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                {/* <div className="pt-16 pb-10 px-4 md:px-8"> */}
                <div className="pt-20 md:pt-28 mt-10 pb-10 px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyChooseUs?.map((item, index) => (
                            <div
                                key={index}
                                className="md:border w-full rounded-xl md:w-[300px] lg:w-[618px] md:p-4 lg:p-8 p-2 flex gap-4 items-start"
                            >
                                {/* ICON */}
                               <img src={item.icon} alt="icon" className="object-cover text-[#281A83] w-[24px] h-[24px] md:mt-2 md:w-[51px] md:h-[52px]" />
                                {/* TEXT */}
                                <div className="flex-1">
                                    <h3 className="text-[12px] md:text-[24px] lg:text-[32px] font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-[12px] md:text-[18px] lg:text-[24px] mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
