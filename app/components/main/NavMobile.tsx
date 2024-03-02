"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PostImage from "../PostImage";
import { poorStory } from "../fonts";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Searchbar from "./Searchbar";
import {
  Cog6ToothIcon,
  HeartIcon,
  HomeIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Logout from "../Logout";
import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function NavMobile({ session }: any) {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    if (menu) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [menu]);

  useEffect(() => {
    if (menu) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menu]);
  return (
    <>
      {menu && (
        <>
          <div className="z-[299] fixed left-0 top-0 h-[100dvh] w-[100%] bg-[#00000080]"></div>
          <div
            ref={menuRef}
            className={`z-[300] animate-slide-from-right shadow fixed right-0 top-0 h-[100dvh] w-[80%] max-w-[300px] bg-bodyTheme flex flex-col`}
          >
            <div
              className={`flex ${
                session && "justify-between"
              } p-3 shadow-sm bg-[#00000010]`}
            >
              <XMarkIcon
                className="min-w-7 max-w-7 ml-2 mr-4 cursor-pointer"
                onClick={() => setMenu(false)}
              />
              <Link
                href={"/"}
                className={`text-2xl ${poorStory.className} brightness-[90%] font-bold`}
              >
                YerbaVibes
              </Link>
              {session && (
                <Link href={"/user/settings"} className="mx-5">
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
                </Link>
              )}
            </div>
            <div className="flex-grow flex flex-col justify-between text-md mt-2">
              <div className="flex flex-col">
                <Link
                  href={"/yerba"}
                  className="px-5 py-3 flex items-center gap-1.5"
                >
                  <HomeIcon className="w-7" />
                  Yerba mate
                </Link>
                <Link
                  href={"/top"}
                  className="px-5 py-3 flex items-center gap-1.5"
                >
                  <TrophyIcon className="w-7" />
                  Top rated
                </Link>
                {session && (
                  <>
                    <Link
                      href={"/user/favorite"}
                      className="px-5 py-3 flex items-center gap-1.5"
                    >
                      <HeartIcon className="w-7" />
                      Favorite list
                    </Link>
                    <Link
                      href={"/user/reviews"}
                      className="px-5 py-3 flex items-center gap-1.5"
                    >
                      <StarIcon className="w-7" />
                      Your reviews
                    </Link>
                    <Link
                      href={"/user/settings"}
                      className="px-5 py-3 flex items-center gap-1.5"
                    >
                      <Cog6ToothIcon className="w-7" />
                      Account settings
                    </Link>
                  </>
                )}
              </div>
              <div>
                <div className="border-t-2 h-[60px] border-[#00000020] flex items-center justify-center">
                  {session ? <Logout /> : <Link href={"/login"}>Sign in</Link>}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex w-full items-center justify-evenly">
        <Link href={"/"} className="flex justify-start">
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
        <div>
          <Bars3Icon className="w-7" onClick={() => setMenu(true)} />
        </div>
      </div>
      <div className="w-[85%] mt-2">
        <Searchbar />
      </div>
    </>
  );
}
