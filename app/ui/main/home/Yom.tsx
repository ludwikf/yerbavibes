import React from "react";
import Image from "next/image";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";

export default function Yom() {
  return (
    <div className="w-screen h-screen bg-green-500 flex items-center overflow-hidden">
      <div className="w-1/2 flex justify-center animate-slide-from-left ml-32">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/yerbavibes-651c1.appspot.com/o/pol_pl_Verde-Mate-Green-Organica-0-5kg-5039_5.png?alt=media&token=21511988-30b0-4ee8-b739-5531b545470c"
          }
          alt="yerba"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="object-cover w-[500px] h-[500px] shadow-2xl"
        />
      </div>
      <div className="w-1/2 flex justify-center animate-slide-from-right mr-32">
        <div className="flex flex-col items-center">
          <div className={`${poorStory.className} text-green-900 text-4xl`}>
            Yerba of the month
          </div>
          <div className="text-black text-5xl">Verde Mate Green</div>
          <Link
            href={""}
            className="text-black border-2 border-green-800 px-10 py-1.5 mt-5 hover:bg-green-600 transition rounded"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
