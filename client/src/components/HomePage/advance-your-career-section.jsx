import { AdvanceYourCareerCards } from "@/constants/advance-your-career-cards";
import { AdvanceYourCareerCardsBottom } from "@/constants/advance-your-career-cards-bottom";
import AdvanceYourCareerCard from "./advance-your-career-card";
import AdvanceYourCareerCardBottom from "./advance-your-career-card-bottom";

function AdvanceYourCareer() {
  return (
    <div className="mt-24 mb-24">
      <div className="flex items-center justify-center mt-24 mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Advance Your Career
        </h1>
      </div>
      <div className="grid sm:grid-cols-1  lg:grid-cols-3 gap-x-6 gap-y-4 p-8 md:px-28 lg:px-48 mx-auto justify-center">
        {AdvanceYourCareerCards.map((card) => {
          return (
            <AdvanceYourCareerCard
              title={card.title}
              imageUrl={card.imageUrl}
              subtitle={card.subtitle}
              button={card.button}
            />
          );
        })}
      </div>
      <div className="grid sm:grid-cols-1  lg:grid-cols-3 gap-x-6 gap-y-4 pt-0 p-8 md:px-28 lg:px-48 mx-auto justify-center">
        {AdvanceYourCareerCardsBottom.map((card) => {
          return (
            <AdvanceYourCareerCardBottom
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

export default AdvanceYourCareer;
