import LogsMain from "@/app/ui/admin/logs/LogsMain";

export default async function Logs() {
  return (
    <main className="flex min-h-[100dvh] bg-[#161616] text-white">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[16%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Logs</h1>
            <p className="text-mainTheme mb-1">Track user actions</p>
          </div>
        </div>
        <div className="w-[90%] lg:h-[84%] flex flex-col items-start">
          <LogsMain />
        </div>
      </div>
    </main>
  );
}
