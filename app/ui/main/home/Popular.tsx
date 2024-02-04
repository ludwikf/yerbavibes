import Ratings from "@/app/components/Ratings";
import { poorStory } from "@/app/components/fonts";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Popular() {
  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#ebe7d2] flex flex-col justify-evenly items-center">
      <h2 className={`text-3xl ${poorStory.className}`}>TOP RATED YERBAS</h2>
      <div className="flex justify-evenly w-full">
        <Link
          href={""}
          className="w-[350px] h-[450px] shadow-md flex flex-col items-center justify-evenly"
        >
          <div className="w-[100%] h-[350px] flex justify-center items-center">
            <Image
              src={"/dssdffdf.png"}
              alt="yerba"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="object-cover w-[100%] h-[auto]"
            />
          </div>
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-2xl">Verde Mate Green</h1>
            <div className="flex">
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
            </div>
          </div>
        </Link>
        <Link
          href={""}
          className="w-[350px] h-[450px] shadow-md flex flex-col items-center justify-evenly"
        >
          <div className="w-[100%] h-[350px] flex justify-center items-center">
            <Image
              src={"/fs.png"}
              alt="yerba"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="object-cover w-[100%] h-[auto]"
            />
          </div>
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-2xl">Verde Mate Green</h1>
            <Ratings />
          </div>
        </Link>
        <Link
          href={""}
          className="w-[350px] h-[450px] shadow-md flex flex-col items-center justify-evenly"
        >
          <div className="w-[100%] h-[350px] flex justify-center items-center">
            <Image
              src={"/dssdffdf.png"}
              alt="yerba"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="object-cover w-[100%] h-[auto]"
            />
          </div>
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-2xl">Verde Mate Green</h1>
            <div className="flex">
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
              <StarIcon className="w-7 text-[#ffc107]" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
