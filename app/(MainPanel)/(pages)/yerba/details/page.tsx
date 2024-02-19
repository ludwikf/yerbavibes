import Details from "@/app/ui/main/singleProduct/Details";
import Hero from "@/app/ui/main/singleProduct/Hero";
import Review from "@/app/ui/main/singleProduct/Review";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams["id"];
  async function getData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-yerba?id=${id}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      return data;
    } catch (error: any) {
      return null;
    }
  }
  const data = await getData();
  return (
    <main>
      <Hero data={data} />
      <Details data={data} />
      <Review />
    </main>
  );
}
