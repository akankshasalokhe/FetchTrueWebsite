export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      {/* Title */}
      <div className="flex items-start -ml-6 lg:ml-0 lg:justify-center mb-2">
        <h2 className="text-[#2164F4] px-6 py-2 text-[16px] lg:text-[36px] font-semibold inline-block">
          About Us
        </h2>
      </div>

      <div className="lg:w-[1320px] mx-auto">
        {/* Content Card */}
        <div className="bg-white border-t-4 border-blue-500 rounded-xl shadow-md text-gray-600 leading-relaxed">
          <p className="text-[14px] lg:text-[24px] p-4 lg:p-8">
            A logo is the face of your brand. Our custom logo design service creates
            unique, memorable, and versatile logos tailored to your business
            identity. Whether you’re a startup, small business, or large brand, we
            deliver high-quality, professional designs that help you stand out.
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 lg:mt-12 flex justify-center overflow-hidden">
          <img
            src="/image/maraboutbg.png"
            alt="About visual"
            className="
              w-full md:-w-[540px] md:h-[330px]
              lg:w-[902px] lg:h-[511px]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
