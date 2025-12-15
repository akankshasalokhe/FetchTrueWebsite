// 'use client';

// import Recommendation from '@/src/components/DesignStudio/Recommendation/page';
// import Image from 'next/image';

// const navItems = [
//     { label: 'Logo\nDesign', icon: '/image/logodesign.png' },
//     { label: 'Web\nDesign', icon: '/image/webdesign.png' },
//     { label: 'Graphic\nDesign', icon: '/image/graphicdesign.png' },
//     { label: 'Print\nDesign', icon: '/image/printdesign.png' },
// ];

// export default function DesignStudioPage() {
//     return (
//         <div className="relative w-full min-h-[260px] md:h-[336px] bg-[#2563EB] overflow-hidden">
//             {/* Background Image */}
//             <Image
//                 src="/image/marketingbgdesign.png"
//                 alt="Marketingnavbarbg"
//                 fill
//                 priority
//                 className="object-cover"
//             />

//             {/* Header */}
//             <div className="relative z-10 flex items-center gap-3 px-4 md:px-6 py-4 md:ml-8 mt-3 md:mt-5 border-b border-white/30">
//                 <button className="text-white text-xl">⟲</button>
//                 <h1 className="text-white font-semibold text-base md:text-lg">
//                     Design Studio
//                 </h1>
//             </div>

//             {/* Nav Icons */}
//             <div
//                 className="
//           relative z-10
//           flex justify-start
//           px-4 md:px-8 gap-6 md:gap-8
//           py-6 md:py-8
//           md:ml-8
//         "
//             >
//                 {navItems.map((item) => (
//                     <div
//                         key={item.label}
//                         className="flex flex-col items-center text-white cursor-pointer"
//                     >

//                         <div className="w-[42px] h-[42px] md:w-[89.52px] md:h-[89.52px] rounded-full bg-white flex items-center justify-center shadow-md">
//                             <div className="relative w-[18px] h-[18px] md:w-[34px] md:h-[34px]">
//                                 <Image
//                                     src={item.icon}
//                                     alt={item.label}
//                                     fill
//                                     className="object-contain"
//                                 />
//                             </div>
//                         </div>


//                         <p className="mt-2 text-[11px] md:text-sm font-medium text-center whitespace-pre-line leading-tight">
//                             {item.label}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//            <Recommendation />
//         </div>
//     );
// }





'use client';

import Recommendation from '@/src/components/DesignStudio/Recommendation/page';
import Image from 'next/image';

const navItems = [
  { label: 'Logo\nDesign', icon: '/image/logodesign.png' },
  { label: 'Web\nDesign', icon: '/image/webdesign.png' },
  { label: 'Graphic\nDesign', icon: '/image/graphicdesign.png' },
  { label: 'Print\nDesign', icon: '/image/printdesign.png' },
];

export default function DesignStudioPage() {
  return (
    <>
      {/* ---------------- NAVBAR / HERO SECTION ---------------- */}
      <section className="relative w-full bg-[#2563EB]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/marketingbgdesign.png"
            alt="Marketingnavbarbg"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[260px] md:min-h-[336px]">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 md:px-6 py-4 md:ml-8 mt-3 md:mt-5 border-b border-white/30">
            <button className="text-white text-xl">⟲</button>
            <h1 className="text-white font-semibold text-base md:text-lg">
              Design Studio
            </h1>
          </div>

          {/* Nav Icons */}
          <div
            className="
              flex justify-start
              px-4 md:px-8 gap-6 md:gap-8
              py-6 md:py-8
              md:ml-8
            "
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-white cursor-pointer"
              >
                <div className="w-[42px] h-[42px] md:w-[89.52px] md:h-[89.52px] rounded-full bg-white flex items-center justify-center shadow-md">
                  <div className="relative w-[18px] h-[18px] md:w-[34px] md:h-[34px]">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="mt-2 text-[11px] md:text-sm font-medium text-center whitespace-pre-line leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RECOMMENDATION SECTION ---------------- */}
      <section className="w-full mt-6 md:mt-10">
        <Recommendation />
      </section>
    </>
  );
}

