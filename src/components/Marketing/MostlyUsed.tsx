import MarketingCard from "../ui/MarketingCard";


const recommendedData = [
  {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
  {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
   {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
  {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
   {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
  {
    image: "/image/marketingbanner.jpg",
    title: "Logo Designing",
    category: "Digital Marketing",
    price: "3,999",
  },
];

export default function MostlyUsed() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 ">
      <div className=" flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-semibold">
          Mostly Used
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {recommendedData.map((item, index) => (
          <MarketingCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
