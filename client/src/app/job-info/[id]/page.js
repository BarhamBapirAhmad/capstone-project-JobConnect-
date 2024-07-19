import Image from "next/image";
import Nav from "@/components/Common/navbar";
import JobInfo from "@/components/jobInformation/job-info";
import Footer from "@/components/Common/footer";

export default function jobInfoPage({ params }) {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <JobInfo jobId={params.id} />
      <Footer />
    </main>
  );
}
