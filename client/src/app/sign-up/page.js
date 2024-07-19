import Image from "next/image";
import Nav from "@/components/Common/navbar";
import SignUp from "@/components/Registration/sign-up";

export default function Browse() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <SignUp />
    </main>
  );
}
