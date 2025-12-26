export default function CourseIncludes() {
  const courseIncludesData = [
    "14 hours, 34 minutes on-demand video",
    "21 Quizzes",
    "1 Practice test",
    "5 Articles",
    "Full lifetime access",
    "Access on mobile, desktop and TV",
    "Certificate of completion Requirements",
  ];

  return (
    <section className="bg-[#F7F7F7] py-8">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Heading */}
         <div className="flex items-start ml-2 md:-ml-10 mb-8">
                <h2 className="more-info-title">
                   This course includes
                </h2>
            </div>

        {/* Card */}
        <div className="relative rounded-xl bg-white shadow-sm p-6 md:p-10">

          {/* Dotted line */}
          <div className="absolute left-6 right-6 top-3 flex justify-between">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="w-[8px] h-[8px] md:w-[18px] md:h-[18px] rounded-full bg-gray-300"
              />
            ))}
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-4 p-4 md:p-12 mt-6">
            {courseIncludesData.map((item, index) => (
              <span
                key={index}
                className="border border-gray-300 rounded-full px-4 py-2 text-gray-600 text-[12px] md:text-[16px] whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
