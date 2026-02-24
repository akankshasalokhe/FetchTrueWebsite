"use client";

import { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("https://api.fetchtrue.com/api/aboutus")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setContent(data.data[0].content);
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <section className="w-full py-16 ">
      <div className="max-w-[1100px] mx-auto px-4">
        
        <h1 className="text-xl md:text-2xl font-semibold text-left text-[#1a0d09] mb-8">
          About Us
        </h1>

        <div className="bg-white rounded-xl  p-6 md:p-10">
          {content ? (
            <div
              className="prose prose-sm md:prose-base max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className="text-center text-gray-400">Loading content...</p>
          )}
        </div>

      </div>
    </section>
  );
}