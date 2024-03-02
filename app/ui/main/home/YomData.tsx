"use client";
import React from "react";
import Image from "next/image";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function YomData({ data }: any) {
  const yerba = data[0];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className={`max-w-screen relative h-[70vh] bg-gradient-to-l from-pageTheme to-[#444] flex items-center overflow-x-hidden`}
    >
      <div
        ref={ref}
        className={`w-1/2 flex justify-center ml-32 ${
          inView ? "animate-slide-from-left" : "translate-x-[-120%]"
        }`}
      >
        <Link href={`/yerba/details?id=${yerba.id}`}>
          <Image
            src={yerba.image}
            alt="yerba"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="object-cover w-[400px] h-[400px] p-5 shadow-2xl"
          />
        </Link>
      </div>
      <div
        ref={ref}
        className={`w-1/2 flex justify-center mr-32 ${
          inView ? "animate-slide-from-right" : "translate-x-[120%]"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className={`${poorStory.className} text-green-900 text-4xl`}>
            Yerba of the month
          </div>
          <div className="text-black text-5xl mb-2 text-center">
            {yerba.title}
          </div>

          <Link
            href={`/yerba/details?id=${yerba.id}`}
            className={`text-black border-2 select-none border-green-800 px-10 py-1.5 mt-4 bg-none hover:text-pageTheme transition rounded`}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
