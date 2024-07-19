import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

const information = [
  {
    name: "CEO Information",
    ceo: "John Doe",
    role: "CEO of Bayer Pharmaceuticals",
    img: "/ceo.jpg",
    location: "123 Main Street, City, Country",
    number: "+123 456 7890",
    email: "info@companyxyz.com",
    history:
      "We have been in the industry since 1999 lorem ipsum lorem ipsum lorem ipsum",
    mission: "We have a mission to lorem ipsum lorem ipsum lorem ipsum",
    vision: "We believe that lorem ipsum lorem ipsum lorem ipsum",
  },
];

export default function CompanyProfile() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <img
              alt=""
              src="/bayer.png"
              className="mb-4 h-16 w-16 rounded-full"
            />
            Bayer Pharmaceuticals Co. Limited
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {information.map((info) => {
              return (
                <div key={info.name}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg  border-black border-2 bg-[#f1ff52]">
                      <Image src="/user.png" width={20} height={20} />
                    </div>
                    {info.name}
                  </dt>
                  {info.ceo && (
                    <div
                      key={info.ceo}
                      className="flex my-2  items-center gap-x-6"
                    >
                      <img
                        alt=""
                        src={info.img}
                        className="h-16 w-16 object-cover rounded-full"
                      />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {info.ceo}
                        </h3>
                        <p className="text-sm font-regular leading-6 text-[#9b98a1]">
                          {info.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {information.map((info) => {
              return (
                <div key={info.name}>
                  <dl className="col-span-2 sm:grid-cols-2">
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center  border-black border-2 rounded-lg bg-[#f1ff52]">
                          <Image src="/email.png" width={20} height={20} />
                        </div>
                        Contact Information
                      </dt>
                      {info.location && (
                        <div>
                          <p className="mt-1 text-sm leading-7 text-gray-600">
                            {info.location}
                          </p>
                          <p className="mt-1 text-sm leading-7 text-gray-600">
                            {info.number}
                          </p>
                          <p className="mt-1 text-sm leading-7 text-gray-600">
                            {info.email}
                          </p>
                        </div>
                      )}
                    </div>
                  </dl>
                </div>
              );
            })}
            {information.map((info) => {
              return (
                <div key={info.name}>
                  <dl className="col-span-2 sm:grid-cols-2">
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg  border-black border-2 bg-[#f1ff52]">
                          <Image src="/info.png" width={20} height={20} />
                        </div>
                        Company Information
                      </dt>
                      <p className="text-sm mt-4 font-semibold">History</p>
                      <div className="mt-1 text-sm  text-gray-600">
                        {info.history}
                      </div>
                    </div>
                  </dl>
                </div>
              );
            })}
            {information.map((info) => {
              return (
                <div key={info.name}>
                  <dl className="col-span-2 sm:grid-cols-2">
                    <div>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="mb-6 flex  h-10 w-10 items-center justify-center  border-black border-2 rounded-lg bg-[#80e6ff]">
                          <Image src="/star.png" width={20} height={20} />
                        </div>
                        Vision & Mission
                      </dt>
                      <p className="text-sm mt-4 font-semibold">Mission</p>
                      <div className="mt-1 text-sm  text-gray-600">
                        {info.mission}
                      </div>
                      <p className="text-sm mt-4  font-semibold">Vision</p>
                      <div className="mt-1 text-sm  text-gray-600">
                        {info.vision}
                      </div>
                    </div>
                  </dl>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
