import Image from "next/image";
import React from "react";
import { poorStory } from "../fonts";
import Link from "next/link";
import PostImage from "../PostImage";
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Logout from "../Logout";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import Searchbar from "./Searchbar";
import NavMobile from "./NavMobile";

export default async function Navbar() {
  const session: any = await getServerSession(authOptions);
  return (
    <>
      <div className="hidden lg:flex absolute w-full left-[50%] translate-x-[-50%] justify-between items-center text-lg pt-3 z-10 select-none">
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
        <ul className="flex items-center max-w-[600px] flex-grow text-[#222] mx-5">
          <Searchbar />
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
              <Link
                href={"/user/settings"}
                className="flex items-center gap-1.5"
              >
                {session.user.username}
                <div>
                  {session?.user?.avatar ? (
                    <div
                      className="relative"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        src={session?.user?.avatar}
                        alt="avatar"
                        fill
                        sizes="100vh"
                        className="rounded-full absolute object-cover"
                      />
                    </div>
                  ) : (
                    <UserCircleIcon className="w-9 text-[#888]" />
                  )}
                </div>
              </Link>
              <span className="text-[#888]">|</span>
              <div className="flex w-[30px] mr-5 items-center">
                <Logout />
              </div>
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
      <div className="lg:hidden absolute flex flex-col items-center w-full pt-1 z-10 select-none">
        <NavMobile />
      </div>
    </>
  );
}
