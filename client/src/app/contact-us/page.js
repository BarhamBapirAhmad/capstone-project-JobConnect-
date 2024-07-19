import Image from "next/image";
import Footer from "@/components/Common/footer";
import Nav from "@/components/Common/navbar";
import Form from "@/components/PostJob/form";
import Example from "@/components/ContactUs/contactus";

export default function ContactUs() {
  return (
    <main className="bg-[#f5f3f3]">
      <Nav />
      <Example />
      <Footer />
    </main>
  );
}