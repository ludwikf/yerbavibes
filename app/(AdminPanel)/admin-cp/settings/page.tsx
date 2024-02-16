import SettingsMain from "@/app/ui/admin/settings/SettingsMain";
import React from "react";

export default async function Settings() {
  return (
    <main className="flex min-h-screen bg-[#161616] text-white">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[16%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
        </div>
        <div className="w-[100%] lg:w-[90%] h-full flex flex-col items-center">
          <SettingsMain />
        </div>
      </div>
    </main>
  );
}
