"use client";
import DiscoverJobsCard from "./discover-jobs-card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = "http://localhost:3001";

function DiscoverJobsSection(props) {
  const { isLoading, data } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const result = await axios.get(`${apiUrl}/jobs`, {
        params: { category: props.category },
      });

      return result.data.map((job) => {
        return {
          ...job,

          tags: [job.jobType, job.jobCategory, job.experienceLevel],
        };
      });
    },
  });
  if (isLoading) return "Loading...";
  return (
    <div className="mb-12">
      <div className="flex flex-col">
        {" "}
        <div className=" gap-x-6 gap-y-4 p-8">
          {data.length >= 1 &&
            data?.map((job) => {
              return (
                <DiscoverJobsCard
                  title={job.title}
                  jobCategory={job.jobCategory}
                  company={job.companyName}
                  description={job.jobDescription}
                  tags={job.tags}
                  jobId={job._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DiscoverJobsSection;
