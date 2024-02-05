import Link from "next/link";
import React from "react";

export default function Details() {
  return (
    <div className="max-w-screen min-h-[90vh] flex justify-center items-center pb-10">
      <div className="h-full w-[1000px] flex flex-col items-center">
        <div className="text-4xl border-l-[8px] pl-2 border-pageTheme w-full">
          Details
        </div>
        <div className="w-full mt-5 text-[#555]">
          The prepared infusion is characterized by a mild taste with a slightly
          tangy note and a fruity aroma. Such a well-balanced composition will
          appeal to both beginners and seasoned yerba mate enthusiasts. It works
          equally well when served cold as a refreshing tereré or in the
          traditional form of a hot infusion.
        </div>
        <div className="w-full my-5 select-none">
          <div>
            <Link
              href={""}
              className="border-[1px] mr-2 border-[#aaa] py-2 px-3 rounded-full text-sm hover:bg-[#c5c5c5]"
            >
              guarana
            </Link>
            <Link
              href={""}
              className="border-[1px] mr-2 border-[#aaa] py-2 px-3 rounded-full text-sm hover:bg-[#c5c5c5]"
            >
              flavored
            </Link>
            <Link
              href={""}
              className="border-[1px] mr-2 border-[#aaa] py-2 px-3 rounded-full text-sm hover:bg-[#c5c5c5]"
            >
              strong
            </Link>
          </div>
        </div>
        <div className="w-[100%] text-lg">
          <div className="border-y-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Producer</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Verde Mate</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Type of leaves</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Green Mate with fruits</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Category</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Flavored</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Stimulation strength</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Very high</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Origin of leaves</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Brazil</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Flavor</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>Guarana</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
