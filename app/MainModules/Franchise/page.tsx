import BenefitsSection from "@/src/components/Franchise/BenefitSection";
import HighDemands from "@/src/components/Franchise/HighDemands";
import InvestmentOfferSection from "@/src/components/Franchise/InvestmentOffer";
import LowInvestmentFranchises from "@/src/components/Franchise/LowInvestment";
import Recommended from "@/src/components/Franchise/recommendFranchise";
import TopGrowingFranchises from "@/src/components/Franchise/TopGrowing";
import { CiSearch } from "react-icons/ci";

export default function FranchisePage() {
  return (
    <>
      {/* MAIN WRAPPER */}
      <section
        style={{
          backgroundImage: "url('/image/Background design.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="
          w-full h-auto rounded-[15px]
          px-4 lg:px-10 py-6 lg:py-14
          bg-gradient-to-r from-[#EFE3FE] to-[#F7F7FF]
        "
      >
        {/* ---------------- NAVBAR ---------------- */}
        <div
          className="
            w-full mx-auto h-auto
            flex items-center justify-between
            pb-4
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 lg:gap-5">
            <img
              src="/image/Group 2.png"
              className="w-[26px] h-[30px] lg:w-[36px] lg:h-[45px]"
              alt="Home"
            />

            <img
              src="/image/Vector (1).png"
              className="w-[16px] h-[14px] lg:w-[22px] lg:h-[20px]"
              alt="Back"
            />

            <h1 className="text-[18px] lg:text-[26px] font-semibold text-black">
              Franchise Service
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Search Bar */}
            <div
              className="
                hidden lg:flex 
                w-[480px] h-[48px] 
                bg-white border border-[#DCDCDC] 
                rounded-[15px]
                shadow
                items-center px-4
              "
            >
              <CiSearch className="w-[18px] h-[18px] text-black" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-[16px] ml-4"
              />
            </div>

            <img
              src="/image/Vector (2).png"
              className="w-[18px] h-[22px]"
              alt="Bookmark"
            />
          </div>
        </div>

        {/* ---------------- HERO SECTION ---------------- */}
        <div className="w-full mt-10">
          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex flex-col items-start gap-4 px-1">
            <h1
              className="text-black font-[500] text-[28px] leading-[32px]"
              style={{ fontFamily: "Golos Text" }}
            >
              Sell Earn Repeat
            </h1>

            <p
              className="text-black text-[14px] leading-[18px] w-[90%]"
              style={{ fontFamily: "Golos Text" }}
            >
              how you can earn and earn up to maximum values. don’t wait start
              your new journey with us
            </p>

            <div
              className="bg-[#9747FF] px-6 py-2 rounded-[15px]"
            >
              <span
                className="text-white text-[18px] font-semibold"
                style={{ fontFamily: "Inter" }}
              >
                1,00,000/-
              </span>
            </div>

            <img
              src="/image/franchiseHero.png"
              alt="Franchise Visual"
              className="w-full max-w-[330px] mx-auto  object-contain"
            />
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex w-full   items-center justify-between">
            {/* LEFT TEXT */}
            <div>
              <h1
                className="text-black font-[500] text-[50px] leading-[52px]"
                style={{ fontFamily: "Golos Text" }}
              >
                Sell Earn Repeat
              </h1>

              <p
                className="
                  mt-4 text-black text-[20px] leading-[28px]
                  w-[520px]
                "
                style={{ fontFamily: "Golos Text" }}
              >
                how you can earn and earn up to maximum values. don’t wait start
                your new journey with us
              </p>

              <div
                className="
                  mt-10 bg-[#9747FF]
                  w-[230px] h-[59px]
                  rounded-[24px]
                  flex items-center justify-center
                "
              >
                <span
                  className="text-white text-[34px] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  1,00,000/-
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <img
              src="/image/franchiseHero.png"
              alt="Franchise Visual"
              className="w-[450px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ---------------- MOBILE SEARCH BAR ---------------- */}
        <div className="lg:hidden w-full mt-6">
          <div
            className="
              w-full h-[50px]
              bg-white border border-[#DCDCDC] 
              rounded-[15px]
              shadow flex items-center px-4
            "
          >
            <CiSearch className="w-[18px] h-[18px] text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-[16px] ml-4"
            />
          </div>
        </div>
      </section>

{/* -------- FLOW GRID SECTION -------- */}
<section className="w-full flex justify-center mt-10">
  <div
    className="
      w-full lg:w-[1307.61px]
      flex flex-wrap
      gap-[25px]
      justify-center lg:justify-start
    "
  >
    {[
      { name: "Real Estate", bg: "#F3F7FF", img: "/image/realEstate.png" },
      { name: "Hotel & Restaurant", bg: "#FFFBF2", img: "/image/hotel.png" },
      { name: "Beauty", bg: "#FEFBFF", img: "/image/Beauty.png" },
      { name: "Sports & Fitness", bg: "#F7FFF5B8", img: "/image/sports.png" },
      { name: "Pet", bg: "#FFFBF6", img: "/image/pet.png" },
      { name: "Home Based Business", bg: "#FFF6F3", img: "/image/homeBusiness.png" },
      { name: "Logistic", bg: "#F8FCFF", img: "/image/logistic.png" },
      { name: "Agents Dealers Distribution", bg: "#F9F9F9", img: "/image/dealer.png" },
      { name: "Automotive", bg: "#F9FFFA", img: "/image/automative.png" },
      { name: "Fashion & Jewelry", bg: "#FFFCFC", img: "/image/fashion.png" },
      { name: "Food & Beverage", bg: "#FFFBFA", img: "/image/food.png" },
      { name: "Health care", bg: "#FFF6F7", img: "/image/healthCare.png" },
      { name: "Retail", bg: "#FEFEFE", img: "/image/retail.png" },
      { name: "Manufacturing", bg: "#FFF6F3", img: "/image/manufacture.png" },
      { name: "Travel", bg: "#FFFBF2", img: "/image/travel.png" },
      { name: "Business & Consultancy", bg: "#FAFDFF", img: "/image/business&consult.png" },
    ].map((item, index) => (
      <div
        key={index}
        className="
          w-[139.3px]
          h-[159.02px]
          rounded-[19.71px]
          border border-[#D3D3D3]
          flex flex-col items-center
          pt-[16.43px]
        "
        style={{
          backgroundColor: item.bg,
        }}
      >
        {/* IMAGE */}
        <img
          src={item.img}
          alt={item.name}
          className="w-[94.65px] h-[94.65px] object-contain"
        />

        {/* NAME */}
        <p
          className="
            text-[15.77px]
            leading-[17.08px]
            text-black
            font-[400]
            text-left 
            w-[108.66px]
          "
          style={{ fontFamily: "Inter" }}
        >
          {item.name}
        </p>
      </div>
    ))}
  </div>
</section>


<Recommended />
<HighDemands />
<TopGrowingFranchises />
<BenefitsSection />
<InvestmentOfferSection />
<LowInvestmentFranchises />






    </>
  );
}
