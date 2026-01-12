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

export default function RecommendedForYou() {
  return (
    <>
    <section className="w-full max-w-[1440px] mx-auto px-4 py-8 lg:py-15">
      <div className=" flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-semibold">
          Recommended For You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {recommendedData.map((item, index) => (
          <MarketingCard key={index} {...item} />
        ))}
      </div>
    </section>

    
    </>
  );
}
