
type CertificationProps = {
  certificateImage?: string[];
};

export default function Certification({ certificateImage }: CertificationProps) {
  return (
    <section className="bg-[#F7F7F7] py-8">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Heading */}
        <div className="flex items-start ml-2 md:ml-8 lg:-ml-12 mb-8">
          <h2 className="more-info-title">Certification</h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm h-auto md:h-[450px] lg:h-auto p-6 md:p-6 lg:p-10">

          {/* Bullet Text */}
          <p className="text-gray-600 text-center text-[12px] md:text-[24px] mb-2 whitespace-nowrap">
            • Professional Certificate on completion
          </p>

          {/* Certificate Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-[617px] h-[160px] md:h-[440px] flex items-center justify-center text-gray-400 text-sm md:text-base">
              {certificateImage && certificateImage.length > 0 ? (
                <img src={certificateImage[0]} alt="certificate" className="object-cover max-w-[617px] h-[160px] md:h-[250px] lg:h-[440px] p-4 md:p-0" />
              ) : (
                <img src="/image/educertificate.png" alt="certificate" className="object-cover" />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
