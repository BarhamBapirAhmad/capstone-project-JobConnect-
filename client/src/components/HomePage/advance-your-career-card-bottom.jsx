import { AdvanceYourCareerCardsBottom } from "@/constants/advance-your-career-cards-bottom";

function AdvanceYourCareerCardBottom(props) {
  return (
    <div className="flex flex-col w-[350px] rounded-lg bg-gray-50 hover:bg-white shadow p-4 justify-between border-2 border-black  hover:transform hover:-translate-y-2 transition hover:shadow-xl hover:cursor-pointer group">
      <div className="flex justify-left items-center gap-4">
        <img className="h-12 w-12" src={props.imageUrl} alt="" />
        <div className="flex flex-col gap-1 text-left">
          <h3 className="font-medium text-lg"> {props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default AdvanceYourCareerCardBottom;
