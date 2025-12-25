import { useState } from "react";

export default function CourseCurriculum() {
    const [openSection, setOpenSection] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<"module1" | "module2">("module1");
    const [visibleCount, setVisibleCount] = useState<number>(4);

    const toggleSection = (id: number) => {
        setOpenSection(openSection === id ? null : id);
        setActiveTab("module1");
    };

    const curriculumData = [
        {
            id: 1,
            section: "Section 01",
            title: "Stepping into Flutter & Dart",
            module1: [
                "Flutter Setup",
                "Dart Basics",
                "Widgets Overview"
            ],
            module2: [
                "State Management",
                "Layouts",
                "Navigation"
            ]
        },
        {
            id: 2,
            section: "Section 02",
            title: "Flutter UI Fundamentals",
            module1: ["Rows & Columns", "Containers"],
            module2: ["ListView", "GridView"]
        },
        {
            id: 3,
            section: "Section 03",
            title: "State & Lifecycle",
            module1: ["Stateful Widgets"],
            module2: ["Provider", "Context"]
        },
        {
            id: 4,
            section: "Section 04",
            title: "API Integration",
            module1: ["HTTP", "REST APIs"],
            module2: ["Async/Await"]
        },
        {
            id: 5,
            section: "Section 05",
            title: "Firebase Basics",
            module1: ["Auth"],
            module2: ["Firestore"]
        },
        {
            id: 6,
            section: "Section 06",
            title: "Deployment",
            module1: ["Build APK"],
            module2: ["Play Store"]
        }
    ];

    return (

        <section className="bg-[#F7F7F7] py-12">
            <div className="max-w-[1320px] w-full mx-auto p-6">
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-orange-500 mb-6">
                    Course Curriculum
                </h2>

                {/* Sections */}
                {curriculumData.slice(0, visibleCount).map((item) => (
                    <div key={item.id} className="mb-4 border rounded-lg">

                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(item.id)}
                            className="w-full flex justify-between items-center p-4"
                        >
                            <div>
                                <span className="text-sm text-orange-500 font-medium">
                                    {item.section}
                                </span>
                                <p className="font-medium">{item.title}</p>
                            </div>
                            <span>{openSection === item.id ? "▲" : "▼"}</span>
                        </button>

                        {/* Revealed Content */}
                        {openSection === item.id && (
                            <div className="p-4 border-t bg-gray-50">

                                {/* Tabs */}
                                <div className="flex gap-3 mb-4">
                                    <button
                                        onClick={() => setActiveTab("module1")}
                                        className={`px-4 py-2 rounded ${activeTab === "module1"
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200"
                                            }`}
                                    >
                                        Module 1
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("module2")}
                                        className={`px-4 py-2 rounded ${activeTab === "module2"
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200"
                                            }`}
                                    >
                                        Module 2
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <ul className="list-disc pl-6 text-gray-700">
                                    {(activeTab === "module1"
                                        ? item.module1
                                        : item.module2
                                    ).map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

                {/* N More Button */}
                {visibleCount < curriculumData.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setVisibleCount(curriculumData.length)}
                            className="px-6 py-3 bg-orange-500 text-white rounded-lg"
                        >
                            {curriculumData.length - visibleCount} More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
