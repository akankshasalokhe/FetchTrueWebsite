// "use client";


// import { Phone, Mail } from "lucide-react";


// const ConnectWith = () => {
//   return (
//     <section className="bg-gray-100 py-6">
//       <div className="md:w-[700px] ml-auto mr-30 bg-white rounded-xl px-4 py-5 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

//         {/* LEFT */}
//         <div>
//           <p className="text-teal-600 text-[10px] md:text-[24px] mb-1">Connect With</p>
//           <h2 className="text-[14px] md:text-[36px] font-semibold text-[#5A3A2E]">
//             Marketing Service Manager
//           </h2>
//         </div>

//         {/* CENTER ICONS */}
//         {/* <div className="flex justify-end lg:justify-start items-center gap-4">
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Phone className="text-green-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
//           </button>

//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Mail className="text-blue-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
//           </button>
//         </div> */}
//         {/* CENTER ICONS */}
//         <div className="w-full flex justify-end md:w-auto md:justify-start -mt-12 lg:-mt-0 items-center gap-4">
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Phone className="text-green-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
//           </button>

//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <Mail className="text-blue-500 w-[24px] h-[24px] md:w-[45px] md:h-[45px]" />
//           </button>
//         </div>


//         {/* RIGHT BUTTONS */}
//         {/* <div className="flex items-center gap-3 w-full md:w-auto">
//           <Link href="/MainModules/Checkout">
//           <button className="flex items-center w-[298px] gap-2 bg-green-500 hover:bg-green-600 text-white text-[14px] md:text-[32px] px-5 py-3 rounded-md text-sm font-medium  justify-center">
//             <ShoppingCart className="w-5 h-5 md:w-[48px] md:h-[48px]" />
//             Check out
//           </button>
//           </Link>

//           <button className="flex items-center w-[298px] gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[14px] md:text-[32px] px-5 py-3 rounded-md text-sm font-medium  justify-center">
//             <Share2 className="w-5 h-5  md:w-[48px] md:h-[48px]" />
//             Share
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ConnectWith;




"use client";

import { Phone, Mail } from "lucide-react";


type ConnectWithItem = {
  _id: string;
  name: string;
  mobileNo: string;
  email: string;
};

type ConnectWithProps = {
  connectWith?: ConnectWithItem[];
};

export default function ConnectWith({ connectWith }: ConnectWithProps) {
  const manager = connectWith?.[0];

  if (!manager) return null;

  return (
    <section className="bg-gray-100 p-4">
      <div className="md:w-[500px] lg:w-[700px] md:ml-auto lg:mr-[100px] md:flex-none lg:flex lg:items-center lg:justify-between bg-white rounded-xl px-4 py-5 md:px-10 md:py-10  gap-4">

        {/* LEFT */}
        <div className="flex  items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-teal-600 text-[10px] md:text-[18px] lg:text-[24px] mb-1 whitespace-nowrap">
              Connect With
            </p>
            <h2 className="text-[14px] md:text-[28px] lg:text-[36px] font-semibold text-[#5A3A2E] whitespace-nowrap">
              {manager.name}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${manager.mobileNo}`}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Phone className="text-green-500 w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[45px] lg:h-[45px]" />
            </a>

            <a
              href={`mailto:${manager.email}`}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Mail className="text-blue-500 w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[45px] lg:h-[45px]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

