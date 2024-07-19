import { FeaturedEmployersCards } from "@/constants/featured-employer-cards";

function FeaturedEmployersCard(props) {
  return (
    <div className=" flex flex-col w-[260px] rounded-lg bg-gray-50 hover:bg-white shadow p-6 justify-between border-2 border-black  hover:transform hover:-translate-y-2 transition hover:shadow-xl hover:cursor-pointer group">
      <div className="flex flex-col justify-center p-2 items-center gap-6">
        <img className="h-16 w-16 " src={props.imageUrl} alt="" />
        <div className="flex flex-col gap-1 text-center">
          <h3 className="font-semibold text-xl"> {props.title}</h3>
          <p className="text-sm"> {props.subtitle}</p>
        </div>
        <button className="bg-gray-50 rounded-md group-hover:bg-[#f1ff52] border-black border-2 transition-all font-medium px-6 py-2 h-10 items-center leading-3">
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default FeaturedEmployersCard;
