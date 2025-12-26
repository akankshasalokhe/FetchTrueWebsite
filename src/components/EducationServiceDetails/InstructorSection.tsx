export default function InstructorSection() {
    const institute = {
        name: "365 Careers",
        location: "Pune",
        rating: "4.5",
        students: "3,598,774",
        placements: "1,088,953",
        path: "/image/instructoricon.png"
    };

    const mentors = [
        {
            name: "Vidit Aatrey",
            role: "Sr. Web Designer",
            path: "/image/vidit.png"
        },
        {
            name: "Varun Khaitan",
            role: "Product Designer",
            path: "/image/varun.png"
        },
    ];

    return (
        <section className="bg-[#F7F7F7] py-12">
            <div className="max-w-[1320px] mx-auto px-4">

                {/* ===== Desktop Layout ===== */}
                <div className="hidden md:grid grid-cols-2 gap-10">

                    {/* Institute Card */}
                    <div>
                        <div className="flex items-start ml-2 md:-ml-6 mb-12">
                            <h2 className="more-info-title">
                                Our Instructor
                            </h2>
                        </div>


                        <div className="relative bg-white rounded-xl shadow-md p-12">
                            {/* dotted top */}
                            <div className="hidden md:flex justify-between w-full">
                                {Array.from({ length: 18 }).map((_, i) => (
                                    <span
                                        key={`d-${i}`}
                                        className="w-[18px] h-[18px] rounded-full bg-gray-300"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center  gap-4 mt-8">
                                {/* logo placeholder */}
                                <img src={institute.path} alt="icon" className="object-cover w-[87px] h-[87px]" />
                                <div>
                                    <p className="text-[32px] font-semibold whitespace-nowrap">{institute.name}</p>
                                    <p className="text-gray-500 text-[20px]">📍 {institute.location}</p>
                                </div>
                                <div className="flex ml-35">
                                    <button className="ml-auto whitespace-nowrap px-3 py-1 bg-gray-200 rounded-md text-gray-700">
                                        View Profile
                                    </button>
                                </div>
                            </div>





                            <div className="grid grid-cols-3 text-center mt-15">
                                <div>
                                    <p className="font-semibold text-[24px]">{institute.rating}</p>
                                    <p className="text-[14px] text-gray-500">Instructor Rating</p>
                                </div>
                                <div className="border-x">
                                    <p className="font-semibold text-[24px]">{institute.students}</p>
                                    <p className="text-[14px] text-gray-500">Students</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[24px]">{institute.placements}</p>
                                    <p className="text-[14px] text-gray-500">Senior Placements</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Our Mentor */}
                    <div>
                        <div className="flex items-start ml-2 md:-ml-6 mb-12">
                            <h2 className="more-info-title">
                                Our Mentor
                            </h2>
                        </div>


                        <div className="relative bg-white rounded-xl shadow-md p-6">
                            {/* dotted top */}
                            <div className="hidden md:flex justify-between w-full">
                                {Array.from({ length: 18 }).map((_, i) => (
                                    <span
                                        key={`d-${i}`}
                                        className="w-[18px] h-[18px] rounded-full bg-gray-300"
                                    />
                                ))}
                            </div>

                            <div className="flex gap-6 mt-10">
                                {mentors.map((mentor, i) => (
                                    <div key={i} className="text-center">
                                        {/* image placeholder */}
                                        <img src={mentor.path} alt="mentor_image" className="w-[191px] h-[187px] object-cover" />
                                        <p className="font-medium text-[24px]">{mentor.name}</p>
                                        <p className="text-[16px] text-gray-500">{mentor.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== Mobile Layout ===== */}
                <div className="md:hidden space-y-10">

                    {/* Institute */}
                    <div className="flex items-start ml-2 md:ml-12 mb-6">
                        <h2 className="more-info-title">
                            Our Instructor
                        </h2>
                    </div>


                    <div className="relative bg-white rounded-xl shadow-md p-6">
                        <div className="absolute top-3 left-4 right-4 flex justify-between">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <span key={i} className="w-[6px] h-[6px] rounded-full bg-gray-300" />
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <img src={institute.path} alt="icon" className="object-cover w-[53px] h-[53px]" />
                            <div>
                                <p className="font-semibold">{institute.name}</p>
                                <p className="text-sm text-gray-500">📍 {institute.location}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 text-center mt-6">
                            <div>
                                <p className="font-semibold text-[14px]">{institute.rating}</p>
                                <p className="text-[10px] text-gray-500">Rating</p>
                            </div>
                            <div className="border-x">
                                <p className="font-semibold text-[14px]">{institute.students}</p>
                                <p className="text-[10px] text-gray-500">Students</p>
                            </div>
                            <div>
                                <p className="font-semibold text-[14px]">{institute.placements}</p>
                                <p className="text-[10px] text-gray-500">Placements</p>
                            </div>
                        </div>

                        <button className="mt-6 w-full py-1 px-3  text-[14px] bg-gray-200 rounded-md text-indigo-600 font-medium">
                            View Profile
                        </button>
                    </div>

                    {/* Our Mentor */}
                    <div className="flex items-start ml-2 md:ml-12 mb-6">
                        <h2 className="more-info-title">
                            Our Mentor
                        </h2>
                    </div>


                    <div className="relative bg-white rounded-xl shadow-md p-6">
                        <div className="absolute top-3 left-4 right-4 flex justify-between">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <span key={i} className="w-[6px] h-[6px] rounded-full bg-gray-300" />
                            ))}
                        </div>

                        <div className="flex gap-6 mt-10">
                            {mentors.map((mentor, i) => (
                                <div key={i} className="text-center">
                                    <img src={mentor.path} alt="mentor_image" className="w-[115px] h-[113px] object-cover" />
                                    <p className="font-semibold text-[14px]">{mentor.name}</p>
                                    <p className="text-[12px] text-gray-500">{mentor.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
