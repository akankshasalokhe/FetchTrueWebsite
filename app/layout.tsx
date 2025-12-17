import Navbar from "@/src/components/Navbar/Navbar";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: "Fetch True",
  description: "Your App Description",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
