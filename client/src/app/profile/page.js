import Image from "next/image";
import Footer from "@/components/Common/footer";
import Nav from "@/components/Common/navbar";
import ProfileCard from "@/components/profile/ProfileCard";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="bg-[#f5f3f3]">
      <Nav />
      <Link
        href="/profile"
        className="text-md font-medium leading-6 text-black hover:text-[#f1ff52] hover:font-medium"
      >
        Profile
      </Link>
      <ProfileCard />
      <Footer />
    </main>
  );
}
