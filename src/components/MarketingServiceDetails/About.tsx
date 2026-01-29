
type AboutSectionProps = {
  aboutUs: string[];
  highlight: string[];
};

export default function AboutSection({ aboutUs, highlight }: AboutSectionProps) {
  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      {/* Title */}
      <div className="flex items-start -ml-6 lg:ml-0 md:justify-center lg:justify-center mb-2">
        <h2 className="text-[#2164F4] px-6 py-2 text-[16px] md:text-[24px] lg:text-[36px] font-semibold inline-block">
          About Us
        </h2>
      </div>

      <div className="lg:w-[1320px] mx-auto">
        {/* Content Card */}
        <div className="bg-white border-t-4 border-blue-500 rounded-xl shadow-md text-gray-600 leading-relaxed">
          {aboutUs.map((html, index) => (
            <div
              key={index}
             className="text-[14px] lg:text-[24px] p-4 lg:p-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}

        </div>

        {/* Image */}
        <div className="mt-6 lg:mt-12 flex justify-center overflow-hidden">
          <img
            // src="/image/maraboutbg.png"
            src={highlight[0]}
            alt="About visual"
            className="
              w-full md:-w-[540px] md:h-[330px]
              lg:w-[902px] lg:h-[511px]
              object-fit
            "
          />
        </div>
      </div>
    </section>
  );
}
