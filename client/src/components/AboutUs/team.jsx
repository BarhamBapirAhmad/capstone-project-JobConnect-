import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-[#f5f3f3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-800">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
          <Image
            className="mt-8"
            src="/teamwork.png"
            width={1000}
            height={1000}
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          <a href="https://www.linkedin.com/in/leorahx/">
            <li className="rounded-2xl bg-[#f5f3f3] hover:bg-black  hover:cursor-pointer transition-all hover:-translate-y-2 border-black border-2  px-8 py-10 group hover:shadow-lg">
              <Image
                alt=""
                src="/sarah.jpeg"
                width={1000}
                height={1000}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black group-hover:text-[#f1ff52]">
                Sarah Mustafa
              </h3>
              <p className="text-sm leading-6 text-black group-hover:text-white">
                Full-Stack Web Developer
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-black group-hover:text-[#80e6ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/shcar/">
            <li className="rounded-2xl bg-[#f5f3f3] hover:bg-black  hover:cursor-pointer transition-all hover:-translate-y-2 border-black border-2  px-8 py-10 group hover:shadow-lg">
              <Image
                alt=""
                src="/shkar.jpeg"
                width={1000}
                height={1000}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black group-hover:text-[#f1ff52]">
                Shkar Ghareeb
              </h3>
              <p className="text-sm leading-6 text-black group-hover:text-white">
                Full-Stack Web Developer
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-black group-hover:text-[#80e6ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/aween-ezzat-/">
            <li className="rounded-2xl bg-[#f5f3f3] hover:bg-black  hover:cursor-pointer transition-all hover:-translate-y-2 border-black border-2  px-8 py-10 group hover:shadow-lg">
              <Image
                alt=""
                src="/aween.jpeg"
                width={1000}
                height={1000}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black group-hover:text-[#f1ff52]">
                Aween Izzat
              </h3>
              <p className="text-sm leading-6 text-black group-hover:text-white">
                Full-Stack Web Developer
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href="" className="text-black group-hover:text-[#80e6ff]">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5 text-black group-hover:text-[#80e6ff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </a>
          <a href="">
            <li className="rounded-2xl bg-[#f5f3f3] hover:bg-black  hover:cursor-pointer transition-all hover:-translate-y-2 border-black border-2  px-8 py-10 group hover:shadow-lg">
              <Image
                alt=""
                src="/sajad.jpeg"
                width={1000}
                height={1000}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black group-hover:text-[#f1ff52]">
                Sajad Ismael
              </h3>
              <p className="text-sm leading-6 text-black group-hover:text-white">
                Full-Stack Web Developer
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-black group-hover:text-[#80e6ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/barham-bapir-878b28290/">
            <li className="rounded-2xl bg-[#f5f3f3] hover:bg-black  hover:cursor-pointer transition-all hover:-translate-y-2 border-black border-2  px-8 py-10 group hover:shadow-lg">
              <Image
                alt=""
                src="/barham.jpeg"
                width={1000}
                height={1000}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black group-hover:text-[#f1ff52]">
                Barham Bapir
              </h3>
              <p className="text-sm leading-6 text-black group-hover:text-white">
                Full-Stack Web Developer
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-black group-hover:text-[#80e6ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
