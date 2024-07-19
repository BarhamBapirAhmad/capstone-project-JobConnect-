import Image from "next/image";
import SignIn from "@/components/Registration/sign-in";
import Nav from "@/components/Common/navbar";

export default function Browse() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <SignIn />
    </main>
  );
}
