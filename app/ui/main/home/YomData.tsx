"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function YomData({ data }: any) {
  const [mobile, setMobile] = useState<boolean>(false);
  const yerba = data[0];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [mobileRef, mobileInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mobileRef}
      className={`max-w-screen relative h-[80vh] lg:h-[70vh] bg-gradient-to-l from-pageTheme to-[#444] flex flex-col lg:flex-row justify-evenly items-center overflow-x-hidden`}
    >
      <div
        ref={ref}
        className={`w-full lg:w-1/2 flex justify-center lg:ml-32 
        ${
          !mobile
            ? `${inView ? "animate-slide-from-left" : "translate-x-[-120%]"}`
            : `${mobileInView ? "fade-in" : "opacity-0"}`
        } `}
      >
        <Link href={`/yerba/details?id=${yerba.id}`}>
          <Image
            src={yerba.image}
            alt="yerba"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="object-cover w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] p-2 lg:p-5 shadow-2xl"
          />
        </Link>
      </div>
      <div
        ref={ref}
        className={`w-full lg:w-1/2 flex justify-center lg:mr-32 ${
          !mobile
            ? `${inView ? "animate-slide-from-right" : "translate-x-[120%]"}`
            : `${mobileInView ? "fade-in" : "opacity-0"}`
        } `}
      >
        <div className="flex flex-col items-center">
          <div
            className={`${poorStory.className} text-green-900 text-3xl lg:text-4xl`}
          >
            Yerba of the month
          </div>
          <div className="text-black text-2xl xs:text-3xl lg:text-5xl mb-2 text-center px-4">
            {yerba.title}
          </div>

          <Link
            href={`/yerba/details?id=${yerba.id}`}
            className={`text-black border-2 select-none border-green-800 px-10 py-1.5 lg:mt-4 bg-none hover:text-pageTheme transition rounded`}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
