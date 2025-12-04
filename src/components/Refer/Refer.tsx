'use client';

import Image from "next/image";



export default function Refer() {

    return (
        <div>
            <div className="w-full hidden lg:block  py-20 px-6 bg-white">

                <div className="border flex border-blue-400 justify-between rounded-xl px-15 py-30 mb-15">

                    <div>
                        <h2 className="text-4xl font-semibold mb-4"> Build your Team and earn</h2>
                        <p className="text-lg font-semibold  mb-2">Give reference to other and make <br /> your own team</p>
                        <p className="text-lg text-gray-600 leading-relaxed">standing with growth partners <br /> and making the better team <br /> with confidence</p>

                        <button className="text-white w-1/2 p-2 bg-blue-700 rounded-2xl cursor-pointer mt-35">View More</button>
                    </div>

                    <div className="relative mx-auto pl-30">

                        {/* Image on top */}
                        <Image src="/mockup/teambuild.png" alt="team"
                            className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[80%] h-auto" width={800} height={600}
                        />

                        <h1 className="text-9xl font-bold text-gray-100 mb-2">TEAM BUILD</h1>
                        <h1 className="text-9xl font-bold text-blue-700">TEAM BUILD</h1>
                        <h1 className="text-9xl font-bold text-gray-100">TEAM BUILD</h1>
                    </div>



                </div>




                <div className="border flex border-blue-400 justify-between rounded-xl px-15 py-30 mb-10">

                    <div>
                        <h2 className="text-4xl font-semibold mb-4"> Refer and Earn</h2>
                        <p className="text-lg font-semibold  mb-2">Refer with your friends and make <br /> your earning profitable</p>
                        <p className="text-lg text-gray-600 leading-relaxed">every single refer that get you<br /> paid. so don&apos;t just use it refer your<br /> friends</p>

                        <button className="text-white w-4/5 p-2 bg-blue-700 rounded-2xl cursor-pointer mt-35">View More</button>
                    </div>

                    <div className="relative mx-auto pl-30">


                        <Image src="/mockup/phonehold.png" alt="phone holding"
                            className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[40%] h-auto" width={400} height={400}
                        />
                        {/* <img
                        src="/mockup/phonehold.png"
                        alt="team"
                        className="absolute -bottom-20 left-2/3 -translate-x-1/2 w-[40%] h-auto"
                    /> */}

                        <h1 className="text-9xl font-bold text-gray-100 mb-2">REFER EARN</h1>
                        <h1 className="text-9xl font-bold text-blue-700">REFER EARN</h1>
                        <h1 className="text-9xl font-bold text-gray-100">REFER EARN</h1>
                    </div>

                </div>


            </div>


            <div className="block lg:hidden w-screen bg-white relative">
                <div className="py-10 px-6 w-full">
                    {/* First Image - positioned at bottom edge of yellow box */}
                    <div className="relative -mb-15 ml-8 md:ml-40 z-30">
                        <Image
                            src="/mockup/iconset.png"
                            alt="IconSet"
                            height={300}
                            width={300}
                            className="w-68 md:w-100 h-auto"
                        />
                    </div>

                    {/* Yellow Box Content */}
                    <div className="bg-yellow-300 p-6 py-10 rounded-xl w-full relative z-20">
                        <h3 className="font-bold text-lg md:text-5xl mb-2">Share it <br />Earn it</h3>
                        <p className="text-gray-800 md:text-xl text-sm">Refer your friend <br />and earn money</p>
                    </div>

                    {/* Second Image - positioned on top of yellow box */}
                    <div className="relative -mt-66 md:-mt-110 mr-1 md:mr-30 z-30 self-end ml-auto" style={{ width: 'fit-content' }}>
                        <Image
                            src="/mockup/phonehold.png"
                            alt="phonehold"
                            height={100}
                            width={100}
                            className="w-48 md:w-80 h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}