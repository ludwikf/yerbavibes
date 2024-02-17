import { ProductSkeleton } from "@/app/components/Skeletons";
import Yerba from "@/app/ui/main/yerba/Yerba";
import React, { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "24";

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

        <Suspense fallback={<ProductSkeleton />}>
          <Yerba page={page} per_page={per_page} />
        </Suspense>
      </div>
    </div>
  );
}
