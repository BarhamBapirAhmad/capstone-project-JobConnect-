export default function CategoryCard(props) {
  return (
    <div className="flex flex-col w-[260px] col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-6 border-2 border-black hover:transform hover:-translate-y-2 transition hover:shadow-xl hover:cursor-pointer ">
      <div className="">
        <div className="pb-4 pt-6">
          <img
            className="h-16 w-16 flex-shrink-0"
            src={props.imageUrl}
            alt=""
          />
        </div>
        <h3 className="truncate text-xl font-semibold text-gray-900">
          {props.name}
        </h3>
        <p className="mt-1 truncate text-sm text-gray-500">{props.listing}</p>
      </div>
    </div>
  );
}
