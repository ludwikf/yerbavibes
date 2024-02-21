import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import PostImage from "../PostImage";
import { poorStory } from "../fonts";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import Logout from "../Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";

export default async function NavHome() {
  const session: any = await getServerSession(authOptions);

  return (
    <div className="absolute flex w-full left-[50%] translate-x-[-50%] justify-between text-lg pt-4 z-10 select-none">
      <Link href={"/"} className="w-1/3 flex justify-center">
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
      <ul className="flex items-center text-[#222] gap-6 w-1/3 justify-center">
        <Link href={"/yerba"} className="cursor-pointer hover:text-pageTheme">
          Yerba Mate
        </Link>
        <Link href={"/top"} className="cursor-pointer hover:text-pageTheme">
          Top Rated
        </Link>
      </ul>
      <ul className="flex items-center justify-end gap-6 w-1/3">
        <Link
          href={"/user/favorite"}
          className="cursor-pointer hover:text-pageTheme"
        >
          <HeartIcon className="w-7" />
        </Link>
        <span className="text-[#888]">|</span>
        {session && session?.user?.role === "admin" && (
          <Link href={"/admin-cp"} className="text-red-500">
            Admin
          </Link>
        )}
        {session ? (
          <>
            <Link href={"/user/settings"} className="flex items-center gap-1">
              {session.user.username}
              <UserCircleIcon className="w-9 text-[#888]" />
            </Link>
            <span className="text-[#888]">|</span>
            <Logout />
          </>
        ) : (
          <Link
            href={"/login"}
            className="cursor-pointer hover:text-pageTheme mr-5"
          >
            Sign In
          </Link>
        )}
      </ul>
    </div>
  );
}
