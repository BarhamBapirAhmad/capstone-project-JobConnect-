import Image from "next/image";
import Link from "next/link";

const jobIcon = [
  {
    type: "Finance",
    icon: "/finance.png",
  },
  {
    type: "Marketing",
    icon: "/marketing.png",
  },
  {
    type: "IT Services",
    icon: "/IT.png",
  },
  {
    type: "Tech",
    icon: "/tech.png",
  },
  {
    type: "Science",
    icon: "/science.png",
  },
  {
    type: "Hospitality",
    icon: "/hospitality.png",
  },
  {
    type: "Sales",
    icon: "/sales.png",
  },
];

export default function DiscoverJobsCard(props) {
  return (
    <div className="flex divide-y divide-gray-200 rounded-lg bg-white shadow p-6 border-2 border-black transition mx-32 mb-6">
      <div className="flex gap-4 w-full">
        <div className="flex flex-col">
          <div className="flex pb-4 pt-6 gap-4">
            <img
              className="h-12 w-12 rounded-md"
              src={jobIcon.find((icon) => icon.type == props.jobCategory)?.icon}
              alt=""
            />
            <div className="flex flex-col">
              {" "}
              <h3 className="truncate text-2xl font-semibold text-gray-900">
                {props.title}
              </h3>
              <p className="mt-1 truncate text-sm text-gray-500">
                {props.company}
              </p>
            </div>
          </div>
          <p>{props.description}</p>
          <div className="flex w-full lg:w-[1120px] justify-between items-center mt-6">
            <div className="flex gap-4">
              {props.tags.map((tag) => (
                <div className=" rounded-md border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center ">
                  {tag}
                </div>
              ))}
            </div>
            <a href={`/job-info/${props.jobId}`}>
              <button className="bg-[#80e6ff] rounded-md hover:bg-[#f1ff52] hover:text border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
