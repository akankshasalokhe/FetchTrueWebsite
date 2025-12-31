"use client";

interface TermItem {
  title: string;
  description?: string;
  points?: string[];
}

interface TermsConditionsProps {
  heading?: string;
  terms: TermItem[];
}

export default function TermsConditions({
  heading = "Terms & Conditions",
  terms,
}: TermsConditionsProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1000px] px-12 ">
        {/* Heading */}
        <h2 className="text-[28px] lg:text-[34px] font-medium text-[#6E26CB] mb-6">
          {heading}
        </h2>

        {/* List */}
        <ol className="list-decimal lg:pl-15 space-y-5 text-[#3A3A3A] text-justify">
          {terms.map((term, index) => (
            <li key={index}>
              <p className="font-normal text-[22px] lg:text-[24px] mb-1">
                {term.title}
              </p>

              {term.description && (
                <p className="text:[16px] lg:text-[18px] leading-[22px] text-[#6B6B6B]">
                  {term.description}
                </p>
              )}

              {term.points && (
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {term.points.map((point, i) => (
                    <li
                      key={i}
                      className="text:[16px] lg:text-[20px] leading-[22px] text-[#6B6B6B]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
