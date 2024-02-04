import Link from "next/link";
import React from "react";

export default function Details() {
  return (
    <div className="max-w-screen h-screen flex justify-center items-center">
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
        <div className="w-[100%] text-lg mt-8">
          <div className="border-y-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Producer</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Verde Mate</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Type of leaves</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Green Mate with fruits</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Category</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Flavored</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Stimulation strength</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Very high</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Origin of leaves</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Brazil</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Flavor</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme">
              <Link href={""}>Guarana</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
