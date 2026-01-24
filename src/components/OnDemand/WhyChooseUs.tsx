"use client";


type Item = {
    title: string;
    description: string;
    path: string
};

const ITEMS: Item[] = [
    {
        title: "Expert Lawyers",
        description: "Qualified legal professionals with 10+ years experience",
        path: "/image/ondemandwcu1.png"
    },
    {
        title: "Affordable Fees",
        description: "Transparent pricing with no hidden charges",
        path: "/image/ondemandwcu2.png"
    },
    {
        title: "Quick Turnaround",
        description: "Fast processing with 7-day company registration",
        path: "/image/ondemandwcu3.png"
    },
    {
        title: "PAN-India Services",
        description: "Legal services available across all Indian states",
        path: "/image/ondemandwcu4.png"
    },
];

type WhyChooseUsProps = {
    whyChooseUs: { title: string; description: string; icon?: string }[];
};
export default function WhyChooseUs({ whyChooseUs }: WhyChooseUsProps) {


    return (
        <section className="bg-[#F7F7F7] py-10">
            {/* HEADING */}
             <div className="flex items-start md:justify-start lg:items-start mb-4">
        <h2
          className="text-[#D56839] lg:ml-14 px-6 md:px-12 py-2 text-[16px] md:text-[24px] lg:text-[32px] font-semibold"
        >
          WhyChooseUs
        </h2>
      </div>
            {/* CONTAINER */}
            <div className="bg-white mx-4 md:w-[700px] lg:w-[1320px] md:mx-auto rounded-lg shadow-sm  relative">
                {/* CONTENT */}
                {/* <div className="pt-16 pb-10 px-4 md:px-8"> */}
                <div className="pt-8 md:pt-8 mt-10 pb-8 px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[300px] lg:w-[618px] md:p-2 p-2 flex gap-4 items-start"
                            >
                                {/* ICON */}
                               <img src={item.icon} alt="icon" className="object-contain flex items-center justify-center text-[#281A83] w-[24px] h-[24px] md:mt-2 md:w-[51px] md:h-[52px]" />
                                {/* TEXT */}
                                <div className="flex-1">
                                    <h3 className="text-[12px] md:text-[24px] lg:text-[32px] font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-[12px] md:text-[18px] lg:text-[24px] mt-2 md:whitespace-normal break-words">
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
