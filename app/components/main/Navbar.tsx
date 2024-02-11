import Image from "next/image";
import React from "react";
import { poorStory } from "../fonts";
import Link from "next/link";
import PostImage from "../PostImage";
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="absolute flex w-full left-[50%] translate-x-[-50%] justify-between items-center text-lg pt-3 z-10 select-none">
      <Link href={"/"} className="ml-20">
        <ul>
          <li className="text-xl flex items-center gap-1">
            <div className="min-w-[30px] h-[30px]">
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
      <ul className="flex items-center w-[30%] text-[#222] ml-48 mr-5">
        <div className="w-[100%]">
          <form>
            <div className="rounded-lg flex">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-4 text-sm text-gray-900 border-l-2 border-t-2 border-b-2 border-[#ccc] rounded-l-lg bg-bodyTheme focus:outline-none  focus:ring-pageTheme focus:border-pageTheme focus:shadow-lg placeholder:text-[#666]"
                placeholder="Search for Yerba Mate products"
                required
              />
              <button
                type="submit"
                className={`text-white bg-pageTheme hover:brightness-[90%] transition focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-r-lg text-sm px-4 py-2 `}
              >
                <MagnifyingGlassIcon className="w-6" />
              </button>
            </div>
          </form>
        </div>
      </ul>
      <ul className="flex items-center justify-center gap-6">
        <Link
          href={"/yerba"}
          className="cursor-pointer hover:text-pageTheme min-w-[92px]"
        >
          Yerba Mate
        </Link>
        <Link
          href={"/top"}
          className="cursor-pointer hover:text-pageTheme min-w-[82px]"
        >
          Top Rated
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          About
        </Link>
        <Link
          href={"/favorite"}
          className="cursor-pointer hover:text-pageTheme"
        >
          <HeartIcon className="w-7" />
        </Link>
        <span className="text-[#888]">|</span>
        <Link
          href={"/login"}
          className="cursor-pointer hover:text-pageTheme mr-5 min-w-[55px]"
        >
          Sign In
        </Link>
      </ul>
    </div>
  );
}
