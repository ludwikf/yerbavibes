import React from "react";
import UsersMain from "@/app/ui/admin/users/UsersMain";

export default async function Users() {
  return (
    <main className="flex h-[100dvh] bg-[#161616] text-white">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[12%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Users</h1>
            <p className="text-mainTheme">Manage user accounts</p>
          </div>
        </div>
        <div className="w-[90%] h-[88%] flex flex-col items-end">
          <UsersMain />
        </div>
      </div>
    </main>
  );
}
