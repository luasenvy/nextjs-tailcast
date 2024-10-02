import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUpButton from "@/components/ScrollUpButton";

import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tailcast",
  description: "Tailcast - Landing Page Template ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter text-base antialiased break-keep bg-bgDark2`}>
        <main>
          <Navbar />
          {children}
          <Footer />
          <ScrollUpButton />
        </main>
      </body>
    </html>
  );
}
