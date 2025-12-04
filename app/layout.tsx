import Navbar from "@/src/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">{children}</main>
        
      </body>
    </html>
  );
}
