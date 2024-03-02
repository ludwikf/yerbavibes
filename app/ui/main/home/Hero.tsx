import Searchbar from "@/app/components/main/Searchbar";
import SearchbarHome from "@/app/components/main/SearchbarHome";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-screen h-screen bg-gradient-to-b from-[#ebe7d2] text-black flex justify-center items-center">
      <div className="fade-in flex justify-center relative min-w-[100%] md:min-w-[770px] h-[400px] md:h-[600px]">
        <div className="z-[9] bottom-[-70px] md:bottom-[-10px] absolute md:left-0 flex items-center justify-center w-[400px] md:w-[600px] h-[100%] select-none">
          <Image
            src={"/yvHero.png"}
            alt="yerba"
            width={500}
            height={500}
            className="absolute w-auto h-auto"
          />
          <div className="z-20 md:hidden w-[60%] shadow-xl">
            <Searchbar />
          </div>
        </div>
        <div className="min-w-[291px] flex absolute top-[-120px] md:top-0 w-[85%] md:w-auto md:right-0 h-[100%] flex-col justify-center">
          <div className={`text-5xl md:w-[400px] text-center z-[8]`}>
            <div className="text-pageTheme">Explore</div>
            <div className="text-[#666]">
              <span className="md:opacity-0">the</span> world of
            </div>
            <div className="text-pageTheme">Yerba Mate</div>
          </div>
          <div className="hidden md:block z-[9] mt-5">
            <SearchbarHome />
          </div>
        </div>
      </div>
    </div>
  );
}
