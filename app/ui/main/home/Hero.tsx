import SearchbarHome from "@/app/components/main/SearchbarHome";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-screen h-screen bg-gradient-to-b from-[#ebe7d2] text-black flex justify-center items-center">
      <div className="relative w-[340px] h-[360px] select-none fade-in">
        <Image
          src={"/bg.png"}
          alt="yerba"
          width={250}
          height={250}
          className="absolute rotate-[-51deg] left-[-50px] w-auto h-auto"
        />
        <Image
          src={"/bg.png"}
          alt="yerba"
          width={250}
          height={250}
          className="absolute rotate-[50deg] right-[-50px] w-auto h-auto"
        />
        <Image
          src={"/bg.png"}
          alt="yerba"
          width={250}
          height={250}
          className="absolute rotate-[-230deg] bottom-[-50px] right-[-50px] w-auto h-auto"
        />
        <Image
          src={"/bg.png"}
          alt="yerba"
          width={250}
          height={250}
          className="absolute rotate-[230deg] bottom-[-50px] left-[-50px] w-auto h-auto"
        />
      </div>
      <div className="fade-in">
        <div className={`text-5xl w-[400px] text-center`}>
          <div className="text-pageTheme">Explore</div>
          <div className="text-[#666]">the world of</div>
          <div className="text-pageTheme">Yerba Mate</div>
        </div>
        <div className="mt-5">
          <SearchbarHome />
        </div>
      </div>
    </div>
  );
}
