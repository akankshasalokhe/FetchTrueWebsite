import { Bot } from "lucide-react";

export default function WhyChooseUs() {
  const aiServices = [
    {
      id: 1,
      title: "Expert AI Developers",
      description:
        "Professionals skilled in NLP, machine learning, automation, and multi-platform bot development.",
    },
    {
      id: 2,
      title: "Expert AI Developers",
      description:
        "Professionals skilled in NLP, machine learning, automation, and multi-platform bot development.",
    },
    {
      id: 3,
      title: "Expert AI Developers",
      description:
        "Professionals skilled in NLP, machine learning, automation, and multi-platform bot development.",
    },
    {
      id: 4,
      title: "Expert AI Developers",
      description:
        "Professionals skilled in NLP, machine learning, automation, and multi-platform bot development.",
    },
  ];

  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-1">
        
        {/* Heading */}
        <h2 className="text-center text-[16px] md:text-[30px] lg:text-[36px] font-semibold text-gray-900 mb-10">
          Why Just Our AI Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-4 bg-white rounded-xl p-4 md:p-4 lg:p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#0ea5b7] text-white shrink-0">
                <Bot size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-[16px] lg:text-[20px] text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-[14px] lg:text-[18px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
