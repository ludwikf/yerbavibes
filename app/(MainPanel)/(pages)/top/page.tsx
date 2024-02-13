import PostImage from "@/app/components/PostImage";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <div className="w-1/2">
        <div className="text-2xl font-bold mb-14">Top Rated Yerba Mate</div>
        <div className="w-full">
          <div className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]">
            <div className="text-2xl w-[70px] text-center">1</div>
            <Link
              href={"/yerba/productName"}
              className="min-w-[150px] h-[150px]"
            >
              <PostImage src={"/fs.png"} />
            </Link>
            <div className="flex flex-col justify-between w-[60%] h-[100%] py-1 pl-5">
              <div>
                <Link href={"/yerba/productName"} className="font-bold text-lg">
                  Verde Mate Green
                </Link>
                <div>Classic</div>
              </div>
              <div>VerdeMate</div>
            </div>
            <div className="flex flex-col items-end h-[100%] pt-1 pl-5">
              <div className="flex gap-1 items-center">
                <StarIcon className="w-7 text-pageTheme" />{" "}
                <span className="text-2xl">4.98</span>
              </div>
              <div className="text-[#888] text-sm">458 ratings</div>
            </div>
          </div>
          <div className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]">
            <div className="text-2xl w-[70px] text-center">2</div>
            <Link
              href={"/yerba/productName"}
              className="min-w-[150px] h-[150px]"
            >
              <PostImage src={"/guarana.png"} />
            </Link>
            <div className="flex flex-col justify-between w-[60%] h-[100%] py-1 pl-5">
              <div>
                <Link href={"/yerba/productName"} className="font-bold text-lg">
                  Verde Mate Superior Power Guarana
                </Link>
                <div>Flavored</div>
              </div>
              <div>VerdeMate</div>
            </div>
            <div className="flex flex-col items-end h-[100%] pt-1 pl-5">
              <div className="flex gap-1 items-center">
                <StarIcon className="w-7 text-pageTheme" />{" "}
                <span className="text-2xl">4.78</span>
              </div>
              <div className="text-[#888] text-sm">324 ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
