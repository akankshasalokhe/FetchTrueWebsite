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
import { SubCategoryProvider } from "@/src/context/SubCategoriesContext";
import { ServiceDetailsProvider } from "@/src/context/ServiceDetailsContext";
import { RecommendedServiceByCategoryIdProvider } from "@/src/context/RecommendedServiceByCategoryIdContext";
import { MostPopularServiceByCategoryProvider } from "@/src/context/MostPopularServiceByCategoryIdContext";
import { CategorywiseServiceProvider } from "@/src/context/CategorywiseServiceContext";
import {  PopularProvidersProvider } from "@/src/context/PopularProviderContext";
import { WhyChooseServiceProvider } from "@/src/context/WhyJustOurServiceContext";
import { TopTrendingServiceByCategoryIdProvider } from "@/src/context/TopTrendingServiceByCategoryIdContext";

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
                          <SubCategoryProvider>
                            <ServiceDetailsProvider>
                              <RecommendedServiceByCategoryIdProvider>
                                <MostPopularServiceByCategoryProvider>
                                  <CategorywiseServiceProvider>
                                    <PopularProvidersProvider>
                                      <WhyChooseServiceProvider>
                                        <TopTrendingServiceByCategoryIdProvider>
                                  {/* <Navbar /> */}
                                  <main>{children}</main>
                                      </TopTrendingServiceByCategoryIdProvider>
                                     </WhyChooseServiceProvider>
                                  <Footer />
                                   </PopularProvidersProvider>
                                  </CategorywiseServiceProvider>
                                </MostPopularServiceByCategoryProvider>
                              </RecommendedServiceByCategoryIdProvider>
                            </ServiceDetailsProvider>
                          </SubCategoryProvider>
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
