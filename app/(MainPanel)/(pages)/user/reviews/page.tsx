import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import {
  Cog6ToothIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex w-[80%] h-[440px] justify-center mt-[130px] ">
        <div className="mt-3 w-[18%] h-[400px] flex flex-col justify-start">
          <div className="px-3">Hello</div>
          <div className="px-3 font-bold text-lg mb-5">Ludwik</div>
          <ul className="w-full">
            <Link
              href={"/user/settings"}
              className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
            >
              <Cog6ToothIcon className="w-6" />
              <span className="text-lg">Settings</span>
            </Link>
            <Link
              href={"/user/favorite"}
              className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
            >
              <HeartIcon className="w-6" />
              <span className="text-lg">Favorite</span>
            </Link>
            <Link
              href={"/user/reviews"}
              className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
            >
              <StarIcon className="w-6" />
              <span className="text-lg">Reviews</span>
            </Link>
          </ul>
        </div>
        <div className="w-[60%] border-l-[1px] border-[#888] pl-10 py-1">
          <div className="text-3xl mb-10">Your Reviews</div>
          <div className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]">
            <Link
              href={"/yerba/productName"}
              className="min-w-[150px] h-[150px]"
            >
              <PostImage src={"/fs.png"} />
            </Link>
            <div className="flex flex-col w-[60%] h-[100%] py-1 pl-5">
              <div>
                <div>
                  <Ratings />
                </div>
                <Link href={"/yerba/productName"} className="ml-1 text-[#888]">
                  Verde Mate Green
                </Link>
              </div>
              <div className="ml-1 mt-4  overflow-hidden ">
                Very good product really recommend it!
              </div>
            </div>
            <div className="flex flex-col items-end h-[100%] pl-5">
              <button className="hover:bg-[#dcd8c5] p-1 rounded-xl">
                <TrashIcon className="w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
