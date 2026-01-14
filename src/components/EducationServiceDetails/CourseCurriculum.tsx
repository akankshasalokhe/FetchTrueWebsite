// import { useState } from "react";

// export default function CourseCurriculum() {
//     const [openSection, setOpenSection] = useState<number | null>(null);
//     const [activeTab, setActiveTab] = useState<"module1" | "module2">("module1");
//     const [visibleCount, setVisibleCount] = useState<number>(4);

//     const toggleSection = (id: number) => {
//         setOpenSection(openSection === id ? null : id);
//         setActiveTab("module1");
//     };

//     const curriculumData = [
//         {
//             id: 1,
//             section: "Section 01-Duration 1 Week",
//             title: "Stepping into Flutter & Dart",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: [
//                 "Flutter Setup",
//                 "Dart Basics",
//                 "Widgets Overview"
//             ],
//             module2: [
//                 "State Management",
//                 "Layouts",
//                 "Navigation"
//             ]
//         },
//         {
//             id: 2,
//             section: "Section 02-Duration 2 Week",
//             title: "Flutter UI Fundamentals",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: ["Rows & Columns", "Containers"],
//             module2: ["ListView", "GridView"]
//         },
//         {
//             id: 3,
//             section: "Section 03-Duration 3 Week",
//             title: "State & Lifecycle",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: ["Stateful Widgets"],
//             module2: ["Provider", "Context"]
//         },
//         {
//             id: 4,
//             section: "Section 04-Duration 4 Week",
//             title: "API Integration",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: ["HTTP", "REST APIs"],
//             module2: ["Async/Await"]
//         },
//         {
//             id: 5,
//             section: "Section 05-Duration 5 Week",
//             title: "Firebase Basics",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: ["Auth"],
//             module2: ["Firestore"]
//         },
//         {
//             id: 6,
//             section: "Section 06-Duration 6 Week",
//             title: "Deployment",
//             subpoints: [
//                 { label: "6 Live Sessions" },
//                 { label: "3 Projects" }, { label: "2 Notes" }, { label: "7 Live Sessions" }
//             ],
//             module1: ["Build APK"],
//             module2: ["Play Store"]
//         }
//     ];

//     return (

//         <section className="bg-[#F7F7F7] py-12">
//             <div className="max-w-[1320px] w-full mx-auto p-6">
//                 {/* TITLE */}
//             <div className="flex items-start ml-0 md:-ml-14 mb-8 md:mb-18">
//                 <h2 className="more-info-title">
//                     Course Curriculum
//                 </h2>
//             </div>

//                 {/* Sections */}
//                 {curriculumData.slice(0, visibleCount).map((item) => (
//                     <div key={item.id} className="relative mb-15 border rounded-lg gap-8">
//                          {/* Section badge */}
//                                 <span className="absolute md:-top-11 -top-6 inline-block w-fit bg-indigo-600 text-white text-[12px] md:text-[24px] font-semibold px-3 py-1 rounded-t-xl">
//                                     {item.section}
//                                 </span>
//                         {/* Section Header */}
//                         <button
//                             onClick={() => toggleSection(item.id)}
//                             className="w-full flex justify-between items-center p-2 md:p-8"
//                          >
//                             <div className="flex flex-col w-full gap-2">
//                                 {/* Title + pills row */}
//                                 {/* <div className="flex items-center justify-between gap-4"> */}
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
//                                     {/* Title */}
//                                     <p className="font-medium text-start  md:ml-2 text-[12px] md:text-[24px] text-gray-700">
//                                         {item.title}
//                                     </p>

//                                     {/* Subpoints */}
//                                     <div className="flex flex-wrap -mr-18 gap-2">
//                                         {item.subpoints.map((sub, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="md:text-[16px] text-[8px] font-bold bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
//                                             >
//                                                 {sub.label}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                      <div className="flex items-center -mt-28 -mr-6 md:-mt-34 gap-2 md:gap-4 shrink-0">
//                                 <img
//                                     src="/image/GraduationCap.png"
//                                     alt="GraduationCap"
//                                     className="object-cover w-[18px] h-[18px] md:w-[38px] md:h-[38px]"
//                                 />
//                                 <span className="text-[10px] md:text-[24px] text-gray-600 font-semibold">
//                                     Vidit Aatrey
//                                 </span>


//                             </div>
//                             <span>{openSection === item.id ? "▲" : "▼"}</span>

//                         </button>

//                         {/* Revealed Content */}
//                         {openSection === item.id && (
//                             <div className="p-4 border-t bg-gray-50">

//                                 {/* Tabs */}
//                                 <div className="flex gap-3 mb-4">
//                                     <button
//                                         onClick={() => setActiveTab("module1")}
//                                         className={`px-4 py-2 text-[12px] rounded ${activeTab === "module1"
//                                             ? "bg-[#2818A3] text-white"
//                                             : "bg-gray-200"
//                                             }`}
//                                     >
//                                         Module 1
//                                     </button>

