"use client";

type Section = {
    title: string;
    items: string[];
};

const DATA: Section[] = [
    {
        title: "Included",
        items: [
            "Deep degreasing of all kitchen surfaces",
            "Tiles, walls & backsplash scrubbing",
            "Sink, taps & drain sanitization",
            "Stove cleaning",
            "Exterior cleaning of appliances",
            "Floor disinfection",
            "Chimney outer cleaning (inner if in package)"

        ],
    },
    {
        title: "Not Included",
        items: [
            "Major repairs of appliances",
            "High-ceiling unreachable areas",
            "Pest control",
            "Freelancers & Creators",
            "Inside fridge/microwave (except premium plan)",
        ],
    },
];

export default function Included() {
    return (
        <section className="bg-[#F7F7F7] py-12">
            <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                {DATA.map((section, idx) => (
                    <div key={idx}>
                        {/* HEADING */}
                        <div className="flex items-start md:justify-start lg:items-start lg:-ml-35 mb-4">
                            <h2
                                className="text-[#D56839] lg:ml-28 px-6 md:px-12 py-2 text-[16px] md:text-[32px] font-semibold"
                            >
                                {section.title}
                            </h2>
                        </div>

                        {/* CARD */}
                        <div className="relative bg-white rounded-lg shadow-sm px-6 pt-6 lg:pt-14 pb-8">

                            {/* LIST */}
                            <ul className="space-y-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start mt-2 px-4 gap-3">
                                        <span className="mt-2 lg:mt-4 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                                        <p className="text-gray-600 text-[12px] md:text-[18px] lg:text-[24px] leading-relaxed">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

             {/* Image */}
        <div className="mt-10 p-4 flex justify-center overflow-hidden">
          <img
            src="/image/ondemandincluded.png"
            alt="About visual"
            className="lg:w-[982px] lg:h-[476px] object-cover"
          />
        </div>
        </section>
    );
}
