import { FeaturedEmployersCards } from "@/constants/featured-employer-cards";
import FeaturedEmployersCard from "./featured-employers-card";

function FeaturedEmployers() {
  return (
    <div className="mb-24">
      <div className="mt-24 mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Featured Employers
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 p-8 items-center md:px-28 lg:px-48 mx-auto justify-center ">
        {FeaturedEmployersCards.map((card) => {
          return (
            <FeaturedEmployersCard
              title={card.title}
              imageUrl={card.imageUrl}
              subtitle={card.subtitle}
              button={card.button}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedEmployers;
