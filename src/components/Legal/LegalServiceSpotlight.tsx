"use client";

import { useWhyChooseService } from "@/src/context/WhyJustOurServiceContext";
import { Home, Scale, FileText, Clock, ShieldCheck } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function LegalServiceSpotlight() {

  const {moduleId} = useParams();
  const { services, loading, fetchWhyServices } = useWhyChooseService();

  useEffect(()=>{
    if(moduleId){
      fetchWhyServices(moduleId as string)
    }
  },[moduleId]);

  console.log("whyjust moduleid:",moduleId)

    if (loading) return null;

 const moduleServices = services.filter(
    (service) => service.module._id === moduleId
  );

  // Flatten all items from this module
  const items = moduleServices.flatMap((service) => service.items);

  
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-black">
          Legal Service Spotlight
        </h2>
        <p className="text-gray-600 mt-2">
          we are providing you the best and useful legal services
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <Home size={40} />
            <h3 className="mt-4 text-[20px] font-semibold">Company Setup</h3>
            <p className="text-[13px] text-white/80 mt-1">
              Start your business the right way.
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium">
              ₹ 499/- Onwards
            </div>
          </div>

          <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <Scale size={40} />
            <h3 className="mt-4 text-[20px] font-semibold">Find Lawyer</h3>
            <p className="text-[13px] text-white/80 mt-1">
              Get professional legal advice.
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
              <Clock size={16} />
              10 - 15min
            </div>
          </div>

          <div className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center">
            <FileText size={40} />
            <h3 className="mt-4 text-[18px] font-semibold">
              Legal Document
            </h3>
            <p className="text-[13px] text-white/80 mt-1">
              Draft and review important document
            </p>

            <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
              <ShieldCheck size={16} />
              Trusted
            </div>
          </div> */}

           {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12"
                />
              )}

              <h3 className="mt-4 text-[20px] font-semibold">{item.title}</h3>
              <p className="text-[13px] text-white/80 mt-1">{item.description}</p>
              <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
              {item.list}
            </div>
        
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { Clock, ShieldCheck } from "lucide-react";
// import { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { useWhyChooseService } from "@/src/context/WhyJustOurServiceContext";

// export default function LegalServiceSpotlight() {
//   const { moduleId } = useParams();
//   const { services, loading, fetchWhyServices } = useWhyChooseService();

//   // Fetch services by moduleId when component mounts or moduleId changes
//   useEffect(() => {
//     if (moduleId) {
//       fetchWhyServices(moduleId as string);
//     }
//   }, [moduleId]);

//   if (loading) return null;

//   // Take the first module’s items if multiple modules returned
//   const items = services[0]?.items || [];

//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-[1200px] mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-[28px] font-semibold text-black">
//           Legal Service Spotlight
//         </h2>
//         <p className="text-gray-600 mt-2">
//           We are providing you the best and useful legal services
//         </p>

//         {/* Cards */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#8B4A24] rounded-[20px] py-10 px-6 text-white flex flex-col items-center"
//             >
//               {/* Use item.icon if exists */}
//               {item.icon && (
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-12 h-12"
//                 />
//               )}

//               <h3 className="mt-4 text-[20px] font-semibold">{item.title}</h3>
//               <p className="text-[13px] text-white/80 mt-1">{item.description}</p>
//               <p className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">{item.list}</p>

//               {/* Dynamic footer */}
//               {/* <div className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[16px] font-medium flex items-center gap-2">
//                 {item.title.toLowerCase().includes("lawyer") ? (
//                   <>
//                     <Clock size={16} /> 10 - 15min
//                   </>
//                 ) : item.title.toLowerCase().includes("legal document") ? (
//                   <>
//                     <ShieldCheck size={16} /> Trusted
//                   </>
//                 ) : (
//                   <>₹ 499/- Onwards</>
//                 )}
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
