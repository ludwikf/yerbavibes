"use client";
import Ratings from "@/app/components/Ratings";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Review() {
  const [show, setShow] = useState(false);
  const dropRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="max-w-screen min-h-screen flex justify-center items-center">
      <div className="h-full w-[1000px] flex flex-col items-center">
        <div className="text-4xl border-l-[8px] pl-2 border-pageTheme w-full">
          Reviews
        </div>
        <div className="w-full mt-5 mb-14">
          <div className="w-full flex">
            <div className="w-[120px] text-center">
              <div className="text-5xl">4.7</div>
              <div>
                <Ratings />
              </div>
              <div className="pt-1 text-[#666]">8 reviews</div>
            </div>
            <div className="w-1/2 ml-8">
              <div className="flex justify-center items-center">
                <div className="text-sm">5</div>
                <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                  <div className="bg-pageTheme h-2.5 rounded-full w-2/3"></div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-sm">4</div>
                <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                  <div className="bg-pageTheme h-2.5 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-sm">3</div>
                <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                  <div className="bg-pageTheme h-2.5 rounded-full w-1/3"></div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-sm">2</div>
                <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                  <div className="bg-pageTheme h-2.5 rounded-full w-[10%]"></div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-sm">1</div>
                <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                  <div className="bg-pageTheme h-2.5 rounded-full w-[5%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start">
          <div className="mb-14 relative w-[650px]">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-12 text-[#aaa]" />
              <div>Ludwik Faron</div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div className="w-[90px]">
                <Ratings />
              </div>
              <div className="text-sm text-[#666]">01.06.2024</div>
            </div>
            <div>Very tasty product really recommending it</div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center text-[#999] gap-1">
                <div>4</div>
                <ChatBubbleLeftIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>6</div>
                <PlusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>1</div>
                <MinusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
            </div>
            <div className="absolute right-0 top-0" ref={dropRef}>
              <div className="group flex flex-col items-end">
                <button>
                  <EllipsisVerticalIcon
                    onClick={() => {
                      setShow((e) => !e);
                    }}
                    className="w-6 cursor-pointer right-0"
                  />
                </button>
                <div
                  className={` ${
                    show ? "block" : "hidden"
                  } select-none cursor-pointer hover:text-pageTheme transition p-4 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.3)] rounded`}
                >
                  Flag inappropriate
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-12 text-[#aaa]" />
              <div>Ludwik Faron</div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div className="w-[90px]">
                <Ratings />
              </div>
              <div className="text-sm text-[#666]">01.06.2024</div>
            </div>
            <div>Very tasty product really recommending it</div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center text-[#999] gap-1">
                <div>4</div>
                <ChatBubbleLeftIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>6</div>
                <PlusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>1</div>
                <MinusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-12 text-[#aaa]" />
              <div>Ludwik Faron</div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div className="w-[90px]">
                <Ratings />
              </div>
              <div className="text-sm text-[#666]">01.06.2024</div>
            </div>
            <div>Very tasty product really recommending it</div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center text-[#999] gap-1">
                <div>4</div>
                <ChatBubbleLeftIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>6</div>
                <PlusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>1</div>
                <MinusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-12 text-[#aaa]" />
              <div>Ludwik Faron</div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div className="w-[90px]">
                <Ratings />
              </div>
              <div className="text-sm text-[#666]">01.06.2024</div>
            </div>
            <div>Very tasty product really recommending it</div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center text-[#999] gap-1">
                <div>4</div>
                <ChatBubbleLeftIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>6</div>
                <PlusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>1</div>
                <MinusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-12 text-[#aaa]" />
              <div>Ludwik Faron</div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div className="w-[90px]">
                <Ratings />
              </div>
              <div className="text-sm text-[#666]">01.06.2024</div>
            </div>
            <div>Very tasty product really recommending it</div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center text-[#999] gap-1">
                <div>4</div>
                <ChatBubbleLeftIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>6</div>
                <PlusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
              <div className="flex items-center text-[#999] gap-1">
                <div>1</div>
                <MinusCircleIcon className="w-7 cursor-pointer hover:text-[#555] transition" />
              </div>
            </div>
          </div>
          <div className="text-lg text-pageTheme mb-14">
            <Link
              href={""}
              className="hover:brightness-[80%] p-2 rounded transition"
            >
              See all reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
