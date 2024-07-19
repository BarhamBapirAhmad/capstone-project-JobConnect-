import Image from "next/image";
import Footer from "@/components/Common/footer";
import Nav from "@/components/Common/navbar";
import Form from "@/components/PostJob/form";

export default function Browse() {
  return (
    <main className="bg-[#f5f3f3]">
      <Nav />
      <Form />
      <Footer />
    </main>
  );
}
