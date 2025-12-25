"use client";

type Section = {
  title: string;
  items: string[];
};

const DATA: Section[] = [
  {
    title: "What You'll Learn",
    items: [
      "Design highly available, fault-tolerant systems on AWS.",
      "Understand core AWS services such as EC2, S3, VPC, RDS, and Lambda.",
      "Apply best practices for security, scalability, and cost optimization.",
      "Manage cloud infrastructure using CloudFormation and IAM policies.",
      "Prepare for and pass the AWS Solutions Architect Associate (SAA-C03) exam with confidence.",
    ],
  },
  {
    title: "Eligible For",
    items: [
      "Students & Fresh Graduates.",
      "Working Professionals",
      "Career Switchers",
      "Freelancers & Creators",
      "Non-Design Background Learners",
    ],
  },
];

export default function LearnAndEligible() {
  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {DATA.map((section, idx) => (
          <div key={idx}>
            {/* HEADING */}
            <div className="flex items-start ml-2 md:ml-2 mb-4">
                <h2 className="more-info-title">
                   {section.title}
                </h2>
            </div>

            {/* CARD */}
            <div className="relative bg-white rounded-lg shadow-sm px-6 pt-14 pb-8">
              {/* DOTTED TOP */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[8px] h-[8px] md:w-[18px] md:h-[18px] rounded-full bg-gray-200"
                  />
                ))}
              </div>

              {/* LIST */}
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start mt-5 px-4 gap-3">
                    <span className="text-green-500 text-lg mt-[2px]">✓</span>
                    <p className="text-gray-600 text-[12px] md:text-[18px] leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
