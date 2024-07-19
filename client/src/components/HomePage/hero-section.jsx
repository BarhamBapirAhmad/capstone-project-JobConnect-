"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Nav from "../Common/navbar";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
  { name: "Post Job", href: "/post-job" },
  { name: "Search", href: "/search" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
        <div className=" border-black border-[1px]"></div>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/logo.png"
                  width={160}
                  height={120}
                  alt="Picture of the author"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative px-6 pt-20 lg:px-8">
        <div className="flex justify-center pt-12">
          <Image src="/heroimage.png" width={500} height={500} />
        </div>
        <div className="mx-auto max-w-2xl pt-6 pb-32 sm:pb-48 lg:pb-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover over 5,000 job opportunities
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with top companies, find skilled professionals
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <input
                className="h-10  placeholder:text-sm lg:placeholder:text-lg w-[240px] lg:w-[800px] bg-white px-4 py-6 rounded-md placeholder:text-black border-black border-2  outline-[#7ad6ea]"
                type="text"
                placeholder="What job are you seeking?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
