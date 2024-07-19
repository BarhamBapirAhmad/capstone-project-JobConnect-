import Image from "next/image";
import Nav from "@/components/Common/navbar";
import Footer from "@/components/Common/footer";
import CompanyProfile from "@/components/company-profile/company-profile";

export default function Meh() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <CompanyProfile />
      <Footer />
    </main>
  );
}
