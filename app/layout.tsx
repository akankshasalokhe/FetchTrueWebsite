import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { HomeRecommendedProvider } from "@/src/context/HomeRecommendedContext";
import { HomeMostPopularProvider } from "@/src/context/HomeMostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";
import { RecommendedServicesProvider } from "@/src/context/RecommendedContext";
import { MostPopularProvider } from "@/src/context/MostPopularContext";
import { SubCategoryProvider } from "@/src/context/SubCategoriesContext";
import { ServiceDetailsProvider } from "@/src/context/ServiceDetailsContext";
import { RecommendedServiceByCategoryIdProvider } from "@/src/context/RecommendedServiceByCategoryIdContext";
import { MostPopularServiceByCategoryProvider } from "@/src/context/MostPopularServiceByCategoryIdContext";

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
                  <SubCategoryProvider>
                    <ServiceDetailsProvider>
                      <RecommendedServiceByCategoryIdProvider>
                        <MostPopularServiceByCategoryProvider>
          {/* <Navbar /> */}
          <main>{children}</main>
          </MostPopularServiceByCategoryProvider>
          </RecommendedServiceByCategoryIdProvider>
          <Footer />
          </ServiceDetailsProvider>
          </SubCategoryProvider>
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
