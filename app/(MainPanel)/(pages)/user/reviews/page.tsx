import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import UserNavbar from "@/app/ui/main/user/UserNavbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex w-[80%] h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-[60%] pl-10 py-1">
          <div className="text-3xl mb-10">Your Reviews</div>
          <div className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]">
            <Link
              href={"/yerba/productName"}
              className="min-w-[150px] h-[150px]"
            >
              <PostImage src={"/fs.png"} />
            </Link>
            <div className="flex flex-col w-[60%] h-[100%] py-1 pl-5">
              <div>
                <div>
                  <Ratings />
                </div>
                <Link href={"/yerba/productName"} className="ml-1 text-[#888]">
                  Verde Mate Green
                </Link>
              </div>
              <div className="ml-1 mt-4  overflow-hidden ">
                Very good product really recommend it!
              </div>
            </div>
            <div className="flex flex-col items-end h-[100%] pl-5">
              <button className="hover:bg-[#dcd8c5] p-1 rounded-xl">
                <TrashIcon className="w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
