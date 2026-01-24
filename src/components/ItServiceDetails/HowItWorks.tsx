// "use client";

// type Step = {
//   _id: string;
//   title: string;
//   description: string;
//   icon?: string;
// };

// type HowItWorksProps = {
//   howItWorks?: Step[];
// };

// export default function HowItWorks({ howItWorks = [] }: HowItWorksProps) {

//   const steps = howItWorks.slice(0, 5);

//   if (steps.length === 0) return null;

//   return (
//     <section className="bg-[#F7F7F7] py-16">
//       {/* TITLE */}
//       <div className="flex items-start px-4 md:justify-center mb-12">
//         <h2
//           className="bg-black text-white px-8 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold"
//           style={{
//             clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
//           }}
//         >
//           How It Works?
//         </h2>
//       </div>

//       {/* ================= DESKTOP ================= */}
//       <div className="hidden md:hidden lg:block relative w-[1200px] mx-auto">
//         <div className="flex justify-between">
//           <Card step={steps[0]} index={0} />
//           <Card step={steps[1]} index={1} />
//         </div>

//         <Arrow className="absolute top-[135px] left-1/2 -translate-x-1/2" />
//         <Arrow className="absolute top-[330px] right-[240px]" rotate={90} />

//         <div className="flex justify-between mt-[120px]">
//           <Card step={steps[2]} index={2} />
//           <Card step={steps[3]} index={3} />
//         </div>

//         <Arrow
//           className="absolute top-[555px] left-1/2 -translate-x-1/2"
//           rotate={180}
//         />

//         <Arrow className="absolute top-[750px] left-[230px]" rotate={90} />

//         <div className="flex justify-start mt-[120px]">
//           <Card step={steps[4]} index={4} />
//         </div>
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="lg:hidden px-2 relative">
//         <div className="grid grid-cols-2 gap-8 items-center">
//           <MobileCard step={steps[0]} index={0} />
//           <MobileCard step={steps[1]} index={1} />
//         </div>

//         <div className="flex justify-center -mt-18">
//           <Arrow mobile />
//         </div>

//         <div className="flex justify-end pr-12 my-12">
//           <Arrow rotate={90} mobile />
//         </div>

//         <div className="grid grid-cols-2 gap-8 -mt-10 -mb-18 items-center">
//           <MobileCard step={steps[2]} index={2} />
//           <MobileCard step={steps[3]} index={3} />
//         </div>

//         <div className="flex justify-center -mt-20 my-14">
//           <Arrow rotate={180} mobile />
//         </div>

//         <div className="flex justify-start pl-6 my-2">
//           <Arrow rotate={90} mobile />
//         </div>

//         <div className="flex justify-start w-[150px] md:w-[360px]">
//           <MobileCard step={steps[4]} index={4} />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= DESKTOP CARD ================= */

// function Card({ step, index }: { step: Step; index: number }) {
//   return (
//     <div className="bg-white w-[510px] h-[297px] rounded-2xl shadow-lg flex flex-col items-center justify-center text-center px-10">
//       <div className="text-[#8C8CFF] text-[40px] font-semibold mb-4">
//         {String(index + 1).padStart(2, "0")}.
//       </div>
//       <h3 className="text-[32px] font-semibold mb-3">{step.title}</h3>
//       <p className="text-gray-600 text-[24px] leading-relaxed">
//         {step.description}
//       </p>
//     </div>
//   );
// }

// /* ================= MOBILE CARD ================= */

// function MobileCard({ step, index }: { step: Step; index: number }) {
//   return (
//     <div className="bg-white w-full h-[170px] rounded-xl shadow-md flex flex-col items-center justify-center text-center px-2">
//       <div className="text-[#8C8CFF] text-[20px] font-semibold mb-1">
//         {String(index + 1).padStart(2, "0")}.
//       </div>
//       <h3 className="text-[12px] md:text-[20px] font-semibold mb-1">
//         {step.title}
//       </h3>
//       <p className="text-gray-600 text-[12px] md:text-[15px] leading-snug">
//         {step.description}
//       </p>
//     </div>
//   );
// }

// /* ================= ARROW ================= */

// function Arrow({
//   className = "",
//   rotate = 0,
//   mobile = false,
// }: {
//   className?: string;
//   rotate?: number;
//   mobile?: boolean;
// }) {
//   return (
//     <img
//       src="/image/itarrowicon1.png"
//       alt="arrow"
//       className={`${
//         mobile ? "w-[30px] h-[30px]" : "w-[61px] h-[61px]"
//       } ${className}`}
//       style={{ transform: `rotate(${rotate}deg)` }}
//     />
//   );
// }







"use client";

