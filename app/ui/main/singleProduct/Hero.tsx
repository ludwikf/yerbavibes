import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-screen h-screen flex justify-evenly items-center mx-52">
      <div className="min-w-[350px] h-[350px] animateZoomIn shadow-lg p-5">
        <PostImage src={"/guarana.png"} />
      </div>
      <div className="flex flex-col items-center justify-evenly h-[350px] w-[500px]">
        <div className="flex flex-col items-center">
          <div className="text-black text-4xl mb-2 text-center">
            Verde Mate Green Energia Guarana
          </div>
          <Ratings />
          <div className="text-[#888] text-lg mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            delectus modi provident
          </div>
        </div>
        <div className="flex gap-1.5">
          <Link
            href={"/"}
            className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1"
          >
            <PostImage src={"/fs.png"} />
          </Link>
          <Link
            href={"/"}
            className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1"
          >
            <PostImage src={"/fs.png"} />
          </Link>
          <Link
            href={"/"}
            className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1"
          >
            <PostImage src={"/fs.png"} />
          </Link>
          <Link
            href={"/"}
            className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1"
          >
            <PostImage src={"/fs.png"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
