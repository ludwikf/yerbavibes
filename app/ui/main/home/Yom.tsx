"use client";
import React from "react";
import Image from "next/image";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Yom() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="max-w-screen relative h-[70vh] bg-pageTheme flex items-center overflow-x-hidden ">
      <div
        ref={ref}
        className={`w-1/2 flex justify-center ml-32 ${
          inView ? "animate-slide-from-left" : "translate-x-[-110%]"
        }`}
      >
        <Link href={""}>
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/yerbavibes-651c1.appspot.com/o/pol_pl_Verde-Mate-Green-Organica-0-5kg-5039_5.png?alt=media&token=21511988-30b0-4ee8-b739-5531b545470c"
            }
            alt="yerba"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="object-cover w-[400px] h-[400px] shadow-2xl"
          />
        </Link>
      </div>
      <div
        ref={ref}
        className={`w-1/2 flex justify-center mr-32 ${
          inView ? "animate-slide-from-right" : "translate-x-[110%]"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className={`${poorStory.className} text-green-900 text-4xl`}>
            Yerba of the month
          </div>
          <div className="text-black text-5xl">Verde Mate Green</div>
          <Link
            href={""}
            className="text-black border-2 select-none border-green-800 px-10 py-1.5 mt-5 bg-pageTheme hover:brightness-[90%] transition rounded"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
