import Image from "next/image";
import React from "react";
import { poorStory } from "../fonts";
import Link from "next/link";
import PostImage from "../PostImage";

export default function Navbar() {
  return (
    <div className="absolute flex w-2/3 left-[50%] translate-x-[-50%] justify-between text-lg pt-3 z-10 select-none">
      <Link href={"/"}>
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
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          Home
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          Yerbas
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          listaa1
        </Link>
        <Link href={""} className="cursor-pointer hover:text-pageTheme">
          listx2
        </Link>
      </ul>
    </div>
  );
}
