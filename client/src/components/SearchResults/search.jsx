"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Search(props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const router = useRouter();

  return (
    <div className="bg-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Browse job categories
          </h2>{" "}
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label className="sr-only">Search job category</label>
            <input
              className="  placeholder:text-sm lg:placeholder:text-md w-[240px] lg:w-[800px] bg-white px-4 py-1 rounded-md placeholder:text-black border-black border-2  outline-[#7ad6ea]"
              type="text"
              placeholder="Search job category"
            />
            <button className="bg-[#f1ff52] rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
              Search
            </button>{" "}
          </div>
        </form>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-8 items-center justify-center p-8 lg:px-36 gap-3">
          <button
            onClick={() => {
              window.location.href = "?category=AllJobs";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "AllJobs" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            All Jobs
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=Sales";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Sales" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            Sales
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=Marketing";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Marketing" ? " bg-[#f1ff52] text-black" : " ")
            }
          >
            Marketing
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=Finance";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Finance" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            Finance
          </button>

          <button
            onClick={() => {
              window.location.href = "?category=Hospitality";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Hospitality"
                ? " bg-[#f1ff52] text-black"
                : "")
            }
          >
            Hospitality
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=ITServices";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "ITServices" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            IT Services
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=Tech";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Tech" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            Tech
          </button>
          <button
            onClick={() => {
              window.location.href = "?category=Science";
            }}
            className={
              "rounded-md hover:bg-black hover:text-[#f1ff52] border-black border-[1px] transition-all font-light px-4 py-1 h-8 items-center leading-3" +
              (props.category == "Science" ? " bg-[#f1ff52] text-black" : "")
            }
          >
            Science
          </button>
        </div>
      </div>
    </div>
  );
}
