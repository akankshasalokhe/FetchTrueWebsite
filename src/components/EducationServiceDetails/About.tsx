"use client";

type AboutUsProps = {
  aboutUs: string[];
};

export default function AboutUs({ aboutUs }: AboutUsProps) {
  return (
    <section className="bg-[#F7F7F7] py-10">
      {/* HEADING */}
      <div className="flex items-start ml-2 md:ml-6 lg:ml-32 mb-8">
        <h2 className="more-info-title">About Us</h2>
      </div>

      {/* CARD CONTAINER */}
      <div className="relative bg-white mx-4 md:mx-auto md:w-[700px] lg:w-[1320px] rounded-lg shadow-sm">

        {/* DOTTED TOP LINE */}
        <div className="absolute top-4 left-6 right-6 flex justify-between">
          {/* MOBILE → 14 dots */}
          <div className="flex w-full justify-between md:hidden">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={`m-${i}`}
                className="w-[8px] h-[8px] rounded-full bg-gray-300"
              />
            ))}
          </div>

          {/* DESKTOP → 18 dots */}
          <div className="hidden md:flex w-full justify-between">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={`d-${i}`}
                className="w-[18px] h-[18px] rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        {/* <div className="pt-20 md:pt-28 px-6 md:px-10 pb-10">
          <p className="text-gray-600 text-[12px] md:text-[22px] leading-relaxed">
            The Ultimate AWS Certified Solutions Architect – Associate 2025
            course is your complete guide to mastering Amazon Web Services
            (AWS) and passing the SAA-C03 certification exam.
          </p>

          <p className="text-gray-600 text-[12px] md:text-[22px] leading-relaxed mt-6">
            This program covers everything you need from core AWS services to
            hands-on architecture design to help you build secure, scalable,
            and cost-efficient cloud solutions. You’ll learn real-world cloud
            architecture through step-by-step video lessons, practical labs,
            and quizzes, preparing you to design and deploy AWS-based
            applications confidently.
          </p>
        </div> */}
         <div className="pt-20 md:pt-28 px-6 md:px-10 pb-10">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className="text-[#606060] text-[14px] md:text-[18px] lg:text-[24px] leading-8"
                      //  [&_strong]:text-[#281A83] [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
