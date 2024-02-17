const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-2xl bg-secondTheme p-2 shadow-sm w-[100%] h-[100%]`}
    >
      <div className="flex p-5">
        <div className="h-6 w-10 rounded-md bg-[#333]" />
        <div className="ml-2 h-6 w-24 rounded-md bg-[#333] text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-[#444] px-4 py-14">
        <div className="h-7 w-20 rounded-md bg-[#333]" />
      </div>
      <div className="flex p-4">
        <div className="h-6 w-10 rounded-md bg-[#333]" />
        <div className="ml-2 h-6 w-24 rounded-md bg-[#333] text-sm font-medium" />
      </div>
    </div>
  );
}

export function Product() {
  return (
    <>
      <div
        className={`${shimmer} relative w-[350px] h-[475px] overflow-hidden rounded-xl bg-bodyTheme p-2 shadow-sm`}
      >
        <div className="flex items-center justify-center truncate rounded-xl bg-[#ffffff30] w-[100%] h-[70%]">
          <div className="h-7 w-20 rounded-md bg-[#00000010]" />
        </div>
        <div className="flex px-4 py-2 mt-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
        <div className="flex px-4 py-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
        <div className="flex px-4 py-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
      </div>
    </>
  );
}

export function ProductSkeleton() {
  return (
    <div className="w-[100%] mr-20 mb-10 flex flex-col items-center">
      <div
        className={`w-[98%] px-2 py-4 border-y-[1px] border-[#ccc] mb-5 flex justify-between items-center`}
      >
        <div className={` w-[100px] h-[20px] bg-[#00000010] rounded-xl`}></div>
        <div className="flex gap-5">
          <div className="w-[100px] h-[20px] bg-[#00000010] rounded-xl"></div>
          <div className="w-[100px] h-[20px] bg-[#00000010] rounded-xl"></div>
        </div>
      </div>
      <div className="flex">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
