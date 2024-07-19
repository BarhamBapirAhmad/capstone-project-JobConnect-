import React from "react";
import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-[#f5f3f3] py-24 sm:py-32">
      <div className="mx-auto  max-w-7xl px-6 text-center lg:px-2 border-2 border-black  rounded-lg">
        <div className="mx-auto max-w-2xl pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
          <p className="whitespace-no-wrap mt-4 text-lg leading-8 text-gray-600">
            Get in touch with us. We're here to assist you in finding the
            perfect job opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:w-[1700px] lg:flex-row justify-center items-start gap-6 mt-10">
          <div className=" w-full lg:w-1/2">
            <form action="#" method="POST" className="space-y-6 mx-20">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Full Name
                </label>
                <div>
                  <input
                    id="name"
                    name="name"
                    placeholder="Write your name here"
                    required
                    className="block w-full rounded-md py-1.5 px-3 shadow-sm border-2 border-black ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Email address
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@example.com"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-2 px-3 py-1.5 shadow-sm border-black ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Subject
                </label>
                <div>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Select a subject"
                    required
                    className="block w-full rounded-md border-2 border-black px-3 py-1.5 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Message
                </label>
                <div>
                  <input
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    className="block w-full rounded-md border-2 px-3 py-1.5 shadow-sm border-black ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#f1ff52] border-2 border-black px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#80e6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80e6ff]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-end">
            <Image src="/contact.png" width={1000} height={1000} />
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
        <div class="bg-[#f5f3f3] py-24 sm:py-32">
          <div class="mx-auto max-w-6xl px-6 text-center lg:px-2 border-2 border-black rounded-lg">
            <div class="p-6 flex justify-between">
              <div class="text-center">
                <h2 class="text-xl font-bold mb-2 text-gray-900">Call Us</h2>
                <p>+1 123 456 7890</p>
                <p>+1 235 456 7890</p>
              </div>
              <div class="text-center">
                <h2 class="text-xl font-bold mb-2 text-gray-900">Email Us</h2>
                <p>
                  <a
                    href="mailto:info@company.com"
                    class="text-gray-900 hover:text-[#f1ff52] "
                  >
                    info@company.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@company.co"
                    class="text-gray-900 hover:text-[#f1ff52] "
                  >
                    hello@company.co
                  </a>
                </p>
              </div>
              <div class="text-center">
                <h2 class="text-xl font-bold mb-2 text-gray-900">Visit Us</h2>
                <p>123 Job Street</p>
                <p>San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
