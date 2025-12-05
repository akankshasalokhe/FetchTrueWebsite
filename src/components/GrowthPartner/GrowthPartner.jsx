// "use client";

// import Image from "next/image";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function GrowthPartner() {
//   const feedback = [
//     {
//       name: "Akshay Rao",
//       image: "/mockup/person1.png",
//       subtitle: "Growth Partner",
//       description:
//         "Joining Fetch True as a Growth Partner helped me scale my income and build real connections.",
//       rating: 4,
//     },
//     {
//       name: "Priya Sharma",
//       image: "/mockup/person2.png",
//       subtitle: "Brand Associate",
//       description:
//         "The platform provides incredible support and real opportunities. I feel more confident than ever!",
//       rating: 5,
//     },
//     {
//       name: "Rohit Verma",
//       image: "/mockup/person3.png",
//       subtitle: "Sales Executive",
//       description:
//         "Amazing experience! The structure, training, and tools Fetch True provides made everything smooth.",
//       rating: 4,
//     },
//   ];

//   const controls = [useAnimation(), useAnimation(), useAnimation()];
//   const containerRef = useRef(null);
//   const inView = useInView(containerRef, { amount: 0.3, once: false });

//   useEffect(() => {
//     if (!inView) return;

//     const runAnimation = async () => {
//       const startY = 120;
//       const riseY = -60;
//       const sideShift = 420; 
//       const tiltAngle = 15;

//       // INITIAL STATE
//       controls.forEach((c) =>
//         c.set({
//           opacity: 0,
//           y: startY,
//           x: -80,
//           rotate: 0,
//           scale: 0.9,
//           zIndex: 20,
//         })
//       );

//       // Delay before rise
//       await new Promise((r) => setTimeout(r, 200));

//       // RISE ALL CARDS
//       await Promise.all(
//         controls.map((c) =>
//           c.start({
//             opacity: 1,
//             y: riseY,
//             scale: 1,
//             transition: { duration: 0.8, ease: "easeOut" },
//           })
//         )
//       );

//       // SMALL CENTER POP
//       await controls[1].start({
//         y: riseY - 20,
//         scale: 1.05,
//         zIndex: 50,
//         transition: { duration: 0.5, ease: "easeOut" },
//       });

//       // SPREAD LEFT & RIGHT CARDS
//       await Promise.all([
//         controls[0].start({
//           x: -sideShift,
//           rotate: -tiltAngle,
//           opacity: 1,
//           scale: 1.03,
//           zIndex: 60, // in front
//           transition: { duration: 0.7, ease: "easeOut" },
//         }),
//         controls[2].start({
//           x: sideShift,
//           rotate: tiltAngle,
//           opacity: 1,
//           scale: 1.03,
//           zIndex: 60, // in front
//           transition: { duration: 0.7, ease: "easeOut" },
//         }),
//       ]);

//       // HOLD
//       await new Promise((r) => setTimeout(r, 1500));

//       // RESET
//       await Promise.all([
//         controls[0].start({
//           x: 0,
//           rotate: 0,
//           scale: 1,
//           opacity: 1,
//           zIndex: 20,
//           transition: { duration: 0.5, ease: "easeInOut" },
//         }),
//         controls[2].start({
//           x: 0,
//           rotate: 0,
//           scale: 1,
//           opacity: 1,
//           zIndex: 20,
//           transition: { duration: 0.5, ease: "easeInOut" },
//         }),
//       ]);

//       await controls[1].start({
//         y: riseY,
//         scale: 1,
//         zIndex: 40,
//         transition: { duration: 0.5, ease: "easeInOut" },
//       });

//       // EXIT
//       await new Promise((r) => setTimeout(r, 400));

//       controls.forEach((c) =>
//         c.start({
//           opacity: 0,
//           y: startY,
//           transition: { duration: 0.6, ease: "easeIn" },
//         })
//       );
//     };

//     runAnimation();
//   }, [inView]);

//   return (
//     <div className="w-full hidden lg:block py-20 px-6 bg-white">
//       <h2 className="text-xl text-center font-semibold">
//         What Our Growth partners & <br /> Users say about us
//       </h2>

//       <div ref={containerRef} className="relative mt-6">
//         <Image
//           src="/mockup/growthpartner.png"
//           alt="growthpartner"
//           className="mx-auto rounded-xl w-full h-[80vh] object-cover"
//           width={1200}
//           height={800}
//         />

//         {/* TEXT BOX */}
//         <div className="absolute z-20 text-center bottom-0 left-1/2 -translate-x-1/2 bg-pink/90 text-white border border-white rounded-xl p-8 w-full max-w-md shadow-xl">
//           <p className="text-xl mb-3 font-bold">One Platform Every Service</p>
//           <p className="text-gray-100 text-sm leading-relaxed">
//             Over 1000+ great responses from our growth partners and users — we
//             provide seamless services that solve real world problems.
//           </p>
//         </div>

//         {/* CARDS */}
//         <div
//           className="absolute bottom-36 w-full flex justify-center items-end z-40"
//           style={{ perspective: "1200px",
//             transform: "translateX(-10px)",
//            }}
//         >
//           {feedback.map((item, i) => (
//             <motion.div
//               key={i}
//               animate={controls[i]}
//               className="absolute bg-white shadow-2xl rounded-xl p-6 w-64 h-80 flex flex-col items-center border border-gray-100"
//               style={{
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 zIndex: i === 1 ? 40 : 20,
//               }}
//             >
//               <div className="relative w-20 h-20 mb-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="rounded-full object-cover border-2 border-blue-100"
//                 />
//               </div>

