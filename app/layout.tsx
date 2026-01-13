import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { HomeRecommendedProvider } from "@/src/context/HomeRecommendedContext";
import { HomeMostPopularProvider } from "@/src/context/HomeMostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";
import { RecommendedServicesProvider } from "@/src/context/RecommendedContext";
import { MostPopularProvider } from "@/src/context/MostPopularContext";
import { TopTrendingProvider } from "@/src/context/TopTrendingContext";
import { RecommendedProvidersProvider } from "@/src/context/RecommendedProviderContext"
import { BannerCategorySelectionProvider } from "@/src/context/BannerContext"

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
                    <TopTrendingProvider>
                      <RecommendedProvidersProvider>
                        <BannerCategorySelectionProvider>
                          {/* <Navbar /> */}
                          <main>{children}</main>
                          <Footer />
                        </BannerCategorySelectionProvider>
                      </RecommendedProvidersProvider>
                    </TopTrendingProvider>
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
