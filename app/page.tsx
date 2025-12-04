import Footer from "@/components/Footer/Footer";
import GrowthPartner from "@/components/GrowthPartner/GrowthPartner";
import Refer from "@/components/Refer/Refer";
import TopTrending from "@/components/TopTrending/TopTrending";


export default function Home() {
  return (
    <div className="w-full">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Home page</h1>
      </main>
     <TopTrending />
      <GrowthPartner />
       <Refer />
      <Footer />
    </div>
  );
}
