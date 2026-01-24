// "use client";

// import Link from "next/link";
// import FinanceCard from "../ui/FinanceCard";
// import { useRef } from "react";



// const recommendedServices = [
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
//   {
//     image: "/image/FinanceImage.jpg",
//     title: "Personal Loan",
//     category: "Banking",
//     discount: "5%",
//     earnUpto: "6%",
//     rating: 5,
//     loanAmount: "Upto 20 Lac",
//     approvalTime: "24 Hours",
//     duration: "12–60 Months",
//     interestRate: "Starting 10.99%",
//     slug:"finance-loan",
//     detailslug:"personal-loan"
//   },
// ];

// const BestSellingSection = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     if (!scrollRef.current) return;

//     const scrollAmount = 320;

//     if (e.key === "ArrowRight") {
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }

//     if (e.key === "ArrowLeft") {
//       scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="w-full bg-[#F6FBF7]">
//       <div className="max-w-[1440px] mx-auto px-4">

//         {/* TITLE */}
//         <h2 className="text-[24px] font-medium text-[#1A1A1A] mb-6">
//           Best Selling
//         </h2>

//         {/* HORIZONTAL SCROLL */}
//         <div
//           ref={scrollRef}
//           tabIndex={0}                     // ✅ keyboard focus
//           onKeyDown={handleKeyDown}        // ✅ arrow key scroll
//           className="
//             flex
//             gap-4 lg:gap-6
//             overflow-x-auto
//             scrollbar-hide
//             scroll-smooth
//             pb-4
//             outline-none
//             focus:ring-2
//             focus:ring-[#2E7D32]
//             focus:ring-offset-2
//           "
//         >
//           {recommendedServices.map((item, index) => (
//             <FinanceCard key={index} {...item} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BestSellingSection;



"use client";

import FinanceCard from "../ui/FinanceCard";
import { useEffect, useRef } from "react";
import { useMostPopular } from "@/src/context/MostPopularContext";
import Link from "next/link";
import { useParams } from "next/navigation";



const MostPopularSection = ({ moduleId }:{ moduleId:string}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
    
        const scrollAmount = 320;
    
        if (e.key === "ArrowRight") {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    
        if (e.key === "ArrowLeft") {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      };

       const { services,loading,error,fetchMostPopular } = useMostPopular();
        
        useEffect(()=>{
          if(moduleId) {
            fetchMostPopular(moduleId)
          }
        },[moduleId])

        const { categoryId } = useParams<{
                  moduleId: string;
                  categoryId: string;
                }>();

        console.log("finance Module Id:",moduleId)
      
        if(loading) return null;
        if (error) return null;

  return (
    <section className="w-full py-14 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-Medium text-[#1A1A1A] mb-6">
          Most Popular
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div
        ref={scrollRef}
          tabIndex={0}                     
          onKeyDown={handleKeyDown}
          className="
            flex
            gap-4 lg:gap-6
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            pb-4
          "
        >
          {services.map((service) => (
            <Link href={`/MainModules/Finance/${moduleId}/${categoryId}/${service._id}`}
             key={service.serviceId} className="snap-start shrink-0">
                            <FinanceCard  
                              key={service.serviceId}
                          title={service.serviceName}
                          category={service.category?.name}
                          keyvalues={service.keyValues}
                          earnUpto={service.franchiseDetails?.commission}
                          
                          discount={service.serviceDetails?.packages?.[0]?.discount}
                          rating={Math.round(service.averageRating || 0)}
                          totalreviews={service.totalReviews}
                          image={
                            service.thumbnailImage 
                          }
                          slug={service.category?.name
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}
                          detailslug={service.serviceId}
            
                            />
                          </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MostPopularSection;
