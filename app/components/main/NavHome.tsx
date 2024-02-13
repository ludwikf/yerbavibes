import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import PostImage from "../PostImage";
import { poorStory } from "../fonts";

export default function NavHome() {
  return (
    <div className="absolute flex w-full left-[50%] translate-x-[-50%] justify-between text-lg pt-4 z-10 select-none">
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
          Yerba Mate
        </Link>
        <Link href={"/top"} className="cursor-pointer hover:text-pageTheme">
          Top Rated
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          About
        </Link>
      </ul>
      <ul className="flex items-center justify-center gap-6">
        <Link
          href={"/user/favorite"}
          className="cursor-pointer hover:text-pageTheme"
        >
          <HeartIcon className="w-7" />
        </Link>
        <span className="text-[#888]">|</span>
        <Link href={"/user/settings"} className="flex items-center gap-1 mr-4">
          Ludwik
          <UserCircleIcon className="w-9" />
        </Link>
        {/* <Link
          href={"/login"}
          className="cursor-pointer hover:text-pageTheme mr-5"
        >
          Sign In
        </Link> */}
      </ul>
    </div>
  );
}
