

// export default function AboutSection({ aboutUs }: { aboutUs: string[] }) {
//   return (
//     <section className="w-full bg-gray-100 py-8 px-4">
//       {/* Title */}
//       <div className="flex items-start ml-1 md:ml-0 md:justify-center mb-6">
//         <h2
//           className="text-white bg-black px-8 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold inline-block"
//           style={{
//             clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
//           }}
//         >
//           About Us
//         </h2>
//       </div>

      
//       <div className="md:w-[700px] lg:w-[1320px] mx-auto">
//         {/* Content Card */}
//         <div className="bg-white rounded-2xl shadow-md text-gray-600 leading-relaxed">
//           {/* Description */
//           }
//           <p className="hidden md:block md:text-[18px] lg:text-[24px] p-8">
//             {aboutUs.map((paragraph, index) => (
//               <span key={index} className="block mb-4">
//                 {paragraph}
//               </span>
//             ))}
//           </p>
//           {/* <div className="block md:hidden lg:hidden p-4">
//             <p className="text-[12px]">
//               Managed IT Services & Support refers to the process of assigning specialist service providers to handle the upkeep, monitoring, and management of an organization&aposs IT systems and infrastructure is known as managed IT services and support. Businesses collaborate with managed service providers (MSPs), who offer proactive solutions, round-the-clock support, and cutting-edge technology to keep operations operating efficiently and safely, rather than managing complicated IT difficulties internally.
//             </p>
//             <p className="mt-2 text-[12px]">
//               Our strategy is proactive rather than reactive. Before they interfere with your workflow, we find and fix possible problems to guarantee continuous productivity and business continuity. Our knowledgeable specialists offer ongoing maintenance, system upgrades, and performance enhancements to keep your technology constantly in line with your changing company objectives.
//             </p>
//           </div> */}
//         </div>

//         {/* Image */}
//         <div className="mt-10 flex justify-center overflow-hidden">
//           <img
//             src="/image/itserviceabout.png"
//             alt="About visual"
//             className="md:w-[1080px] md:h-[350px] lg:h-[483px] object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


type AboutSectionProps = {
  aboutUs: string[];
  highlight: string[];
};


export default function AboutSection({ aboutUs, highlight }: AboutSectionProps) {

  return (
    <section className="w-full bg-gray-100 py-8 px-4">
      {/* Title */}
      <div className="flex items-start ml-1 md:ml-0 md:justify-center mb-6">
        <h2
          className="text-white bg-black px-8 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold inline-block"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
          About Us
        </h2>
      </div>

      <div className="md:w-[700px] lg:w-[1320px] mx-auto">
        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md text-gray-600 leading-relaxed p-8">
          {aboutUs.map((html, index) => (
            <div
              key={index}
              className="md:text-[18px] lg:text-[24px]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center overflow-hidden">
          <img
            // src="/image/itserviceabout.png"
            src={highlight[0]}
            alt="About visual"
            className="md:w-[1080px] md:h-[350px] lg:h-[483px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