//                                     <button
//                                         onClick={() => setActiveTab("module2")}
//                                         className={`px-4 py-2 text-[12px] rounded ${activeTab === "module2"
//                                             ? "bg-[#2818A3] text-white"
//                                             : "bg-gray-200"
//                                             }`}
//                                     >
//                                         Module 2
//                                     </button>
//                                 </div>

//                                 {/* Tab Content */}
//                                 <ul className="list-disc pl-6 text-[12px] text-gray-700">
//                                     {(activeTab === "module1"
//                                         ? item.module1
//                                         : item.module2
//                                     ).map((topic, index) => (
//                                         <li key={index}>{topic}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ))}

//                 {/* N More Button */}
//                 {visibleCount < curriculumData.length && (
//                     <div className="text-center mt-6">
//                         <button
//                             onClick={() => setVisibleCount(curriculumData.length)}
//                             className="px-6 py-3 bg-[#2818A3] text-white rounded-lg"
//                         >
//                             {curriculumData.length - visibleCount} More
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }






import { useState } from "react";

type CourseCurriculumProps = {
    courseCurriculum: {
        _id: string;
        title: string;
        lists: string[];
        model: string[];
    }[];
};

export default function CourseCurriculum({ courseCurriculum }: CourseCurriculumProps) {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
    const [visibleCount, setVisibleCount] = useState<number>(4);

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
        setActiveModuleIndex(0);
    };



    const formatSectionNumber = (index: number) =>
        String(index + 1).padStart(2, "0");

    const getDurationText = (index: number) =>
        `${index + 1} ${index + 1 === 1 ? "Week" : "Weeks"}`;

    return (

        <section className="bg-[#F7F7F7] py-12">
            <div className="max-w-[1320px] w-full mx-auto p-6">
                {/* TITLE */}
                <div className="flex items-start ml-0 md:-ml-14 mb-8 md:mb-18">
                    <h2 className="more-info-title">
                        Course Curriculum
                    </h2>
                </div>

                {/* Sections */}
                {courseCurriculum.slice(0, visibleCount).map((item, index) => {
                    const sectionNumber = formatSectionNumber(index);
                    const duration = getDurationText(index);
                    return (
                        <div key={item._id} className="relative mb-15 border rounded-lg gap-8">
                            {/* Section badge */}
                            <span className="absolute md:-top-11 -top-6 inline-block w-fit bg-indigo-600 text-white text-[12px] md:text-[24px] font-semibold px-3 py-1 rounded-t-xl">
                                Section {sectionNumber} – Duration {duration}
                            </span>
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(item._id)}
                                className="w-full flex justify-between items-center p-2 md:p-8"
                            >
                                <div className="flex flex-col w-full gap-2">
                                    {/* Title + pills row */}
                                    {/* <div className="flex items-center justify-between gap-4"> */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                                        {/* Title */}
                                        <p className="font-medium text-start  md:ml-2 text-[12px] md:text-[24px] text-gray-700">
                                            {item.title}
                                        </p>

                                        {/* Subpoints */}
                                        <div className="flex flex-wrap -mr-18 gap-2">
                                            {item.lists.map((sub, index) => (
                                                <span
                                                    key={index}
                                                    className="md:text-[16px] text-[8px] font-bold bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                                                >
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center -mt-28 -mr-6 md:-mt-34 gap-2 md:gap-4 shrink-0">
                                    <img
                                        src="/image/GraduationCap.png"
                                        alt="GraduationCap"
                                        className="object-cover w-[18px] h-[18px] md:w-[38px] md:h-[38px]"
                                    />
                                    <span className="text-[10px] md:text-[24px] text-gray-600 font-semibold">
                                        Vidit Aatrey
                                    </span>


                                </div>
                                <span>{openSection === item._id ? "▲" : "▼"}</span>

                            </button>

                            {/* Revealed Content */}
                            {openSection === item._id && (
                                <div className="p-4 border-t bg-gray-50">

                                    {/* Tabs */}
                                    <div className="flex gap-3 mb-4 flex-wrap">
                                        {item.model.map((_, moduleIndex) => (
                                            <button
                                                key={moduleIndex}
                                                onClick={() => setActiveModuleIndex(moduleIndex)}
                                                className={`px-4 py-2 text-[12px] rounded ${activeModuleIndex === moduleIndex
                                                    ? "bg-[#2818A3] text-white"
                                                    : "bg-gray-200"
                                                    }`}
                                            >
                                                Module {moduleIndex + 1}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab Content */}
                                    <div className="text-[12px] md:text-[16px] text-gray-700 space-y-3">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.model[activeModuleIndex],
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

                {/* N More Button */}
                {visibleCount < courseCurriculum.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setVisibleCount(courseCurriculum.length)}
                            className="px-6 py-3 bg-[#2818A3] text-white rounded-lg"
                        >
                            {courseCurriculum.length - visibleCount} More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
