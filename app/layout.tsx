import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollUpButton from "@/components/ScrollUpButton";

import "@/styles/global.css";

/**
 * Inter 기반 폰트
 */
const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/pretendard/Pretendard-Bold.subset.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-SemiBold.subset.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Medium.subset.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Regular.subset.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Light.subset.woff2",
      weight: "300",
    },
  ],
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Tailcast",
  description: "Tailcast - Landing Page Template ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={`${nacelle.variable} ${pretendard.variable} font-pretendard text-base antialiased break-keep`}
      >
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
