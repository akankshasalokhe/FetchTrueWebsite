"use client";

import FinanceCard from "../ui/FinanceCard";



const recommendedServices = [
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
  {
    image: "/image/FinanceImage.jpg",
    title: "Personal Loan",
    category: "Banking",
    discount: "5%",
    earnUpto: "6%",
    rating: 5,
    loanAmount: "Upto 20 Lac",
    approvalTime: "24 Hours",
    duration: "12–60 Months",
    interestRate: "Starting 10.99%",
  },
];

const MostSearches = () => {
  return (
    <section className="w-full py-14 bg-[#F6FBF7]">
      <div className="max-w-[1440px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-Medium text-[#1A1A1A] mb-6">
          Most Searches
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div
          className="
            flex
            gap-4 lg:gap-6
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            pb-4
          "
        >
          {recommendedServices.map((item, index) => (
            <FinanceCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MostSearches;
