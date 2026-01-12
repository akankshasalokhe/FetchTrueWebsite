import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { HomeRecommendedProvider } from "@/src/context/HomeRecommendedContext";
import { MostPopularProvider } from "@/src/context/HomeMostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";
import { RecommendedServicesProvider } from "@/src/context/RecommendedContext";

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
            <MostPopularProvider>
              <RecommendedServicesProvider>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
          </RecommendedServicesProvider>
          </MostPopularProvider>
          </HomeRecommendedProvider>
          </CategoriesProvider>
        </ModuleProvider>
      </body>
    </html>
  );
}
