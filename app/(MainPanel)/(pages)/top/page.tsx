import TopList from "@/app/ui/main/top/TopList";
import React from "react";

export default async function page() {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-top-list?size=100`,
        {
          cache: "no-cache",
        }
      );

      if (!res.ok) {
        throw new Error("Response Error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
  const data = await fetchData();
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col items-center">
      <TopList data={data} />
    </div>
  );
}
