import Link from "next/link";
import React from "react";

export default function Details({ data }: any) {
  return (
    <div className="max-w-screen min-h-[90vh] flex justify-center items-center pb-10">
      <div className="h-full w-[1000px] flex flex-col items-center">
        <div className="text-4xl border-l-[8px] pl-2 border-pageTheme w-full">
          Details
        </div>
        <div className="w-full mt-5 text-[#555]">{data.details}</div>
        <div className="w-full my-5 select-none">
          <div>
            {data.tags
              .filter((tag: any) => tag && tag.trim() !== "")
              .map((tag: any) => (
                <Link
                  key={tag}
                  href={""}
                  className="border-[1px] mr-2 border-[#aaa] py-2 px-3 rounded-full text-sm hover:bg-[#c5c5c5]"
                >
                  {tag}
                </Link>
              ))}
          </div>
        </div>
        <div className="w-[100%] text-lg">
          <div className="border-y-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Producer</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>{data.producer}</Link>
            </span>
          </div>

          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Category</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>{data.category}</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Stimulation strength</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>{data.strength}</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Origin of leaves</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>{data.origin}</Link>
            </span>
          </div>
          <div className="border-b-[1px] py-3 border-[#aaa]">
            <span className="font-bold">Flavor</span>
            <span className="ml-5 text-[#333] hover:text-pageTheme select-none">
              <Link href={""}>{data.flavor}</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
