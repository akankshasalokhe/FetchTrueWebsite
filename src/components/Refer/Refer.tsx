// 'use client';

// import Image from "next/image";



// export default function Refer() {

//     return (
//         <div>
//             <div className="w-full py-20 px-6 bg-white">

//                 <div className="border flex border-blue-400 justify-between rounded-xl px-15 py-30 mb-15">

//                     <div>
//                         <h2 className="text-4xl font-semibold mb-4"> Build your Team and earn</h2>
//                         <p className="text-lg font-semibold  mb-2">Give reference to other and make <br /> your own team</p>
//                         <p className="text-lg text-gray-600 leading-relaxed">standing with growth partners <br /> and making the better team <br /> with confidence</p>

//                         <button className="text-white w-1/2 p-2 bg-blue-700 rounded-2xl cursor-pointer mt-35">View More</button>
//                     </div>

//                     <div className="relative mx-auto pl-30">

//                         {/* Image on top */}
//                         <Image src="/image/teambuild.png" alt="team"
//                             className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[80%] h-auto" width={800} height={600}
//                         />

//                         <h1 className="text-9xl font-bold text-gray-100 mb-2">TEAM BUILD</h1>
//                         <h1 className="text-9xl font-bold text-blue-700">TEAM BUILD</h1>
//                         <h1 className="text-9xl font-bold text-gray-100">TEAM BUILD</h1>
//                     </div>



//                 </div>




//                 <div className="border flex border-blue-400 justify-between rounded-xl px-15 py-30 mb-10">

//                     <div>
//                         <h2 className="text-4xl font-semibold mb-4"> Refer and Earn</h2>
//                         <p className="text-lg font-semibold  mb-2">Refer with your friends and make <br /> your earning profitable</p>
//                         <p className="text-lg text-gray-600 leading-relaxed">every single refer that get you<br /> paid. so don&apos;t just use it refer your<br /> friends</p>

//                         <button className="text-white w-4/5 p-2 bg-blue-700 rounded-2xl cursor-pointer mt-35">View More</button>
//                     </div>

//                     <div className="relative mx-auto pl-30">


//                         <Image src="/image/phonehold.png" alt="phone holding"
//                             className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[40%] h-auto" width={400} height={400}
//                         />


//                         <h1 className="text-9xl font-bold text-gray-100 mb-2">REFER EARN</h1>
//                         <h1 className="text-9xl font-bold text-blue-700">REFER EARN</h1>
//                         <h1 className="text-9xl font-bold text-gray-100">REFER EARN</h1>
//                     </div>

//                 </div>


//             </div>



//         </div>
//     )
// }



'use client';

import Image from "next/image";

