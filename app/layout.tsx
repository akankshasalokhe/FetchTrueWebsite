import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { HomeRecommendedProvider } from "@/src/context/HomeRecommendedContext";
import { HomeMostPopularProvider } from "@/src/context/HomeMostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";
import { RecommendedServicesProvider } from "@/src/context/RecommendedContext";
import { MostPopularProvider } from "@/src/context/MostPopularContext";

export const metadata = {
  title: "Fetch True",
  description: "Your App Description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModuleProvider>
          <CategoriesProvider>
          <HomeRecommendedProvider>
            <HomeMostPopularProvider>
              <RecommendedServicesProvider>
                <MostPopularProvider>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
          </MostPopularProvider>
          </RecommendedServicesProvider>
          </HomeMostPopularProvider>
          </HomeRecommendedProvider>
          </CategoriesProvider>
        </ModuleProvider>
      </body>
    </html>
  );
}
