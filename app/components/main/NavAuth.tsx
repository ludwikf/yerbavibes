import React from "react";
import PostImage from "../PostImage";
import { poorStory } from "../fonts";
import Link from "next/link";

export default function NavAuth() {
  return (
    <div className="absolute flex items-center justify-center w-screen left-0 top-0 z-10 select-none">
      <div className="border-b-[1px] flex border-[#ccc] w-[70%] p-5">
        <Link href={"/"} className="ml-20">
          <ul>
            <li className="text-xl flex items-center gap-1">
              <div className="w-[40x] h-[40px]">
                <PostImage src={"/yvlogo.png"} />
              </div>
              <div
                className={`text-3xl ${poorStory.className} brightness-[90%] font-bold`}
              >
                YerbaVibes
              </div>
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
}
