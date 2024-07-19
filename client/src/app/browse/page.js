"use client";

import CategoryFilter from "@/components/SearchResults/category-filter";
import Image from "next/image";
import Footer from "@/components/Common/footer";
import Nav from "@/components/Common/navbar";
import Search from "@/components/SearchResults/search";
import DiscoverJobsSection from "@/components/SearchResults/discover-jobs-section";
import { useSearchParams } from "next/navigation";

export default function Browse() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <main className="bg-[#f5f3f3]">
      <Nav />
      <Search category={category} />
      <CategoryFilter />
      {/* <div className=" border-black border-[1px]"></div> */}
      <DiscoverJobsSection category={category} />
      <Footer />
    </main>
  );
}