//               <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//               <p className="text-sm text-blue-600">{item.subtitle}</p>

//               <p className="text-center text-gray-600 text-sm mt-3 flex-grow">
//                 {item.description}
//               </p>

//               <div className="flex mt-3 text-yellow-500">
//                 {"★".repeat(item.rating)}
//                 {"☆".repeat(5 - item.rating)}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function GrowthPartner() {
  const feedback = [
    {
      name: "Akshay Rao",
      image: "/mockup/person1.png",
      subtitle: "Growth Partner",
      description:
        "Joining Fetch True as a Growth Partner helped me scale my income and build real connections.",
      rating: 4,
    },
    {
      name: "Priya Sharma",
      image: "/mockup/person2.png",
      subtitle: "Brand Associate",
      description:
        "The platform provides incredible support and real opportunities. I feel more confident than ever!",
      rating: 5,
    },
    {
      name: "Rohit Verma",
      image: "/mockup/person3.png",
      subtitle: "Sales Executive",
      description:
        "Amazing experience! The structure, training, and tools Fetch True provides made everything smooth.",
      rating: 4,
    },
  ];

  const controls = [useAnimation(), useAnimation(), useAnimation()];
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  useEffect(() => {
    if (!inView) return;

    const runAnimation = async () => {
      const startY = 120;
      const riseY = -60;
      const sideShift = 320;
      const tiltAngle = 15;

      // INITIAL STATE - ONLY CHANGE: Make first card start from same position as others
      controls.forEach((c,) =>
        c.set({
          opacity: 0,
          y: startY,
          x: 0, // CHANGED: All cards start from center (x: 0) instead of x: -80
          rotate: 0,
          scale: 0.9,
          zIndex: 20,
        })
      );

      // Delay before rise
      await new Promise((r) => setTimeout(r, 200));

      // RISE ALL CARDS
      await Promise.all(
        controls.map((c) =>
          c.start({
            opacity: 1,
            y: riseY,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          })
        )
      );

      // SMALL CENTER POP
      await controls[1].start({
        y: riseY - 20,
        scale: 1.05,
        zIndex: 50,
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // SPREAD LEFT & RIGHT CARDS - Both use same logic now
      await Promise.all([
        // FIRST CARD: Now uses same logic as third card (just negative values)
        controls[0].start({
          x: -sideShift, // Same distance as third card, just negative
          rotate: -tiltAngle, // Same angle as third card, just negative
          opacity: 1,
          scale: 1.03,
          zIndex: 60,
          transition: { duration: 0.7, ease: "easeOut" },
        }),
        // THIRD CARD: Keep as is
        controls[2].start({
          x: sideShift,
          rotate: tiltAngle,
          opacity: 1,
          scale: 1.03,
          zIndex: 60,
          transition: { duration: 0.7, ease: "easeOut" },
        }),
      ]);

      // HOLD
      await new Promise((r) => setTimeout(r, 1500));

      // RESET
      await Promise.all([
        controls[0].start({
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 20,
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
        controls[2].start({
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 20,
          transition: { duration: 0.5, ease: "easeInOut" },
        }),
      ]);

      await controls[1].start({
        y: riseY,
        scale: 1,
        zIndex: 40,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      // EXIT
      await new Promise((r) => setTimeout(r, 400));

      controls.forEach((c) =>
        c.start({
          opacity: 0,
          y: startY,
          transition: { duration: 0.6, ease: "easeIn" },
        })
      );
    };

    runAnimation();
  }, [inView]);

  return (
    <div className="w-full hidden md:block lg:block py-20 px-6 bg-white">
      <h2 className="text-xl text-center font-semibold">
        What Our Growth partners & <br /> Users say about us
      </h2>

      <div ref={containerRef} className="relative mt-6">
        <Image
          src="/mockup/growthpartner.png"
          alt="growthpartner"
          className="mx-auto rounded-xl w-full h-[80vh] object-cover"
          width={1200}
          height={800}
        />

        {/* TEXT BOX */}
       
        <div className="absolute z-50 text-center bottom-0 left-1/2 -translate-x-1/2 bg-pink/90 text-white border border-white-900 rounded-t-xl p-10 w-[584px] h-[224px] max-w-md shadow-xl">
          <p className="text-xl mb-3 font-bold">One Platform Every Service</p>
          <p className="text-gray-100 text-sm leading-relaxed">
            Over 1000+ great responses from our growth partners and users — we
            provide seamless services that solve real world problems.
          </p>
        </div>



        {/* CARDS */}
        <div
          className="absolute bottom-36 w-full flex justify-center items-end z-10"
          style={{
            perspective: "1200px",
            transform: "translateX(-90px)",
          

          }}
        >
          {feedback.map((item, i) => (
            <motion.div
              key={i}
              animate={controls[i]}
              className="absolute bg-white shadow-2xl rounded-xl p-6 w-64  flex flex-col  border border-gray-100"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: i === 1 ? 40 : 20,
              }}
            >
            

              <div className="flex items-center gap-5 mb-1">
                {/* Image */}
                <div className="relative w-16 h-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover border-2 border-blue-100"
                  />
                </div>


                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm text-blue-600 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>




              <div className="flex flex-col gap-2 mt-5">
                <p className="text-start text-gray-600 text-sm">
                  {item.description}
                </p>

                <div className="flex text-yellow-500 mt-3 items-center justify-center">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}