import { AdvanceYourCareerCards } from "@/constants/advance-your-career-cards";

function AdvanceYourCareerCard(props) {
  return (
    <div className=" flex flex-col w-[350px] rounded-lg bg-gray-50 hover:bg-white shadow p-6 justify-between border-2 border-black  hover:transform hover:-translate-y-2 transition hover:shadow-xl hover:cursor-pointer group">
      <div className="flex flex-col justify-center p-2 items-center gap-6">
        <img className="h-fill w-[300px]" src={props.imageUrl} alt="" />
        <div className="flex flex-col gap-1 text-left">
          <h3 className="font-semibold text-xl"> {props.title}</h3>
          <p className="text-sm"> {props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default AdvanceYourCareerCard;
