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
import { TopTrendingServiceByCategoryIdProvider } from "@/src/context/TopTrendingServiceByCategoryIdContext";
import { OfferProvider } from "@/src/context/OfferContext";
import { ModulewiseServiceProvider } from "@/src/context/ModulewiseServiceContext";
import { PopularProvidersProvider } from "@/src/context/PopularProviderContext";
import { TrendingProvidersProvider } from "@/src/context/TrendingProviderContext";
import { RecommendedCategoryProvidersProvider } from "@/src/context/RecommendedCategoryProviderContext";
import { TrendingCategoryProvider } from "@/src/context/TrendingCategoryProviderContext";
import { WhyChooseServiceProvider } from "@/src/context/WhyJustOurServiceContext";
import { CategorywiseServiceProvider } from "@/src/context/CategorywiseServiceContext";
import { ReviewProvider } from "@/src/context/ReviewContext"
import { CheckoutProvider } from "@/src/context/CheckoutContext"


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
                                  <TopTrendingServiceByCategoryIdProvider>
                                    <PopularProvidersProvider>
                                      <TrendingProvidersProvider>
                                        <RecommendedCategoryProvidersProvider>
                                          <TrendingCategoryProvider>
                                            <WhyChooseServiceProvider>
                                              <CategorywiseServiceProvider>

                                                <ModulewiseServiceProvider>
                                                  <OfferProvider>
                                                    <ReviewProvider>
                                                      <CheckoutProvider>
                                                        {/* <Navbar /> */}
                                                        <main>{children}</main>

                                                      </CheckoutProvider>

                                                    </ReviewProvider>
                                                  </OfferProvider>
                                                </ModulewiseServiceProvider>
                                                <Footer />
                                              </CategorywiseServiceProvider>
                                            </WhyChooseServiceProvider>
                                          </TrendingCategoryProvider>
                                        </RecommendedCategoryProvidersProvider>
                                      </TrendingProvidersProvider>
                                    </PopularProvidersProvider>
                                  </TopTrendingServiceByCategoryIdProvider>
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
