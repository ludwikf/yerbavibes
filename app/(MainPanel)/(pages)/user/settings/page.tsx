import UsernameEdit from "@/app/ui/main/user/settings/UsernameEdit";
import { authOptions } from "@/libs/authOptions";
import {
  Cog6ToothIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

export default async function page() {
  const session: any = await getServerSession(authOptions);
  return (
    <div className="h-screen flex justify-center">
      <div className="flex w-[80%] h-[440px] justify-center mt-[130px] ">
        <div className="mt-3 w-[18%] h-[400px] flex flex-col justify-start">
          <div className="px-3">Hello</div>
          <div className="px-3 font-bold text-lg mb-5">
            {session?.user?.username}
          </div>
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
        <div className="w-[60%] border-l-[1px] border-[#888] pl-10 py-1">
          <div className="text-3xl mb-7">Account settings</div>
          <div className="w-3/4">
            <div className="text-2xl mb-7">Details</div>
            <div>
              <div className="text-lg">Username</div>
              <div className="mt-2 mb-7 border-[1px] border-[#bbb] p-4 rounded-lg flex justify-between">
                {session?.user?.username} <UsernameEdit />
              </div>
            </div>
            <div>
              <div className="text-lg">Password</div>
              <div className="mt-2 border-[1px] border-[#bbb] px-4 py-3 rounded-lg flex justify-between items-center">
                <span className="text-2xl">••••••••</span>{" "}
                <button className="text-pageTheme cursor-pointer hover:brightness-[98%]">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="p-3 bg-red-500 rounded-lg mt-10 hover:bg-red-600 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