export default function Refer() {
    return (
        <div>
            <div className="w-full py-10 md:py-15 px-4 md:px-6 bg-white">
                {/* First Section - TEAM BUILD */}
                {/* <div className="border flex flex-col lg:flex-row border-blue-400 justify-between rounded-xl p-4 md:px-15 md:py-30 mb-8 md:mb-15 overflow-hidden"> */}
                <div className="border flex flex-col lg:flex-row border-blue-400 justify-between 
                    rounded-xl 
                    max-w-[1322px] md:h-[535px] 
                    mx-auto 
                    p-4 md:px-10 md:py-30 
                    mb-10 
                    overflow-hidden">

                    {/* Left Content - Same on all screens */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-xl md:text-[28px] font-semibold mb-2 whitespace-nowrap">Build your Team and earn</h2>
                        <p className="text-base md:text-[24px] font-semibold mb-2 md:whitespace-nowrap">
                            Give reference to other and make <br className="hidden md:block" /> your own team
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            standing with growth partners <br className="hidden md:block" /> and making the better team <br className="hidden md:block" /> with confidence
                        </p>
                        <button className="text-white md:w-[332px] md:h-[49px] w-[150px] h-[50px] p-3 md:p-2 bg-[#2164F4] rounded-3xl cursor-pointer mt-2 md:mt-20">
                            View More
                        </button>
                    </div>

                    {/* Right Side - Fixed overflow and gap issues */}
                    <div className="order-1 lg:order-2 relative mx-auto lg:mb-0 lg:pl-30">
                        {/* Mobile: Image overlay on text */}
                        <div className="lg:hidden relative w-full">
                            {/* Text behind the image */}
                            <div className="flex flex-col items-center justify-center py-1">
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-1 text-center">TEAM BUILD</h1>
                                <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 text-center">TEAM BUILD</h1>
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 text-center">TEAM BUILD</h1>
                            </div>

                            {/* Image overlay - centered on text */}
                            <div className="relative -mt-25 mb-4 flex justify-center">
                                <div className="relative z-20 w-[65%] max-w-[280px] sm:w-[60%] sm:max-w-[300px]">
                                    <Image
                                        src="/image/teambuild.png"
                                        alt="team"
                                        className="w-full h-auto drop-shadow-xl"
                                        width={800}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Original layout */}
                        <div className="hidden lg:block right-8 relative bottom-10">
                            <img
                                src="/image/teambuild.png"
                                alt="team"
                                className="absolute -bottom-10 left-2/3 -translate-x-1/2 w-[560px] h-[330px]"
                               
                            />

                            <div className="flex flex-col leading-none">
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-gray-100 whitespace-nowrap">
                                    TEAM BUILD
                                </h1>
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-blue-700 whitespace-nowrap">
                                    TEAM BUILD
                                </h1>
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-gray-100 whitespace-nowrap">
                                    TEAM BUILD
                                </h1>
                            </div>



                        </div>
                    </div>
                </div>

                {/* Second Section - REFER EARN - Fixed overflow */}
                {/* <div className="border flex flex-col lg:flex-row border-blue-400 justify-between rounded-xl p-4 md:px-15 md:py-30 mb-10 overflow-hidden"> */}
                <div className="border flex flex-col lg:flex-row border-blue-400 justify-between 
                        rounded-xl 
                        max-w-[1322px] md:h-[535px] 
                        mx-auto 
                        p-4 md:px-10 md:py-30 
                        mb-10 
                        overflow-hidden">

                    {/* Left Content - Same on all screens */}
                    <div className="order-2 lg:order-1 lg:w-auto">
                        <h2 className="text-xl md:text-[28px] font-semibold mb-2">Refer and Earn</h2>
                        <p className="text-base md:text-[24px] font-semibold mb-2  md:whitespace-nowrap">
                            Refer with your friends and make <br className="hidden md:block" /> your earning profitable
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            every single refer that get you <br className="hidden md:block" /> paid. so don&apos;t just use it refer your <br className="hidden md:block" /> friends
                        </p>
                        <button className="text-white md:w-[332px] md:h-[49px] w-[150px] h-[50px]  p-1 md:p-2 bg-[#2164F4] rounded-3xl cursor-pointer mt-6 md:mt-15">
                            View More
                        </button>
                    </div>

                    {/* Right Side - Fixed overflow */}
                    <div className="order-1 lg:order-2 md:right-20 right-1  bottom-8 relative mx-auto lg:mb-0 lg:pl-30">
                        {/* Mobile: Image overlay on text */}
                        <div className="lg:hidden relative w-full">
                            {/* Text behind the image */}
                            <div className="flex flex-col items-center justify-center py-6">
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-1 text-center">REFER EARN</h1>
                                <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 text-center">REFER EARN</h1>
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 text-center">REFER EARN</h1>
                            </div>

                            {/* Image overlay - centered on text, constrained within border */}
                            <div className="relative -mt-30 mb-1 flex justify-center">
                                <div className="relative z-20 w-[55%] max-w-[200px] sm:w-[50%] sm:max-w-[220px]">
                                    <Image
                                        src="/image/phonehold.png"
                                        alt="phone holding"
                                        className="w-full h-auto drop-shadow-xl"
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Original layout */}
                        <div className="hidden lg:block relative">
                            <img
                                src="/image/phonehold.png"
                                alt="phone holding"
                                className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[359.61px] h-[492.93px]"
    
                            />
                            <div className="flex flex-col leading-none">
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-gray-100 whitespace-nowrap">
                                    REFER EARN
                                </h1>
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-blue-700 whitespace-nowrap">
                                    REFER EARN
                                </h1>
                                <h1 className="text-[131.44px] w-[807px] h-[122px] font-bold text-gray-100 whitespace-nowrap">
                                    REFER EARN
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}