type Step = {
  _id: string;
  title: string;
  description: string;
  icon?: string;
};

type HowItWorksProps = {
  howItWorks?: Step[];
};

export default function HowItWorks({ howItWorks = [] }: HowItWorksProps) {
  const steps = howItWorks.slice(0, 5);

  if (!steps.length) return null;

  return (
    <section className="bg-[#F7F7F7] py-16">
      {/* TITLE */}
      <div className="flex items-start px-4 md:justify-center mb-12">
        <h2
          className="bg-black text-white px-8 py-2 text-[12px] md:text-[18px] lg:text-[32px] font-semibold"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          }}
        >
          How It Works?
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block relative w-[1200px] mx-auto">
        {steps[0] && steps[1] && (
          <div className="flex justify-between">
            <Card step={steps[0]} index={0} />
            <Card step={steps[1]} index={1} />
          </div>
        )}

        {steps.length > 2 && (
          <Arrow className="absolute top-[135px] left-1/2 -translate-x-1/2" />
        )}

        {steps.length > 3 && (
          <Arrow
            className="absolute top-[330px] right-[240px]"
            rotate={90}
          />
        )}

        {(steps[2] || steps[3]) && (
          <div className="flex justify-between mt-[120px]">
            {steps[3] && <Card step={steps[3]} index={3} />}
            {steps[2] && <Card step={steps[2]} index={2} />}

          </div>
        )}

        {steps.length > 4 && (
          <>
            <Arrow
              className="absolute top-[555px] left-1/2 -translate-x-1/2"
              rotate={180}
            />
            <Arrow
              className="absolute top-[750px] left-[230px]"
              rotate={90}
            />

            <div className="flex justify-start mt-[120px]">
              <Card step={steps[4]} index={4} />
            </div>
          </>
        )}

         {steps.length <= 4 && (
          <>
            <Arrow
              className="absolute top-[555px] left-1/2 -translate-x-1/2"
              rotate={180}
            />
           

            <div className="flex justify-start mt-[120px]">
              <Card step={steps[4]} index={4} />
            </div>
          </>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-2 relative">
        <div className="grid grid-cols-2 gap-8 items-center">
          {steps[0] && <MobileCard step={steps[0]} index={0} />}
          {steps[1] && <MobileCard step={steps[1]} index={1} />}
        </div>

        {steps.length > 2 && (
          <div className="flex justify-center my-10">
            <Arrow mobile />
          </div>
        )}

        {steps.length > 2 && (
          <div className="flex justify-end pr-12 my-6">
            <Arrow rotate={90} mobile />
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 items-center">
          {steps[2] && <MobileCard step={steps[2]} index={2} />}
          {steps[3] && <MobileCard step={steps[3]} index={3} />}
        </div>

        {steps.length > 4 && (
          <>
            <div className="flex justify-center my-10">
              <Arrow rotate={180} mobile />
            </div>

            <div className="flex justify-start pl-6 my-4">
              <Arrow rotate={90} mobile />
            </div>

            <div className="flex justify-start w-[150px] md:w-[360px]">
              <MobileCard step={steps[4]} index={4} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ================= DESKTOP CARD ================= */

function Card({ step, index }: { step: Step; index: number }) {
  if (!step) return null;

  return (
    <div className="bg-white w-[510px] h-[297px] rounded-2xl shadow-lg flex flex-col items-center justify-center text-center px-10">
      <div className="text-[#8C8CFF] text-[40px] font-semibold mb-4">
        {String(index + 1).padStart(2, "0")}.
      </div>
      <h3 className="text-[32px] font-semibold mb-3">{step.title}</h3>
      <p className="text-gray-600 text-[24px] leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

/* ================= MOBILE CARD ================= */

function MobileCard({ step, index }: { step: Step; index: number }) {
  if (!step) return null;

  return (
    <div className="bg-white w-full h-[170px] rounded-xl shadow-md flex flex-col items-center justify-center text-center px-2">
      <div className="text-[#8C8CFF] text-[20px] font-semibold mb-1">
        {String(index + 1).padStart(2, "0")}.
      </div>
      <h3 className="text-[12px] md:text-[20px] font-semibold mb-1">
        {step.title}
      </h3>
      <p className="text-gray-600 text-[12px] md:text-[15px] leading-snug">
        {step.description}
      </p>
    </div>
  );
}

/* ================= ARROW ================= */

function Arrow({
  className = "",
  rotate = 0,
  mobile = false,
}: {
  className?: string;
  rotate?: number;
  mobile?: boolean;
}) {
  return (
    <img
      src="/image/itarrowicon1.png"
      alt="arrow"
      className={`${mobile ? "w-[30px] h-[30px]" : "w-[61px] h-[61px]"
        } ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
