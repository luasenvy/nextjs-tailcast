import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import Features1 from "@/components/Features1";
import Features2 from "@/components/Features2";
import FeaturesDiagonal from "@/components/FeaturesDiagonal";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features1 />
      <Features2 />
      <FeaturesDiagonal />
      <Pricing />
      <Brands />
      <Testimonials />
      <Blog />
      <FAQ />
    </>
  );
}
