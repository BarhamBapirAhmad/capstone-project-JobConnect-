import { Cards } from "@/constants/category-cards";
import CategoryCard from "./category-card";

function CategorySection() {
  return (
    <div className="mb-12">
      <div className="mt-24 mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Popular Job Categories
        </h1>
      </div>
      <div className="flex flex-col">
        {" "}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 p-8 mx-auto ">
          {Cards.map((card) => {
            return (
              <CategoryCard
                name={card.name}
                imageUrl={card.imageUrl}
                listing={card.listing}
              />
            );
          })}
          <div className=" flex flex-col w-[260px] col-span-1 divide-gray-200 rounded-lg bg-gray-50 hover:bg-white shadow p-6 justify-between border-2 border-black  hover:transform hover:-translate-y-2 transition hover:shadow-xl hover:cursor-pointer group">
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900">
                +10K Jobs
              </h3>
              <p className="mt-1 text-sm text-gray-500">Apply Now!</p>
            </div>
            <div className="flex justify-between items-end">
              <button className="bg-[#80e6ff] rounded-md group-hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
                Explore
              </button>{" "}
              <img className="h-16 w-16 " src="./job-search.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
