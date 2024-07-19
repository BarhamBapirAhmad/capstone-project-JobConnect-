"use client";
import Link from "next/link";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = "http://localhost:3001";

export default function JobInfo(props) {
  const { isLoading, data: job } = useQuery({
    queryKey: ["job-info"],
    queryFn: async () => {
      const result = await axios.get(`${apiUrl}/job/${props.jobId}`, {});
      return result.data;
    },
  });
  if (isLoading) return <div className="w-full h-[720px] bg-white py-20"></div>;
  return (
    <div className="bg-white py-20">
      <div className="flex lg:flex-row flex-col p-5 gap-8">
        <div>
          <div>
            <div className="flex sm:flex-col lg:flex-row gap-12 mx-24 my-12">
              <div>
                {" "}
                <div className="lg:flex lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <nav aria-label="Breadcrumb" className="flex">
                      <ol role="list" className="flex items-center space-x-4">
                        <li>
                          <div className="flex">
                            <a
                              href="/browse"
                              className="text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                              Jobs
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <ChevronRightIcon
                              aria-hidden="true"
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                            />
                          </div>
                        </li>
                      </ol>
                    </nav>
                    <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      {job.title}
                    </h2>

                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <BriefcaseIcon
                          aria-hidden="true"
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        Full-time
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <MapPinIcon
                          aria-hidden="true"
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        {job.jobType}
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CurrencyDollarIcon
                          aria-hidden="true"
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        $120k &ndash; $140k
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          aria-hidden="true"
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        Closing on {job.applicationDeadline}
                      </div>
                      <div className="mt-4 rounded-md border-black border-[1px] transition-all font-light px-2 py-1 h-8 items-center ">
                        {job.jobCategory}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex lg:ml-4 lg:mt-0"></div>
                </div>
                <div className="mt-8 flex gap-8 ">
                  <div>
                    <p className="font-bold mb-2 text-md">Company</p>
                    <p className="text-sm text-gray-700">{job.companyName}</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-md">Qualifications</p>
                    <p className="text-sm text-gray-700">
                      {job.educationLevel}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-md">Location</p>
                    <p className="text-sm text-gray-700">{job.jobLocation}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-bold mb-2 text-md">Job Description</p>
                  <p className="text-sm text-gray-700">{job.jobDescription}</p>
                  <div>
                    <p className="mt-8 font-bold mb-2 text-md">
                      Application Instructions
                    </p>
                    <p className="text-sm text-gray-700">
                      {job.applicationInstructions}
                    </p>
                  </div>
                </div>
                {/* <div className="flex gap-4">
              {props.tags.map((tag) => (
                <div className=" rounded-md border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center ">
                  {tag}
                </div>
              ))}
            </div> */}
                <div className="flex justify-between gap-4">
                  <Link href="/company-profile">
                    <button className="bg-[#80e6ff] mt-8 rounded-md hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
                      View Company Profile
                    </button>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    target="_blank"
                  >
                    <button className="bg-[#f1ff52] mt-8 rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
                      Apply Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="items-start justify-start">
            <div className="flex flex-col mx-24 my-12 ">
              <p className="font-semibold">Job Categories</p>
              <p className="mt-1">Tech</p>
              <p className="mt-1">Marketing</p>
              <p className="mt-1">Hospitality</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
