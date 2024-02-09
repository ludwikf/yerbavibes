import Image from "next/image";
import React from "react";
import { poorStory } from "../fonts";
import Link from "next/link";
import PostImage from "../PostImage";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="absolute flex w-full left-[50%] translate-x-[-50%] justify-between text-lg pt-3 z-10 select-none">
      <Link href={"/"} className="ml-20">
        <ul>
          <li className="text-xl flex items-center gap-1">
            <div className="w-[30x] h-[30px]">
              <PostImage src={"/yvlogo.png"} />
            </div>
            <div
              className={`text-2xl ${poorStory.className} brightness-[90%] font-bold`}
            >
              YerbaVibes
            </div>
          </li>
        </ul>
      </Link>
      <ul className="flex items-center text-[#222] gap-6">
        <Link href={"/yerba"} className="cursor-pointer hover:text-pageTheme">
          Yerbas
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          Suggest
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          About
        </Link>
      </ul>
      <ul className="flex items-center justify-center">
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          <HeartIcon className="w-7" />
        </Link>
        <span className="text-[#888] mx-5">|</span>
        <Link href={""} className="cursor-pointer hover:text-pageTheme mr-5">
          Sign In
        </Link>
      </ul>
    </div>
  );
}