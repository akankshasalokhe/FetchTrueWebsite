import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { RecommendedProvider } from "@/src/context/RecommendedContext";
import { MostPopularProvider } from "@/src/context/MostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";

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
          <RecommendedProvider>
            <MostPopularProvider>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
          </MostPopularProvider>
          </RecommendedProvider>
          </CategoriesProvider>
        </ModuleProvider>
      </body>
    </html>
  );
}
