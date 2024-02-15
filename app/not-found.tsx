import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Navbar from "./components/main/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex justify-center items-center bg-bodyTheme">
        <div className="flex flex-col gap-2">
          <div className="text-[#aaa]">Error 404</div>
          <div className="text-5xl">There's nothing here</div>
          <div className="text-xl">This page could not be found.</div>
          <div>
            <Link
              href={"/"}
              className="flex bg-pageTheme pl-2 pr-3 py-3 rounded-2xl gap-1 justify-center w-[200px]"
            >
              <ChevronLeftIcon className="w-5" />
              Go to home page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
