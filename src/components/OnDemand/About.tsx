export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      {/* Title */}
      <div className="flex items-start -ml-4 lg:ml-14 md:justify-start lg:items-start mb-2">
        <h2
          className="text-[#D56839] px-8 py-2 text-[16px] md:text-[32px] font-semibold inline-block"
        >
          About Us
        </h2>
      </div>

      
      <div className="md:w-[1320px] mx-auto">
        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-md text-gray-600 leading-relaxed">
          <p className="text-[12px] md:text-[24px] p-8">
            Kitchen Deep Cleaning is a detailed and professional service that removes stubborn grease, stains, and hidden dirt from tiles, cabinets, cooktops, chimneys, and hard-to-reach corners. This service ensures a hygienic, fresh, and safe cooking space by eliminating germs and odors, improving the overall look and cleanliness of your kitchen. Perfect for regular maintenance, post-events, or seasonal cleaning.
           </p>
          
        </div>

      
      </div>
    </section>
  );
}
