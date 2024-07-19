import Image from "next/image";
import Hero from "../components/HomePage/hero-section";
import CategorySection from "../components/HomePage/category-section";
import FeaturedEmployers from "@/components/HomePage/featured-employers-section";
import AdvanceYourCareer from "@/components/HomePage/advance-your-career-section";
import Footer from "@/components/Common/footer";

export default function Home() {
  return (
    <main className="bg-[#f5f3f3]">
      <Hero />
      <CategorySection />
      <FeaturedEmployers />
      <AdvanceYourCareer />
      <Footer />
    </main>
  );
}
