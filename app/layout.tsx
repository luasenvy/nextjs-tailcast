import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollUpButton } from "@/components/ScrollUpButton";

import { cn } from "@/lib/utils";

import "@/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Tailcast",
  description: "Tailcast - Landing Page Template ",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "break-keep bg-dark2 text-base antialiased")}>
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
