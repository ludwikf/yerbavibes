import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import DropSelect from "@/app/components/main/DropSelect";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="min-h-screen flex justify-between pt-[130px]">
        <div className="flex flex-col mx-7 justify-center items-center w-[400px] h-[70%] border-[1px] rounded-xl border-[#ccc]">
          <div className="p-5 w-full flex justify-between items-center border-b-[1px] border-[#ccc]">
            <span className=" text-2xl font-bold">Filters</span>
            <button className="text-sm text-[#bbb] hover:text-[#aaa] select-none">
              Clear all
            </button>
          </div>
          <div className="w-full p-5">
            <div className="flex flex-col mb-7">
              <div className="font-bold mb-3">Producer</div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Verde Mate <span className="text-[#999] ml-[2px]">(4)</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  TasteVy <span className="text-[#999] ml-[2px]">(16)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-7">
              <div className="font-bold mb-3">Flavour</div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Classic <span className="text-[#999] ml-[2px]">(19)</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Guarana <span className="text-[#999] ml-[2px]">(1)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-7">
              <div className="font-bold mb-3">Strength</div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Very strong <span className="text-[#999] ml-[2px]">(19)</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Light <span className="text-[#999] ml-[2px]">(1)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-7">
              <div className="font-bold mb-3">Type of Leaves</div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Green Mate <span className="text-[#999] ml-[2px]">(19)</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Green Mate with Fruits{" "}
                  <span className="text-[#999] ml-[2px]">(1)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold mb-3">Origin</div>
              <div className="w-full flex items-center gap-1.5">
                <div className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none">
                  {/* <CheckIcon /> */}
                </div>
                <div className="text-sm">
                  Brazil <span className="text-[#999] ml-[2px]">(20)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] mr-20 mb-10 flex flex-col items-center">
          <div className="w-[98%] px-2 py-4 border-y-[1px] border-[#ccc] mb-5 flex justify-between items-center">
            <div className="text-[#888] text-sm">16 results</div>
            <div className="flex gap-5">
              <DropSelect />
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 bg-pageTheme rounded-lg hover:brightness-[90%] border-[1px] border-pageTheme">
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="p-1.5 border-[1px] border-black rounded-lg hover:border-black">
                  <div className="w-5 h-5 flex justify-center items-center">
                    1
                  </div>
                </button>
                <button className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black ">
                  <div className="w-5 h-5 flex justify-center items-center">
                    2
                  </div>
                </button>
                <button className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black">
                  <div className="w-5 h-5 flex justify-center items-center">
                    ...
                  </div>
                </button>
                <button className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black">
                  <div className="w-5 h-5 flex justify-center items-center">
                    14
                  </div>
                </button>
                <button className="p-1.5 bg-pageTheme rounded-lg hover:brightness-[90%] border-[1px] border-pageTheme">
                  <ChevronRightIcon className="w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-wrap gap-x-[20px] gap-y-[40px]">
            <Link
              href={"/yerba/productName"}
              className="w-[350px] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div>
                <PostImage src={"/guarana.png"} />
              </div>
              <div className="p-5">
                <div>Verde Mate Green Power Guarana</div>
                <div>
                  <div className="w-[100px] my-1">
                    <Ratings />
                  </div>
                </div>
                <div className="text-sm">
                  Producer <span className="text-[#777]">Verde Mate</span>
                </div>
                <div className="text-sm">
                  Flavour <span className="text-[#777]">Guarana</span>
                </div>
                <div className="text-sm">
                  Origin <span className="text-[#777]">Brazil</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 relative">
                <button className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition">
                  Explore
                </button>
                <button>
                  <HeartIcon className="hidden group-hover:block absolute right-5 bottom-1 w-8 text-[#888] hover:text-pageTheme transition" />
                </button>
              </div>
            </Link>
            <Link
              href={"/yerba/productName"}
              className="w-[350px] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div>
                <PostImage src={"/fs.png"} />
              </div>
              <div className="p-5">
                <div>Verde Mate Green Power Guarana</div>
                <div>
                  <div className="w-[100px] my-1">
                    <Ratings />
                  </div>
                </div>
                <div className="text-sm">
                  Producer <span className="text-[#777]">Verde Mate</span>
                </div>
                <div className="text-sm">
                  Flavour <span className="text-[#777]">Guarana</span>
                </div>
                <div className="text-sm">
                  Origin <span className="text-[#777]">Brazil</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 relative">
                <button className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition">
                  Explore
                </button>
                <button>
                  <HeartIcon className="hidden group-hover:block absolute right-5 bottom-1 w-8 text-[#888] hover:text-pageTheme transition" />
                </button>
              </div>
            </Link>
            <Link
              href={"/yerba/productName"}
              className="w-[350px] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div>
                <PostImage src={"/guarana.png"} />
              </div>
              <div className="p-5">
                <div>Verde Mate Green Power Guarana</div>
                <div>
                  <div className="w-[100px] my-1">
                    <Ratings />
                  </div>
                </div>
                <div className="text-sm">
                  Producer <span className="text-[#777]">Verde Mate</span>
                </div>
                <div className="text-sm">
                  Flavour <span className="text-[#777]">Guarana</span>
                </div>
                <div className="text-sm">
                  Origin <span className="text-[#777]">Brazil</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 relative">
                <button className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition">
                  Explore
                </button>
                <button>
                  <HeartIcon className="hidden group-hover:block absolute right-5 bottom-1 w-8 text-[#888] hover:text-pageTheme transition" />
                </button>
              </div>
            </Link>
            <Link
              href={"/yerba/productName"}
              className="w-[350px] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div>
                <PostImage src={"/guarana.png"} />
              </div>
              <div className="p-5">
                <div>Verde Mate Green Power Guarana</div>
                <div>
                  <div className="w-[100px] my-1">
                    <Ratings />
                  </div>
                </div>
                <div className="text-sm">
                  Producer <span className="text-[#777]">Verde Mate</span>
                </div>
                <div className="text-sm">
                  Flavour <span className="text-[#777]">Guarana</span>
                </div>
                <div className="text-sm">
                  Origin <span className="text-[#777]">Brazil</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 relative">
                <button className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition">
                  Explore
                </button>
                <button>
                  <HeartIcon className="hidden group-hover:block absolute right-5 bottom-1 w-8 text-[#888] hover:text-pageTheme transition" />
                </button>
              </div>
            </Link>
            <Link
              href={"/yerba/productName"}
              className="w-[350px] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div>
                <PostImage src={"/guarana.png"} />
              </div>
              <div className="p-5">
                <div>Verde Mate Green Power Guarana</div>
                <div>
                  <div className="w-[100px] my-1">
                    <Ratings />
                  </div>
                </div>
                <div className="text-sm">
                  Producer <span className="text-[#777]">Verde Mate</span>
                </div>
                <div className="text-sm">
                  Flavour <span className="text-[#777]">Guarana</span>
                </div>
                <div className="text-sm">
                  Origin <span className="text-[#777]">Brazil</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 relative">
                <button className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition">
                  Explore
                </button>
                <button>
                  <HeartIcon className="hidden group-hover:block absolute right-5 bottom-1 w-8 text-[#888] hover:text-pageTheme transition" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
