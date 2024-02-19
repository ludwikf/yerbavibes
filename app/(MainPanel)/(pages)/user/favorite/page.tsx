import PostImage from "@/app/components/PostImage";
import Favorite from "@/app/ui/main/user/favorite/Favorite";
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
    <div className="min-h-screen flex justify-center">
      <div className="flex w-[80%] min-h-[440px] justify-center mt-[130px] ">
        <div className="mt-3 w-[18%] h-[400px] border-r-[1px] border-[#888] flex flex-col justify-start">
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
        <div className="w-[60%] min-h-screen pl-10 py-1">
          <div className="text-3xl mb-10">Favorite List</div>
          <Favorite />
        </div>
      </div>
    </div>
  );
}
