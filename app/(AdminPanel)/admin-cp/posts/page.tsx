import React from "react";
import PostsMain from "@/app/ui/admin/posts/PostsMain";

export default async function Posts() {
  return (
    <main className="flex h-[100dvh]">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[16%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Posts</h1>
            <p className="text-mainTheme mb-1">Add content to your page</p>
          </div>
        </div>
        <div className="w-[90%] h-[84%] flex flex-col items-end">
          <PostsMain />
        </div>
      </div>
    </main>
  );
}
