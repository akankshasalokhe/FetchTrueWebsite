// 'use client';

// export default function WhyChooseUs() {
//   return (
//     <section className="w-full px-4 md:px-12 py-10">
//       {/* HEADER */}
//       <div className="mb-8">
//         <h2 className="text-2xl md:text-4xl font-semibold text-black">
//           Why Choose Us
//         </h2>
//         <p className="text-[14px] md:text-[18px] md:text-base text-[#000000] mt-2 max-w-2xl">
//           we are providing service that no other providers can give you with benefits
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//         {/* TOP FULL CARD */}
//         <div className="col-span-2 md:col-span-3 bg-[#F2F5F8] rounded-2xl p-6 flex items-center justify-between min-h-[120px]">
//           <div>
//             <h3 className="text-[12px] md:text-[24px] text-[#000000]">
//               Certified & Skilled Technicians
//             </h3>
//             <p className="text-[12px] md:text-[24px] text-[#000000] mt-1 max-w-sm md:max-w-xl">
//               Get support from verified IT professionals trained
//             </p>
//           </div>

//           {/* ICON PLACEHOLDER */}
//           <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
//             <img src="/image/wcuone.png" alt="icons" className="object-contain md:w-[97.1px] md:h-[97.1px]" />
//           </div>
//         </div>

//         {/* BOTTOM LEFT CARD */}
//         <div className="bg-[#F2F5F8] rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
//           <h3 className="text-[12px] md:text-[24px] md:text-base text-[#000000]leading-snug">
//             best and trusted <br /> services providers
//           </h3>

//           {/* ICON PLACEHOLDER */} 
//           <div className="mt-4 w-10 h-10 md:w-16 md:h-16 self-end">
//              <img src="/image/wcutwo.png" alt="icons" className="object-contain md:w-[97.1px] md:h-[97.1px]" />
//           </div>
//         </div>

//         {/* BOTTOM RIGHT CARD */}
//         <div className="bg-[#F2F5F8] rounded-2xl p-5 flex flex-col justify-between min-h-[140px] md:col-span-2">
//           <h3 className="text-[12px] md:text-[24px] md:text-base  text-[#000000] leading-snug max-w-sm">
//             best and offenable <br /> plans for users
//           </h3>

//           {/* ICON PLACEHOLDER */}
//           <div className="mt-4 w-10 h-10 md:w-16 md:h-16 self-end">
//              <img src="/image/wcuthree.png" alt="icons" className="object-contain md:w-[97.1px] md:h-[97.1px]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







'use client';

import { useWhyChooseService } from "@/src/context/WhyJustOurServiceContext";
import { useEffect } from "react";

type props = {
  moduleId: string;
}
export default function WhyChooseUs({ moduleId }: props) {
 
  const {
      services,
      loading,
      error,
      fetchWhyServices,
      clearServices,
    } = useWhyChooseService();
  
    useEffect(() => {
      if (!moduleId) return;
      clearServices();
      fetchWhyServices(moduleId);
    }, [moduleId]);
  
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
    const mappedServices = services.flatMap((service) =>
    service.items.map((item) => ({
      id: `${service._id}-${item.title}`,
      icon: item.icon,
      title: item.title,
      description: item.description,
      module: service.module,
    }))
  );

  return (
    /*  SECTION CENTERED */
    <section className="w-full max-w-[1218px] mx-auto px-4 md:px-8 py-10">
      
      {/* HEADER */}
      <div className="mb-8 text-center">
        <h2 className="text-[16px] md:text-[24px] font-semibold text-black">
          What you will get from us
        </h2>

         <p className="text-[12px] md:text-[18px] lg:text-[24px]">we are providing  service that no other providers can give you with benefits </p>
      </div>

      {/* CARDS */}
      <div className="space-y-6">
        {mappedServices.map((item,index) => (
          /*  CARD CENTERED */
          <div
            key={index}
            className="
              flex items-center
              mx-auto
              w-full
              max-w-[1218px]
              gap-8 md:gap-10
              bg-[#F2F2F2]
              rounded-2xl
              px-10 py-10
            "
          >
            {/* ICON */}
            <div className="flex items-center justify-center  w-14 h-14 md:w-20 md:h-20 rounded-xl bg-[#EEEEEE]">
              {/* <img
                src="/image/eduwcu.png"
                alt="checkicon"
                className="object-contain w-[29px] md:w-[45px]"
              /> */}
              <img src={item.icon} alt="Icon" width={32.22} height={32.22} />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[16px] md:text-[24px] font-semibold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-[12px] md:text-[18px] text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

