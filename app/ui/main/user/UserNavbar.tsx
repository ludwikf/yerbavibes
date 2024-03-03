"use client";
import Link from "next/link";
import React from "react";
import {
  Cog6ToothIcon as Cog6Tooth,
  HeartIcon as Heart,
  StarIcon as Star,
} from "@heroicons/react/24/outline";
import { Cog6ToothIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function UserNavbar() {
  const pathName = usePathname();
  return (
    <div className="hidden md:flex mt-3 w-[18%] h-[400px] border-r-[1px] border-[#888] flex-col justify-start">
      <div className="px-3">Hello</div>
      <div className="px-3 font-bold text-lg mb-5">Ludwik</div>
      <ul className="w-full">
        <Link
          href={"/user/settings"}
          className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
        >
          {pathName === "/user/settings" ? (
            <Cog6ToothIcon className="w-6" />
          ) : (
            <Cog6Tooth className="w-6" />
          )}

          <span
            className={`font-${
              pathName === "/user/settings" && "bold"
            } text-lg`}
          >
            Settings
          </span>
        </Link>
        <Link
          href={"/user/favorite"}
          className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
        >
          {pathName === "/user/favorite" ? (
            <HeartIcon className="w-6" />
          ) : (
            <Heart className="w-6" />
          )}
          <span
            className={`font-${
              pathName === "/user/favorite" && "bold"
            } text-lg`}
          >
            Favorite
          </span>
        </Link>
        <Link
          href={"/user/reviews"}
          className="flex gap-1.5 items-center hover:bg-[#dcd8c5] p-3"
        >
          {pathName === "/user/reviews" ? (
            <StarIcon className="w-6" />
          ) : (
            <Star className="w-6" />
          )}
          <span
            className={`font-${pathName === "/user/reviews" && "bold"} text-lg`}
          >
            Reviews
          </span>
        </Link>
      </ul>
    </div>
  );
}
