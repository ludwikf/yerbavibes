import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import { HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconActive,
  PlusCircleIcon as PlusCircleIconActive,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default async function Hero({ data }: any) {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-yerba-producer?producer=${data.producer}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const resData = await res.json();
      return resData;
    } catch (error) {
      return null;
    }
  }
  const producerData = await fetchData();
  return (
    <div className="max-w-screen h-screen flex justify-evenly items-center mx-52">
      <div className="min-w-[400px] h-[400px] animateZoomIn shadow-lg p-5 flex justify-center items-center">
        <PostImage src={`${data.image}`} />
      </div>
      <div className="flex flex-col items-center justify-evenly h-[350px] w-[500px]">
        <div className="flex flex-col items-center">
          <div className="text-black text-4xl mb-2 text-center">
            {data.title}
          </div>
          <Ratings />
          <div className="text-[#888] text-lg mt-4 text-center flex gap-3">
            <div className="group cursor-pointer">
              <HeartIcon className="w-9 group-hover:hidden" />
              <HeartIconActive className="w-9 hidden group-hover:block text-pageTheme" />
            </div>
            <div className="group cursor-pointer flex items-center gap-1">
              <PlusCircleIcon className="w-9 group-hover:hidden" />
              <PlusCircleIconActive className="w-9 hidden group-hover:block text-pageTheme" />
              <div className="group-hover:text-pageTheme">Add review</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 items-center gap-1.5 w-[100%]">
          <div className="text-[#888]">
            More{" "}
            <Link href={"/"} className="text-pageTheme">
              {data.producer}
            </Link>{" "}
            products
          </div>
          <div className="flex gap-1.5">
            {producerData.map((e: any) => (
              <Link
                key={e}
                href={`/yerba/details?id=${e._id}`}
                className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1 flex justify-center items-center"
              >
                <div className="w-[110px] h-[110px]">
                  <PostImage src={`${e.image}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
