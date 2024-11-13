import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import {ModeToggle } from "./toggle-mood";
const Restrict = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        children
      ) : (
        <Disclosure as="nav" className="bg-zinc-100 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center dark:text-white dark:bg-zinc-100">
                  <Image
                    src="/logo-transparent-svg.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => signIn()}
                  className={
                    "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium dark:text-white my-2"
                  }
                >
                  Sign In
                </button>
                <button
                  onClick={() => console.log(session)}
                  className={
                    "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium dark:text-white "
                  }
                >
                  Sign Up
                </button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </Disclosure>
      )}
    </>
  );
};

export default Restrict;
